import { PECAS } from '../data/pecas'
import type { Peca } from '../data/tipos'

const porSlug = new Map(PECAS.map((p) => [p.slug, p]))
export const pecaPorSlug = (slug: string) => porSlug.get(slug)
export const pecasPorSlugs = (slugs: string[]) => slugs.map((s) => porSlug.get(s)).filter((p): p is Peca => !!p)

/** Peças da mesma categoria, primeiro as da mesma cor e preço mais próximo. */
export function parecidas(p: Peca, n = 4) {
  return PECAS.filter((x) => x.categoria === p.categoria && x.slug !== p.slug)
    .sort((a, b) => Number(b.cor === p.cor) - Number(a.cor === p.cor) || Math.abs(a.preco - p.preco) - Math.abs(b.preco - p.preco))
    .slice(0, n)
}
