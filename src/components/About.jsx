import React, { useEffect } from 'react';

export const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const valores = [
    { t: "Innovación", d: "Exploramos nuevas fronteras tecnológicas." },
    { t: "Excelencia", d: "Calidad superior en cada entrega." },
    { t: "Ética", d: "Integridad y transparencia total." },
    { t: "Colaboración", d: "Crecemos junto a nuestros aliados." }
  ];

  return (
    <section className="bg-white pt-20">
      {/* Hero de Quiénes Somos */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-5xl md:text-8xl font-black text-every-blue mb-6 uppercase">
            ¿Quiénes <span className="text-every-gold text-outline">Somos?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            En <span className="font-bold text-every-blue">Every Technology SAS</span>, somos una firma especializada en consultoría e innovación tecnológica, dedicada a convertir desafíos complejos en soluciones estratégicas.
          </p>
        </div>
        <div className="lg:w-1/2 p-10 bg-every-blue rounded-3xl text-white shadow-2xl">
          <p className="text-3xl italic font-serif">"Tu próximo aliado estratégico en innovación y crecimiento digital."</p>
        </div>
      </div>

      {/* Misión y Visión - Responsive (1 col móvil / 2 col PC) */}
      <div className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-every-gold font-bold uppercase tracking-widest text-sm">Nuestra Misión</h2>
            <p className="text-2xl text-every-blue leading-snug">
              Impulsar la transformación de empresas a través de soluciones tecnológicas vanguardistas, acompañándolas en cada etapa de su evolución digital.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-every-gold font-bold uppercase tracking-widest text-sm">Nuestra Visión</h2>
            <p className="text-2xl text-every-blue leading-snug">
              Ser reconocidos globalmente como líderes en consultoría tecnológica, destacando por nuestra capacidad de innovar y generar valor sostenible.
            </p>
          </div>
        </div>
      </div>

      {/* Valores Corporativos */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <h3 className="text-center text-4xl font-black text-every-blue mb-16 uppercase">Valores Corporativos</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {valores.map((v, i) => (
            <div key={i} className="text-center p-8 border border-gray-100 rounded-2xl hover:border-every-gold transition-colors">
              <h4 className="text-every-gold font-bold text-xl mb-2">{v.t}</h4>
              <p className="text-gray-500 text-sm">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};