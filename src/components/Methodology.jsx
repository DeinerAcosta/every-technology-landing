import React from 'react';

const steps = [
  { n: "01", title: "Diagnóstico", desc: "Identificación de necesidades y desafíos críticos." },
  { n: "02", title: "Diseño Estratégico", desc: "Desarrollo de un plan de acción con soluciones a medida." },
  { n: "03", title: "Implementación", desc: "Integración tecnológica con apoyo de profesionales expertos." },
  { n: "04", title: "Capacitación", desc: "Formación de equipos para el uso eficiente de las soluciones." },
  { n: "05", title: "Seguimiento", desc: "Evaluación de impacto y optimización para garantizar el éxito." }
];

export const Methodology = () => (
  <section id="metodologia" className="py-24 bg-every-blue text-white px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-montserrat font-bold text-center mb-16">Nuestra Metodología</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="group p-6 border border-every-gold/20 rounded-xl hover:bg-every-dark transition-colors relative overflow-hidden">
            <span className="text-6xl font-black text-every-gold/10 absolute -top-2 -right-2 group-hover:text-every-gold/30 transition-colors">
              {step.n}
            </span>
            <h3 className="font-bold text-every-gold mb-3 relative z-10">{step.title}</h3>
            <p className="text-every-gray text-xs leading-relaxed relative z-10">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);