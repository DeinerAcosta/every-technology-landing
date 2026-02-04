import React from 'react';

export const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Video de Fondo */}
    <video 
      autoPlay 
      loop 
      muted 
      className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-40 grayscale"
    >
      <source src="/tech-video.mp4" type="video/mp4" />
      Tu navegador no soporta videos.
    </video>

    {/* Contenido sobre el video */}
    <div className="relative z-30 text-center px-6">
      <h1 className="font-montserrat font-extrabold text-5xl md:text-7xl text-white mb-6 leading-tight">
        Innovamos contigo.<br/>
        <span className="text-every-gold italic">Transformamos ideas.</span>
      </h1>
      <p className="text-every-gray text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-light">
        Consultoría e innovación tecnológica para empresas y emprendedores en su proceso de transformación digital.
      </p>
      <a href="#contacto" className="bg-every-gold text-every-blue font-black px-12 py-5 rounded-full text-lg hover:bg-white transition-all shadow-2xl">
        TRABAJEMOS JUNTOS
      </a>
    </div>
    
    {/* Overlay para oscurecer el video y que se lea el texto */}
    <div className="absolute z-20 w-full h-full bg-every-blue/70"></div>
  </section>
);