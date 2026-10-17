import type { Categoria, CorOuro } from './tipos'

export const CATEGORIAS: { id: Categoria; nome: string; singular: string }[] = [
  { id: 'aliancas', nome: 'Alianças', singular: 'Aliança' },
  { id: 'aneis', nome: 'Anéis', singular: 'Anel' },
  { id: 'colares', nome: 'Colares', singular: 'Colar' },
  { id: 'brincos', nome: 'Brincos', singular: 'Brincos' },
]

export const CORES: { id: CorOuro; nome: string; amostra: string }[] = [
  { id: 'rose', nome: 'Ouro rosé', amostra: '#e7a58c' },
  { id: 'amarelo', nome: 'Ouro amarelo', amostra: '#d9b54a' },
  { id: 'branco', nome: 'Ouro branco', amostra: '#d8d8d4' },
  { id: 'tres-cores', nome: 'Três cores', amostra: 'conic-gradient(#e7a58c 0 33%, #d9b54a 0 66%, #d8d8d4 0)' },
]

export const PRECOS = [
  { id: 'ate-20000', nome: 'Até 20.000 MZN', min: 0, max: 20000 },
  { id: '20000-50000', nome: '20.000 a 50.000 MZN', min: 20000, max: 50000 },
  { id: 'mais-50000', nome: 'Mais de 50.000 MZN', min: 50000, max: Infinity },
]

export const ORDENS = [
  { id: 'novidades', nome: 'Novidades' },
  { id: 'preco-menor', nome: 'Preço: menor' },
  { id: 'preco-maior', nome: 'Preço: maior' },
] as const
export type Ordem = (typeof ORDENS)[number]['id']

export const nomeCategoria = (c: Categoria) => CATEGORIAS.find((x) => x.id === c)!.nome
export const nomeCor = (c?: CorOuro) => CORES.find((x) => x.id === c)?.nome
