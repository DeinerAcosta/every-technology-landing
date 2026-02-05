// src/components/About.jsx
import React from 'react';
import { Partners } from './Partners';

export const About = () => {
  return (
    <section id="quienes-somos" className="min-h-screen bg-white flex flex-col">
      {/* CONTENIDO PRINCIPAL: QUIÉNES SOMOS */}
      <div className="flex-grow flex flex-col justify-center px-8 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-6xl md:text-8xl font-montserrat font-black text-every-blue mb-10 uppercase tracking-tighter leading-none">
              ¿Quiénes <br />
              <span className="text-every-gold">Somos?</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light mb-10">
              En <span className="font-bold text-every-blue border-b-4 border-every-gold">Every Technology SAS</span> no solo somos consultores; somos tu próximo aliado estratégico. 
            </p>
            <div className="p-12 border-l-8 border-every-gold bg-every-gray/5 rounded-r-3xl shadow-sm">
              <p className="text-3xl md:text-4xl italic text-every-blue font-medium leading-tight">
                "Transformamos la complejidad tecnológica en oportunidades de crecimiento real."
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center items-center relative">
            {/* Logo Isotipo Gigante de Fondo */}
            <img 
              src="/Logo solo.png" 
              alt="Identidad Every" 
              className="w-full max-w-lg opacity-5 absolute animate-pulse pointer-events-none" 
            />
            <div className="relative z-10 text-center">
              <p className="text-every-gold font-montserrat uppercase tracking-[0.5em] text-sm mb-6 font-bold">Expertos en</p>
              <ul className="text-every-blue font-black text-4xl md:text-6xl space-y-6">
                <li className="hover:scale-105 transition-transform cursor-default underline decoration-every-gold/30">Innovación</li>
                <li className="hover:scale-105 transition-transform cursor-default underline decoration-every-gold/30">Digitalización</li>
                <li className="hover:scale-105 transition-transform cursor-default underline decoration-every-gold/30">Estrategia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN DE ALIADOS INTEGRADA (Logos más grandes) */}
      <div className="bg-every-gray/10 py-24 border-y border-every-gold/10">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-center text-every-blue font-montserrat font-black uppercase tracking-[0.3em] text-lg mb-20 opacity-40">
            Empresas que confían en nuestra trayectoria
          </h3>
          {/* Llamamos a Partners con logos aumentados */}
          <div className="scale-125 md:scale-150 transform transition-all">
            <Partners />
          </div>
        </div>
      </div>
    </section>
  );
};