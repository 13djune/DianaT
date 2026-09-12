import React from 'react';
import { Heart, Users, HandHeart, HeartHandshake } from 'lucide-react';
import abrazoImg from '../assets/img/abrazo.PNG'; 

const AboutProject: React.FC = () => {
  // 1. EL EQUIPO (FIJOS)
  const coreTeam = [
    { name: "Mercedes Chacón", role: "Diana y Psicóloga", image: null }, 
    { name: "Dra. Ana López", role: "Asesora Oncológica", image: null },
    { name: "Lucía Pérez", role: "Psicóloga", image: null },
  ];

  // 2. COLABORADORES (ESPORÁDICOS)
  const collaborators = [
    { name: "Asociación Caminar", url: "" },
    { name: "Thayri - Diseñadora", url: "" },
    { name: "Belén - Diseñadora Web", url: "https://www.linkedin.com/in/belen-castillo-chacon" }, 
  ];

  return (
    <section id="proyecto" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        
        {/* CABECERA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-soft-lilac rounded-full mb-6">
            <Heart className="text-brand-black" size={24} />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-brand-black italic">El Proyecto</h2>
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
          <HeartHandshake 
            className="absolute top-4 left-4 md:top-8 md:left-8 text-primary/40 transform -scale-x-100 w-16 h-16 md:w-20 md:h-20" 
          />
          
          <div className="relative z-10 text-center space-y-6">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-black mb-6">Nuestra Propuesta</h3>
            <p className="text-lg text-brand-black/80 leading-relaxed">
              <strong>DIANA</strong> propone un espacio con nombre propio, voz humana y criterio donde la experiencia de paciente se cruza 
              con el conocimiento de los profesionales de la salud para acompañar de forma honesta a quienes atraviesan este proceso.
            </p>
            <p className="text-lg text-brand-black/80 leading-relaxed">
              Pretendemos acompañar a mujeres con cáncer de mama a través de información clara, experiencia real y comunidad, 
              para ayudar a entender cada fase del proceso, reducir el miedo y el sentimiento de soledad.
            </p>
            
            {/* TEXTO A LA IZQUIERDA E IMAGEN A LA DERECHA */}
            <div className="flex flex-col md:flex-row items-center md:text-left gap-8 pt-6">
              <p className="text-xl font-bold text-brand-black font-serif italic flex-1">
                Queremos construir un ecosistema de contenido fiable, humano y diferenciado que se convierta en un referente 
                de acompañamiento informado. Una voz fiable y una comunidad sólida que crece desde la confianza, no desde el ruido.
              </p>
              
              <div className="flex-shrink-0 flex justify-center md:justify-end">
                <img 
                  src={abrazoImg} 
                  alt="Abrazo y comunidad" 
                  className="w-32 md:w-48 h-auto object-contain brightness-0 mix-blend-multiply"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutProject;