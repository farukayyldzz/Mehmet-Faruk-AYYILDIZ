import React, { useState, useEffect } from 'react';
import Drones from './components/Drones';
import Preloader from './components/Preloader';
import WhatsAppDrawer from './components/WhatsAppDrawer';
import VisitorLog from './components/VisitorLog';
import Hero from './views/Hero';
import About from './views/About';
import Projects from './views/Projects';
import Experience from './views/Experience';
import Contact from './views/Contact';
import { MENU_ITEMS, TRANSLATIONS } from './constants';
import { Language } from './types';
import { Menu, Globe, X } from 'lucide-react';

const App: React.FC = () => {
  const [booted, setBooted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('tr'); // Default to Turkish
  const [activeSection, setActiveSection] = useState('hero');

  const t = TRANSLATIONS[lang];

  // Scroll spy
  useEffect(() => {
    if (!booted) return;

    const handleScroll = () => {
      const sections = MENU_ITEMS.map(item => item.id);
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [booted]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'tr' : 'en');
  };

  if (!booted) {
    return <Preloader onComplete={() => setBooted(true)} lang={lang} />;
  }

  return (
    <div className="relative w-full min-h-screen bg-bg text-dark overflow-hidden selection:bg-neon selection:text-white">
      
      {/* Layer 1: Background Grid (CSS) */}
      <div className="fixed inset-0 z-0 grid-bg opacity-60 pointer-events-none"></div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-white/0 via-white/50 to-white pointer-events-none"></div>

      {/* Layer 2: Drones (Canvas) */}
      <Drones />

      {/* Layer 3: Content */}
      <div className="relative z-10">
        
        {/* Navigation Header */}
        <header className="fixed top-0 w-full z-50 px-6 py-4 md:px-10 flex justify-between items-center bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm transition-all duration-300">
          <div 
            className="font-mono font-bold text-lg md:text-xl tracking-tighter cursor-pointer hover:text-neon transition-colors flex items-center gap-2"
            onClick={() => scrollTo('hero')}
          >
            <div className="w-3 h-3 bg-neon rounded-full animate-pulse"></div>
            FARUK AYYILDIZ
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {MENU_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-mono text-xs font-semibold tracking-widest hover:text-neon transition-all duration-300 relative group ${activeSection === item.id ? 'text-neon' : 'text-gray-500'}`}
              >
                {(t as any)[item.key]}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-neon transform origin-left transition-transform duration-300 ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            ))}
            
            {/* Language Toggle Desktop */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200"
            >
              <Globe size={14} className="text-gray-600" />
              <span className="text-xs font-mono font-bold text-gray-700">{lang.toUpperCase()}</span>
            </button>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-4 md:hidden">
             <button 
              onClick={toggleLang}
              className="flex items-center gap-1 px-2 py-1 rounded bg-gray-100"
            >
              <span className="text-xs font-mono font-bold">{lang.toUpperCase()}</span>
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-dark hover:text-neon">
              <Menu size={24} />
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
           <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8">
             {MENU_ITEMS.map(item => (
               <button
                 key={item.id}
                 onClick={() => scrollTo(item.id)}
                 className="text-2xl font-mono font-bold text-dark hover:text-neon tracking-widest"
               >
                 {(t as any)[item.key]}
               </button>
             ))}
             <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-red-500">
               <X size={32} />
             </button>
           </div>
        )}

        {/* Main Views */}
        <main className="flex flex-col">
          <div id="hero"><Hero lang={lang} /></div>
          <div id="about"><About lang={lang} /></div>
          <div id="projects"><Projects lang={lang} /></div>
          <div id="experience"><Experience lang={lang} /></div>
          <div id="contact"><Contact lang={lang} /></div>
          
          {/* Visitor Log Section */}
          <VisitorLog lang={lang} />
        </main>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 font-mono text-xs relative z-10 border-t border-gray-200 bg-white">
          <p>DESIGNED & DEVELOPED BY FARUK AYYILDIZ © {new Date().getFullYear()}</p>
          <p className="mt-2 opacity-50">SYS VER 3.1.0 // CLEAN QUANTUM MODE</p>
        </footer>

      </div>

      {/* Floating Widget */}
      <WhatsAppDrawer lang={lang} />
    </div>
  );
};

export default App;