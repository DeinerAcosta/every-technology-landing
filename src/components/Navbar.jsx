// src/components/Navbar.jsx
import React from 'react';

export const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-every-blue border-b border-every-gold/20 py-4 px-8 flex justify-between items-center sticky top-0 z-50 shadow-2xl">
      {/* Título/Logo con función de volver al inicio */}
      <div 
        onClick={scrollToTop}
        className="flex items-center cursor-pointer group"
      >
        <span className="text-white font-montserrat font-bold text-xl uppercase tracking-tighter group-hover:text-every-gold transition-colors">
          EVERY <span className="text-every-gold ml-1">technology</span>
        </span>
      </div>

      {/* Menú de Navegación */}
      <div className="hidden md:flex gap-8 items-center text-white text-xs font-bold uppercase tracking-widest">
        <a href="#servicios" className="hover:text-every-gold transition-colors">Servicios</a>
        <a href="#aliados" className="hover:text-every-gold transition-colors">Aliados</a>
        <a href="#metodologia" className="hover:text-every-gold transition-colors">Metodología</a>
        <a href="#contacto" className="bg-every-gold text-every-blue px-5 py-2 rounded-full hover:bg-white transition-all shadow-lg">
          Contacto
        </a>
      </div>
    </nav>
  );
};