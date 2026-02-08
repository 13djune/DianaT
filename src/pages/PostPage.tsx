import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { posts } from '../data/posts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PostPage: React.FC = () => {
  const { id } = useParams(); // Recupera el ID de la URL
  const post = posts.find(p => p.id === id);

  if (!post) return <div className="p-20 text-center">Noticia no encontrada</div>;

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <article className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
        <Link to="/noticias" className="inline-flex items-center gap-2 text-brand-black/60 mb-8 hover:text-brand-black transition-colors font-bold uppercase tracking-widest text-sm">
          <ArrowLeft size={16} /> Volver a noticias
        </Link>
        
        <div className="mb-8 flex gap-4 text-sm font-bold uppercase tracking-widest">
          <span className="flex items-center gap-2 text-primary"><Tag size={14}/> {post.type}</span>
          <span className="flex items-center gap-2 text-brand-black/40"><Calendar size={14}/> {post.date}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-black mb-8 leading-tight">
          {post.title}
        </h1>

        <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-[32px] manual-border mb-12" />

        <div className="prose prose-lg prose-p:font-sans prose-headings:font-serif max-w-none text-brand-black/80 leading-relaxed">
           {/* Aquí simulamos el contenido */}
           <p className="text-xl font-medium text-brand-black mb-8">{post.summary}</p>
           <p>{post.content}</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default PostPage;