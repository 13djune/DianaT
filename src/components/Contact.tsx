import React, { useState } from 'react';
import { Instagram, ChevronDown, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  // Estado para saber si el formulario se ha enviado
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Función auxiliar para codificar los datos para Netlify
  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  // La función que maneja el envío
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 1. EVITA QUE LA PÁGINA SE RECARGUE (Adiós error 404)
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contacto-dianat", ...data }),
    })
      .then(() => setFormStatus('success'))
      .catch((error) => {
        console.error(error);
        setFormStatus('error');
      });
  };

  return (
    <section id="contacto" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-6xl md:text-7xl font-serif font-bold mb-8 leading-tight italic text-brand-black">DianaTescucha</h2>
            <p className="text-2xl text-brand-black/80 mb-12 italic leading-relaxed">
              Escríbenos, estamos aquí para ayudarte.
            </p>
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-lavender rounded-2xl manual-border text-brand-black"><Instagram /></div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-black/40">Comunidad</p>
                  <a href="https://www.instagram.com/dianatcuida/" target="_blank" rel="noreferrer" className="text-2xl font-bold link-style text-brand-black">@dianatcuida</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* ZONA DEL FORMULARIO */}
          <div className="bg-soft-lilac/30 p-12 rounded-editoral manual-border editorial-shadow min-h-[500px] flex flex-col justify-center">
            
            {/* Si ya se envió correctamente, mostramos mensaje de GRACIAS */}
            {formStatus === 'success' ? (
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-black">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-brand-black mb-4">¡Mensaje Recibido!</h3>
                <p className="text-lg text-brand-black/70 mb-8">
                  Gracias por escribirnos. Te responderemos lo antes posible.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')} 
                  className="text-sm font-bold uppercase tracking-widest border-b border-brand-black pb-1 hover:text-primary transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              /* Si no, mostramos el formulario normal */
              <form 
                name="contacto-dianat" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit} // AQUI ESTÁ LA CLAVE
              >
                {/* Input oculto obligatorio */}
                <input type="hidden" name="form-name" value="contacto-dianat" />

                <div className="space-y-8">
                  
                  <div className="relative">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 block mb-2">Nombre Completo</label>
                    <input type="text" name="nombre" required className="w-full bg-transparent border-b-2 border-brand-black py-3 outline-none focus:bg-primary/10 text-xl font-serif italic transition-all text-brand-black" placeholder="Cómo quieres que te llamemos..." />
                  </div>

                  <div className="relative">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 block mb-2">Email de contacto</label>
                    <input type="email" name="email" required className="w-full bg-transparent border-b-2 border-brand-black py-3 outline-none focus:bg-primary/10 text-xl font-serif italic transition-all text-brand-black" placeholder="tu@email.com" />
                  </div>

                  <div className="relative text-brand-black">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 block mb-2">¿Sobre qué quieres hablar?</label>
                    <div className="relative">
                      <select name="asunto" defaultValue="" className="w-full bg-transparent border-b-2 border-brand-black py-3 pr-10 outline-none focus:bg-primary/10 text-xl font-serif italic transition-all appearance-none cursor-pointer text-brand-black">
                        <option value="" disabled>Selecciona un tema...</option>
                        <option value="manual">Duda sobre el Manual</option>
                        <option value="soporte">Soporte Emocional</option>
                        <option value="talleres">Talleres y Noticias</option>
                        <option value="colaboracion">Colaboración</option>
                        <option value="otros">Otras consultas</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown size={20} className="text-brand-black/50" />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 block mb-2">Cuéntanos tu historia o duda</label>
                    <textarea name="mensaje" rows={4} required className="w-full bg-transparent border-b-2 border-brand-black py-3 outline-none focus:bg-primary/10 text-xl font-serif italic transition-all resize-none text-brand-black" placeholder="Escribe con total libertad..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-brand-black text-white py-6 rounded-full font-bold text-xl hover:bg-primary hover:text-brand-black transition-all shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-wait"
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                  
                  {formStatus === 'error' && (
                    <p className="text-red-500 text-sm text-center font-bold">Hubo un error al enviar. Por favor inténtalo de nuevo.</p>
                  )}
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;