import React from 'react';
import { GET_EXPERIENCES, TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface ExperienceProps {
  lang: Language;
}

const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const experiences = GET_EXPERIENCES(lang);

  return (
    <section id="experience" className="min-h-screen w-full py-20 px-6 md:px-20 relative z-10 flex items-center bg-white">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-mono font-bold text-dark mb-16 text-center tracking-tighter">
          {t.exp_title}
        </h2>

        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-10 space-y-16">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              {/* Node */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-neon group-hover:bg-neon transition-colors duration-300 shadow-[0_0_0_4px_rgba(255,255,255,1)] z-10"></div>
              
              {/* Content */}
              <div className="transform transition-all duration-300 group-hover:translate-x-2">
                <span className="font-mono text-sm text-neon font-bold mb-1 block tracking-wider">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-bold text-dark mb-1 group-hover:text-purple-600 transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-lg text-gray-500 font-mono mb-4 font-medium">
                  @ {exp.company}
                </h4>
                <div className="bg-gray-50 p-6 rounded-r-xl border-l-2 border-gray-200 group-hover:border-neon transition-all shadow-sm group-hover:shadow-md">
                  <p className="text-gray-600 font-light">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;