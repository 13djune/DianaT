import React from 'react';
import { Mail, Instagram, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-6xl md:text-7xl font-serif font-bold mb-8 leading-tight italic text-brand-black">DianaTescucha</h2>
            <p className="text-2xl text-brand-black/80 mb-12 italic leading-relaxed">
              "Escríbenos aunque tengas el alma rota y el corazón partío. Estamos aquí para sostener el viaje contigo."
            </p>
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-primary rounded-2xl manual-border text-brand-black"><Mail /></div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-black/40">Email Directo</p>
                  <a href="mailto:hola@dianat.es" className="text-2xl font-bold link-style text-brand-black">hola@dianat.es</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-4 bg-lavender rounded-2xl manual-border text-brand-black"><Instagram /></div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-black/40">Comunidad</p>
                  <a href="https://www.instagram.com/dianatcuida/" target="_blank" className="text-2xl font-bold link-style text-brand-black">@dianatcuida</a>
                </div>
              </div>
            </div>
          </div>
          
          <form className="bg-soft-lilac/30 p-12 rounded-editoral manual-border editorial-shadow">
            <div className="space-y-10">
              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 block mb-2">Nombre Completo</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-brand-black py-3 outline-none focus:bg-primary/10 text-xl font-serif italic transition-all text-brand-black" placeholder="Cómo quieres que te llamemos..." />
              </div>
              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 block mb-2">Email de contacto</label>
                <input type="email" className="w-full bg-transparent border-b-2 border-brand-black py-3 outline-none focus:bg-primary/10 text-xl font-serif italic transition-all text-brand-black" placeholder="tu@email.com" />
              </div>
              <div className="relative text-brand-black">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 block mb-2">¿Sobre qué quieres hablar?</label>
                <div className="relative">
                <select 
                  defaultValue="" 
                  className="w-full bg-transparent border-b-2 border-brand-black py-3 pr-10 outline-none focus:bg-primary/10 text-xl font-serif italic transition-all appearance-none cursor-pointer text-brand-black"
                >
                  <option value="" disabled>Selecciona un tema...</option>
                  <option value="manual">Duda sobre el Manual</option>
                  <option value="soporte">Soporte Emocional</option>
                  <option value="talleres">Talleres y Noticias</option>
                  <option value="colaboracion">Colaboración</option>
                  <option value="otros">Otras consultas</option>
                </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown size={20} className="text-brand-black/50" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 block mb-2">Cuéntanos tu historia o duda</label>
                <textarea rows={4} className="w-full bg-transparent border-b-2 border-brand-black py-3 outline-none focus:bg-primary/10 text-xl font-serif italic transition-all resize-none text-brand-black" placeholder="Escribe con total libertad..."></textarea>
              </div>
              <button className="w-full bg-brand-black text-white py-6 rounded-full font-bold text-xl hover:bg-primary hover:text-brand-black transition-all shadow-lg">
                Enviar mensaje con confianza
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;