export  function Profile() {
  return (
    <section className="w-full h-screen flex items-center">
    <div className="flex flex-col  text-white">
      
        {/* <img src="/profile.jpg" alt="Perfil" className="w-24 h-24 rounded-full border-4 border-blue-500"/> */}
        <div>
    <span className="mt-2 px-4 py-1 text-sm border rounded-full border-green-400 text-green-400">
  Disponible para trabajar
</span>
</div>
      

      <h1 className="text-4xl font-bold mt-4">Hey, soy midudev</h1>

      <p className=" mt-2 max-w-[45%]">
        +15 años de experiencia. <span className="text-yellow-400 font-bold">Ingeniero de Software y Creador de Contenido sobre Programación</span> de Barcelona, España. 
        Especializado en el desarrollo de aplicaciones web únicas.
      </p>

      <div className="mt-6 flex gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
           Contáctame
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
           LinkedIn
        </button>
      </div>

    </div>
    </section>
  );
}
