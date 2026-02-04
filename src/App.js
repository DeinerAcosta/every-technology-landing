import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Partners } from './components/Partners';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';

// Componente de Botón de WhatsApp Flotante
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
      {/* Navegación Principal */}
      <Navbar />
      <Hero />
      <section id="aliados">
        <Partners />
      </section>
      <About />
      <Services />
      <Methodology />

      <section className="py-20 bg-every-blue text-white text-center border-y border-every-gold/20 px-6">
        <h2 className="text-2xl md:text-3xl font-light italic max-w-4xl mx-auto">
          "Haz crecer tu negocio con nuestra experiencia en tecnología e innovación."
        </h2>
      </section>

      {/* Contacto: Formulario y canales directos */}
      <Contact />

      {/* Footer: Información Legal y Créditos */}
      <footer className="bg-every-blue text-every-gray py-10 text-center text-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-bold text-white mb-2 uppercase tracking-widest">Every Technology SAS</p>
          <p>info@everytech.co | +57 3053412485</p>
          <div className="mt-6 text-every-gray/50 text-xs">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Componentes de Utilidad */}
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;