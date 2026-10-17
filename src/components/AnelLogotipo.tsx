import { useEffect, useRef, useState } from 'react'

// O símbolo da Nobreza em grande, redesenhado sobre as proporções do logótipo: aro grosso, diamante cheio
// assente no aro, N com a diagonal a sair do aro em cima, e o nome em arco por fora, em baixo.
// O aro desenha-se quando entra no ecrã, o resto aparece a seguir, e o diamante ganha um reflexo de vez em quando.
export function AnelLogotipo({ className = '' }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null)
  const [visto, setVisto] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisto(true)
          o.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    o.observe(el)
    return () => o.disconnect()
  }, [])

  return (
    <svg
      ref={ref}
      viewBox="0 0 240 280"
      className={`anel-grande ${visto ? 'visto' : ''} ${className}`}
      role="img"
      aria-label="O símbolo da Ourivesaria Nobreza: um anel com um diamante e a letra N"
    >
      <defs>
        <clipPath id="anel-pedra">
          <path d="M104 20 H136 L148 32 L120 55 L92 32 Z" />
        </clipPath>
        <linearGradient id="anel-reflexo" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <path id="anel-arco" d="M16 150 A104 104 0 0 0 224 150" />
      </defs>

      {/* O aro. */}
      <circle className="aro" pathLength={1} cx="120" cy="150" r="82" transform="rotate(-90 120 150)" />

      {/* O diamante, cheio, com as facetas em linha clara, sobre o engaste. */}
      <g className="pedra">
        <path className="cheio" d="M108 54 H132 L128 63 H112 Z" />
        <path className="cheio" d="M104 20 H136 L148 32 L120 55 L92 32 Z" />
        <path className="faceta" d="M92 32 H148 M104 20 L112 32 L120 20 L128 32 L136 20 M112 32 L120 55 L128 32" />
      </g>
      <g clipPath="url(#anel-pedra)" aria-hidden>
        <rect className="reflexo" x="60" y="14" width="22" height="50" fill="url(#anel-reflexo)" />
      </g>

      {/* O N: duas hastes afiladas e a diagonal, que sai do aro só em cima, à esquerda. */}
      <g className="letra">
        <path className="cheio" d="M73 118 L82 112 V198 L74 203 Z" />
        <path className="cheio" d="M156 104 L166 98 V186 L157 191 Z" />
        <path className="cheio" d="M29 92 L76 98 L166 176 V192 L78 118 Z" />
      </g>

      <text className="nome" fontSize="10" letterSpacing="2">
        <textPath href="#anel-arco" startOffset="50%" textAnchor="middle">
          OURIVESARIA NOBREZA
        </textPath>
      </text>
    </svg>
  )
}
