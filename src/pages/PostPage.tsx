import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { newslettersData } from '../data/newslettersData';

const PostPage: React.FC = () => {
  const { id } = useParams();
  const post = newslettersData.find((n) => n.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FBF5FA] flex flex-col items-center justify-center font-serif text-2xl text-brand-black">
        <p className="mb-6">Esta carta no existe o no ha sido encontrada.</p>
        <Link to="/archivo-newsletters" className="text-lg font-bold link-style inline-flex items-center gap-2">
          <ArrowLeft size={18}/> Volver al archivo
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-primary/30 relative">
      
      {/* NAVEGACIÓN SUPERIOR OCULTA/FLOTANTE */}
      <div className="absolute top-6 left-6 z-50">
        <Link 
          to="/archivo-newsletters" 
          className="inline-flex items-center gap-2 font-bold text-brand-black/60 hover:text-brand-black transition-colors"
        >
          <ArrowLeft size={20} /> Volver al archivo
        </Link>
      </div>

      {/* BLOQUE 1: INTRODUCCIÓN (Fondo Rosa Suave) */}
      <section className="bg-[#FBF5FA] pt-24 pb-16 px-6 border-b-[4px] border-black">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* ESPACIO PARA IMAGEN (PNG sin bordes) */}
          <div className="mb-12 flex justify-center">
            {/* Sustituye la ruta del src por la tuya cuando la tengas lista */}
            <div className="w-32 h-32 flex items-center justify-center">
               <img src="/tu-imagen.png" alt="" className="object-contain" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-brand-black uppercase leading-tight mb-2 tracking-tight">
            {post.title}
          </h1>
          {post.subtitle && (
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black uppercase leading-tight mb-10">
              {post.subtitle}
            </h2>
          )}
          
          <div className="mt-8 text-brand-black text-center">
            {post.intro}
          </div>
        </div>
      </section>

      {/* BLOQUE 2: DIANA HABLA (Fondo Lila Suave) */}
      <section className="bg-[#E4DEEF] py-20 px-6 border-b-[4px] border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold italic text-brand-black mb-2 tracking-tight">
            Diana habla
          </h2>
          <h3 className="text-2xl md:text-3xl italic text-brand-black mb-12">
            (por no callar)
          </h3>
          
          <div className="text-brand-black">
            {post.diana}
          </div>
        </div>
      </section>

      {/* BLOQUE 3: LOS EXPERTOS DICEN (Fondo Verde Suave) */}
      <section className="bg-[#EAF7B7] py-20 px-6 border-b-[4px] border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold italic text-brand-black mb-12 tracking-tight">
            Los expertos dicen
          </h2>
          <div className="text-brand-black">
            {post.expertos}
          </div>
        </div>
      </section>

      {/* BLOQUE 4: REFLEXIONANDO (Fondo Rosa/Morado Claro) */}
      <section className="bg-[#F4E9F9] py-20 px-6 border-b-[4px] border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold italic text-brand-black mb-12 tracking-tight">
            Reflexionando
          </h2>
          <div className="text-brand-black">
            {post.reflexionando}
          </div>
        </div>
      </section>

      {/* BLOQUE 5: RECOMENDACIONES Y FOOTER (Fondo Rosa/Morado Claro) */}
      <section className="bg-[#F4E9F9] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-16 tracking-tight">
            Recomendaciones:
          </h2>
          
          {/* GRID DE COLUMNAS PARA RECOMENDACIONES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-20">
            {post.recomendaciones?.map((rec, index) => (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  {rec.title}
                </h3>
                <p className="text-lg text-brand-black mb-8 leading-relaxed">
                  {rec.text}
                </p>
                <a 
                  href={rec.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto border-[3px] border-black rounded-[2rem] px-8 py-3 text-lg font-bold text-brand-black hover:bg-black hover:text-white transition-colors"
                >
                  Más info
                </a>
              </div>
            ))}
          </div>

          {/* FOOTER DESPEDIDA */}
          <p className="text-xl font-bold text-brand-black mt-12">
            Gracias por estar aquí 🤍
          </p>
        </div>
      </section>

    </main>
  );
};

export default PostPage;