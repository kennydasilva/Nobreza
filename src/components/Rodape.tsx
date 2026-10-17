import { Link } from 'react-router-dom'
import { config, whatsappVisivel } from '../config'
import { CATEGORIAS } from '../data/categorias'
import { MENSAGEM_GERAL, whatsapp } from '../lib/formato'
import { Facebook, Instagram, TikTok } from './Icones'
import logotipo from '../assets/logotipo.jpg?url'

export function Rodape() {
  return (
    <footer className="escuro">
      <div className="wrap grid gap-10 pt-14 pb-7">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            {/* O logótipo num círculo branco, como no perfil do Instagram da loja. */}
            <div className="grid size-21 place-items-center overflow-hidden rounded-full bg-branco">
              <img src={logotipo} width={76} height={76} alt="Ourivesaria Nobreza" className="size-19" />
            </div>
            <p className="mt-4 max-w-[22ch] font-display text-xl text-white">{config.slogan}</p>
            <div className="mt-5 flex gap-2.5">
              <a href={config.instagram} target="_blank" rel="noopener" aria-label="Instagram da Nobreza" className="rede"><Instagram /></a>
              <a href={config.facebook} target="_blank" rel="noopener" aria-label="Facebook da Nobreza" className="rede"><Facebook /></a>
              <a href={config.tiktok} target="_blank" rel="noopener" aria-label="TikTok da Nobreza" className="rede"><TikTok /></a>
            </div>
          </div>
          <div>
            <h2 className="mb-3 font-display text-[1.0625rem]">Peças</h2>
            <ul className="grid gap-2">
              {CATEGORIAS.map((c) => (
                <li key={c.id}><Link to={`/loja?categoria=${c.id}`} className="link-rodape">{c.nome}</Link></li>
              ))}
              <li><Link to="/por-medida" className="link-rodape">Por medida</Link></li>
              <li><Link to="/casais" className="link-rodape">Casais Nobreza</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 font-display text-[1.0625rem]">Contacto</h2>
            <ul className="grid gap-2 tabular-nums">
              <li><a href={whatsapp(MENSAGEM_GERAL)} target="_blank" rel="noopener" className="link-rodape">WhatsApp {whatsappVisivel}</a></li>
              {config.chamadas.map((n) => <li key={n}>{n}</li>)}
            </ul>
            <address className="mt-3.5 not-italic">{config.morada[0]}<br />{config.morada[1]}</address>
            <a href={config.mapa} target="_blank" rel="noopener" className="link-rodape mt-2 inline-block text-label underline underline-offset-3">Abrir no mapa</a>
          </div>
        </div>
        {/* Uma só linha no computador: direitos à esquerda, crédito ao centro, nota dos preços à direita. */}
        <div className="grid gap-3 border-t border-creme/35 pt-5 text-mini lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <span>© {new Date().getFullYear()} Ourivesaria Nobreza · <Link to="/a-loja" className="link-rodape">A loja</Link></span>
          <span className="tabular-nums lg:text-center">Designed by Tiva Tech · 850741012</span>
          <span className="lg:text-right">Preços e fotografias das publicações da loja. O preço pode variar com o peso final da peça.</span>
        </div>
      </div>
    </footer>
  )
}
