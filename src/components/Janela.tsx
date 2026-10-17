import { useEffect, useRef, type ReactNode } from 'react'
import { Fechar } from './Icones'

// <dialog> nativo: prende o foco, fecha com Escape e devolve o foco ao botão que o abriu.
export function Janela({ aberta, aoFechar, titulo, lado, children }: { aberta: boolean; aoFechar: () => void; titulo: string; lado?: boolean; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (aberta && !d.open) d.showModal()
    if (!aberta && d.open) d.close()
  }, [aberta])
  return (
    <dialog
      ref={ref}
      aria-label={titulo}
      onClose={aoFechar}
      onClick={(e) => e.target === ref.current && aoFechar()}
      className={`janela ${lado ? 'janela--lado' : ''}`}
    >
      <div className="relative p-6 pt-14 sm:p-8 sm:pt-14">
        <button type="button" onClick={aoFechar} className="absolute top-3 right-3 grid size-11 place-items-center text-tinta hover:text-magenta" aria-label="Fechar">
          <Fechar className="size-5" />
        </button>
        {children}
      </div>
    </dialog>
  )
}
