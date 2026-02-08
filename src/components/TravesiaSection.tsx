import React from 'react';
import { Compass, Activity, Zap, ShieldCheck, Star, Anchor } from 'lucide-react';

const TravesiaSection: React.FC = () => {
  const etapas = [
    { title: "Diagnóstico", desc: "El impacto, las pruebas y la búsqueda de claridad.", icon: <Compass className="w-6 h-6" /> },
    { title: "Tratamiento", desc: "Diseñando la hoja de ruta médica personalizada.", icon: <Activity className="w-6 h-6" /> },
    { title: "Quimio", desc: "Navegando por los ciclos con humor y con amor.", icon: <Zap className="w-6 h-6" /> },
    { title: "Cirugía", desc: "El puerto de la intervención y la sanación física.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Recuperación", desc: "Reconstruyendo el cuerpo y el ánimo.", icon: <Star className="w-6 h-6" /> },
    { title: "Seguimiento", desc: "Vivir con conciencia plena y nuevos horizontes.", icon: <Anchor className="w-6 h-6" /> }
  ];

  return (
    <section id="travesia" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic text-brand-black">Los Puertos del Viaje</h2>
          <p className="text-xl text-brand-black/70 max-w-2xl mx-auto leading-relaxed">
            Un ecosistema de contenido fiable para dar estructura a lo que parece no tenerla.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-0.5 bg-brand-black/10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 relative z-10">
            {etapas.map((etapa, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-full manual-border flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500 transform group-hover:-translate-y-2 shadow-sm text-brand-black">
                  {etapa.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-brand-black">{etapa.title}</h3>
                <p className="text-sm text-brand-black/60 leading-relaxed px-2">{etapa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravesiaSection;