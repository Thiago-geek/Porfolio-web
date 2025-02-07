import React from 'react';
import { Code, Link, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  stats: string;
  links: {
    code?: string;
    preview: string;
  };
}

const projects: Project[] = [
  {
    title: 'Paint Windows 95',
    description: 'Recreación del clásico Paint de Windows 95 usando HTML, CSS y JavaScript (Canvas) . Dibuja y experimenta con herramientas básicas en un entorno retro.',
    stats: 'Creado desde cero con html, css y Javascript.',
    image: 'https://www.javascript100.dev/projects/09.webp',
    technologies: ['html','CSS','Javascript'],
    links: {
      code: 'https://github.com/Thiago-geek/Pain-win-95',
      preview: 'https://thiago-geek.github.io/Pain-win-95/'
    }
  },
  {
    title: 'Arkanoid Game',
    description: 'Versión web del clásico Arkanoid , Rompe bloques, controla la pelota y desafía tu habilidad en este juego retro.',
    stats: 'En desarrollo...',
    image: 'https://www.javascript100.dev/projects/02.webp',
    technologies: ['html','CSS','Javascript'],
    links: {
      code: '',
      preview: ''
    }
  }
];

function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-200">
      {name}
    </span>
  );
}

 function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col md:flex-row gap-2  rounded-xl overflow-hidden p-2  transition-colors">
      <div className="w-full md:w-[50%] aspect-video rounded-lg overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="flex-1 p-4">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        
        <div className="flex gap-2 mb-4">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
        
        <p className="text-gray-400 mb-4">{project.description}</p>
        <p className="text-gray-400 mb-6">{project.stats}</p>
        
        <div className="flex gap-4">
          {project.links.code && (
            <a 
              href={project.links.code}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              <Github size={20} />
              Code
            </a>
          )}
          <a 
            href={project.links.preview}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            <Link size={20} />
            Preview
          </a>
        </div>
      </div>
    </div>
  );
}

export function Proyectos() {
  return (
    <section id='proyectos'>
    <div className="min-h-screen  text-white ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 flex items-center gap-2">
          <code className="text-gray-400">&lt;/&gt;</code>
          Proyectos
        </h1>
        
        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}