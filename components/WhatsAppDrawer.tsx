import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

const WhatsAppDrawer: React.FC<{ lang: Language }> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-[#25D366] animate-pulse" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-white/60 backdrop-blur-sm z-[60]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* The Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[400px] z-[70] bg-white border-l border-gray-200 shadow-2xl transform transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Drawer Header */}
        <div className="relative h-40 bg-gray-50 p-6 flex flex-col justify-end border-b border-gray-200">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="relative w-16 h-16 rounded-full border-2 border-[#25D366] overflow-hidden shadow-md p-0.5 bg-white">
              <img 
                src="https://picsum.photos/200/200?grayscale" 
                alt="Faruk Ayyıldız" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-dark font-mono font-bold text-lg">Faruk Ayyıldız</h3>
              <p className="text-[#25D366] text-xs font-mono tracking-widest font-bold">● {t.drawer_status}</p>
            </div>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="p-8 flex flex-col h-[calc(100%-160px)] justify-between">
          <div className="space-y-6">
            <div className="p-4 rounded-xl border border-gray-100 bg-[#25D366]/5 font-mono text-sm text-gray-600 shadow-sm">
              <p className="text-dark font-medium">{t.drawer_help}</p>
            </div>
          </div>

          <div className="space-y-4">
             <a 
              href="https://wa.me/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-4 bg-[#25D366] text-white rounded-lg shadow-lg shadow-[#25D366]/30 font-bold font-mono tracking-wider hover:bg-[#1dbf57] hover:shadow-xl transition-all duration-300 group"
             >
               <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
               {t.drawer_chat}
             </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppDrawer;