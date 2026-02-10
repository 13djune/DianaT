import React from 'react';

const ManualQuote: React.FC = () => {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <h2 className="text-4xl md:text-6xl font-serif leading-tight relative z-10 text-brand-black">
          Con
          
          {/* 1. ESTILO SUBRAYADOR (LINEA ABAJO) para "humor" */}
          <span className="relative inline-block mx-2">

            <span className="absolute left-0 right-0 -bottom-1 h-[30%] bg-[#d9f99d] -rotate-2 skew-x-3 rounded-sm -z-10 scale-110 opacity-80"></span>
            <span className="relative z-10">humor</span>
          </span>
          
          {' '}y con{' '}

          {/* 2. ESTILO CÍRCULO A MANO para "amor" */}
          <span className="relative inline-block px-4 mx-1">
            {/* El borde imperfecto */}
            <span className="absolute inset-0 border-[8px] md:border-[10px] border-purple-300/70 -z-10 -rotate-3 scale-110 rounded-[95%_35%_98%_30%/35%_90%_36%_95%]"></span>
            <span className="relative z-10">amor</span>
          </span>

          aunque tengas el alma rota y el corazón "partío".
        </h2>
        
        <p className="mt-16 text-sm font-bold uppercase tracking-[0.3em] text-brand-black/40">— Mercedes Chacón</p>
      </div>
    </section>
  );
};

export default ManualQuote;