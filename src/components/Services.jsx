import React from 'react';

const services = [
  {
    title: "Transformación Digital",
    desc: "Acompañamiento integral en el rediseño de procesos internos y cultura organizacional para liderar en la era digital."
  },
  {
    title: "Desarrollo Tecnológico",
    desc: "Creación de soluciones de software y hardware a medida, diseñadas específicamente para los desafíos de tu negocio."
  },
  {
    title: "Vigilancia Tecnológica",
    desc: "Monitoreo estratégico de tendencias y gestión profesional de propiedad intelectual para blindar tu competitividad."
  },
  {
    title: "Proyectos de Inversión",
    desc: "Formulación y estructuración experta de modelos de negocio enfocados en la obtención efectiva de financiamiento."
  }
];

export const Services = () => (
  <section id="servicios" className="py-20 md:py-32 bg-gray-50 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      {/* Título adaptable: más grande en PC, ajustado en móvil */}
      <h2 className="text-4xl md:text-6xl font-montserrat font-black text-every-blue text-center mb-16 md:mb-24 uppercase tracking-tighter">
        Nuestros <span className="text-every-gold">Servicios</span>
      </h2>

      {/* Grid Responsive: 1 columna en móvil, 2 en tablet, 4 en desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {services.map((s, i) => (
          <div 
            key={i} 
            className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border-t-8 border-every-gold hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between group"
          >
            <div>
              {/* Título más grande y con mejor espaciado */}
              <h3 className="font-bold text-2xl md:text-3xl text-every-blue mb-6 leading-tight min-h-[80px] flex items-center group-hover:text-every-gold transition-colors">
                {s.title}
              </h3>
              
              {/* Línea decorativa que crece en hover */}
              <div className="w-12 h-1 bg-every-gold/30 mb-6 group-hover:w-full transition-all duration-500"></div>
              
              {/* Descripción con texto más grande (lg) para legibilidad */}
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                {s.desc}
              </p>
            </div>

            {/* Decoración discreta en la esquina */}
            <div className="mt-8 text-every-gold opacity-0 group-hover:opacity-100 transition-opacity text-right font-black text-2xl">
              →
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);