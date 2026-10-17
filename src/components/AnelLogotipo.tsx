import { useEffect, useRef, useState } from 'react'

// O símbolo da Nobreza em grande: o aro, o diamante lapidado, o N e o nome em arco, como no logótipo.
// Desenha-se uma vez quando entra no ecrã; depois o diamante ganha um reflexo que o atravessa de vez em quando.
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
      viewBox="0 0 240 290"
      className={`anel-grande ${visto ? 'visto' : ''} ${className}`}
      role="img"
      aria-label="O símbolo da Ourivesaria Nobreza: um anel com um diamante e a letra N"
    >
      <defs>
        <clipPath id="anel-pedra">
          <path d="M92 42 L104 26 H136 L148 42 L120 78 Z" />
        </clipPath>
        <linearGradient id="anel-reflexo" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <path id="anel-arco" d="M46 170 A74 74 0 0 0 194 170" />
      </defs>

      {/* Diamante: coroa, mesa e pavilhão, com as facetas do logótipo. */}
      <g className="traco traco--pedra">
        <path pathLength={1} d="M92 42 L104 26 H136 L148 42 L120 78 Z" />
        <path pathLength={1} d="M92 42 H148 M104 26 L112 42 L120 26 L128 42 L136 26 M112 42 L120 78 L128 42" />
      </g>
      <g clipPath="url(#anel-pedra)" className="reflexo" aria-hidden>
        <rect x="60" y="20" width="26" height="70" fill="url(#anel-reflexo)" transform="skewX(-18)" />
      </g>

      {/* O aro. */}
      <circle className="traco traco--aro" pathLength={1} cx="120" cy="170" r="92" fill="none" transform="rotate(-90 120 170)" />
      <circle className="traco traco--aro-fino" pathLength={1} cx="120" cy="170" r="84" fill="none" transform="rotate(-90 120 170)" />

      {/* O N, com a diagonal a atravessar o aro como no logótipo. */}
      <text className="letra" x="120" y="198" textAnchor="middle" fontSize="96">
        N
      </text>
      <path className="traco traco--risco" pathLength={1} d="M158 206 L184 240" />

      <text className="nome" fontSize="9.5" letterSpacing="2.2">
        <textPath href="#anel-arco" startOffset="33%" textAnchor="middle">
          OURIVESARIA NOBREZA
        </textPath>
      </text>
    </svg>
  )
}
