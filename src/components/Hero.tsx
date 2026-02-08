import React from 'react';
import { Anchor } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-48 pb-32 bg-soft-lilac relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-serif  leading-[1.1] mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 text-brand-black">
          "Cuando la enfermedad te golpea y te pierdes en el viaje."
        </h1>
        <p className="text-2xl md:text-3xl text-brand-black/80 font-sans italic mb-12 max-w-3xl mx-auto leading-relaxed">
        Te acompañamos en la travesía por el cáncer de mama.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* <button className="bg-brand-black text-white px-12 py-5 rounded-full text-xl font-bold shadow-lg hover:bg-primary hover:text-brand-black transition-all active:scale-95">
            Comenzar el viaje
          </button> */}
          {/* <a href="#travesia" className="flex items-center justify-center gap-3 text-xl font-bold link-style text-brand-black">
            Ver los Puertos <Anchor size={24} />
          </a> */}
        </div>
      </div>
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-lavender/30 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;