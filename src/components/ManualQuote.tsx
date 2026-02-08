import React from 'react';

const ManualQuote: React.FC = () => {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight italic relative z-10 text-brand-black">
          "Con humor y con amor aunque tengas el alma rota y el corazón 'partío'"
        </h2>
        <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-brand-black/40">— Mercedes Chacón</p>
      </div>
    </section>
  );
};

export default ManualQuote;