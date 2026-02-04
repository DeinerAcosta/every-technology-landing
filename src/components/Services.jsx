import React from 'react';

const services = [
  { title: "Transformación Digital", desc: "Acompañamiento en el rediseño de procesos internos y cultura organizacional." },
  { title: "Desarrollo Tech", desc: "Creación de soluciones en software y hardware a medida." },
  { title: "Vigilancia Tecnológica", desc: "Monitoreo de tendencias y propiedad intelectual." },
  { title: "Proyectos de Inversión", desc: "Formulación estratégica para financiamiento y escalabilidad." }
];

export const Services = () => (
  <section id="servicios" className="py-24 bg-every-gray/10 px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-montserrat font-extrabold text-every-blue text-center mb-16">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-every-gold hover:-translate-y-2 transition">
            <h3 className="font-bold text-xl text-every-blue mb-4">{s.title}</h3>
            <p className="text-gray-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);