import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-every-blue border-b border-every-gold/20 py-4 px-8 flex justify-between items-center sticky top-0 z-50 shadow-2xl">
      {/* Contenedor del Logo: Aumentado para mejor visibilidad */}
      <Link to="/" className="flex items-center cursor-pointer hover:scale-105 transition-transform">
        <img 
          src="/logo texto.png" 
          alt="Every Technology SAS" 
          className="h-12 md:h-16 w-auto object-contain brightness-110" 
        />
      </Link>

      {/* Menú de Navegación */}
      <div className="hidden md:flex gap-10 items-center text-white text-sm font-montserrat font-bold uppercase tracking-widest">
        {/* Enlace a la página independiente */}
        <Link 
          to="/quienes-somos" 
          className="hover:text-every-gold transition-colors border-b-2 border-transparent hover:border-every-gold py-1"
        >
          Quiénes Somos
        </Link>
        
        {/* Enlaces con ancla a la página principal */}
        <a href="/#servicios" className="hover:text-every-gold transition-colors">Servicios</a>
        <a href="/#metodologia" className="hover:text-every-gold transition-colors">Metodología</a>
        
        {/* Botón de Contacto destacado */}
        <Link 
          to="/" 
          className="bg-every-gold text-every-blue px-8 py-3 rounded-full hover:bg-white transition-all shadow-lg transform active:scale-95"
        >
          Contacto
        </Link>
      </div>

      {/* Indicador para móviles */}
      <div className="md:hidden text-every-gold">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </nav>
  );
};