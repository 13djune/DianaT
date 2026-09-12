import React from 'react';
import reirImg from '../assets/img/reir.PNG';

const ManualQuote: React.FC = () => {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative flex flex-col md:flex-row items-center gap-12">
        
        {/* Contenedor de la Imagen */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end shrink-0">
          <img 
            src={reirImg} 
            alt="Reír" 
            className="w-48 md:w-64 h-auto object-contain rounded-xl drop-shadow-lg"
          />
        </div>

        {/* Contenedor de la Frase */}
        <div className="w-full md:w-2/3 text-center md:text-left">
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
          
          <p className="mt-12 md:mt-16 text-sm font-bold uppercase tracking-[0.3em] text-brand-black/40">
            — Mercedes Chacón
          </p>
        </div>

      </div>
    </section>
  );
};

export default ManualQuote;