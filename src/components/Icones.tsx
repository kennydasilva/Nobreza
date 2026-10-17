// Um só conjunto de ícones em linha fina (1,6), desenhados para este site.
import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>
const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const

export const Lupa = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
)
export const Menu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)
export const Fechar = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)
export const Seta = (p: P) => (
  <svg {...base} viewBox="0 0 16 16" strokeWidth={1.4} {...p}>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
)
export const SetaEsq = (p: P) => (
  <svg {...base} viewBox="0 0 16 16" strokeWidth={1.4} {...p}>
    <path d="M13 8H3M7 4 3 8l4 4" />
  </svg>
)
export const Pausa = (p: P) => (
  <svg viewBox="0 0 12 12" fill="currentColor" aria-hidden {...p}>
    <rect x="2" y="1" width="3" height="10" />
    <rect x="7" y="1" width="3" height="10" />
  </svg>
)
export const Tocar = (p: P) => (
  <svg viewBox="0 0 12 12" fill="currentColor" aria-hidden {...p}>
    <path d="M3 1l8 5-8 5z" />
  </svg>
)
export const WhatsApp = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
    <path
      d="M9.2 8.6c.2-.4.5-.4.8-.4h.4c.2 0 .4.1.5.4l.6 1.4c.1.2 0 .5-.1.6l-.5.6c.5.9 1.2 1.6 2.1 2.1l.6-.5c.2-.1.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.4c0 .3 0 .6-.4.8-.5.3-1.2.5-2 .2-2.1-.7-3.7-2.3-4.4-4.4-.3-.8-.1-1.5.2-2.2z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
)
export const Instagram = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
)
export const Facebook = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
  </svg>
)
export const TikTok = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.5 2.5 2.5 4.5 5 4.5" />
  </svg>
)
export const Telefone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
)
export const Mapa = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)
export const Losango = (p: P) => (
  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" aria-hidden {...p}>
    <path d="M5 1 9 5 5 9 1 5z" />
  </svg>
)
