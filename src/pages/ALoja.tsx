import { Foto } from '../components/Foto'
import { Mapa, WhatsApp } from '../components/Icones'
import { VideoVisivel } from '../components/VideoVisivel'
import { config, whatsappVisivel } from '../config'
import { MENSAGEM_GERAL, whatsapp } from '../lib/formato'
import { useTitulo } from '../lib/titulo'

export default function ALoja() {
  useTitulo('A loja')
  return (
    <>
      <section className="wrap grid items-center gap-[clamp(28px,5vw,72px)] py-[clamp(40px,6vw,88px)] md:grid-cols-2">
        <div className="grid justify-items-start gap-5">
          <h1 className="text-[clamp(2.25rem,1.6rem+2.6vw,3.5rem)]">A Nobreza, em Matola.</h1>
          <p className="max-w-[42ch] text-lg">Produzimos e vendemos joias artesanais e em 3D. Venha ver as peças à loja ou fale connosco pelo WhatsApp.</p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 tabular-nums">
            <dt className="text-tinta-suave">Morada</dt>
            <dd>{config.morada[0]}, {config.morada[1]}</dd>
            <dt className="text-tinta-suave">WhatsApp</dt>
            <dd>{whatsappVisivel}</dd>
            <dt className="text-tinta-suave">Chamadas</dt>
            <dd>{config.chamadas.join(' · ')}</dd>
            <dt className="text-tinta-suave">Horário</dt>
            <dd>A confirmar com a loja</dd>
          </dl>
          <div className="flex flex-wrap gap-3">
            <a className="botao" href={whatsapp(MENSAGEM_GERAL)} target="_blank" rel="noopener"><WhatsApp /> Falar pelo WhatsApp</a>
            <a className="pedir min-h-12 px-5" href={config.mapa} target="_blank" rel="noopener"><Mapa /> Abrir no mapa</a>
          </div>
        </div>
        <Foto pasta="site" nome="fachada" alt="A fachada da Ourivesaria Nobreza, com o letreiro" largura={800} altura={1000} sizes="(min-width: 760px) 50vw, 100vw" prioridade className="aspect-4/5 h-auto w-full object-cover" />
      </section>

      <section className="escuro">
        <div className="wrap grid items-center gap-[clamp(32px,6vw,96px)] py-[clamp(56px,8vw,104px)] md:grid-cols-[5fr_6fr]">
          <div className="mx-auto w-full max-w-[360px]">
            <video controls playsInline preload="none" poster="/videos/dono-loja.jpg" className="aspect-9/16 w-full bg-black object-cover" aria-label="O dono da Nobreza fala sobre a loja">
              <source src="/videos/dono-loja.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="grid gap-5">
            <h2 className="text-hero">Quem faz as suas joias.</h2>
            <p className="max-w-[38ch] text-lg">Carregue no vídeo para ouvir o dono da Nobreza a explicar como trabalhamos.</p>
          </div>
        </div>
      </section>

      <section className="seccao">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <div className="grid gap-4">
            <h2 className="text-seccao">A bancada</h2>
            <p className="max-w-[40ch]">Cada peça passa pela bancada da oficina, na própria loja. O cão também.</p>
          </div>
          <VideoVisivel nome="bancada" rotulo="O joalheiro na bancada com o cão da loja" className="aspect-9/16 w-full max-w-[320px] justify-self-center" />
        </div>
      </section>

      <section className="seccao bg-rosa">
        <div className="wrap">
          <div className="topo-seccao"><h2>Na comunidade</h2></div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <Foto pasta="site" nome="caridade" alt="A equipa da Nobreza numa ação de solidariedade" largura={900} altura={1200} sizes="(min-width: 760px) 33vw, 50vw" className="aspect-3/4 h-auto w-full object-cover" />
            <Foto pasta="site" nome="caridade-1" alt="A equipa da Nobreza a distribuir refeições" largura={900} altura={1200} sizes="(min-width: 760px) 33vw, 50vw" className="aspect-3/4 h-auto w-full object-cover" />
            <Foto pasta="site" nome="caridade-2" alt="Distribuição de refeições pela equipa da Nobreza" largura={1200} altura={800} sizes="(min-width: 760px) 33vw, 50vw" className="col-span-2 aspect-3/2 h-auto w-full object-cover md:col-span-1 md:aspect-3/4" />
          </div>
          <p className="mt-5 text-label text-tinta-suave">Da série "Caridade" das publicações da loja.</p>
        </div>
      </section>
    </>
  )
}
