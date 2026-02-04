import React from 'react';

const services = [
  {
    title: "Transformación Digital",
    desc: "Acompañamiento en el rediseño de procesos internos y cultura organizacional para la era digital."
  },
  {
    title: "Desarrollo Tecnológico",
    desc: "Creación de soluciones a medida en software y hardware, adaptadas a las necesidades de tu negocio."
  },
  {
    title: "Vigilancia Tecnológica",
    desc: "Monitoreo de tendencias y gestión de propiedad intelectual para mantener tu competitividad."
  },
  {
    title: "Proyectos de Inversión",
    desc: "Formulación y estructuración de modelos de negocio para la obtención de financiamiento."
  }
];

export const Services = () => (
  <section id="servicios" className="py-24 bg-every-gray/10 px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-montserrat font-extrabold text-every-blue text-center mb-16 uppercase tracking-wider">
        Nuestros <span className="text-every-gold">Servicios</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-every-gold hover:-translate-y-2 transition-all duration-300">
            <h3 className="font-bold text-xl text-every-blue mb-4 min-h-[56px] flex items-center">{s.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);