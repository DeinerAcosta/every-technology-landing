import React from 'react';

const steps = [
  { 
    n: "01", 
    title: "Diagnóstico", 
    desc: "Identificación de necesidades y desafíos técnicos a abordar para establecer una base sólida." 
  },
  { 
    n: "02", 
    title: "Diseño de estrategia", 
    desc: "Desarrollo de un plan de acción detallado con soluciones tecnológicas diseñadas a tu medida." 
  },
  { 
    n: "03", 
    title: "Implementación", 
    desc: "Integración de herramientas tecnológicas con el apoyo constante de profesionales especializados." 
  },
  { 
    n: "04", 
    title: "Capacitación", 
    desc: "Formación de equipos internos para asegurar el uso eficiente y la optimización de las soluciones." 
  },
  { 
    n: "05", 
    title: "Seguimiento", 
    desc: "Evaluación de impacto y ajustes estratégicos continuos para garantizar el éxito del proyecto." 
  }
];

export const Methodology = () => (
  <section id="metodologia" className="py-20 md:py-32 bg-every-blue text-white px-6 md:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Título Responsive: text-4xl en móvil, text-6xl en desktop */}
      <h2 className="text-4xl md:text-6xl font-montserrat font-black text-center mb-16 md:mb-24 uppercase tracking-tighter">
        Nuestra <span className="text-every-gold">Metodología</span>
      </h2>
      
      {/* Grid: 1 columna en móvil, 3 en tablets, 5 en desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="group p-8 md:p-12 border border-every-gold/20 rounded-2xl hover:bg-every-dark/50 transition-all duration-500 relative overflow-hidden flex flex-col min-h-[320px] md:min-h-[450px] justify-center shadow-2xl"
          >
            {/* Número de paso gigante de fondo - Ajustado para no estorbar en móvil */}
            <span className="text-7xl md:text-8xl font-black text-every-gold/10 absolute -top-2 -right-2 group-hover:text-every-gold/25 transition-colors duration-500 pointer-events-none">
              {step.n}
            </span>
            
            <div className="relative z-10">
              {/* Línea decorativa */}
              <div className="w-12 h-1 bg-every-gold mb-6 group-hover:w-20 transition-all duration-500"></div>
              
              <h3 className="text-xl md:text-2xl font-bold text-every-gold mb-4 uppercase tracking-wider leading-tight">
                {step.title}
              </h3>
              
              <p className="text-every-gray text-base md:text-lg leading-relaxed font-light opacity-80">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);