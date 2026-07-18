import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, ArrowRight, Sparkles, ArrowUpDown } from 'lucide-react';
import { newslettersData } from '../data/newslettersData';

const NewsletterArchive: React.FC = () => {
  // Estado para controlar el orden ('desc' = más nuevas primero, 'asc' = más antiguas primero)
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  // Filtramos las que no estén ocultas y las ordenamos según el estado.
  const visibleNewsletters = newslettersData
    .filter(n => n.isPublished !== false)
    .sort((a, b) => {
      return sortOrder === 'desc' 
        ? Number(b.id) - Number(a.id) 
        : Number(a.id) - Number(b.id);
    });

  return (
    <main className="min-h-screen bg-soft-lilac py-20 selection:bg-primary/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Navegación Superior */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 font-bold text-brand-black/60 hover:text-brand-black transition-colors mb-16 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          Volver al refugio
        </Link>

        {/* Cabecera Editorial */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
            <Sparkles size={120} className="text-primary" />
          </div>
          <div className="w-24 h-24 bg-white rounded-editoral flex items-center justify-center mx-auto mb-8 text-brand-black manual-border editorial-shadow relative z-10">
            <Mail size={40} strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic text-brand-black relative z-10">
            Cartas en el tiempo
          </h1>
          <p className="text-2xl font-serif text-brand-black/70 italic mb-6">DianaTescribe</p>
          <p className="text-lg text-brand-black/80 max-w-2xl mx-auto leading-relaxed">
            Un espacio donde recopilamos nuestras reflexiones más íntimas. Todo lo que hemos compartido, guardado con cariño para que lo leas cuando lo necesites.
          </p>
        </div>

        {/* Controles de Filtro / Ordenación */}
        <div className="flex justify-end mb-8">
          <button 
            onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
            className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-white manual-border rounded-full font-bold text-brand-black text-sm uppercase tracking-widest hover:bg-brand-black hover:text-white transition-colors editorial-shadow"
          >
            <ArrowUpDown size={18} />
            {sortOrder === 'desc' ? 'Más recientes primero' : 'Más antiguas primero'}
          </button>
        </div>

        {/* Grid de Newsletters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleNewsletters.map((newsletter) => (
            <Link 
              to={`/post/${newsletter.id}`} 
              key={newsletter.id} 
              className="bg-white rounded-editoral manual-border editorial-shadow hover:-translate-y-2 transition-all flex flex-col group cursor-pointer overflow-hidden block"
            >
              {/* Contenido de la tarjeta */}
              <div className="p-8 flex flex-col flex-1">
                <div className="inline-block px-4 py-1.5 bg-lavender rounded-full text-brand-black font-bold text-xs tracking-widest uppercase mb-6 manual-border w-fit">
                  {newsletter.tag}
                </div>
                <h2 className="text-2xl font-serif font-bold mb-4 text-brand-black group-hover:text-primary transition-colors leading-tight">
                  {newsletter.title}
                </h2>
                <p className="text-brand-black/70 leading-relaxed text-base italic mb-8 flex-1">
                  "{newsletter.excerpt}"
                </p>
                
                {/* Botón inferior simulado */}
                <div className="flex items-center justify-between pt-6 border-t border-brand-black/10 mt-auto">
                  <span className="font-bold text-sm text-brand-black/50 group-hover:text-brand-black transition-colors uppercase tracking-widest">
                    Leer carta
                  </span>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-soft-lilac rounded-full text-brand-black group-hover:bg-brand-black group-hover:text-white transition-all manual-border">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
};

export default NewsletterArchive;