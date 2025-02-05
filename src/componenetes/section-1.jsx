export function SobreMi() {
    return(
      <>
      <section className="w-full h-screen flex justify-center items-center" id="sobre mi">
  <div className="flex flex-col lg:flex-row w-[95%] items-center lg:items-start">
    <div className="lg:w-1/2 order-1 lg:order-1">
      <div>
        <h1 className="flex gap-3 ml-5 md:ml-0 text-gray-500">
          <svg className="size-8" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
            <path d="M15 19l2 2l4 -4"></path>
          </svg>
          Sobre Mi
        </h1>
      </div>
  
      <div className="order-2 lg:order-2 lg:hidden">
        <div className="border-solid flex justify-center border-gray-600 w-60 rounded-2xl p-1 m-auto my-4">
          <img className="w-[100%] h-56 object-cover rounded-xl" src="c:\Users\thiago\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\TempState\FCA02D37F2E8AFC58148DFDD93D0FAF3\Imagen de WhatsApp 2024-08-12 a las 16.56.04_432e958a.jpg" alt="Thiago" />
        </div>
      </div>
  
      <div className="order-3 lg:order-2 flex flex-col gap-7">
        <div>
          <p className="text-lg">
            Me llamo Thiago Elías Barbero. Nací el 28 de julio de 2006 en Buenos Aires. Empecé en la programación hace 1 año.
            <strong>Actualmente estoy aprendiendo diariamente.</strong>
          </p>
        </div>
  
        <div>
          <p className="text-lg">
            Soy un desarrollador web con experiencia en frontend. Me encanta resolver problemas complejos y crear soluciones innovadoras.
            Busco oportunidades para seguir creciendo en el campo del desarrollo web y contribuir a proyectos desafiantes.
            <strong>Aprendo y supero nuevos retos semanalmente y analizo cómo mejorar mis habilidades a través de ellos.</strong>
          </p>
        </div>
      </div>
    </div>
  
    <div className="lg:w-1/2  order-2 lg:order-2 lg:mt-12 lg:ml-20 m-3 hidden lg:flex">
      <div className=" border-solid flex justify-center border-gray-600 w-60 rounded-2xl p-1">
        <img className="w-[100%] h-56 object-cover rounded-xl" src="https://tse4.mm.bing.net/th?id=OIP.7bT8oGHcc6D2M5LESPUS1AHaFo&pid=Api&P=0&h=180" alt="Thiago" />
      </div>
    </div>
  </div>
  </section>
      </>
    )
  }