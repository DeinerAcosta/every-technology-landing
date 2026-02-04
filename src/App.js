import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';

// Componente de Botón de WhatsApp Flotante (Captación eficiente según el Brief)
const WhatsAppButton = () => (
  <a 
    href="https://wa.me/573053412485" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-24 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
    title="Chatea con nosotros"
  >
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48 2.242 2.242 3.48 5.227 3.48 8.404 0 6.556-5.332 11.888-11.888 11.888-2.016 0-3.991-.513-5.739-1.488l-6.244 1.637zm6.751-3.713c1.574.933 3.12 1.403 4.68 1.403 5.4 0 9.792-4.392 9.792-9.792 0-2.618-1.02-5.081-2.871-6.932-1.851-1.851-4.314-2.871-6.932-2.871-5.4 0-9.792 4.392-9.792 9.792 0 1.734.459 3.438 1.332 4.932l-.991 3.619 3.782-.991z"/>
    </svg>
  </a>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-montserrat scroll-smooth">
      {/* Navegación con Logo Texto */}
      <Navbar />
      
      {/* Inicio con Video y Eslogan Oficial */}
      <Hero />
      
      {/* Sección Quiénes Somos + Aliados Estratégicos */}
      {/* Nota: En el nuevo diseño, Partners se invoca dentro de About para mayor impacto */}
      <About />

      {/* Servicios: Los 4 pilares tecnológicos */}
      <Services />

      {/* Metodología: Los 5 pasos de implementación */}
      <Methodology />

      {/* Frase de Cierre (Llamado a la Acción) */}
      <section className="py-24 bg-every-blue text-white text-center border-y border-every-gold/20 px-8">
        <h2 className="text-3xl md:text-5xl font-light italic max-w-5xl mx-auto leading-tight">
          "Haz crecer tu negocio con nuestra experiencia en tecnología e innovación."
        </h2>
      </section>

      {/* Formulario de Contacto */}
      <Contact />

      {/* Footer: Identidad Corporativa y Redes Sociales */}
      <footer className="bg-every-blue text-every-gray py-16 text-center text-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Logo negativo (blanco) para contraste */}
          <img 
            src="/logo texto.png" 
            alt="Logo Every Technology" 
            className="h-10 mx-auto mb-10 brightness-0 invert opacity-90" 
          />
          
          <div className="space-y-3 mb-10">
            <p className="font-bold text-white text-lg uppercase tracking-[0.3em]">Every Technology SAS</p>
            <p className="text-every-gray/70 text-base font-light">
              info@everytech.co | +57 3053412485
            </p>
          </div>

          {/* Enlaces de Redes Sociales sugeridos en el Brief */}
          <div className="flex justify-center gap-10 mb-10">
            <a href="#" className="text-white hover:text-every-gold transition-colors font-bold uppercase tracking-widest text-xs">
              LinkedIn
            </a>
            <a href="#" className="text-white hover:text-every-gold transition-colors font-bold uppercase tracking-widest text-xs">
              Facebook
            </a>
          </div>

          {/* Copyright y Leyes */}
          <div className="pt-10 border-t border-white/10 text-every-gray/40 text-[10px] uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Utilidades de Interfaz */}
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;