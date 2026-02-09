import React, { useEffect } from 'react';
import { Partners } from './Partners'; // Asegúrate de que la ruta sea correcta

export const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const valores = [
    { t: "Innovación", d: "Exploramos nuevas fronteras tecnológicas." },
    { t: "Excelencia", d: "Calidad superior en cada entrega." },
    { t: "Ética", d: "Integridad y transparencia total." },
    { t: "Colaboración", d: "Crecemos junto a nuestros aliados." }
  ];

  return (
    // He cambiado pt-20 a pt-32 para que el Navbar no tape el contenido
    <section className="bg-white pt-32 overflow-hidden">
      
      {/* Hero de Quiénes Somos */}
      <div className="max-w-7xl mx-auto px-6 pb-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          {/* Eliminé text-outline para evitar errores de CSS, usé font-black */}
          <h1 className="text-5xl md:text-8xl font-black text-every-blue mb-6 uppercase leading-tight">
            ¿Quiénes <br />
            <span className="text-every-gold">Somos?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            En <span className="font-bold text-every-blue">Every Technology SAS</span>, somos una firma especializada en consultoría e innovación tecnológica, dedicada a convertir desafíos complejos en soluciones estratégicas.
          </p>
        </div>
        
        {/* Cuadro de impacto visual */}
        <div className="lg:w-1/2 p-10 md:p-16 bg-every-blue rounded-[3rem] text-white shadow-2xl relative">
          <p className="text-3xl md:text-4xl italic font-serif relative z-10 leading-snug">
            "Tu próximo aliado estratégico en innovación y crecimiento digital."
          </p>
          {/* Un detalle decorativo para que no se vea plano */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-every-gold/10 rounded-full -mr-10 -mt-10 blur-3xl"></div>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="bg-gray-50 py-24 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6 border-l-4 border-every-gold pl-8">
            <h2 className="text-every-gold font-bold uppercase tracking-[0.3em] text-sm">Nuestra Misión</h2>
            <p className="text-2xl text-every-blue leading-relaxed font-medium">
              Impulsar la transformación de empresas a través de soluciones tecnológicas vanguardistas, acompañándolas en cada etapa de su evolución digital.
            </p>
          </div>
          <div className="space-y-6 border-l-4 border-every-gold pl-8">
            <h2 className="text-every-gold font-bold uppercase tracking-[0.3em] text-sm">Nuestra Visión</h2>
            <p className="text-2xl text-every-blue leading-relaxed font-medium">
              Ser reconocidos globalmente como líderes en consultoría tecnológica, destacando por nuestra capacidad de innovar y generar valor sostenible.
            </p>
          </div>
        </div>
      </div>

      {/* Valores Corporativos */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <h3 className="text-center text-4xl font-black text-every-blue mb-16 uppercase tracking-tighter">Valores Corporativos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valores.map((v, i) => (
            <div key={i} className="group text-center p-10 border border-gray-100 rounded-3xl hover:bg-every-blue hover:scale-105 transition-all duration-300">
              <h4 className="text-every-gold font-bold text-xl mb-3 group-hover:text-white">{v.t}</h4>
              <p className="text-gray-500 text-sm group-hover:text-gray-300 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Re-incorporación de Aliados (Partners) */}
      <div className="bg-white py-20 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-12">Empresas que confían en nosotros</p>
          <Partners />
        </div>
      </div>

    </section>
  );
};