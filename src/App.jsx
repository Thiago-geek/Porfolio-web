import { Header } from './componenetes/Header'
import { SobreMi } from './componenetes/section-1'
import { Proyectos } from './componenetes/Section-2'
import { Profile } from './componenetes/Section-3'
import './App.css'

export default function App() {
  return (
    <>
      <main>
        <Header />
        <div>
          <Profile/>
          <SobreMi/>
        </div>
      </main>
    </>
  )
}
