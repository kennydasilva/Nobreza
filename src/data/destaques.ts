// Slides do carrossel da página inicial. Um slide com `ate` sai sozinho depois dessa data.
export interface Destaque {
  titulo: string
  linha?: string
  botao: string
  para: string
  foto: { tipo: 'peca' | 'casal' | 'site'; nome: string }
  alt: string
  posicao?: string
  /** Último dia em que aparece (AAAA-MM-DD). */
  ate?: string
}

export const DESTAQUES: Destaque[] = [
  {
    titulo: 'O Ouro que mais conecta corações em Moçambique.',
    botao: 'Ver alianças',
    para: '/loja?categoria=aliancas',
    foto: { tipo: 'peca', nome: 'frisos-separados-ai-n0010' },
    alt: 'Alianças Frisos Separados em ouro rosé sobre flores',
  },
  {
    titulo: 'Diga sim! 10% em todos os artigos.',
    linha: 'Promoção de exemplo, para mostrar como ficam as campanhas.',
    botao: 'Ver peças',
    para: '/loja',
    foto: { tipo: 'peca', nome: 'friso-lateral-e-zirconias-com-anel-versatil-cj-s0027' },
    alt: 'Conjunto de alianças com zircónias e anel em ouro amarelo',
    ate: '2026-11-30',
  },
  {
    titulo: 'Casais que confiaram na Nobreza.',
    botao: 'Ver casais',
    para: '/casais',
    foto: { tipo: 'casal', nome: 'filipe-helena' },
    alt: 'Filipe e Helena no dia do casamento',
    posicao: '50% 25%',
  },
  {
    titulo: 'Do desenho 3D à sua mão.',
    botao: 'Peça por medida',
    para: '/por-medida',
    foto: { tipo: 'site', nome: 'bancada' },
    alt: 'O joalheiro da Nobreza na bancada da oficina',
    posicao: '50% 60%',
  },
]
