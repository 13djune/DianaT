import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { posts } from '../data/posts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-soft-lilac font-sans">
      <Header />
      <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-black mb-8 hover:text-primary transition-colors font-bold uppercase tracking-widest text-sm">
          <ArrowLeft size={16} /> Volver al inicio
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-black mb-12 italic">
          Archivo DianaTinforma
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} to={`/noticia/${post.id}`} className="group">
              <article className="bg-white rounded-[32px] overflow-hidden manual-border hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{post.type}</span>
                    <span className="text-xs font-bold text-brand-black/40 uppercase">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-black mb-4 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-brand-black/70 text-sm mb-6 line-clamp-3 flex-grow">
                    {post.summary}
                  </p>
                  <div className="flex items-center gap-2 text-brand-black font-bold text-sm border-t border-brand-black/10 pt-4">
                    Leer más <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;