import React from 'react';
import { Link } from 'react-router-dom'; // Importante para la navegación interna
import { Stethoscope, ArrowRight, Plus } from 'lucide-react';

const AgendaSection: React.FC = () => {
  // Estos datos simulan tu "base de datos" de noticias
  const items = [
    { 
      id: "protocolos-radioterapia", // ID para la URL
      title: "Nuevos protocolos en radioterapia", 
      type: "Noticia", 
      date: "Hoy" 
    },
    { 
      id: "taller-autocuidado",
      title: "Taller: Autocuidado y Nutrición", 
      type: "Taller", 
      date: "15 Oct" 
    },
    { 
      id: "circulo-palabra",
      title: "Círculo de Palabra: Encuentro", 
      type: "Comunidad", 
      date: "22 Oct" 
    }
  ];

  return (
    <section id="agenda" className="py-32 bg-white border-t border-brand-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* COLUMNA IZQUIERDA: Intro y Detalle */}
          <div>
            <h2 className="text-5xl font-serif font-bold mb-8 italic text-brand-black">DianaTinforma</h2>
            <p className="text-xl text-brand-black/70 leading-relaxed mb-10">
              Agenda y actualidad. Un filtro de rigor para que tengas el criterio necesario en cada puerto, sin ruido ni bulos.
            </p>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-soft-lilac rounded-full text-brand-black shrink-0">
                <Stethoscope size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-brand-black">Criterio científico y humano</h4>
                <p className="text-sm text-brand-black/60 mt-1">
                  Todo nuestro contenido está revisado por oncólogos y psicooncólogos.
                </p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Lista de noticias */}
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-6">
              {items.map((item) => (
                <Link 
                  key={item.id} 
                  to={`/noticia/${item.id}`} // Navegación a la página de detalle
                  className="block p-8 manual-border rounded-editoral hover:bg-soft-lilac/30 transition-all group bg-white relative top-0 hover:-top-1"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">{item.type}</span>
                      <h3 className="text-2xl font-serif font-bold text-brand-black group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="text-right flex items-center gap-4 text-brand-black/40 group-hover:text-brand-black transition-colors">
                      <span className="font-bold text-lg hidden sm:block">{item.date}</span>
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Botón VER MÁS */}
            <div className="mt-8 text-right">
              <Link 
                to="/noticias" // Navegación a la página de listado completo
                className="inline-flex items-center gap-2 text-brand-black font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
              >
                <Plus size={16} />
                Ver todas las noticias
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgendaSection;