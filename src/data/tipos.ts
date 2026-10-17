export type Categoria = 'aliancas' | 'aneis' | 'colares' | 'brincos'
export type CorOuro = 'rose' | 'amarelo' | 'branco' | 'tres-cores'

export interface Peca {
  slug: string
  /** Referência impressa na etiqueta da loja. */
  ref: string
  nome: string
  categoria: Categoria
  /** Preço em MZN. */
  preco: number
  /** Peso aproximado em gramas. */
  peso?: number
  medida?: string
  /** O preço é do par (alianças). */
  par?: boolean
  cor?: CorOuro
  /** Nome do vídeo em public/videos, sem extensão. */
  video?: string
  /** Ordem de publicação: maior = mais recente. */
  ordem: number
}
