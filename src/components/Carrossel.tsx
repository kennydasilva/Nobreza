import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { DESTAQUES } from '../data/destaques'
import { Foto } from './Foto'
import { Pausa, Tocar } from './Icones'

const DURACAO = 6000
const hoje = () => new Date().toISOString().slice(0, 10)

// Muda sozinho a cada 6 s (decisão da loja); para enquanto a pessoa toca, passa o rato ou usa o teclado,
// arrastar muda de slide, e quem desativa animações fica no primeiro slide com o botão de continuar.
export function Carrossel() {
  const slides = useMemo(() => DESTAQUES.filter((d) => !d.ate || d.ate >= hoje()), [])
  const [atual, setAtual] = useState(0)
  const [pausado, setPausado] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [parado, setParado] = useState(false)
  const restante = useRef(DURACAO)
  const inicio = useRef(0)
  const x0 = useRef<number | null>(null)

  const ir = useCallback((i: number) => {
    restante.current = DURACAO
    setAtual((i + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (pausado || parado || slides.length < 2) return
    inicio.current = performance.now()
    const t = setTimeout(() => ir(atual + 1), restante.current)
    return () => {
      clearTimeout(t)
      restante.current = Math.max(0, restante.current - (performance.now() - inicio.current))
    }
  }, [atual, pausado, parado, ir, slides.length])

  const parar = () => setParado(true)
  const continuar = () => setParado(false)
  const contagem = (n: number) => String(n).padStart(2, '0')

  return (
    <section
      className="carrossel bg-rosa"
      aria-roledescription="carrossel"
      aria-label="Destaques da Nobreza"
      onMouseEnter={parar}
      onMouseLeave={continuar}
      onFocus={parar}
      onBlur={continuar}
      onPointerDown={(e) => {
        x0.current = e.clientX
        parar()
      }}
      onPointerUp={(e) => {
        if (x0.current !== null && Math.abs(e.clientX - x0.current) > 40) ir(atual + (e.clientX < x0.current ? 1 : -1))
        x0.current = null
        if (e.pointerType !== 'mouse') continuar()
      }}
    >
      <div className="wrap carrossel-wrap">
        <div className="grid">
          {slides.map((s, i) => (
            <article
              key={s.titulo}
              className={`slide ${i === atual ? 'ativo' : ''}`}
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${slides.length}`}
              inert={i !== atual}
            >
              <div className="slide-texto">
                {i === 0 ? <h1 className="slide-titulo">{s.titulo}</h1> : <h2 className="slide-titulo">{s.titulo}</h2>}
                {s.linha && <p className="text-tinta-suave">{s.linha}</p>}
                <Link className="botao" to={s.para}>
                  {s.botao}
                </Link>
              </div>
              <div className="slide-foto">
                <Foto
                  pasta={s.foto.tipo === 'peca' ? 'pecas' : s.foto.tipo === 'casal' ? 'casais' : 'site'}
                  nome={s.foto.nome}
                  alt={s.alt}
                  sizes="(min-width: 760px) 640px, 100vw"
                  prioridade={i === 0}
                  className="h-full w-full object-cover"
                  style={s.posicao ? { objectPosition: s.posicao } : undefined}
                />
              </div>
            </article>
          ))}
        </div>
        <div className="carrossel-controlo">
          <div className="flex max-w-80 flex-1 gap-2" role="group" aria-label="Escolher destaque">
            {slides.map((s, i) => (
              <button
                key={s.titulo}
                type="button"
                className={`ponto ${i < atual ? 'feito' : ''} ${i === atual ? 'ativo' : ''} ${pausado || parado ? 'em-pausa' : ''}`}
                style={{ '--duracao': `${DURACAO}ms` } as React.CSSProperties}
                aria-label={`Destaque ${i + 1}`}
                aria-current={i === atual}
                onClick={() => ir(i)}
                // Recomeça a barra sempre que o slide muda.
                data-chave={i === atual ? atual : undefined}
              />
            ))}
          </div>
          <span className="text-mini tracking-[0.06em] text-tinta-suave tabular-nums" aria-hidden>
            {contagem(atual + 1)} / {contagem(slides.length)}
          </span>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-rosa-linha bg-white text-tinta"
            aria-label={pausado ? 'Continuar destaques' : 'Pausar destaques'}
            onClick={() => setPausado((p) => !p)}
          >
            {pausado ? <Tocar className="size-3" /> : <Pausa className="size-3" />}
          </button>
        </div>
      </div>
    </section>
  )
}
