import { User } from "lucide-react"

export function SobreMi() {
  return (
    <section id="sobremi" className="mt-16 min-h-screen text-white max-w-7xl mx-auto">
      <div className="container mx-auto py-12 md:p-4">
        <div className="flex items-center gap-3 mb-6">
          <User className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Sobre mí</h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3 order-1 lg:order-2 mb-8 lg:mb-0 mt-8">
            <div className="relative">
              <div className="rotate-6 p-2 aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-transparent">
                <img src="https://media.licdn.com/dms/image/v2/D4E03AQGz-4Gcnu9ykQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723566024058?e=1744243200&v=beta&t=W2HjvDQ_7cPIwaaUcNGio-mltt2MSS5UR_mHS1lN3o4" alt="Profile" className="rounded-3xl w-80 h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-2/3 space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Me llamo Thiago Elías Barbero. Nací el 28 de julio de 2006 en Buenos Aires. Empecé en la programación
                hace 1 año. <span className="text-yellow-400">Actualmente estoy aprendiendo diariamente.</span>
              </p>

              <p className="text-lg text-gray-300">
                Soy un desarrollador web con experiencia en frontend.{" "}
                <span className="text-yellow-400">
                  Me encanta resolver problemas complejos y crear soluciones innovadoras.
                </span>
                Busco oportunidades para seguir creciendo en el campo del desarrollo web y contribuir a proyectos
                desafiantes.
              </p>

              <p className="text-lg text-gray-300">
                Como creador de contenido,{" "}
                <span className="text-yellow-400">
                  cuento con el canal de habla hispana <em className="italic">Software & Game Development</em>
                </span>{" "}
                Aprendo y supero nuevos retos semanalmente y analizo cómo mejorar mis habilidades a través de ellos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto py-8 mt-12 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Thiago. Casi todos los derechos reservados</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Sobre mí
            </a>
            <a href="mailto:thiagoelias365@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}
