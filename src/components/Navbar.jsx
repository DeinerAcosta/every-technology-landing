import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Cambia el fondo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Función para navegación inteligente (Anclas vs Rutas)
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Si no estamos en la Home, navegamos a Home y luego scrolleamos
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si ya estamos en Home, solo hacemos el scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo texto.png" 
            alt="Every Technology Logo" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 font-bold text-[11px] uppercase tracking-[0.2em] text-every-blue">
            <Link to="/" className="hover:text-every-gold transition-colors">Inicio</Link>
            <Link to="/quienes-somos" className="hover:text-every-gold transition-colors">Nosotros</Link>
            
            {/* Link Inteligente: Servicios */}
            <a 
              href="#servicios" 
              onClick={(e) => scrollToSection(e, 'servicios')}
              className="hover:text-every-gold transition-colors"
            >
              Servicios
            </a>
          </div>
          
          {/* Link Inteligente: Contacto */}
          <a 
            href="#contacto" 
            onClick={(e) => scrollToSection(e, 'contacto')}
            className="bg-every-blue text-white px-8 py-3 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-every-gold transition-all shadow-lg hover:shadow-every-gold/20"
          >
            Contacto
          </a>
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-every-blue p-2"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <div 
        className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } md:hidden`}
      >
        <div className="flex flex-col p-8 gap-6 text-center font-bold text-xs uppercase tracking-[0.3em] text-every-blue">
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/quienes-somos" onClick={() => setIsOpen(false)}>Nosotros</Link>
          <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Servicios</a>
          <a 
            href="#contacto" 
            onClick={(e) => scrollToSection(e, 'contacto')}
            className="bg-every-blue text-white py-4 rounded-xl"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};