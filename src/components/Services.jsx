import React from 'react';

const services = [
  {
    title: "Consultoría e Innovación Tecnológica",
    desc: "Acompañamiento estratégico en el rediseño de procesos y cultura organizacional para la era digital."
  },
  {
    title: "Estrategia y Modelos de Negocio",
    desc: "Diseño de modelos de negocio disruptivos y planes estratégicos adaptados a las tendencias del mercado."
  },
  {
    title: "Desarrollo Tecnológico a Medida",
    desc: "Creación de soluciones integrales en software y hardware diseñadas para optimizar la eficiencia de tu empresa."
  },
  {
    title: "Investigación y Vigilancia",
    desc: "Monitoreo constante de tendencias tecnológicas y gestión estratégica de propiedad intelectual."
  },
  {
    title: "Formulación de Proyectos",
    desc: "Estructuración técnica y económica de proyectos para la obtención de financiamiento y recursos."
  },
  {
    title: "Seguimiento y Evaluación",
    desc: "Medición de impacto y optimización continua para garantizar el éxito sostenible de cada implementación."
  }
];

export const Services = () => (
  <section id="servicios" className="py-20 md:py-32 bg-gray-50 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      {/* Título adaptable: imponente en desktop, legible en móvil */}
      <h2 className="text-4xl md:text-6xl font-montserrat font-black text-every-blue text-center mb-16 md:mb-24 uppercase tracking-tighter">
        Nuestros <span className="text-every-gold">Servicios</span>
      </h2>

      {/* Grid Responsive: 1 columna móvil, 2 tablet, 3 desktop para acomodar los 6 servicios simétricamente */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {services.map((s, i) => (
          <div 
            key={i} 
            className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border-t-8 border-every-gold hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between group"
          >
            <div>
              {/* Título dinámico */}
              <h3 className="font-bold text-2xl md:text-3xl text-every-blue mb-6 leading-tight min-h-[90px] flex items-center group-hover:text-every-gold transition-colors">
                {s.title}
              </h3>
              
              {/* Línea decorativa animada */}
              <div className="w-16 h-1 bg-every-gold/30 mb-8 group-hover:w-full transition-all duration-500"></div>
              
              {/* Descripción con texto equilibrado */}
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                {s.desc}
              </p>
            </div>

            {/* Indicador visual de acción */}
            <div className="mt-10 text-every-gold opacity-0 group-hover:opacity-100 transition-opacity text-right font-black text-3xl">
              →
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);