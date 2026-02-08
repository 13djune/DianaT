import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // Hooks para saber dónde estamos

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Nos dice en qué URL estamos

  // Función auxiliar: Si no estamos en la Home ('/'), añade una barra '/' antes del ancla
  // para asegurar que volvemos a la portada.
  const getLink = (anchor: string) => {
    return location.pathname === '/' ? anchor : `/${anchor}`;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-soft-lilac/90 backdrop-blur-md border-b border-brand-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-24 items-center">
          {/* LOGO: Siempre lleva al inicio usando Link */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full manual-border flex items-center justify-center font-serif text-xl group-hover:bg-primary transition-colors bg-white">D</div>
            <span className="text-2xl font-serif font-bold tracking-tight text-brand-black">Diana<span className="text-primary">T</span></span>
          </Link>
          
          {/* MENÚ DE ESCRITORIO */}
          <nav className="hidden md:flex items-center space-x-12" aria-label="Menú principal">
            <a href={getLink("#proyecto")} className="text-brand-black font-semibold link-style cursor-pointer">El Proyecto</a>
            <a href={getLink("#travesia")} className="text-brand-black font-semibold link-style cursor-pointer">La Travesía</a>
            <a href={getLink("#canales")} className="text-brand-black font-semibold link-style cursor-pointer">Canales</a>
            {/* <a href={getLink("#agenda")} className="text-brand-black font-semibold link-style cursor-pointer">Agenda</a> */}
            <a href={getLink("#contacto")} className="bg-brand-black text-white px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-brand-black transition-all">Contacto</a>
          </nav>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-brand-black" aria-label="Menú">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-brand-black/10 px-6 py-10 space-y-8 flex flex-col items-center shadow-2xl animate-in slide-in-from-top-5">
            <a href={getLink("#proyecto")} onClick={() => setIsOpen(false)} className="text-3xl font-serif font-bold text-brand-black">El Proyecto</a>
          <a href={getLink("#travesia")} onClick={() => setIsOpen(false)} className="text-3xl font-serif font-bold text-brand-black">La Travesía</a>
          <a href={getLink("#canales")} onClick={() => setIsOpen(false)} className="text-3xl font-serif font-bold text-brand-black">Canales</a>
          {/* <a href={getLink("#agenda")} onClick={() => setIsOpen(false)} className="text-3xl font-serif font-bold text-brand-black">Agenda</a> */}
          <a href={getLink("#contacto")} onClick={() => setIsOpen(false)} className="w-full text-center bg-primary text-brand-black py-5 rounded-full font-bold text-xl">Contacto</a>
        </nav>
      )}
    </header>
  );
};

export default Header;