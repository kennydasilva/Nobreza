import { Link } from 'react-router-dom'
import { Anel } from '../components/Marca'
import { useTitulo } from '../lib/titulo'

export default function NaoEncontrada() {
  useTitulo('Página não encontrada')
  return (
    <div className="wrap grid justify-items-center gap-5 py-28 text-center">
      <Anel className="h-20 w-17" />
      <h1 className="text-[clamp(2rem,1.5rem+2vw,3rem)]">Esta página não existe.</h1>
      <p className="max-w-[44ch] text-tinta-suave">Pode ter mudado de endereço, ou a peça já não está no catálogo.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link className="botao" to="/loja">Ver peças</Link>
        <Link className="pedir min-h-12 px-5" to="/">Página inicial</Link>
      </div>
    </div>
  )
}
