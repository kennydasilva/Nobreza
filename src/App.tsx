import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import ALoja from './pages/ALoja'
import Casais from './pages/Casais'
import Inicio from './pages/Inicio'
import Loja from './pages/Loja'
import NaoEncontrada from './pages/NaoEncontrada'
import Peca from './pages/Peca'
import PorMedida from './pages/PorMedida'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="loja" element={<Loja />} />
          <Route path="peca/:slug" element={<Peca />} />
          <Route path="por-medida" element={<PorMedida />} />
          <Route path="casais" element={<Casais />} />
          <Route path="a-loja" element={<ALoja />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}
