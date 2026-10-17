import { useDeferredValue, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { nomeCategoria } from '../data/categorias'
import { PECAS } from '../data/pecas'
import { caminhoPeca, nomeCompleto, preco } from '../lib/formato'
import { Foto } from './Foto'

const normalizar = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const indice = PECAS.map((p) => ({ p, texto: normalizar(`${nomeCompleto(p)} ${p.ref} ${nomeCategoria(p.categoria)} ${p.medida ?? ''}`) }))

/** Pesquisa por nome, referência ou categoria; os resultados aparecem enquanto se escreve. */
export function Pesquisa({ aoEscolher }: { aoEscolher: () => void }) {
  const [termo, setTermo] = useState('')
  const adiado = useDeferredValue(termo)
  const resultados = useMemo(() => {
    const palavras = normalizar(adiado).split(/\s+/).filter(Boolean)
    if (!palavras.length) return []
    return indice.filter(({ texto }) => palavras.every((w) => texto.includes(w))).map(({ p }) => p)
  }, [adiado])

  return (
    <div className="grid gap-4">
      <label htmlFor="pesquisa" className="font-display text-titulo text-titulo">
        Procurar peças
      </label>
      <input
        id="pesquisa"
        type="search"
        autoFocus
        className="campo w-full text-base"
        placeholder="Ex.: chanfradas, Divino, AN-N0073"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        autoComplete="off"
        enterKeyHint="search"
      />
      <p className="text-label text-tinta-suave" aria-live="polite">
        {adiado.trim() === ''
          ? 'Escreva o nome da peça, a referência ou a categoria.'
          : resultados.length === 0
            ? `Nenhuma peça encontrada para "${adiado.trim()}". Experimente outra palavra ou fale connosco pelo WhatsApp.`
            : `${resultados.length} ${resultados.length === 1 ? 'peça' : 'peças'}`}
      </p>
      <ul className="grid max-h-[55vh] gap-1 overflow-y-auto">
        {resultados.slice(0, 30).map((p) => (
          <li key={p.slug}>
            <Link to={caminhoPeca(p)} onClick={aoEscolher} className="flex items-center gap-3 rounded-[2px] p-2 hover:bg-rosa">
              <Foto pasta="pecas" nome={p.slug} alt="" sizes="56px" className="size-14 shrink-0 object-cover" />
              <span className="grid min-w-0">
                <span className="truncate font-display text-nome text-titulo">{nomeCompleto(p)}</span>
                <span className="text-mini text-tinta-suave tabular-nums">
                  {preco(p.preco)}
                  {p.par ? ' o par' : ''} · {p.ref}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
