import React from 'react';
import { Instagram, Mic, Mail, ArrowRight, Play } from 'lucide-react';

const ChannelsSection: React.FC = () => {
  return (
    <section id="canales" className="py-32 bg-soft-lilac">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic text-brand-black">Canales de Valor</h2>
          <p className="text-xl text-brand-black/80">Un lugar donde cada espacio tiene su propósito.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="bg-white p-12 rounded-editoral manual-border editorial-shadow hover:-translate-y-2 transition-transform">
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 text-brand-black"><Instagram size={30}/></div>
            <h3 className="text-3xl font-serif font-bold mb-4 text-brand-black">El Pulso</h3>
            <p className=" font-serif text-lg text-brand-black/70 mb-8 leading-relaxed ">
            DianaTinspira            </p>
            <p className="text-lg text-brand-black/70 mb-8 leading-relaxed">
              Inspiración diaria y conexión emocional. El espacio donde el proyecto respira y conversa contigo cada día.
            </p>
            <a href="https://www.instagram.com/dianatcuida/" target="_blank" rel="noreferrer" className="font-bold link-style inline-flex items-center gap-2 text-brand-black">@dianatcuida <ArrowRight size={18}/></a>
          </article>

          <article className="bg-lavender p-12 rounded-editoral manual-border editorial-shadow hover:-translate-y-2 transition-transform">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 text-brand-black"><Mic size={30}/></div>
            <h3 className="text-3xl font-serif font-bold mb-4 text-brand-black">La Profundidad</h3>
            <p className=" font-serif text-lg text-brand-black/70 mb-8 leading-relaxed ">
DianaTinforma            </p>
            <p className="text-lg text-brand-black/70 mb-8 leading-relaxed ">
              Conversaciones con profesionales para comprender la enfermedad con rigor científico y perspectiva humana.
            </p>
            <a href="#" target="_blank" rel="noreferrer" className="font-bold link-style inline-flex items-center gap-2 text-brand-black">Escuchar podcast<Play size={18}/></a>
          </article>

          <article className="bg-white p-12 rounded-editoral manual-border editorial-shadow hover:-translate-y-2 transition-transform">
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 text-brand-black"><Mail size={30}/></div>
            <h3 className="text-3xl font-serif font-bold mb-4 text-brand-black">El Núcleo</h3>
            <p className="font-serif text-lg text-brand-black/70 mb-8 leading-relaxed ">
            DianaTescribe           </p>
            <p className="text-lg text-brand-black/70 mb-8 leading-relaxed">
              Nuestro espacio más íntimo. Reflexiones exclusivas para profundizar en los temas que más nos importan.
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Tu email..." 
                className="w-full bg-transparent border-b-2 border-brand-black py-3 outline-none focus:bg-primary/10 transition-all text-lg italic text-brand-black"
              />
              <button className="w-full bg-brand-black text-white py-4 rounded-full font-bold hover:bg-primary hover:text-brand-black transition-all">Suscríbete a la Newsletter</button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;