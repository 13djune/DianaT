import React from 'react';
import { Heart, Users,  HandHeart, HeartHandshake } from 'lucide-react';

const AboutProject: React.FC = () => {
  // 1. LA TRIPULACIÓN (FIJOS)
  // He actualizado a Mercedes como fundadora basándome en el texto.
  const coreTeam = [
    { name: "Mercedes Chacón", role: "Diana y Psicóloga", image: null }, 
    { name: "Dra. Ana López", role: "Asesora Oncológica", image: null },
    { name: "Lucía Pérez", role: "Psicóloga", image: null },
  ];

  // 2. COLABORADORES (ESPORÁDICOS)
  const collaborators = [
    { name: "Asociación Caminar", url: "https://www.asociacioncaminar.org" },
    { name: "Centro de Yoga", url: "https://instagram.com/yogalotus" },
    { name: "Pedro - Fotógrafo", url: "https://pedrofoto.com" }, 
    { name: "Elena - Nutrición", url: "https://elenanutri.com" },
    { name: "Sofía - Diseño", url: "https://behance.net/sofia" },
    { name: "Dra. Ruiz", url: "https://linkedin.com/in/draruiz" },
  ];

  return (
    <section id="proyecto" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* CABECERA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-soft-lilac rounded-full mb-6">
            <Heart className="text-brand-black" size={24} />
          </div>
          <h2 className="text-5xl font-serif font-bold mb-4 text-brand-black italic">El Proyecto</h2>
          <p className="text-brand-black/60 font-medium uppercase tracking-widest text-sm">Historia, Propósito y Equipo</p>
        </div>

        {/* PARTE 1: CARTA DE MERCEDES (Historia Personal) */}
        <div className="prose prose-lg mx-auto text-brand-black/80 font-sans leading-relaxed mb-16">
          <p className="text-2xl font-serif italic text-brand-black mb-8">
            Hola Dianas, soy Mercedes, una de nosotras.
          </p>
          
          <p>
            Nací en Cartagena, me formé como psicóloga en Madrid y me vine a vivir a Barcelona por amor. 
            Sigo casada con el culpable de mi último traslado con el que comparto cuatro hijos además de un despacho de consultoría.
          </p>
          <br></br>
          <p>
            Mi primer cáncer de mama se dejó ver en el mes de febrero del 2012. En aquella ocasión fue cirugía conservadora 
            y “solo” necesité 30 sesiones de radioterapia y 5 años de terapia hormonal. Y digo “solo” porque en esta 
            segunda ocasión, desde mayo 2025, mi nuevo cáncer en el mismo pecho ha necesitado una temible quimioterapia 
            y una mastectomía. Nada que ver, os lo aseguro.
          </p>
          <br></br>

          <p>
            La travesía con esta enfermedad se hace larga. Porque el tratamiento para acabar con el “bicho” machaca tu cuerpo, 
            pero también machaca tu mente. A pesar de considerar que he estado muy bien tratada y acompañada, hay momentos de 
            soledad e incertidumbre donde me he sentido perdida. <strong>Esos momentos son la fuente de inspiración para este proyecto.</strong>
          </p>

        </div>

        {/* PARTE 2: LA MISIÓN */}
        <div className="bg-soft-lilac/40 p-10 md:p-14 rounded-[40px] manual-border editorial-shadow mb-24 relative overflow-hidden">
          <HeartHandshake className="absolute top-8 left-8 text-primary/40 transform -scale-x-100" size={80} />
          <div className="relative z-10 text-center space-y-6">
            <h3 className="text-3xl font-serif font-bold text-brand-black mb-6">Nuestra Propuesta</h3>
            <p className="text-lg text-brand-black/80 leading-relaxed">
              <strong>DIANA</strong> propone un espacio con nombre propio, voz humana y criterio donde la experiencia de paciente se cruza 
              con el conocimiento de los profesionales de la salud para acompañar de forma honesta a quienes atraviesan este proceso.
            </p>
            <p className="text-lg text-brand-black/80 leading-relaxed">
              Pretendemos acompañar a mujeres con cáncer de mama a través de información clara, experiencia real y comunidad, 
              para ayudar a entender cada fase del proceso, reducir el miedo y el sentimiento de soledad.
            </p>
            <p className="text-xl font-bold text-brand-black font-serif italic pt-4">
              Queremos construir un ecosistema de contenido fiable, humano y diferenciado que se convierta en un referente 
              de acompañamiento informado. Una voz fiable y una comunidad sólida que crece desde la confianza, no desde el ruido.
            </p>
          </div>
        </div>

        {/* SEPARADOR */}
        <div className="h-px w-full bg-brand-black/10 mb-20"></div>

        {/* PARTE 3: Equipo Fijo */}
        <div className="mb-24">
          <h3 className="text-3xl font-serif font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Users className="text-primary" /> El Equipo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreTeam.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-32 h-32 mx-auto bg-white rounded-full manual-border flex items-center justify-center mb-4 overflow-hidden group-hover:scale-105 transition-transform shadow-md">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-serif text-4xl text-brand-black">{member.name[0]}</span>
                  )}
                </div>
                <h4 className="text-xl font-bold text-brand-black">{member.name}</h4>
                <p className="text-primary font-bold text-sm uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PARTE 4: COLABORADORES (Esporádicos) */}
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold mb-8 flex items-center justify-center gap-2">
            <HandHeart className="text-primary" size={20} /> Colaboradores
          </h3>
          <p className="text-brand-black/70 mb-8 italic max-w-2xl mx-auto">
            Gracias a quienes aportan su granito de arena, su ciencia o su arte de manera puntual para que este barco siga navegando.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {collaborators.map((collab, idx) => (
              <a 
                key={idx} 
                href={collab.url}
                target="_blank" 
                rel="noreferrer noopener" // Seguridad para enlaces externos
                className="text-lg font-bold text-brand-black/60 hover:text-brand-black transition-colors border-b border-transparent hover:border-primary cursor-pointer"
              >
                {collab.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutProject;