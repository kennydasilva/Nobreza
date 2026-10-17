import type { Peca } from '../data/tipos'
import { preco } from '../lib/formato'

export function Etiqueta({ peca, grande }: { peca: Peca; grande?: boolean }) {
  return (
    <span className={`etiqueta ${grande ? 'etiqueta--grande' : ''}`}>
      <strong>{preco(peca.preco)}</strong>
      {peca.par && <small>o par</small>}
    </span>
  )
}
