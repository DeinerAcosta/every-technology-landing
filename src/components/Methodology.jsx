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
      
      <h2 className="text-4xl md:text-6xl font-montserrat font-black text-center mb-16 md:mb-24 uppercase tracking-tighter">
        Nuestra <span className="text-every-gold">Metodología</span>
      </h2>
      
      {/* CAMBIO CLAVE: 
          - lg:grid-cols-5 suele ser muy estrecho. 
          - He ajustado los paddings (p-6 en desktop) para ganar espacio horizontal.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="group p-6 md:p-8 border border-every-gold/20 rounded-2xl hover:bg-white/5 transition-all duration-500 relative overflow-hidden flex flex-col min-h-[300px] md:min-h-[400px] shadow-2xl"
          >
            {/* Número de fondo - Ajustado tamaño para no "empujar" el texto */}
            <span className="text-6xl md:text-7xl font-black text-every-gold/10 absolute -top-1 -right-1 group-hover:text-every-gold/20 transition-colors duration-500 pointer-events-none">
              {step.n}
            </span>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Línea decorativa */}
              <div className="w-10 h-1 bg-every-gold mb-6 group-hover:w-16 transition-all duration-500"></div>
              
              {/* AJUSTE DE TÍTULO:
                  - Bajamos a text-lg/text-xl para que frases como "Diseño de estrategia" no se rompan.
                  - min-h-auto para mayor flexibilidad.
              */}
              <h3 className="text-lg md:text-xl font-bold text-every-gold mb-4 uppercase tracking-wider leading-tight break-words">
                {step.title}
              </h3>
              
              <p className="text-every-gray text-sm md:text-base leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);