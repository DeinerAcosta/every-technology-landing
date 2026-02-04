import React from 'react';
import { Partners } from './Partners'; // Importamos los aliados para integrarlos aquí

export const About = () => {
  return (
    <section id="quienes-somos" className="min-h-screen bg-white flex flex-col justify-center">
      {/* BLOQUE PRINCIPAL QUIÉNES SOMOS */}
      <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-montserrat font-black text-every-blue mb-8 uppercase tracking-tighter">
            ¿Quiénes <span className="text-every-gold">Somos?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-8">
            En <span className="font-bold text-every-blue">Every Technology SAS</span> no solo somos consultores; somos tu próximo <span className="text-every-gold font-bold">aliado estratégico</span>. 
          </p>
          <div className="p-10 border-l-8 border-every-gold bg-every-gray/5 rounded-r-2xl">
            <p className="text-2xl md:text-3xl italic text-every-blue font-medium leading-snug">
              "Transformamos la complejidad tecnológica en oportunidades de crecimiento real para empresas y emprendedores."
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center items-center relative">
          {/* Logo Isotipo en grande de fondo */}
          <img 
            src="/Logo solo.png" 
            alt="Identidad Every" 
            className="w-full max-w-md opacity-10 absolute animate-pulse" 
          />
          <div className="relative z-10 text-center">
            <p className="text-gray-500 font-montserrat uppercase tracking-[0.3em] text-sm mb-4">Especialistas en</p>
            <ul className="text-every-blue font-bold text-2xl md:text-4xl space-y-4">
              <li>• Innovación</li>
              <li>• Digitalización</li>
              <li>• Estrategia</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BLOQUE DE ALIADOS INTEGRADO (Más grande) */}
      <div className="bg-every-gray/5 py-20 border-y border-every-gold/10">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-center text-every-blue/40 font-montserrat font-bold uppercase tracking-[0.4em] text-sm mb-16">
            Empresas que confían en nuestra trayectoria
          </h3>
          <Partners size="large" /> {/* Pasamos un prop para logos más grandes */}
        </div>
      </div>
    </section>
  );
};