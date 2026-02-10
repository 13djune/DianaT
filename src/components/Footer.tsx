import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-soft-lilac/60 text-brand-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-12">
        <img 
    src="/logo.png" 
    alt="DianaT Logo" 
    className="h-10 w-auto object-contain" 
  />   
              <span className="text-2xl font-serif font-bold tracking-tight text-brand-black">Diana<span className="text-primary">T</span></span>
              </div>
        <p className="text-brand-black/80 text-lg mb-8 max-w-xl mx-auto italic">
          "Humanizamos el proceso. Acompañamos la travesía. Sanamos en comunidad."
        </p>
        <div className="h-px bg-white/10 w-full mb-12" />
        <p className="text-brand-black/60 text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} DianaT Proyecto sin ánimo de lucro — Mi viaje a través del cáncer de mama.
        </p>
      </div>
    </footer>
  );
};

export default Footer;