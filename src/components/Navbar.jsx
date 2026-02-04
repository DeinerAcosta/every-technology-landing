import React from 'react';

export const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-every-blue border-b border-every-gold/20 py-3 px-8 flex justify-between items-center sticky top-0 z-50 shadow-2xl">
      {/* Logo con función de volver al inicio */}
      <div 
        onClick={scrollToTop}
        className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
      >
        {/* Usamos el logo oficial según el Manual de Marca */}
        <img 
          src="/logo texto.png" 
          alt="Every Technology Logo" 
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>

      {/* Menú de Navegación completo según el Brief */}
      <div className="hidden md:flex gap-8 items-center text-white text-xs font-montserrat font-bold uppercase tracking-widest">
        <a href="#quienes-somos" className="hover:text-every-gold transition-colors">Quiénes Somos</a>
        <a href="#servicios" className="hover:text-every-gold transition-colors">Servicios</a>
        <a href="#aliados" className="hover:text-every-gold transition-colors">Aliados</a>
        <a href="#metodologia" className="hover:text-every-gold transition-colors">Metodología</a>
        
        <a 
          href="#contacto" 
          className="bg-every-gold text-every-blue px-6 py-2 rounded-full hover:bg-white transition-all shadow-lg transform hover:scale-105 active:scale-95"
        >
          Contacto
        </a>
      </div>

      {/* Menú Hamburguesa para Móviles (Opcional visual) */}
      <div className="md:hidden text-every-gold">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </nav>
  );
};