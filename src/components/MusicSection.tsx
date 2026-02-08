import React from 'react';
import { Music, Play, Headphones } from 'lucide-react';

const MusicSection: React.FC = () => {
  const playlists = [
    { 
      title: "Lloradita y a seguir", 
      desc: "Para esos días en los que necesitas soltarlo todo. Desahogo emocional.",
      color: "bg-soft-lilac",
      url: "http://googleusercontent.com/spotify.com/7" 
    },
    { 
      title: "Energía Vital", 
      desc: "Para cuando te levantas con fuerza o necesitas un empujón para mover el cuerpo.",
      color: "bg-primary",
      url: "http://googleusercontent.com/spotify.com/8"
    },
    { 
      title: "Calma en el Caos", 
      desc: "Meditación, frecuencias y sonidos suaves para bajar las revoluciones.",
      color: "bg-white",
      url: "http://googleusercontent.com/spotify.com/9"
    }
  ];

  return (
    <section id="musica" className="py-32 bg-brand-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary rounded-full text-brand-black animate-pulse">
                <Music size={24} />
              </div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Banda Sonora Oficial</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold italic text-white">DianaTbaila</h2>
          </div>
          <p className="text-xl text-white/60 max-w-md text-right md:text-left">
            Porque a veces el cuerpo pide movimiento y el alma pide música. Una playlist para cada estado de ánimo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {playlists.map((list, idx) => (
            <div key={idx} className="group relative">
              {/* Efecto decorativo de fondo */}
              <div className="absolute top-4 left-4 right-4 bottom-0 bg-white/10 rounded-t-[40px] rounded-b-[40px] transform group-hover:-translate-y-6 transition-transform duration-500 z-0 flex justify-center pt-4">
                 <div className="w-16 h-16 rounded-full bg-brand-black border-2 border-white/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white/20"></div>
                 </div>
              </div>

              {/* Tarjeta Principal */}
              <div className={`relative z-10 ${list.color} p-8 rounded-[40px] h-full min-h-[400px] flex flex-col justify-between manual-border`}>
                
                {/* Parte Superior: Icono y Textos */}
                <div>
                  <div className="mb-8">
                    <Headphones className="text-brand-black w-10 h-10" />
                  </div>
                  <h3 className="text-4xl font-serif font-bold text-brand-black mb-4 leading-tight">{list.title}</h3>
                  <p className="text-brand-black/70 font-medium leading-relaxed">{list.desc}</p>
                </div>
                
                {/* Parte Inferior: EL ÚNICO ENLACE CLICKEABLE */}
                <div className="mt-8 pt-8 border-t border-brand-black/10">
                  <a 
                    href={list.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 group/link cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    {/* Botón Play Redondo */}
                    <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center text-white group-hover/link:scale-110 transition-transform duration-300 shadow-md">
                      <Play size={16} fill="currentColor" className="ml-0.5" />
                    </div>
                    {/* Texto */}
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-black">
                      Spotify Playlist
                    </span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;