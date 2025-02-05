export function Proyectos() {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col items-center gap-14 border border-black" id="proyectos">
        <div className="md:flex gap-5">
          <div>
            <div className="bg-slate-500 h-60 md:h-auto rounded-xl">
              <img className="w-full object-cover md:w-[400px] h-60 md:h-auto rounded-lg" 
                   src="https://www.porfolio.dev/projects/svgl.webp" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:w-[40%]">
            <h2>SVGL - A beautiful library with SVG logos</h2>
            <div className="flex gap-2">
              <button className="bg-slate-950 w-28 h-7 rounded-xl text-white">JavaScript</button>
              <button className="bg-slate-950 w-24 h-7 rounded-xl text-white">Tailwind</button>
            </div>
            <p className="text-gray-400 leading-6">
              Biblioteca de logos SVG de las marcas más populares...
            </p>
            <div className="flex gap-2">
              <button className="bg-slate-950 w-24 h-10 rounded-md text-white">Code</button>
              <button className="bg-slate-950 w-24 h-10 rounded-md text-white">Preview</button>
            </div>
          </div>
        </div>

        <div className="md:flex gap-5">
          <div>
            <div className="bg-slate-500 h-60 md:h-auto rounded-xl">
              <img className="w-full object-cover md:w-[400px] h-60 md:h-auto rounded-lg" 
                   src="https://www.porfolio.dev/projects/svgl.webp" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:w-[40%]">
            <h2>SVGL - A beautiful library with SVG logos</h2>
            <div className="flex gap-2">
              <button className="bg-slate-950 w-28 h-7 rounded-xl text-white">JavaScript</button>
              <button className="bg-slate-950 w-24 h-7 rounded-xl text-white">Tailwind</button>
            </div>
            <p className="text-gray-400 leading-6">
              Biblioteca de logos SVG de las marcas más populares...
            </p>
            <div className="flex gap-2">
              <button className="bg-slate-950 w-24 h-10 rounded-md text-white">Code</button>
              <button className="bg-slate-950 w-24 h-10 rounded-md text-white">Preview</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


