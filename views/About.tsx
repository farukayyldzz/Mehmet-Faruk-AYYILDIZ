import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface AboutProps {
  lang: Language;
}

const DecryptText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const [display, setDisplay] = useState('');
  const [hovered, setHovered] = useState(false);
  const chars = "0123456789ABCDEF!@#$%^&*";

  useEffect(() => {
    let iteration = 0;
    let interval: any;

    if (hovered) {
      interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 3;
      }, 30);
    } else {
      setDisplay(text); 
    }

    return () => clearInterval(interval);
  }, [hovered, text]);

  return (
    <span 
      onMouseEnter={() => setHovered(true)} 
      className={`${className} cursor-crosshair transition-colors duration-300 ${hovered ? 'text-neon font-bold' : 'text-gray-700'}`}
    >
      {display || text}
    </span>
  );
};

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="min-h-screen w-full py-20 px-6 md:px-20 flex flex-col justify-center relative z-10 bg-white/50">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12 border-l-4 border-neon pl-6">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-dark mb-2 tracking-tight">
            {t.about_title}
          </h2>
          <p className="text-gray-400 font-mono text-xs font-bold tracking-widest uppercase">{t.about_hover}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Bio & Philosophy */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-xl bg-white hover:shadow-md transition-shadow">
              <h3 className="text-purple-600 font-mono mb-4 text-xl font-bold tracking-wider">{t.about_objective}</h3>
              <p className="text-lg leading-relaxed font-light text-gray-700">
                <DecryptText text={t.about_desc} />
              </p>
            </div>

            <div className="glass-panel p-8 rounded-xl bg-white hover:shadow-md transition-shadow">
              <h3 className="text-dark font-mono mb-4 text-xl font-bold tracking-wider">{(t as any).about_philosophy_title}</h3>
              <p className="text-md leading-relaxed font-light text-gray-600">
                {(t as any).about_philosophy_desc}
              </p>
            </div>
          </div>

          {/* Right Column: Skills Matrix */}
          <div className="glass-panel p-8 rounded-xl group hover:shadow-xl transition-all duration-500 relative overflow-hidden bg-white h-fit">
            <div className="absolute top-0 right-0 p-2 opacity-5">
              <svg className="w-32 h-32 text-dark" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-neon font-mono mb-6 text-xl font-bold tracking-wider">{t.about_skills}</h3>
            
            <div className="space-y-5 font-mono text-sm text-gray-600 font-medium">
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>PHP / LARAVEL</span> <span className="text-neon font-bold">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-neon h-1.5 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>REACT / NEXT.JS</span> <span className="text-neon font-bold">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-neon h-1.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>MANAGEMENT SYS. (ERP/CRM)</span> <span className="text-neon font-bold">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-neon h-1.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>EDUCATIONAL TECH (LMS)</span> <span className="text-neon font-bold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-neon h-1.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>SYS ADMIN / DEVOPS</span> <span className="text-neon font-bold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-neon h-1.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;