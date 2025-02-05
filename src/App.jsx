import { Header } from './componenetes/Header'
import { SobreMi } from './componenetes/section-1'
import { Proyectos } from './componenetes/Section-2'
import { Profile } from './componenetes/Section-3'
import './App.css'

export default function App() {
  return(
    <>
    <main className='flex flex-col items-center justify-center border border-black'>
    <Header />
    <div className=' w-[75%]'>
        <Profile />
        <Proyectos />
        <SobreMi />
    </div>  
    </main>
    </>
  )
}