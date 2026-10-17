import { useEffect, useRef, useState } from 'react'
import { Pausa, Tocar } from './Icones'

// Vídeo curto sem som que só toca quando está à vista. Quem desativa animações vê a imagem parada.
export function VideoVisivel({ nome, rotulo, className = '' }: { nome: string; rotulo: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [pausado, setPausado] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const o = new IntersectionObserver(([e]) => setVisivel(e.isIntersecting), { threshold: 0.35 })
    o.observe(v)
    return () => o.disconnect()
  }, [])
  useEffect(() => {
    const v = ref.current
    if (!v) return
    if (visivel && !pausado) v.play().catch(() => setPausado(true))
    else v.pause()
  }, [visivel, pausado])

  return (
    <div className={`relative ${className}`}>
      <video ref={ref} muted loop playsInline preload="none" poster={`/videos/${nome}.jpg`} aria-label={rotulo} className="h-full w-full bg-black object-cover">
        <source src={`/videos/${nome}.mp4`} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={() => setPausado((p) => !p)}
        className="absolute right-3 bottom-3 grid size-11 place-items-center rounded-full bg-magenta-escuro/80 text-white"
        aria-label={pausado ? 'Tocar vídeo' : 'Pausar vídeo'}
      >
        {pausado ? <Tocar className="size-3" /> : <Pausa className="size-3" />}
      </button>
    </div>
  )
}
