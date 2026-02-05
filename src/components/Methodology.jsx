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
  <section id="metodologia" className="py-32 bg-every-blue text-white px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-montserrat font-black text-center mb-20 uppercase tracking-tighter">
        Nuestra <span className="text-every-gold">Metodología</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="group p-12 border border-every-gold/20 rounded-2xl hover:bg-every-dark/50 transition-all duration-500 relative overflow-hidden flex flex-col min-h-[400px] justify-center shadow-2xl"
          >
            {/* Número de paso gigante de fondo */}
            <span className="text-8xl font-black text-every-gold/10 absolute -top-4 -right-4 group-hover:text-every-gold/25 transition-colors duration-500">
              {step.n}
            </span>
            
            <div className="relative z-10">
              <div className="w-12 h-1 bg-every-gold mb-6 group-hover:w-20 transition-all duration-500"></div>
              <h3 className="text-2xl font-bold text-every-gold mb-4 uppercase tracking-wider leading-tight">
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