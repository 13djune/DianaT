import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import './index.css';

// Componente auxiliar para gestionar el scroll a los #IDs
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // El timeout de 300ms da margen a que las imágenes y fuentes carguen
      const timeout = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); 

      return () => clearTimeout(timeout);
    }
  }, [hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      {/* Colocamos el controlador de scroll dentro del Router */}
      <ScrollToHash />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/noticias" element={<BlogPage />} />
        <Route path="/noticia/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
