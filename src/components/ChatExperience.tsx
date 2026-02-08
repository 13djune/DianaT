import React, { useState } from 'react';
// IMPORTANTE: Asegúrate de que la ruta es correcta.
import { getEmpatheticMessage } from '../geminiService';

const ChatExperience: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!query) return;
    setLoading(true);
    const msg = await getEmpatheticMessage(query);
    setResponse(msg);
    setLoading(false);
  };

  // Función para detectar la tecla Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleConsult();
    }
  };

  return (
    <section className="py-32 bg-soft-lilac/30">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 italic text-brand-black">El Lugar Seguro</h2>
          <p className="text-lg text-brand-black/70 italic">Dinos cómo te sientes hoy.</p>
        </div>
        
        <div className="space-y-6">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            // AQUI ESTÁ EL CAMBIO: Detectamos el Enter
            onKeyDown={handleKeyDown}
            placeholder="¿Qué hay en tu corazón hoy?"
            className="w-full bg-transparent px-8 py-6 rounded-full border-2 border-brand-black focus:bg-primary/10 outline-none text-xl font-medium transition-all text-center text-brand-black"
          />
          <button 
            onClick={handleConsult}
            disabled={loading}
            className="bg-brand-black text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-primary hover:text-brand-black transition-all shadow-xl"
          >
            {loading ? 'Sintiendo...' : 'Consultar a Diana'}
          </button>
          
          {response && (
            <div className="mt-12 p-10 bg-white rounded-[32px] manual-border editorial-shadow animate-in zoom-in-95 duration-500">
              <p className="text-2xl font-serif italic text-brand-black leading-relaxed">"{response}"</p>
              <div className="mt-6 flex justify-center items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary" />
                <span className="text-sm font-bold uppercase tracking-widest text-brand-black">Diana</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChatExperience;