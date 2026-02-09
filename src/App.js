import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';

// Botón de WhatsApp Flotante (Captación eficiente según Brief)
const WhatsAppButton = () => (
  <a 
    href="https://wa.me/573053412485" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-24 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
  >
    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48 2.242 2.242 3.48 5.227 3.48 8.404 0 6.556-5.332 11.888-11.888 11.888-2.016 0-3.991-.513-5.739-1.488l-6.244 1.637zm6.751-3.713c1.574.933 3.12 1.403 4.68 1.403 5.4 0 9.792-4.392 9.792-9.792 0-2.618-1.02-5.081-2.871-6.932-1.851-1.851-4.314-2.871-6.932-2.871-5.4 0-9.792 4.392-9.792 9.792 0 1.734.459 3.438 1.332 4.932l-.991 3.619 3.782-.991z"/>
    </svg>
  </a>
);

// Componente para la página de Inicio (Home)
const Home = () => (
  <>
    <Hero />
    <Services />
    <Methodology />
    
    {/* SECCIÓN CTA: Fondo claro, tipografía imponente y bordes suaves */}
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

    <Contact />
  </>
);

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
            
            {/* Logo en Blanco (Invertido) para contraste con fondo azul */}
            <img 
              src="/logo texto.png" 
              alt="Every Technology Logo" 
              className="h-16 mx-auto mb-12 brightness-0 invert opacity-90" 
            />
            
            <div className="mb-10">
              <p className="font-bold text-white text-2xl uppercase tracking-[0.4em] mb-4">Every Technology SAS</p>
              <p className="text-xl font-light text-every-gray/80">info@everytech.co | +57 3053412485</p>
            </div>

            {/* Redes Sociales del Brief */}
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
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;