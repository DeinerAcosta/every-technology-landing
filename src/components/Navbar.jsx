import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-every-blue border-b border-every-gold/20 py-3 px-8 flex justify-between items-center sticky top-0 z-50 shadow-2xl">
      <Link to="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
        <img src="/logo texto.png" alt="Every Technology" className="h-10 md:h-12 w-auto object-contain" />
      </Link>

      <div className="hidden md:flex gap-8 items-center text-white text-xs font-montserrat font-bold uppercase tracking-widest">
        {/* Aquí es donde enviamos a la otra "pestaña" o ruta */}
        <Link to="/quienes-somos" className="hover:text-every-gold transition-colors">Quiénes Somos</Link>
        
        <a href="/#servicios" className="hover:text-every-gold transition-colors">Servicios</a>
        <a href="/#metodologia" className="hover:text-every-gold transition-colors">Metodología</a>
        <Link to="/" className="bg-every-gold text-every-blue px-6 py-2 rounded-full hover:bg-white transition-all shadow-lg font-bold">
          Contacto
        </Link>
      </div>
    </nav>
  );
};