
import { Mail, Code, Palette, Globe, BookOpen } from 'lucide-react';

export function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
      <div className='flex gap-7'>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-emerald-400"
              />
              <button>Disponible para trabajar</button>
              </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
       
           
          
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hey, soy thiago
            </h1>
            <p className="text-lg md:text-xl mb-6">
              <span className="text-gray-300">+1 año de experiencia. </span>
              <span className="text-yellow-400">Desarrollador Web. Creador de Contenido sobre Programación </span>
              <span className="text-gray-300">de Buenos aires, Argentina es. Especializado en el desarrollo de aplicaciones web únicas.</span>
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-colors px-6 py-2 rounded-full">
                <Mail className="w-5 h-5" />
                Contáctame
              </button>
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-2 rounded-full">
                
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      {/* <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors">
            <Code className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Desarrollo Web</h3>
            <p className="text-gray-400">Especializado en React, TypeScript.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors">
            <Palette className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-gray-400">Creación de interfaces intuitivas y experiencias memorables.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors">
            <Globe className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">SEO</h3>
            <p className="text-gray-400">Optimización para motores de búsqueda y rendimiento web.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors">
            <BookOpen className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Contenido</h3>
            <p className="text-gray-400">Creación de contenido educativo sobre desarrollo web.</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

