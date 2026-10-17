import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CATEGORIAS } from '../data/categorias'
import { MENSAGEM_GERAL, whatsapp } from '../lib/formato'
import { Lupa, Menu, WhatsApp } from './Icones'
import { Janela } from './Janela'
import { Anel } from './Marca'
import { Pesquisa } from './Pesquisa'

const NAV = [
  { para: '/loja?categoria=aliancas', nome: 'Alianças' },
  { para: '/loja', nome: 'Peças' },
  { para: '/por-medida', nome: 'Por medida' },
  { para: '/a-loja', nome: 'A loja' },
]

export function Cabecalho() {
  const [menu, setMenu] = useState(false)
  const [pesquisa, setPesquisa] = useState(false)
  const local = useLocation()
  useEffect(() => setMenu(false), [local.pathname, local.search])
  const categoria = new URLSearchParams(local.search).get('categoria')
  const atual = (para: string) =>
    para === '/loja?categoria=aliancas' ? local.pathname === '/loja' && categoria === 'aliancas' : para === '/loja' ? local.pathname === '/loja' && categoria !== 'aliancas' : local.pathname === para

  return (
    <header className="cabecalho">
      <div className="wrap flex min-h-16 items-center gap-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Ourivesaria Nobreza, início">
          <Anel desenhar className="h-10 w-[34px]" />
          <span className="font-display text-[1.1875rem] tracking-[0.2em] text-titulo">NOBREZA</span>
        </Link>
        <nav aria-label="Principal" className="ml-auto hidden gap-7 lg:flex">
          {NAV.map((n) => (
            <Link key={n.nome} to={n.para} aria-current={atual(n.para) ? 'page' : undefined} className="nav-link">
              {n.nome}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1 lg:ml-0">
          <button type="button" className="icone" onClick={() => setPesquisa(true)} aria-label="Procurar peças">
            <Lupa />
          </button>
          <a className="icone" href={whatsapp(MENSAGEM_GERAL)} target="_blank" rel="noopener" aria-label="Falar pelo WhatsApp">
            <WhatsApp />
          </a>
          <button type="button" className="icone lg:hidden" onClick={() => setMenu(true)} aria-label="Abrir menu" aria-expanded={menu}>
            <Menu />
          </button>
        </div>
      </div>

      <Janela aberta={pesquisa} aoFechar={() => setPesquisa(false)} titulo="Procurar peças">
        {pesquisa && <Pesquisa aoEscolher={() => setPesquisa(false)} />}
      </Janela>

      <Janela aberta={menu} aoFechar={() => setMenu(false)} titulo="Menu" lado>
        <nav aria-label="Menu" className="grid gap-1">
          {CATEGORIAS.map((c) => (
            <Link key={c.id} to={`/loja?categoria=${c.id}`} className="py-2 font-display text-[1.75rem] text-titulo">
              {c.nome}
            </Link>
          ))}
          <hr className="my-4 border-rosa-linha" />
          <Link to="/loja" className="py-2 text-base">Todas as peças</Link>
          <Link to="/por-medida" className="py-2 text-base">Peça por medida</Link>
          <Link to="/casais" className="py-2 text-base">Casais Nobreza</Link>
          <Link to="/a-loja" className="py-2 text-base">A loja</Link>
        </nav>
      </Janela>
    </header>
  )
}
