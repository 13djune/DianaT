import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-brand-black font-serif font-bold text-xl">D</div>
          <span className="text-2xl font-serif font-bold tracking-tight">DianaT</span>
        </div>
        <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto italic">
          "Humanizamos el proceso. Acompañamos la travesía. Sanamos en comunidad."
        </p>
        <div className="h-px bg-white/10 w-full mb-12" />
        <p className="text-white/30 text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} DianaT Proyecto — Manual No Oficial del Cáncer de Mama
        </p>
      </div>
    </footer>
  );
};

export default Footer;