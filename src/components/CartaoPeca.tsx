import { Link } from 'react-router-dom'
import type { Peca } from '../data/tipos'
import { caminhoPeca, detalhe, mensagemPedido, nomeCompleto, whatsapp } from '../lib/formato'
import { Etiqueta } from './Etiqueta'
import { Foto } from './Foto'
import { WhatsApp } from './Icones'

// A fotografia é o cartão: sem caixa nem sombra. Tocar na foto abre a peça; "Pedir" abre o WhatsApp.
export function CartaoPeca({ peca, prioridade }: { peca: Peca; prioridade?: boolean }) {
  const nome = nomeCompleto(peca)
  return (
    <article className="grid content-start gap-2">
      <Link to={caminhoPeca(peca)} className="zoom block overflow-hidden bg-rosa" aria-label={nome}>
        <Foto
          pasta="pecas"
          nome={peca.slug}
          alt={nome}
          sizes="(min-width: 1240px) 290px, (min-width: 900px) 23vw, 46vw"
          prioridade={prioridade}
          className="aspect-square h-auto w-full object-cover"
        />
      </Link>
      <h3 className="mt-1 text-nome">
        <Link to={caminhoPeca(peca)} className="hover:text-magenta">
          {peca.nome}
        </Link>
      </h3>
      <p className="text-label text-tinta-suave tabular-nums">{detalhe(peca)}</p>
      <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
        <Etiqueta peca={peca} />
        <a className="pedir" href={whatsapp(mensagemPedido(peca))} target="_blank" rel="noopener" aria-label={`Pedir ${nome} pelo WhatsApp`}>
          <WhatsApp />
          Pedir
        </a>
      </div>
    </article>
  )
}

export function Grelha({ pecas, prioridade = 0 }: { pecas: Peca[]; prioridade?: number }) {
  return (
    <div className="grid grid-cols-2 gap-x-3.5 gap-y-7 sm:gap-x-5 lg:grid-cols-4 lg:gap-y-8">
      {pecas.map((p, i) => (
        <CartaoPeca key={p.slug} peca={p} prioridade={i < prioridade} />
      ))}
    </div>
  )
}
