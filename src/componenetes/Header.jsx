import { Alternator } from "./Alternador";
export function Header() {

  return (
    <header className="w-full fixed top-3 ">
      <nav className="max-w-full">
        <ul className="flex justify-center items-center gap-6 h-12">
       <li><a href="#proyectos">Proyectos</a></li>
       <li><a href="#sobre mi">Sobre Mi</a></li>
       <li><a href="#contacto">Contacto</a></li>
       <li className="flex items-center"><Alternator /></li>
        </ul>
      </nav>
    </header>
  );
}



 

