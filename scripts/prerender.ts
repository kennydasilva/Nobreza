// Corre depois do `vite build`. O WhatsApp e os motores de busca não executam JavaScript, por isso
// cada página pública ganha o seu HTML com título, descrição e imagem. O conteúdo continua a ser do React.
import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { config } from '../src/config.ts'
import { PECAS } from '../src/data/pecas.ts'
import type { Peca } from '../src/data/tipos.ts'

const DIST = 'dist'
const SITE = config.siteUrl
const TITULO = 'Ourivesaria Nobreza · Matola'
const DESCRICAO = 'Alianças, anéis, colares e brincos em ouro, feitos por nós em Matola. Preços à vista e pedido pelo WhatsApp.'
const CATEGORIA: Record<Peca['categoria'], string> = { aliancas: 'Alianças', aneis: 'Anéis', colares: 'Colares', brincos: 'Brincos' }

// Cópias com nome estável (os ficheiros do build levam hash) para og:image.
cpSync('fotos', join(DIST, 'og'), { recursive: true })
const og = (caminho: string) => `${SITE}/og/${caminho}.jpg`

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const preco = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' MZN'
const nomeCompleto = (p: Peca) =>
  p.categoria === 'aneis' ? `Anel ${p.nome}` : p.categoria === 'brincos' ? `Brincos ${p.nome}` : p.categoria === 'aliancas' && !/^Alianças/.test(p.nome) ? `Alianças ${p.nome}` : p.nome

interface Pagina {
  caminho: string
  titulo: string
  descricao: string
  imagem: string
  tipo?: 'website' | 'product'
  jsonLd?: object
}

const modelo = readFileSync(join(DIST, 'index.html'), 'utf8')

function render(p: Pagina) {
  const url = SITE + p.caminho
  const head = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="Ourivesaria Nobreza" />`,
    `<meta property="og:locale" content="pt_PT" />`,
    `<meta property="og:type" content="${p.tipo ?? 'website'}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(p.titulo)}" />`,
    `<meta property="og:description" content="${esc(p.descricao)}" />`,
    `<meta property="og:image" content="${p.imagem}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    // "<" escapado para um texto do catálogo nunca fechar a tag script.
    p.jsonLd && `<script type="application/ld+json">${JSON.stringify(p.jsonLd).replace(/</g, '\\u003c')}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ')
  return modelo
    .replace(/<title>.*?<\/title>/, `<title>${esc(p.titulo)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(p.descricao)}" />`)
    .replace('</head>', `  ${head}\n  </head>`)
}

function paginaPeca(p: Peca): Pagina {
  const caminho = `/peca/${p.slug}`
  const nome = nomeCompleto(p)
  const detalhes = [p.medida, p.peso && `${String(p.peso).replace('.', ',')} g`].filter(Boolean).join(' · ')
  return {
    caminho,
    titulo: `${nome} · Nobreza`,
    descricao: `${preco(p.preco)}${p.par ? ' o par' : ''}${detalhes ? ` · ${detalhes}` : ''}. Peça pelo WhatsApp.`,
    imagem: og(`pecas/${p.slug}`),
    tipo: 'product',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: nome,
      sku: p.ref,
      category: CATEGORIA[p.categoria],
      brand: { '@type': 'Brand', name: 'Ourivesaria Nobreza' },
      image: og(`pecas/${p.slug}`),
      offers: { '@type': 'Offer', url: SITE + caminho, price: p.preco, priceCurrency: 'MZN' },
    },
  }
}

const capa = og('pecas/frisos-separados-ai-n0010')
const paginas: Pagina[] = [
  { caminho: '/', titulo: TITULO, descricao: DESCRICAO, imagem: capa },
  { caminho: '/loja', titulo: 'Peças · Nobreza', descricao: 'Alianças, anéis, colares e brincos com preço à vista.', imagem: capa },
  { caminho: '/por-medida', titulo: 'Peça por medida · Nobreza', descricao: 'Do desenho 3D à sua mão, feito em Matola.', imagem: og('site/fabrico-mao') },
  { caminho: '/casais', titulo: 'Casais Nobreza', descricao: 'Casais que escolheram as alianças na Nobreza.', imagem: og('casais/filipe-helena') },
  { caminho: '/a-loja', titulo: 'A loja · Nobreza', descricao: `${config.morada.join(', ')}. ${config.slogan}`, imagem: og('site/fachada') },
  ...PECAS.map(paginaPeca),
]

for (const p of paginas) {
  // "/" é o index.html; as restantes ficam em <caminho>.html (servidas sem extensão via cleanUrls).
  const ficheiro = join(DIST, p.caminho === '/' ? 'index.html' : `${p.caminho}.html`)
  mkdirSync(dirname(ficheiro), { recursive: true })
  writeFileSync(ficheiro, render(p))
}

writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    paginas.map((p) => `  <url><loc>${SITE}${p.caminho}</loc></url>`).join('\n') +
    `\n</urlset>\n`,
)
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
console.log(`prerender: ${paginas.length} páginas, sitemap.xml e robots.txt`)
