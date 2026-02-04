import React from 'react';

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-every-blue text-white px-8">
      <div className="max-w-4xl mx-auto bg-every-dark p-10 rounded-2xl shadow-2xl border border-every-gold/20">
        <h2 className="text-3xl font-montserrat font-bold text-center mb-8 italic">
          "Haz crecer tu negocio con nuestra experiencia"
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 font-montserrat">
          <input type="text" placeholder="Nombre completo" className="bg-white/10 border border-gray-500 p-4 rounded focus:border-every-gold outline-none" required />
          <input type="email" placeholder="Correo corporativo" className="bg-white/10 border border-gray-500 p-4 rounded focus:border-every-gold outline-none" required />
          <input type="tel" placeholder="WhatsApp / Teléfono" className="bg-white/10 border border-gray-500 p-4 rounded focus:border-every-gold outline-none" required />
          <select className="bg-white/10 border border-gray-500 p-4 rounded text-gray-400 focus:border-every-gold outline-none">
            <option className="bg-every-blue">Consultoría Digital</option>
            <option className="bg-every-blue">Desarrollo de Software</option>
            <option className="bg-every-blue">Proyectos de Inversión</option>
          </select>
          <textarea placeholder="Cuéntanos tu idea" className="md:col-span-2 bg-white/10 border border-gray-500 p-4 rounded h-32 focus:border-every-gold outline-none"></textarea>
          <button className="md:col-span-2 bg-every-gold text-every-blue font-black py-4 rounded hover:bg-white transition-all uppercase">
            Enviar mensaje
          </button>
        </form>
        <div className="mt-8 text-center text-every-gray text-sm">
          <p>O escríbenos directamente a: <span className="text-every-gold">info@everytech.co</span></p>
        </div>
      </div>
    </section>
  );
};