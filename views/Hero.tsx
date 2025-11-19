import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      
      <div className="z-10 text-center space-y-6">
        <div className="inline-block mb-4 px-4 py-1 border border-gray-300 rounded-full bg-white shadow-sm">
          <span className="text-green-600 text-xs md:text-sm font-mono font-bold tracking-[0.2em] flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {t.hero_system}
          </span>
        </div>
        
        <div className="relative">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-dark relative z-10 mix-blend-multiply">
            FARUK
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon to-purple-600 relative z-10">
            AYYILDIZ
          </h1>
          
          {/* Decorative blurry glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-100 to-purple-100 blur-3xl -z-10 opacity-70 rounded-full"></div>
        </div>

        <p className="text-lg md:text-xl text-gray-600 font-mono max-w-2xl mx-auto leading-relaxed mt-6 font-medium">
          <span className="text-neon font-bold">&lt;</span> {t.hero_role_1} <span className="text-neon font-bold">/&gt;</span> • 
          <span className="text-purple-600"> {t.hero_role_2}</span> • 
          <span className="text-dark"> {t.hero_role_3}</span>
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 z-10">
        <span className="text-[10px] tracking-[0.3em] text-gray-400 font-mono font-bold uppercase">{t.hero_scroll}</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-neon to-transparent"></div>
      </div>

      {/* Decorative Circles (Subtle for Light Mode) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-200 rounded-full animate-spin-slow pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-100 rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;