import { useEffect } from 'react'

export const TITULO_SITE = 'Ourivesaria Nobreza · Matola'

/** Título do separador da página atual; sem argumento usa o do site. */
export function useTitulo(titulo?: string) {
  useEffect(() => {
    document.title = titulo ? `${titulo} · Nobreza` : TITULO_SITE
  }, [titulo])
}
