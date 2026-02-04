import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Services } from './components/Services';
import { Contact } from './components/Contact'; // El formulario que creamos antes
import { ScrollToTop } from './components/ScrollToTop';
import { Methodology } from './components/Methodology';

function App() {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Contact />
      <ScrollToTop />
      <Methodology />
      <section className="py-20 bg-every-blue text-white text-center">
        <h2 className="text-3xl font-bold mb-4 italic">"Haz crecer tu negocio con nuestra experiencia"</h2>
      </section>
      <Contact />
      <footer className="bg-every-blue text-every-gray py-8 text-center text-sm">
        <p>info@everytech.co | +57 3053412485</p>
        <p className="mt-2">Every Technology SAS © 2024</p>
      </footer>
    </div>
  );
}

export default App;