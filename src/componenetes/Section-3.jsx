// eslint-disable-next-line no-unused-vars
import { Mail, Code, Palette, Globe, BookOpen, Linkedin } from 'lucide-react';

export function Profile() {
  return (
    <section >
    <div className="min-h-screen flex justify-center items-center text-white">
      {/* Hero Section */}
      <div className="container mx-auto py-20">
      <div className='flex items-center gap-7'>
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQGz-4Gcnu9ykQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723566024058?e=1744243200&v=beta&t=W2HjvDQ_7cPIwaaUcNGio-mltt2MSS5UR_mHS1lN3o4"
                alt="Profile"
                className="w-20 h-20  rounded-full object-cover "
              />
            <button className="btn-typing h-9 flex justify-center items-center px-4 py-2 text-white border border-transparent rounded-full bg-[#202938] text-md relative">
  <span className="relative z-10 flex justify-center items-center w-full h-full">
    <a href="https://www.linkedin.com/in/tiago-elias-000389305/">Disponible para trabajar</a>
  </span>
  <span className="absolute inset-0 rounded-full border border-green-700 animate-pulse"></span>
</button>

              </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-3 lg:text-left flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 mt-4">
              Hey, soy thiago
            </h1>
            <p className="text-lg md:text-xl mb-6 w-[65%]">
              <span className="text-gray-300">Desarrollador Web y Creador de Contenido sobre Programación con más de un año de experiencia. </span>
              <span className="text-yellow-400">Especializado en el desarrollo de aplicaciones web. </span>
              <span className="text-gray-300">de Buenos aires, Argentina.  me especializo en crear soluciones digitales innovadoras y optimizadas.</span>
            </p>
            
            <div className="flex flex-wrap gap-4  lg:justify-start">
            <button className="btn-typing h-9 flex justify-center items-center gap-2 px-4 py-2 text-white border border-transparent rounded-full bg-[#202938] text-md relative">
            <Mail className="w-5 h-5" />
      <span className="relative z-10">
      <a href="mailto:thiagoelias365@gmail.com">Contactame</a></span>
      <span className="absolute inset-0 rounded-full border border-green-700 animate-pulse"></span>
    </button>

    <button className="btn-typing h-9 flex justify-center items-center gap-2 px-4 py-2 text-white border border-transparent rounded-full bg-[#202938] text-md relative">
    <Linkedin className='w-5 h-5' />
      <span className="relative z-10"> 
        
      <a href="https://www.linkedin.com/in/tiago-elias-000389305/">LinkedIn</a></span>
      <span className="absolute inset-0 rounded-full border border-green-700 animate-pulse"></span>
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
    </section>
  );
}