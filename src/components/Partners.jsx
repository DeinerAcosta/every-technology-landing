import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Importar estilos necesarios
import 'swiper/css';

export const Partners = () => {
  // Asegúrate de que estos nombres coincidan con tus archivos en la carpeta public
  const partnersLogos = [
    'aliado1.png', 
    'aliado2.png', 
    'aliado3.png', 
    'aliado4.png',
    'aliado5.png',
    'aliado6.png'
  ];

  return (
    <section className="py-16 bg-white border-y border-every-gray/20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-every-blue/40 font-montserrat font-bold uppercase tracking-[0.25em] text-xs mb-12">
          Nuestros Aliados Estratégicos
        </p>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={60} // Más espacio entre logos grandes
          slidesPerView={2}
          loop={true}
          speed={1000} // Transición suave de 1 segundo
          autoplay={{
            delay: 2000, // Gira cada 3 segundos
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }, // Menos logos visibles para que se vean más grandes
          }}
          className="flex items-center"
        >
          {partnersLogos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="flex items-center justify-center h-32 w-full"> 
                {/* Aumentamos la altura del contenedor a h-32 para logos más grandes */}
                <img 
                  src={`/${logo}`} 
                  alt={`Aliado Every Technology ${index + 1}`}
                  className="h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500 transform hover:scale-110" 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};