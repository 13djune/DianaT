"use client";

import React, { useState } from 'react';
import { Compass, HeartPulse, Sprout, CalendarCheck, X } from 'lucide-react';
import buscandoImg from '../assets/img/buscando.PNG'; // Ajusta la ruta relativa según donde esté tu componente
const TravesiaSection: React.FC = () => {
  const [selectedEtapa, setSelectedEtapa] = useState<number | null>(null);

  const etapas = [
    { 
      title: "Diagnóstico", 
      desc: "El impacto, las pruebas y la búsqueda de claridad.", 
      icon: <Compass className="w-6 h-6" />,
      modalContent: (
        <div className="space-y-8 text-left text-brand-black/80">
          <p className="text-3xl font-serif font-bold text-brand-black">DIAGNÓSTICO</p>
          
          {/* Layout optimizado: apilado en móvil, columnas en escritorio */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 space-y-6">
              <p className="text-lg leading-relaxed">
                Aquí empieza todo, queridas Dianas. Un día cualquiera de un año de tu vida. En una <strong>revisión rutinaria</strong>, en una visita de control o seguimiento, porque tu amiga ha insistido en que te hagas una <strong>mamografía</strong> o porque te has notado un <strong>bultito en el pecho</strong>, entras en este club al que nadie quiere afiliarse.
              </p>
              <p className="leading-relaxed">
                Yo no he sido capaz de notarme ningún bulto ni en el primer cáncer ni en el segundo. Por lo visto, tener las <strong>mamas densas</strong> complica la <strong>detección precoz</strong>. Dicen que el problema para detectar el cáncer es que no duele, pero a mí me dolió. Está claro que hay que <strong>escuchar al cuerpo</strong> cuando algo cambia por muy insignificante que nos parezca. Con devoción. Sin obsesión.
              </p>
            </div>
            
            {/* Imagen: centrada y con tamaño controlado para que no estorbe */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <img 
                src={buscandoImg}
                alt="Chica buscando con una lupa" 
                className="w-48 lg:w-full h-auto object-contain" 
              />
            </div>
          </div>
      
          <div className="space-y-4">
            <p className="leading-relaxed">
              El diagnóstico del cáncer de mama implica varios aspectos clave que pueden ayudar a <strong>detectarlo de forma temprana</strong> y a planificar el mejor tratamiento. Aquí os dejamos algunas claves:
            </p>
            <p className="font-medium text-brand-black">
              🔍 Trabajemos unidos para conseguir una <strong>detección temprana</strong>. Porque cuanto antes detectemos el cáncer, mejoraremos el pronóstico:
            </p>
            <p>
              <strong>Autoexplórate tus tetas</strong>: si eres capaz de notar cambios (bultos, retracción del pezón, cambios en la piel), díselo a tu médico.
            </p>
          </div>

       

{/* AQUÍ COMIENZA EL BLOQUE DE LA AUTOEXPLORACIÓN SIN EL FONDO GRIS QUE ESTRECHA */}
<div className="space-y-6">
            <div className="p-0">
              <p className="font-bold text-brand-black text-lg mb-2">🕒 ¿Cuándo hacer la autoexploración?</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Una vez al mes.</li>
                <li>Lo ideal es 5–7 días después de la menstruación, cuando el pecho está menos sensible.</li>
                <li>Si no menstruas, elige un mismo día cada mes (por ejemplo, el día 1).</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-brand-black text-xl mb-4">👀 ¿Cómo hacerla?</p>
              
              {/* Pasos con línea lateral (sin cajas) para que no se estrechen */}
              <div className="space-y-8">
                <div className="relative pl-6 border-l-4 border-pink-300">
                  <p className="font-bold text-brand-black text-lg mb-3">Paso 1: Observación frente al espejo</p>
                  <p className="mb-2">Colócate de pie frente a un espejo y fíjate en:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-black/90">
                    <li>Forma y tamaño de las mamas</li>
                    <li>Cambios en la piel (enrojecimiento, hoyuelos, arrugas)</li>
                    <li>Pezones (si están retraídos o han cambiado)</li>
                  </ul>
                  <p className="mb-2">Hazlo en tres posiciones:</p>
                  <ul className="list-disc pl-5 space-y-1 text-brand-black/90">
                    <li>Brazos relajados</li>
                    <li>Brazos levantados</li>
                    <li>Manos en la cintura haciendo presión</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-4 border-pink-400">
                  <p className="font-bold text-brand-black text-lg mb-3">✋ Paso 2: Palpación de pie (en la ducha)</p>
                  <p className="mb-2">Con la piel mojada es más fácil:</p>
                  <ul className="list-disc pl-5 space-y-1 text-brand-black/90">
                    <li>Usa las yemas de los dedos (no las puntas)</li>
                    <li>Realiza movimientos circulares pequeños</li>
                    <li>Sigue un patrón (círculos, líneas o de arriba abajo)</li>
                    <li>Explora toda la mama y la axila</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-4 border-pink-500">
                  <p className="font-bold text-brand-black text-lg mb-3">🛏️ Paso 3: Palpación acostada</p>
                  <ul className="list-disc pl-5 space-y-1 text-brand-black/90">
                    <li>Acuéstate y coloca un brazo detrás de la cabeza</li>
                    <li>Con la otra mano, examina la mama opuesta</li>
                    <li>Presiona con diferentes niveles de profundidad (suave, media, profunda)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Aviso de síntomas (sin caja estrecha) */}
            <div className="bg-red-50 p-5 rounded-2xl border border-red-100 shadow-sm mt-6">
              <p className="font-bold text-red-700 text-lg mb-2">⚠️ ¿Qué debes buscar?</p>
              <p className="text-red-700/90 mb-3">Consulta a un profesional si notas:</p>
              <ul className="list-disc pl-5 space-y-1 text-red-700/90">
                <li>Bultos o endurecimientos nuevos (en la mama o en la axila)</li>
                <li>Cambios en tamaño o forma</li>
                <li>Dolor localizado persistente</li>
                <li>Secreción por el pezón</li>
                <li>Cambios en la piel (como “piel de naranja”)</li>
              </ul>
            </div>
          </div>
          {/* AQUÍ TERMINA EL BLOQUE DE LA AUTOEXPLORACIÓN */}

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <p className="font-bold text-xl mb-2 text-blue-900">🩺 Importante</p>
            <p className="text-blue-800/80">La autoexploración ayuda a detectar cambios, pero no diagnostica enfermedades como el cáncer de mama. Por eso es clave complementarla con revisiones médicas periódicas.</p>
            <p className="mt-3 font-bold text-blue-900">Haz caso a tu médico: hazte la mamografía cuando toque. NO LO DEJES PASAR. Es la principal prueba de cribado; detecta lesiones antes incluso de notarlas.</p>
          </div>

      

          <p>
            En España, las recomendaciones sobre revisión mamaria provienen principalmente del Ministerio de Sanidad y sociedades científicas como la Sociedad Española de Oncología Médica o la Sociedad Española de Radiología Médica. Aquí tienes un resumen, basado en sus guías y el programa oficial de cribado:
          </p>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <p className="font-bold text-lg text-brand-black">🏥 Programa del Sistema Nacional de Salud</p>
              <p className="mt-2">Según el Ministerio de Sanidad de España:</p>
              <ul className="mt-2 space-y-1">
                <li>👩 50–69 años</li>
                <li>✔️ Mamografía cada 2 años</li>
                <li>✔️ Programa poblacional gratuito (te citan por carta en algunos lugares)</li>
              </ul>
              <p className="mt-2">👉 Este es el estándar oficial en España porque ha demostrado reducir la mortalidad.</p>
            </div>

            <div>
              <p className="font-bold text-lg text-brand-black mb-3">🧠 Recomendaciones de sociedades médicas</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="font-semibold text-brand-black">🩺 Sociedad Española de Oncología Médica</p>
                  <ul className="mt-2 space-y-1 text-sm md:text-base">
                    <li>✔️ Mamografía cada 2 años en mujeres 50–69 años</li>
                    <li>⚖️ Entre 40–49 años: beneficio menos claro → decisión individual</li>
                    <li>❓ &gt;70 años: no hay evidencia suficiente → individualizar</li>
                    <li>⚠️ Alto riesgo: seguimiento específico (antes y más frecuente)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="font-semibold text-brand-black">📡 Sociedad Española de Radiología Médica</p>
                  <ul className="mt-2 space-y-1 text-sm md:text-base">
                    <li>🔽 Propone adelantar el cribado a los 40 años</li>
                    <li>Basado en nuevas evidencias y aumento de casos en mujeres jóvenes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold text-lg text-brand-black">📊 Resumen práctico por edad</p>
              <div className="grid gap-3 mt-3">
                <div className="border border-gray-100 p-4 rounded-lg bg-white shadow-sm">
                  <p className="font-semibold">👩 &lt;40 años</p>
                  <ul className="mt-2 space-y-1">
                    <li>❌ No cribado rutinario</li>
                    <li>✔️ Exploración clínica si hay síntomas</li>
                    <li>✔️ Pruebas solo si hay riesgo o hallazgos</li>
                  </ul>
                </div>
                
                <div className="border border-gray-100 p-4 rounded-lg bg-white shadow-sm">
                  <p className="font-semibold">👩 40–49 años</p>
                  <p>⚖️ Zona “gris”</p>
                  <p className="mt-2">Opciones:</p>
                  <ul className="mt-1 space-y-1">
                    <li>No hacer cribado sistemático (criterio clásico SEOM)</li>
                    <li>O iniciar mamografía (criterio más reciente SERAM / tendencia europea)</li>
                  </ul>
                  <p className="mt-2">👉 Decisión compartida con el médico</p>
                </div>
                
                <div className="border-2 border-brand-black p-4 rounded-lg bg-gray-50">
                  <p className="font-bold">👩 50–69 años (clave)</p>
                  <p className="mt-1">✅ Mamografía cada 2 años (recomendación fuerte y oficial)</p>
                </div>
                
                <div className="border border-gray-100 p-4 rounded-lg bg-white shadow-sm">
                  <p className="font-semibold">👩 70+ años</p>
                  <p className="mt-1">🤝 Individualizar según salud y esperanza de vida</p>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
              <p className="font-bold text-orange-800 mb-1">⚠️ Mujeres con alto riesgo</p>
              <p className="text-sm text-orange-900/80 mb-2">(Según SEOM y práctica clínica en España)</p>
              <p>Inicio antes de los 40 años</p>
              <ul className="mt-2 space-y-1">
                <li>✔️ Mamografía + resonancia magnética</li>
                <li>✔️ Controles más frecuentes</li>
              </ul>
              <p className="mt-2">👉 Ejemplo: mutaciones genéticas, antecedentes familiares directos, radioterapia previa.</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
              <p className="font-bold text-purple-900">🔍 Tendencia actual (importante)</p>
              <p className="mt-1">Europa y algunas sociedades españolas están planteando:</p>
              <ul className="mt-2 space-y-1">
                <li>📉 Empezar a los 45 o incluso 40 años</li>
                <li>📈 Ampliar hasta los 74 años</li>
              </ul>
              <p className="mt-2">👉 Pero esto aún no está totalmente implementado en todo el sistema público.</p>
            </div>

            <div className="bg-green-50 p-5 rounded-xl border border-green-100">
              <p className="font-bold text-green-900">🧠 Conclusión clara</p>
              <ul className="mt-2 space-y-1">
                <li>✔️ Oficial en España: 50–69 años cada 2 años</li>
                <li>⚖️ Antes de los 50: depende del riesgo y criterio médico</li>
                <li>📈 Tendencia: empezar antes (40–45), pero aún en debate</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mt-1">📻</div>
                <div>
                  <p className="font-bold text-brand-black">Ecografía mamaria:</p>
                  <p className="text-sm text-brand-black/80 mt-1">complementa la mamografía, especialmente en mamas densas.</p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mt-1">🧲</div>
                <div>
                  <p className="font-bold text-brand-black">Resonancia magnética (RM):</p>
                  <p className="text-sm text-brand-black/80 mt-1">se usa en casos específicos (alto riesgo o dudas diagnósticas).</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50/70 p-6 rounded-2xl border border-pink-100/60 mt-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🧪</span>
                <p className="font-serif text-2xl font-bold text-brand-black">Confirmación diagnóstica</p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 font-bold mt-0.5">•</span>
                  <p className="text-brand-black/90"><strong className="text-brand-black">Biopsia (clave):</strong> única forma de confirmar el diagnóstico.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 font-bold mt-0.5">•</span>
                  <p className="text-brand-black/90">Puede ser con aguja gruesa (la más común).</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 font-bold mt-0.5">•</span>
                  <p className="text-brand-black/90">Analiza el tejido para saber si es maligno o benigno.</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      )
    },
    { 
      title: "Tratamiento", 
      desc: "La hoja de ruta personalizada.", 
      icon: <HeartPulse className="w-6 h-6" />,
      modalContent: <p className="text-brand-black/80">Contenido en construcción...</p>
    },
    { 
      title: "Recuperación", 
      desc: "Reconstruyendo el cuerpo y la mente.", 
      icon: <Sprout className="w-6 h-6" />,
      modalContent: <p className="text-brand-black/80">Contenido en construcción...</p>
    },
    { 
      title: "Seguimiento", 
      desc: "Vivir con conciencia plena y nuevos horizontes.", 
      icon: <CalendarCheck className="w-6 h-6" />,
      modalContent: <p className="text-brand-black/80">Contenido en construcción...</p>
    }
  ];

  // Deshabilitar scroll del body cuando el modal está abierto
  React.useEffect(() => {
    if (selectedEtapa !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedEtapa]);

  return (
    <section id="travesia" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic text-brand-black">Las Etapas del Camino</h2>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-0.5 bg-brand-black/10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {etapas.map((etapa, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedEtapa(idx)}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-20 h-20 bg-white rounded-full border border-brand-black/20 flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-all duration-500 transform group-hover:-translate-y-2 shadow-sm text-brand-black">
                  {etapa.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-brand-black">{etapa.title}</h3>
                <p className="text-sm text-brand-black/60 leading-relaxed px-2">{etapa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedEtapa !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-brand-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedEtapa(null)}
          />
          
          {/* Modal Content Box */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-brand-black">
                  {etapas[selectedEtapa].icon}
                </div>
                <h3 className="text-3xl font-serif font-bold text-brand-black">
                  {etapas[selectedEtapa].title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedEtapa(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-brand-black"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto overscroll-contain">
              {etapas[selectedEtapa].modalContent}
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
};

export default TravesiaSection;