import { Foto } from '../components/Foto'
import { WhatsApp } from '../components/Icones'
import { VideoVisivel } from '../components/VideoVisivel'
import { MENSAGEM_MEDIDA, whatsapp } from '../lib/formato'
import { useTitulo } from '../lib/titulo'

const PASSOS = [
  { foto: 'fabrico-3d', titulo: 'Desenho 3D', texto: 'A sua ideia passa a modelo no computador.' },
  { foto: 'fabrico-molde', titulo: 'Molde', texto: 'O modelo é impresso e serve de molde.' },
  { foto: 'fabrico-bruto', titulo: 'Acabamento à mão', texto: 'O ouro sai em bruto e é trabalhado na bancada.' },
  { foto: 'fabrico-mao', titulo: 'Na sua mão', texto: 'A peça pronta, à sua medida.' },
]

export default function PorMedida() {
  useTitulo('Peça por medida')
  const pedir = (
    <a className="botao" href={whatsapp(MENSAGEM_MEDIDA)} target="_blank" rel="noopener">
      <WhatsApp /> Contar a minha ideia
    </a>
  )
  return (
    <>
      <section className="escuro">
        <div className="wrap grid items-center gap-[clamp(32px,6vw,96px)] py-[clamp(48px,8vw,104px)] md:grid-cols-[6fr_5fr]">
          <div className="grid justify-items-start gap-5">
            <h1 className="max-w-[12ch] text-hero">Uma peça só sua, feita em Matola.</h1>
            <p className="max-w-[40ch] text-lg">Alianças, anéis de noivado ou um presente. Conte-nos a ideia pelo WhatsApp, com uma foto se tiver.</p>
            <a className="botao bg-white text-magenta hover:bg-creme" href={whatsapp(MENSAGEM_MEDIDA)} target="_blank" rel="noopener">
              <WhatsApp /> Contar a minha ideia
            </a>
          </div>
          <VideoVisivel nome="fabrico" rotulo="Fabrico de um anel, do desenho 3D à mão do cliente" className="mx-auto aspect-9/16 w-full max-w-[340px]" />
        </div>
      </section>

      <section className="seccao">
        <div className="wrap">
          <div className="topo-seccao"><h2>Como nasce um anel</h2></div>
          <ol className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
            {PASSOS.map((p, i) => (
              <li key={p.titulo} className="grid content-start gap-2.5">
                <Foto pasta="site" nome={p.foto} alt={p.titulo} sizes="(min-width: 760px) 25vw, 50vw" className="aspect-3/4 h-auto w-full object-cover" />
                <h3 className="text-xl"><span className="text-dourado">{i + 1}.</span> {p.titulo}</h3>
                <p className="text-label text-tinta-suave">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="seccao bg-rosa">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <VideoVisivel nome="soldadura" rotulo="O joalheiro a soldar um anel com o maçarico" className="mx-auto aspect-9/16 w-full max-w-[320px]" />
          <div className="grid justify-items-start gap-5">
            <h2 className="text-titulo">Ouro rosé, amarelo ou branco.</h2>
            <p className="max-w-[40ch]">Escolha a cor do ouro e a pedra. Se forem alianças, ajustamos de graça antes da cerimónia.</p>
            {pedir}
          </div>
        </div>
      </section>
    </>
  )
}
