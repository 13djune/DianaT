import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // El archivo que acabas de crear con lo viejo
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/noticias" element={<BlogPage />} />
        <Route path="/noticia/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;