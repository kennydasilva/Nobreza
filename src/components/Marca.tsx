// O anel do logótipo (diamante + aro + N) em vetor; desenha-se uma vez quando o site abre.
// Reconstrução provisória do logótipo da loja, até haver o ficheiro original.
export function Anel({ desenhar = false, className = '' }: { desenhar?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 68 80" className={`anel ${desenhar ? 'desenha' : ''} ${className}`} aria-hidden>
      <path className="t pedra" pathLength={1} d="M26 15 L34 5 L42 15 L34 24 Z M26 15 H42" />
      <circle className="t" pathLength={1} cx="34" cy="50" r="26" transform="rotate(-90 34 50)" />
      <text className="n" x="34" y="60" textAnchor="middle" fontSize="30">
        N
      </text>
    </svg>
  )
}
