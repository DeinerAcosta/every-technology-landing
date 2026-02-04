import React from 'react';

export const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-every-blue border-b border-every-gold/20 py-3 px-8 flex justify-between items-center sticky top-0 z-50 shadow-2xl">
      <div 
        onClick={scrollToTop}
        className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
      >
        <img 
          src="/logo texto.png" 
          alt="Every Technology" 
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>

      <div className="hidden md:flex gap-8 items-center text-white text-xs font-montserrat font-bold uppercase tracking-widest">
        <a href="#quienes-somos" className="hover:text-every-gold transition-colors">Quiénes Somos</a>
        <a href="#servicios" className="hover:text-every-gold transition-colors">Servicios</a>
        <a href="#aliados" className="hover:text-every-gold transition-colors">Aliados</a>
        <a href="#metodologia" className="hover:text-every-gold transition-colors">Metodología</a>
        <a 
          href="#contacto" 
          className="bg-every-gold text-every-blue px-6 py-2 rounded-full hover:bg-white transition-all shadow-lg font-bold"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};