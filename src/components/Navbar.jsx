import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-every-blue border-b border-every-gold/20 sticky top-0 z-50 shadow-2xl font-montserrat">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        
        {/* Logo: Adaptable en tamaño */}
        <Link to="/" className="flex items-center hover:scale-105 transition-transform">
          <img 
            src="/logo texto.png" 
            alt="Every Technology SAS" 
            className="h-10 md:h-16 w-auto object-contain brightness-110" 
          />
        </Link>

        {/* Menú Desktop: Oculto en móviles */}
        <div className="hidden md:flex gap-8 lg:gap-12 items-center text-white text-xs lg:text-sm font-bold uppercase tracking-widest">
          <Link to="/quienes-somos" className="hover:text-every-gold transition-colors border-b-2 border-transparent hover:border-every-gold py-1">
            Quiénes Somos
          </Link>
          <a href="/#servicios" className="hover:text-every-gold transition-colors">Servicios</a>
          <a href="/#metodologia" className="hover:text-every-gold transition-colors">Metodología</a>
          <Link 
            to="/" 
            className="bg-every-gold text-every-blue px-6 lg:px-8 py-3 rounded-full hover:bg-white transition-all shadow-lg text-center"
          >
            AGENDA UNA CONSULTA
          </Link>
        </div>

        {/* Botón Hamburguesa: Solo móvil */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-every-gold focus:outline-none">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-every-blue border-t border-every-gold/10 px-6 py-8 transition-all duration-300`}>
        <div className="flex flex-col gap-6 text-white text-sm font-bold uppercase tracking-widest">
          <Link to="/quienes-somos" onClick={toggleMenu} className="hover:text-every-gold">Quiénes Somos</Link>
          <a href="/#servicios" onClick={toggleMenu} className="hover:text-every-gold">Servicios</a>
          <a href="/#metodologia" onClick={toggleMenu} className="hover:text-every-gold">Metodología</a>
          <Link 
            to="/" 
            onClick={toggleMenu}
            className="bg-every-gold text-every-blue px-6 py-4 rounded-xl text-center shadow-lg"
          >
            AGENDA UNA CONSULTA
          </Link>
        </div>
      </div>
    </nav>
  );
};