import { Link } from 'react-router-dom'
import { AnelLogotipo } from '../components/AnelLogotipo'
import { Carrossel } from '../components/Carrossel'
import { Grelha } from '../components/CartaoPeca'
import { Foto } from '../components/Foto'
import { Losango, Seta } from '../components/Icones'
import { VideoVisivel } from '../components/VideoVisivel'
import { CASAIS } from '../data/casais'
import { MENSAGEM_MEDIDA, whatsapp } from '../lib/formato'
import { pecasPorSlugs } from '../lib/pecas'
import { useTitulo } from '../lib/titulo'

const ALIANCAS = pecasPorSlugs(['chanfradas-ai-n0024', 'frisos-separados-ai-n0010', 'frisos-separados-ai-s0039', 'frisos-separados-e-fosco-no-centro-al-n0016'])
const ANEIS = pecasPorSlugs(['divino-an-n0073', 'sirius-an-n0111', 'romance-an-n0107', 'costelinha-zirconia-rubi-an-n087'])

function Mosaico() {
  const pequena = (para: string, nome: string, pasta: 'pecas' | 'site', foto: string, classe: string, posicao?: string) => (
    <Link to={para} className={`zoom grid gap-2.5 ${classe}`}>
      <div className="overflow-hidden bg-rosa">
        <Foto pasta={pasta} nome={foto} alt="" sizes="(min-width: 760px) 25vw, 50vw" className="h-full w-full object-cover" style={posicao ? { objectPosition: posicao } : undefined} />
      </div>
      <span className="flex items-center justify-between font-display text-xl text-titulo">
        {nome} <Seta className="size-4 text-tinta-suave" />
      </span>
    </Link>
  )
  return (
    <div className="grid gap-4 md:grid-cols-[1.25fr_1fr]">
      <Link to="/loja?categoria=aliancas" className="zoom relative block overflow-hidden">
        <Foto pasta="pecas" nome="ovais-ai-n0031" alt="" sizes="(min-width: 760px) 55vw, 100vw" className="aspect-4/5 h-full w-full object-cover md:aspect-auto md:min-h-[420px]" />
        <div className="absolute inset-x-0 bottom-0 grid gap-2 bg-linear-to-t from-[rgba(120,0,62,0.72)] to-transparent p-[clamp(20px,3vw,36px)] text-white">
          <h3 className="text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] text-white">Alianças</h3>
          <p className="max-w-[34ch] text-label text-[#f7e9f0]">Ajustamos de graça antes da cerimónia, em cerca de 20 minutos.</p>
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-4">
        {pequena('/loja?categoria=aneis', 'Anéis', 'pecas', 'sirius-an-n0111', '[&>div]:aspect-square')}
        {pequena('/loja?categoria=brincos', 'Brincos', 'pecas', 'bola-e-pedra-suspensa-br-n0018', '[&>div]:aspect-square')}
        {pequena('/loja?categoria=colares', 'Colares', 'site', 'colares-modelo', 'col-span-2 [&>div]:aspect-[2/1]', '50% 65%')}
      </div>
    </div>
  )
}

export default function Inicio() {
  useTitulo()
  return (
    <>
      <Carrossel />

      <section className="seccao">
        <div className="wrap">
          <div className="topo-seccao"><h2>Encontre a sua peça</h2></div>
          <Mosaico />
        </div>
      </section>

      <section className="seccao bg-rosa">
        <div className="wrap">
          <div className="topo-seccao">
            <h2>Alianças</h2>
            <Link className="ver" to="/loja?categoria=aliancas">Ver todas <Seta /></Link>
          </div>
          <Grelha pecas={ALIANCAS} />
          <p className="mt-7 text-mini text-tinta-suave">O preço pode variar com o peso final da peça.</p>
        </div>
      </section>

      {/* A loja em poucas linhas, ao lado do símbolo da Nobreza a desenhar-se (como o relógio do MADEY). */}
      <section className="seccao">
        <div className="wrap grid items-center gap-[clamp(40px,7vw,112px)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="grid justify-items-start gap-6">
            <h2 className="max-w-[16ch] text-seccao md:text-[clamp(2rem,1.4rem+2vw,3rem)]">A vida de um casal começa com um pedido e um sim.</h2>
            <p className="max-w-[44ch] text-lg">Por isso o nosso símbolo é um anel. Fazemos alianças e anéis de noivado em Matola.</p>
            <p className="max-w-[44ch] text-tinta-suave">Escolha a peça no site e toque em Pedir. O tamanho, o pagamento e a entrega combinamos consigo pelo WhatsApp.</p>
            <Link className="ver mt-2" to="/loja?categoria=aliancas">Ver alianças <Seta /></Link>
          </div>
          <AnelLogotipo className="mx-auto w-full max-w-[280px] sm:max-w-[360px]" />
        </div>
      </section>

      <section className="escuro">
        <div className="wrap grid items-center gap-[clamp(32px,6vw,96px)] py-[clamp(64px,9vw,120px)] md:grid-cols-[5fr_6fr]">
          <div className="relative mx-auto w-full max-w-[300px] md:max-w-[380px]">
            <VideoVisivel nome="fabrico" rotulo="Fabrico de um anel: desenho 3D, molde, acabamento e o anel na mão do cliente" className="aspect-9/16" />
            <span className="pointer-events-none absolute -inset-2.5 border border-creme/60" aria-hidden />
          </div>
          <div className="grid justify-items-start gap-5.5">
            <h2 className="max-w-[12ch] text-hero">Feitas por nós, em Matola.</h2>
            <p className="max-w-[36ch] text-lg">Desenhamos em 3D e acabamos cada peça à mão.</p>
            <ol className="flex flex-wrap gap-x-5.5 gap-y-2.5 text-label tracking-[0.04em]">
              {['Desenho 3D', 'Molde', 'Acabamento', 'Na sua mão'].map((p) => (
                <li key={p} className="inline-flex items-center gap-2"><Losango className="size-2.5" />{p}</li>
              ))}
            </ol>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link className="ver text-white" to="/por-medida">Como funciona <Seta /></Link>
              <a className="ver text-white" href={whatsapp(MENSAGEM_MEDIDA)} target="_blank" rel="noopener">Quero uma peça por medida <Seta /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="seccao">
        <div className="wrap">
          <div className="topo-seccao">
            <h2>Casais Nobreza</h2>
            <Link className="ver" to="/casais">Ver todos os casais <Seta /></Link>
          </div>
          <div className="grid grid-cols-2 gap-[clamp(12px,2vw,28px)] md:grid-cols-4">
            {CASAIS.slice(0, 4).map((c) => (
              <figure key={c.foto} className="foto-casal">
                <Foto pasta="casais" nome={c.foto} alt={c.nomes} sizes="(min-width: 760px) 280px, 46vw" className="aspect-4/5 h-auto w-full object-cover" />
                <figcaption>{c.nomes}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="seccao bg-rosa">
        <div className="wrap">
          <div className="topo-seccao">
            <h2>Anéis</h2>
            <Link className="ver" to="/loja?categoria=aneis">Ver todos <Seta /></Link>
          </div>
          <Grelha pecas={ANEIS} />
        </div>
      </section>
    </>
  )
}
