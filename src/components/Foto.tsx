import type { CSSProperties } from 'react'
import { foto, type Pasta } from '../lib/fotos'

interface Props {
  pasta: Pasta
  nome: string
  alt: string
  /** Largura que a foto ocupa no ecrã, para o browser escolher o ficheiro certo. */
  sizes: string
  largura?: number
  altura?: number
  prioridade?: boolean
  className?: string
  style?: CSSProperties
}

export function Foto({ pasta, nome, alt, sizes, largura = 1200, altura = 1200, prioridade, className, style }: Props) {
  const f = foto(pasta, nome)
  return (
    <picture>
      {f.avif && <source type="image/avif" srcSet={f.avif} sizes={sizes} />}
      {f.webp && <source type="image/webp" srcSet={f.webp} sizes={sizes} />}
      <img
        src={f.src}
        alt={alt}
        width={largura}
        height={altura}
        loading={prioridade ? 'eager' : 'lazy'}
        fetchPriority={prioridade ? 'high' : undefined}
        decoding="async"
        className={className}
        style={style}
      />
    </picture>
  )
}
