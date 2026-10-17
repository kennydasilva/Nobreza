import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Cabecalho } from './Cabecalho'
import { Rodape } from './Rodape'

export function Layout() {
  const { pathname } = useLocation()
  // Cada página nova começa no topo; os filtros da loja (query) não mexem no scroll.
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return (
    <>
      <a className="salto" href="#conteudo">Saltar para o conteúdo</a>
      <Cabecalho />
      <main id="conteudo">
        <Outlet />
      </main>
      <Rodape />
    </>
  )
}
