import { Link, useParams } from 'react-router-dom'
import { Grelha } from '../components/CartaoPeca'
import { Etiqueta } from '../components/Etiqueta'
import { Foto } from '../components/Foto'
import { Seta, SetaEsq, WhatsApp } from '../components/Icones'
import { VideoVisivel } from '../components/VideoVisivel'
import { nomeCategoria, nomeCor } from '../data/categorias'
import { gramas, mensagemPedido, nomeCompleto, whatsapp } from '../lib/formato'
import { parecidas, pecaPorSlug } from '../lib/pecas'
import { useTitulo } from '../lib/titulo'
import NaoEncontrada from './NaoEncontrada'

export default function Peca() {
  const { slug = '' } = useParams()
  const peca = pecaPorSlug(slug)
  useTitulo(peca ? nomeCompleto(peca) : 'Peça não encontrada')
  if (!peca) return <NaoEncontrada />

  const nome = nomeCompleto(peca)
  const linhas: [string, string | undefined][] = [
    ['Ouro', nomeCor(peca.cor)],
    ['Medida', peca.medida],
    ['Peso aproximado', peca.peso ? gramas(peca.peso) : undefined],
    ['Referência', peca.ref],
  ]

  return (
    <>
      <div className="wrap grid gap-[clamp(28px,5vw,72px)] pt-6 pb-[clamp(56px,8vw,96px)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:pt-10">
        <div className="grid content-start gap-4">
          <Link to={`/loja?categoria=${peca.categoria}`} className="inline-flex items-center gap-2 text-label text-tinta-suave hover:text-magenta md:hidden">
            <SetaEsq className="size-3.5" /> {nomeCategoria(peca.categoria)}
          </Link>
          <div className="bg-rosa">
            <Foto pasta="pecas" nome={peca.slug} alt={nome} sizes="(min-width: 760px) 55vw, 100vw" prioridade className="aspect-square h-auto w-full object-cover" />
          </div>
          {peca.video && (
            <VideoVisivel nome={peca.video} rotulo={`Vídeo da peça ${nome}`} className="mx-auto aspect-9/16 w-full max-w-[360px]" />
          )}
        </div>

        <div className="grid content-start gap-6 md:sticky md:top-24 md:self-start">
          <Link to={`/loja?categoria=${peca.categoria}`} className="hidden items-center gap-2 text-label text-tinta-suave hover:text-magenta md:inline-flex">
            <SetaEsq className="size-3.5" /> {nomeCategoria(peca.categoria)}
          </Link>
          <h1 className="text-[clamp(2rem,1.5rem+2vw,3rem)]">{nome}</h1>
          <div className="flex flex-wrap items-center gap-4">
            <Etiqueta peca={peca} grande />
            <span className="text-label text-tinta-suave">O preço pode variar com o peso final da peça.</span>
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-y border-rosa-linha py-5 tabular-nums">
            {linhas.filter(([, v]) => v).map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-tinta-suave">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <a className="botao min-h-14 w-full sm:w-auto" href={whatsapp(mensagemPedido(peca))} target="_blank" rel="noopener">
            <WhatsApp /> Pedir pelo WhatsApp
          </a>
          <p className="text-label text-tinta-suave">A mensagem já leva a peça, a referência e o preço. O tamanho, o pagamento e a entrega combinam-se na conversa.</p>
          {peca.categoria === 'aliancas' && (
            <div className="grid gap-1.5 bg-rosa p-5">
              <h2 className="text-xl">Ajuste grátis antes da cerimónia</h2>
              <p className="text-label">Se as alianças não servirem bem, ajustamos de graça, em cerca de 20 minutos. Exclusivo para clientes da Nobreza.</p>
            </div>
          )}
          <Link to="/por-medida" className="ver justify-self-start">Prefere uma peça só sua? Fazemos por medida <Seta /></Link>
        </div>
      </div>

      <section className="seccao bg-rosa">
        <div className="wrap">
          <div className="topo-seccao">
            <h2>Peças parecidas</h2>
            <Link className="ver" to={`/loja?categoria=${peca.categoria}`}>Ver {nomeCategoria(peca.categoria).toLowerCase()} <Seta /></Link>
          </div>
          <Grelha pecas={parecidas(peca)} />
        </div>
      </section>
    </>
  )
}
