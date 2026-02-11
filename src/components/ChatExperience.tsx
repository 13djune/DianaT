import React, { useState } from 'react';
// IMPORTANTE: Asegúrate de que la ruta es correcta.
import { getEmpatheticMessage } from '../geminiService';
import { Sparkles } from 'lucide-react';

const ChatExperience: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string>(''); // Tipado explícito para evitar dudas
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!query) return;
    setLoading(true);
    const msg = await getEmpatheticMessage(query);
    setResponse(msg);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleConsult();
    }
  };

  // --- NUEVA FUNCIÓN MÁGICA ---
  // Esta función divide el texto por las comillas y pone en negrita las partes impares
  const formatResponse = (text: string) => {
    if (!text) return null;

    // Dividimos el texto usando las comillas dobles como separador
    const parts = text.split('"');

    return parts.map((part, index) => {
      // Si el índice es impar (1, 3, 5...), significa que estaba ENTRE comillas
      if (index % 2 === 1) {
        return (
          <span key={index} className="font-bold not-italic text-[#5f52a6]">
            "{part}"
          </span>
        );
      }
      // Si es par, es texto normal
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section className="py-32 bg-soft-lilac/30">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-4 italic text-brand-black">El Lugar Seguro</h2>
          <p className="text-lg text-brand-black/70 italic">Dinos cómo te sientes hoy.</p>
        </div>
        
        <div className="space-y-6">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="¿Qué hay en tu corazón hoy?"
            className="w-full bg-transparent px-8 py-6 rounded-full border-2 border-brand-black focus:bg-primary/10 outline-none text-xl font-medium transition-all text-center text-brand-black"
          />
          <button 
            onClick={handleConsult}
            disabled={loading}
            className="bg-brand-black text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-primary hover:text-brand-black transition-all shadow-xl cursor-pointer"
          >
            {loading ? 'Sintiendo...' : 'Consultar a Diana'}
          </button>
          
          {response && (
            <div className="mt-12 p-10 bg-white rounded-[32px] manual-border editorial-shadow animate-in zoom-in-95 duration-500">
              {/* AQUÍ USAMOS LA FUNCIÓN EN LUGAR DE {response} DIRECTAMENTE */}
              <p className="text-2xl font-serif italic text-brand-black leading-relaxed">
                {formatResponse(response)}
              </p>
              
              <div className="mt-6 flex justify-center items-center gap-2">
                <Sparkles className="text-primary" size={24}/>
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