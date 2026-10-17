import { Link } from 'react-router-dom'
import { Foto } from '../components/Foto'
import { CASAIS } from '../data/casais'
import { useTitulo } from '../lib/titulo'

export default function Casais() {
  useTitulo('Casais Nobreza')
  return (
    <div className="bg-rosa">
      <div className="wrap pt-[clamp(32px,5vw,56px)] pb-[clamp(64px,9vw,112px)]">
        <h1 className="text-[clamp(2rem,1.5rem+2vw,3rem)]">Casais Nobreza</h1>
        <p className="mt-2 text-tinta-suave">Casais que escolheram as alianças na Nobreza.</p>
        <div className="mt-10 grid grid-cols-2 gap-x-[clamp(12px,2vw,28px)] gap-y-8 md:grid-cols-3 lg:grid-cols-4">
          {CASAIS.map((c, i) => (
            <figure key={c.foto} className="foto-casal">
              <Foto pasta="casais" nome={c.foto} alt={c.nomes} largura={800} altura={1000} sizes="(min-width: 1024px) 280px, (min-width: 760px) 30vw, 46vw" prioridade={i < 4} className="aspect-4/5 h-auto w-full object-cover" />
              <figcaption>{c.nomes}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-14 grid justify-items-center gap-3 text-center">
          <h2 className="text-seccao">As vossas alianças</h2>
          <Link className="botao" to="/loja?categoria=aliancas">Ver alianças</Link>
        </div>
      </div>
    </div>
  )
}
