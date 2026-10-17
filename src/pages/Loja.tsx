import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Grelha } from '../components/CartaoPeca'
import { CATEGORIAS, CORES, ORDENS, PRECOS, type Ordem } from '../data/categorias'
import { PECAS } from '../data/pecas'
import type { Categoria, CorOuro } from '../data/tipos'
import { MENSAGEM_GERAL, whatsapp } from '../lib/formato'
import { useTitulo } from '../lib/titulo'

const POR_PAGINA = 24

// Os filtros vivem no endereço (?categoria=aliancas&cor=rose…), para o link poder ser partilhado.
export default function Loja() {
  const [params, setParams] = useSearchParams()
  const categoria = CATEGORIAS.find((c) => c.id === params.get('categoria'))?.id as Categoria | undefined
  const cor = CORES.find((c) => c.id === params.get('cor'))?.id as CorOuro | undefined
  const faixa = PRECOS.find((p) => p.id === params.get('preco'))
  const ordem = (ORDENS.find((o) => o.id === params.get('ordem'))?.id ?? 'novidades') as Ordem
  const [limite, setLimite] = useState(POR_PAGINA)
  const titulo = categoria ? CATEGORIAS.find((c) => c.id === categoria)!.nome : 'Todas as peças'
  useTitulo(titulo)

  const mudar = (chave: string, valor?: string) => {
    const p = new URLSearchParams(params)
    if (valor) p.set(chave, valor)
    else p.delete(chave)
    setParams(p, { replace: true, preventScrollReset: true })
    setLimite(POR_PAGINA)
  }

  const limpar = () => {
    const p = new URLSearchParams(params)
    p.delete('cor')
    p.delete('preco')
    setParams(p, { replace: true, preventScrollReset: true })
  }

  const pecas = useMemo(() => {
    const lista = PECAS.filter((p) => (!categoria || p.categoria === categoria) && (!cor || p.cor === cor) && (!faixa || (p.preco >= faixa.min && p.preco < faixa.max)))
    if (ordem === 'preco-menor') return lista.sort((a, b) => a.preco - b.preco)
    if (ordem === 'preco-maior') return lista.sort((a, b) => b.preco - a.preco)
    return lista.sort((a, b) => b.ordem - a.ordem)
  }, [categoria, cor, faixa, ordem])

  // Só mostra as cores que existem na categoria escolhida.
  const coresDisponiveis = CORES.filter((c) => PECAS.some((p) => p.cor === c.id && (!categoria || p.categoria === categoria)))
  const temFiltros = !!(cor || faixa)

  return (
    <div className="wrap pt-[clamp(32px,5vw,56px)] pb-[clamp(56px,8vw,104px)]">
      <div className="grid gap-2">
        <h1 className="text-[clamp(2rem,1.5rem+2vw,3rem)]">{titulo}</h1>
        {categoria === 'aliancas' && <p className="text-tinta-suave">Preço do par. Ajustamos as alianças de graça antes da cerimónia, em cerca de 20 minutos.</p>}
      </div>

      <div className="mt-7 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Categoria">
        {[{ id: undefined, nome: 'Todas' }, ...CATEGORIAS].map((c) => (
          <button key={c.nome} type="button" onClick={() => mudar('categoria', c.id)} aria-pressed={categoria === c.id} className="chip">
            {c.nome}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-rosa-linha py-3">
        <div className="flex items-center gap-2" role="group" aria-label="Cor do ouro">
          {coresDisponiveis.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => mudar('cor', cor === c.id ? undefined : c.id)}
              aria-pressed={cor === c.id}
              className="cor"
              title={c.nome}
            >
              <i style={{ background: c.amostra }} aria-hidden />
              <span>{c.nome}</span>
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-label">
          <span className="text-tinta-suave">Preço</span>
          <select className="campo min-h-10 pr-8" value={faixa?.id ?? ''} onChange={(e) => mudar('preco', e.target.value || undefined)}>
            <option value="">Todos</option>
            {PRECOS.map((p) => <option key={p.id} value={p.id}>{p.nome}</option>)}
          </select>
        </label>
        <label className="ml-auto flex items-center gap-2 text-label">
          <span className="text-tinta-suave">Ordenar</span>
          <select className="campo min-h-10 pr-8" value={ordem} onChange={(e) => mudar('ordem', e.target.value === 'novidades' ? undefined : e.target.value)}>
            {ORDENS.map((o) => <option key={o.id} value={o.id}>{o.nome}</option>)}
          </select>
        </label>
      </div>

      <p className="my-5 text-label text-tinta-suave" aria-live="polite">
        {pecas.length} {pecas.length === 1 ? 'peça' : 'peças'}
        {temFiltros && (
          <>
            {' · '}
            <button type="button" className="text-magenta underline underline-offset-3" onClick={limpar}>
              Limpar filtros
            </button>
          </>
        )}
      </p>

      {pecas.length > 0 ? (
        <>
          <Grelha pecas={pecas.slice(0, limite)} prioridade={4} />
          {limite < pecas.length && (
            <div className="mt-12 grid justify-items-center gap-3">
              <p className="text-label text-tinta-suave">A ver {limite} de {pecas.length}</p>
              <button type="button" className="botao" onClick={() => setLimite((l) => l + POR_PAGINA)}>Ver mais peças</button>
            </div>
          )}
        </>
      ) : (
        <div className="grid justify-items-start gap-4 bg-rosa p-8">
          <h2 className="text-2xl">Não há peças com estes filtros.</h2>
          <p>Tire um filtro, ou peça-nos pelo WhatsApp: fazemos peças por medida.</p>
          <div className="flex flex-wrap gap-3">
            <button type="button" className="botao" onClick={limpar}>Limpar filtros</button>
            <a className="pedir min-h-12 px-5" href={whatsapp(MENSAGEM_GERAL)} target="_blank" rel="noopener">Falar pelo WhatsApp</a>
          </div>
        </div>
      )}
    </div>
  )
}
