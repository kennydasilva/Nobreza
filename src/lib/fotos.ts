// As fotografias vivem em fotos/ (pecas, casais, site). O build gera AVIF e WebP em vários
// tamanhos; o browser descarrega só o que o ecrã precisa.

// As opções têm de estar escritas por extenso em cada chamada: o Vite lê-as sem executar o código.
const originais = import.meta.glob<string>('../../fotos/**/*.jpg', { eager: true, import: 'default', query: '?url' })
const avif = import.meta.glob<string>('../../fotos/**/*.jpg', {
  eager: true,
  import: 'default',
  query: { w: '400;800;1200', format: 'avif', quality: '62', as: 'srcset', withoutEnlargement: '' },
})
const webp = import.meta.glob<string>('../../fotos/**/*.jpg', {
  eager: true,
  import: 'default',
  query: { w: '400;800;1200', format: 'webp', quality: '78', as: 'srcset', withoutEnlargement: '' },
})

const chave = (caminho: string) => caminho.replace(/^.*fotos\//, '').replace(/\.jpg$/, '')
const indexar = (m: Record<string, string>) => Object.fromEntries(Object.entries(m).map(([k, v]) => [chave(k), v]))

const porNome = { original: indexar(originais), avif: indexar(avif), webp: indexar(webp) }

export type Pasta = 'pecas' | 'casais' | 'site'

export interface FonteFoto {
  src: string
  avif: string
  webp: string
}

/** Fontes da foto `pasta/nome` (sem extensão). */
export function foto(pasta: Pasta, nome: string): FonteFoto {
  const k = `${pasta}/${nome}`
  return { src: porNome.original[k] ?? '', avif: porNome.avif[k] ?? '', webp: porNome.webp[k] ?? '' }
}
