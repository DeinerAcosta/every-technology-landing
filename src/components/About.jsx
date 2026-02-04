import React from 'react';

export const About = () => (
  <section id="quienes-somos" className="py-24 bg-white px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-montserrat font-extrabold text-every-blue mb-6 uppercase tracking-tight">
          ¿Quiénes <span className="text-every-gold">Somos?</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
          En <span className="font-bold text-every-blue">Every Technology SAS</span> somos especialistas en consultoría e innovación tecnológica. 
          Nos posicionamos como tu aliado estratégico para transformar ideas en soluciones reales.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed font-light">
          Acompañamos a empresas y emprendedores en su crecimiento y competitividad a través de la digitalización, 
          el desarrollo tecnológico y la estructuración de proyectos de inversión con impacto real.
        </p>
      </div>
      <div className="md:w-1/2 bg-every-gray/20 rounded-2xl p-8 border-r-8 border-every-gold">
        <h3 className="text-every-blue font-bold text-xl mb-4 italic">"Nuestro compromiso es fortalecer tu crecimiento mediante acompañamiento experto."</h3>
      </div>
    </div>
  </section>
);