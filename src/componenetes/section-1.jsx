import React from 'react';
import { User, Twitch } from 'lucide-react';

export function SobreMi() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">


      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 ">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-2/3 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-8 h-8" />
              <h1 className="text-3xl font-bold">Sobre mí</h1>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300">
              Me llamo Thiago Elías Barbero. Nací el 28 de julio de 2006 en Buenos Aires. Empecé en la programación hace 1 año.{' '}
                <span className="text-yellow-400">Actualmente estoy aprendiendo diariamente.</span>.
              </p>

              <p className="text-lg text-gray-300">
              Soy un desarrollador web con experiencia en frontend. {' '}
                <span className="text-yellow-400">encanta resolver problemas complejos y crear soluciones innovadoras.</span>
                Busco oportunidades para seguir creciendo en el campo del desarrollo web y contribuir a proyectos desafiantes.
              </p>

              <p className="text-lg text-gray-300">
                Como creador de contenido,{' '}
                <span className="text-yellow-400">
                  cuento con el canal de habla hispana{' '}
                  <em className="italic">Software & Game Development</em>
                </span>{' '}
                Aprendo y supero nuevos retos semanalmente y analizo cómo mejorar mis habilidades a través de ellos.
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/3">
            <div className="relative">
              {/* <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-transparent">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=500"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 midudev. Casi todos los derechos reservados</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">Sobre mí</a>
            <a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

