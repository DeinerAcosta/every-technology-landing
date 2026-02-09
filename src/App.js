import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';

// Componente para la página de Inicio (Home)
const Home = () => {
  return (
    <>
      <div id="inicio">
        <Hero />
      </div>
      <div id="servicios">
        <Services />
      </div>
      <Methodology />
      
      {/* SECCIÓN CTA */}
      <section className="py-32 bg-gray-50 text-every-blue text-center border-y border-gray-100 px-8">
        <h2 className="text-3xl md:text-5xl font-montserrat font-light italic max-w-5xl mx-auto leading-tight">
          "Haz crecer tu negocio con nuestra experiencia en tecnología e innovación."
        </h2>
        <div className="mt-10">
          <a href="#contacto" className="bg-every-blue text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-every-gold transition-colors shadow-lg">
            Trabajemos juntos
          </a>
        </div>
      </section>

      <div id="contacto">
        <Contact />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-montserrat scroll-smooth">
        <Navbar />
        
        <Routes>
          {/* Ruta Principal: Home */}
          <Route path="/" element={<Home />} />
          
          {/* Ruta Independiente: Quiénes Somos */}
          <Route path="/quienes-somos" element={<About />} />
        </Routes>

        {/* FOOTER: Identidad visual completa */}
        <footer className="bg-every-blue text-every-gray py-24 text-center text-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            
            {/* Logo en Blanco */}
            <Link to="/">
              <img 
                src="/logo texto.png" 
                alt="Every Technology Logo" 
                className="h-16 mx-auto mb-12 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
              />
            </Link>
            
            <div className="mb-10">
              <p className="font-bold text-white text-2xl uppercase tracking-[0.4em] mb-4">Every Technology SAS</p>
              <p className="text-xl font-light text-every-gray/80">info@everytech.co | +57 3053412485</p>
            </div>

            {/* Redes Sociales */}
            <div className="flex justify-center gap-10 mb-12">
              <a href="#" className="text-white hover:text-every-gold transition-colors font-bold uppercase tracking-[0.2em] text-xs">LinkedIn</a>
              <a href="#" className="text-white hover:text-every-gold transition-colors font-bold uppercase tracking-[0.2em] text-xs">Facebook</a>
            </div>

            <div className="pt-10 border-t border-white/10 text-every-gray/40 text-[10px] tracking-[0.5em] uppercase font-medium">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </div>
          </div>
        </footer>

        {/* Utilidades de Navegación */}
        <ScrollToTop />
        {/* El botón de WhatsApp ha sido eliminado satisfactoriamente */}
      </div>
    </Router>
  );
}

export default App;