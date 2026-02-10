import React from 'react';
import '../index.css';

// Componentes
import Header from '../components/Header';
import Hero from '../components/Hero';
import TravesiaSection from '../components/TravesiaSection';
import ChannelsSection from '../components/ChannelsSection'; 
import ManualQuote from '../components/ManualQuote';
import AgendaSection from '../components/AgendaSection'; // dianaTinforma
import MusicSection from '../components/MusicSection';   // dianaTbaila
import ChatExperience from '../components/ChatExperience';
import Contact from '../components/Contact'; // dianaTescucha
import Footer from '../components/Footer';
import AboutProject from '../components/AboutProject'; // <--- IMPORTAR

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/40 selection:text-brand-black">
      <Header />
      <main>
        <Hero />
        <AboutProject />
        <ChatExperience />
        <TravesiaSection />
        <ChannelsSection />
        <ManualQuote />
        
        {/* Bloque de Información y Recursos */}
        {/* <AgendaSection />  */}
        <MusicSection />  
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;