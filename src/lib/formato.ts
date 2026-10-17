import { config } from '../config'
import type { Peca } from '../data/tipos'
import { nomeCategoria, nomeCor } from '../data/categorias'

export const preco = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' MZN'
export const gramas = (g: number) => String(g).replace('.', ',') + ' g'

export const caminhoPeca = (p: Peca) => `/peca/${p.slug}`
export const linkPeca = (p: Peca) => config.siteUrl + caminhoPeca(p)

/** Linha curta do cartão: cor, medida e peso. */
export const detalhe = (p: Peca) => [nomeCor(p.cor), p.medida, p.peso && gramas(p.peso)].filter(Boolean).join(' · ')

/** Nome completo para títulos e mensagens ("Alianças Chanfradas", "Anel Divino"). */
export function nomeCompleto(p: Peca) {
  if (p.categoria === 'aneis') return `Anel ${p.nome}`
  if (p.categoria === 'brincos') return `Brincos ${p.nome}`
  if (p.categoria === 'aliancas') return /^Alianças/.test(p.nome) ? p.nome : `Alianças ${p.nome}`
  return p.nome
}

export function mensagemPedido(p: Peca) {
  return [
    'Olá Nobreza! Quero pedir esta peça:',
    '',
    `${nomeCompleto(p)} (${nomeCategoria(p.categoria).toLowerCase()})`,
    `Ref.: ${p.ref}`,
    `Preço: ${preco(p.preco)}${p.par ? ' o par' : ''}`,
    `Link: ${linkPeca(p)}`,
  ].join('\n')
}

export const MENSAGEM_GERAL = 'Olá Nobreza! Vim pelo site.'
export const MENSAGEM_MEDIDA = 'Olá Nobreza! Quero uma peça por medida. A minha ideia é:'

export const whatsapp = (texto: string) => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(texto)}`
