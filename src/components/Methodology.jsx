import React from 'react';

const steps = [
  { n: "01", title: "Diagnóstico", desc: "Identificamos necesidades y desafíos técnicos." },
  { n: "02", title: "Diseño de Estrategia", desc: "Plan de acción detallado con soluciones a medida." },
  { n: "03", title: "Implementación", desc: "Integración de herramientas con expertos." },
  { n: "04", title: "Capacitación", desc: "Formación de equipos para el uso eficiente." },
  { n: "05", title: "Seguimiento", desc: "Evaluación de impacto y mejora continua." }
];

export const Methodology = () => (
  <section id="metodologia" className="py-24 bg-every-blue text-white px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-16 font-montserrat">
        Nuestra <span className="text-every-gold">Metodología</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((step, i) => (
          <div key={i} className="relative p-6 border border-every-gold/20 rounded-xl hover:bg-every-dark transition group">
            <span className="text-5xl font-black text-every-gold/20 group-hover:text-every-gold transition-colors duration-500">
              {step.n}
            </span>
            <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
            <p className="text-every-gray text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);