import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [lines, setLines] = useState<string[]>([t.contact_init]);
  const [input, setInput] = useState('');
  const [stage, setStage] = useState<'email' | 'message' | 'sending' | 'sent'>('email');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLines([t.contact_init]);
    setStage('email');
    setInput('');
  }, [lang, t.contact_init]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newLines = [...lines, `> ${input}`];
    setLines(newLines);
    setInput('');

    if (stage === 'email') {
      setTimeout(() => {
        setLines(prev => [...prev, '> Email verified.', `> ${t.contact_msg_prompt}`]);
        setStage('message');
      }, 500);
    } else if (stage === 'message') {
      setStage('sending');
      setTimeout(() => {
        setLines(prev => [...prev, '> Packetizing data...', '> Encrypting payload...', t.contact_success]);
        setStage('sent');
      }, 1500);
    }
  };

  return (
    <section id="contact" className="min-h-screen w-full py-20 px-6 flex flex-col justify-center items-center z-10 relative bg-gray-50">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold font-mono text-dark mb-2">{t.contact_title}</h2>
        <p className="text-gray-500 text-sm">SSH SECURE SHELL V2</p>
      </div>

      <div className="w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
        {/* Terminal Header */}
        <div className="bg-gray-100 p-3 flex items-center gap-2 border-b border-gray-200">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <span className="ml-4 text-xs font-mono text-gray-500 font-bold">user@faruk-terminal:~</span>
        </div>

        {/* Terminal Body */}
        <div 
          className="bg-white p-8 h-[400px] overflow-y-auto font-mono text-sm md:text-base shadow-inner" 
          onClick={() => document.getElementById('terminal-input')?.focus()}
        >
          {lines.map((line, i) => (
            <div key={i} className={`mb-3 ${line.includes('>') && !line.includes('user') ? 'text-purple-600 font-bold' : 'text-gray-700'}`}>
              {line}
            </div>
          ))}

          {stage !== 'sent' && stage !== 'sending' && (
            <form onSubmit={handleSubmit} className="flex items-center mt-4">
              <span className="text-neon mr-2 font-bold">$</span>
              <input
                id="terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-dark font-bold font-mono placeholder-gray-300"
                placeholder={stage === 'email' ? t.contact_placeholder_email : t.contact_placeholder_msg}
                autoFocus
                autoComplete="off"
              />
            </form>
          )}
          <div ref={bottomRef}></div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
         <p className="text-green-600 font-mono text-xs tracking-widest font-bold flex items-center justify-center gap-2">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
           {t.contact_secure}
         </p>
      </div>
    </section>
  );
};

export default Contact;