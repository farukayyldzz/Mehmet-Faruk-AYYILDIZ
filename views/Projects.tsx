import React, { useState } from 'react';
import { GET_PROJECTS, TRANSLATIONS } from '../constants';
import { Project, Language } from '../types';
import { FolderOpen, ExternalLink, Lock } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [transform, setTransform] = useState('');
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5; 
    const rotateY = ((x - centerX) / centerX) * 5;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  const techStack = Array.isArray(project.tech) ? project.tech : (project.tech as string).split(', ');

  return (
    <div 
      className="relative h-auto min-h-[340px] w-full glass-panel bg-white rounded-2xl p-8 cursor-pointer transition-all duration-200 ease-out group shadow-sm hover:shadow-2xl border border-gray-100 flex flex-col"
      style={{ transform, transition: 'transform 0.1s ease-out' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-white transition-colors shadow-inner">
          <FolderOpen className="text-dark w-6 h-6" />
        </div>
        <div className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold font-mono text-gray-500 uppercase tracking-wider">
          {project.status}
        </div>
      </div>

      <h3 className="text-xl font-bold text-dark font-mono mb-3 group-hover:text-neon transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 relative z-10">
        {techStack.slice(0, 3).map((t: string) => (
          <span key={t} className="text-[10px] font-mono font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">#{t}</span>
        ))}
        {techStack.length > 3 && (
          <span className="text-[10px] font-mono font-bold text-gray-400 px-1 py-1">+{techStack.length - 3}</span>
        )}
      </div>

      <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
        {project.status.includes('lassified') || project.status.includes('Gizli') ? <Lock className="w-5 h-5 text-red-500" /> : <ExternalLink className="w-5 h-5 text-neon" />}
      </div>
    </div>
  );
};

interface ProjectsProps {
  lang: Language;
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const projects = GET_PROJECTS(lang);

  return (
    <section id="projects" className="min-h-screen w-full py-20 px-6 md:px-20 relative z-10 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-mono text-dark tracking-tight">
              {t.projects_title}
            </h2>
            <p className="text-neon font-mono font-bold tracking-widest mt-2">{(t as any).projects_subtitle}</p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gray-300 ml-8 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map(proj => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;