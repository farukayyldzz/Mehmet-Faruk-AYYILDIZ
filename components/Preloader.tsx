import React, { useState, useEffect } from 'react';
import { ChevronRight, Loader2 } from 'lucide-react';
import { Language } from '../types';

interface PreloaderProps {
  onComplete: () => void;
  lang: Language;
}

const SEQUENCE = [
  "Initializing Core Systems...",
  "Loading UI Modules...",
  "Connecting to Neural Network...",
  "Identity Verified: FARUK AYYILDIZ",
  "System Ready."
];

const Preloader: React.FC<PreloaderProps> = ({ onComplete, lang }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let delay = 0;
    SEQUENCE.forEach((line, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (index === SEQUENCE.length - 1) {
          setTimeout(() => setShowButton(true), 500);
        }
      }, delay);
      delay += Math.random() * 500 + 200; 
    });
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(onComplete, 800); 
  };

  if (isExiting) {
    return (
      <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center transition-all duration-700 ease-in-out transform -translate-y-full origin-top opacity-0">
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-10 font-mono text-dark overflow-hidden">
      
      <div className="mb-8 relative">
        <div className="w-24 h-24 border-4 border-gray-200 rounded-full animate-spin-slow border-t-neon"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-dark animate-spin" />
        </div>
      </div>

      <div className="w-full max-w-md space-y-3 mb-12 text-center">
        {lines.map((line, i) => (
          <div key={i} className="text-sm tracking-widest animate-fade-in">
            <span className={`
              ${line.includes("FARUK") ? "text-dark font-black text-lg" : "text-gray-500"}
              ${line.includes("Ready") ? "text-neon font-bold" : ""}
            `}>
              {line}
            </span>
          </div>
        ))}
      </div>

      {showButton && (
        <button 
          onClick={handleEnter}
          className="group relative px-10 py-4 bg-dark text-white font-bold tracking-[0.2em] hover:bg-neon hover:text-white transition-all duration-300 focus:outline-none rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <span className="relative flex items-center">
            ENTER <ChevronRight className="ml-2 w-5 h-5" />
          </span>
        </button>
      )}
    </div>
  );
};

export default Preloader;