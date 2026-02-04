import React from 'react';

export const About = () => (
  <section id="quienes-somos" className="py-24 bg-white px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:row items-center gap-16">
      <div className="md:w-1/2 flex justify-center">
        {/* Usamos el isotipo como elemento decorativo de marca */}
        <img 
          src="/Logo solo.png" 
          alt="Isotipo Every Technology" 
          className="w-48 md:w-64 opacity-20 animate-pulse" 
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-4xl font-montserrat font-extrabold text-every-blue mb-6 uppercase">
          ¿Quiénes <span className="text-every-gold">Somos?</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
          En <span className="font-bold text-every-blue">Every Technology SAS</span> somos especialistas en consultoría e innovación tecnológica. 
          Acompañamos a empresas y emprendedores en su crecimiento y competitividad.
        </p>
        <div className="p-6 border-l-4 border-every-gold bg-every-gray/5">
          <p className="italic text-every-blue font-medium text-xl">
            "Nuestro compromiso es fortalecer tu crecimiento mediante acompañamiento experto."
          </p>
        </div>
      </div>
    </div>
  </section>
);