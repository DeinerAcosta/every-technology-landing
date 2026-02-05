import React, { useEffect } from 'react';
import { Partners } from './Partners';

export const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="min-h-screen bg-white flex flex-col pt-20">
      <div className="flex-grow flex items-center px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-20">
          
          {/* Texto: Centrado en móvil, izquierda en PC */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-every-blue mb-6 uppercase leading-none tracking-tighter">
              ¿Quiénes <br />
              <span className="text-every-gold">Somos?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 max-w-2xl mx-auto lg:mx-0">
              En <span className="font-bold text-every-blue">Every Technology SAS</span> transformamos la complejidad tecnológica en oportunidades de crecimiento.
            </p>
            <div className="p-8 md:p-12 border-l-4 md:border-l-8 border-every-gold bg-gray-50 rounded-r-3xl text-left">
              <p className="text-2xl md:text-4xl italic text-every-blue font-medium">
                "Tu próximo aliado estratégico en innovación."
              </p>
            </div>
          </div>

          {/* Imagen/Isotipo: Oculto o ajustado en móvil para no estorbar */}
          <div className="w-full lg:w-1/2 flex justify-center relative py-10">
            <img 
              src="/Logo solo.png" 
              className="w-40 md:w-80 opacity-10 absolute animate-pulse" 
              alt="Every"
            />
            <ul className="relative z-10 text-every-blue font-black text-4xl md:text-6xl space-y-4">
              <li className="hover:text-every-gold transition-colors">Innovación</li>
              <li className="hover:text-every-gold transition-colors">Estrategia</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Aliados: Ajuste de escala para que no se corte en celular */}
      <div className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-every-blue/40 font-bold uppercase tracking-widest text-sm mb-12">
            Trayectoria y Confianza
          </h3>
          <div className="scale-90 md:scale-125 overflow-hidden">
            <Partners />
          </div>
        </div>
      </div>
    </section>
  );
};