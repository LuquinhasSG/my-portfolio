import React, { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';


const translations = {
  en: {
    title: 'Projects',
  },
  pt: {
    title: 'Projetos',
  },
};

export default function Projects({ lang = 'en' }) {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const t = translations[lang] || translations.en;

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  // For translation of project fields, you could add translated fields in the JSON or handle here if needed

  return (
    <section className="relative min-h-screen py-16 transition-colors duration-500 flex items-center bg-transparent" id="projects">
  <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#8B1E3F] to-[#E63946] bg-clip-text text-transparent drop-shadow-lg">
          {t.title}
        </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp w-full max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#18181b]/90 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform transition-colors duration-500 cursor-pointer border-t-4 border-[#E63946]"
              onClick={() => setSelected(project)}
            >
              <img src={project.image} alt={project.title} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#E63946] shadow-md" />
              <h3 className="text-xl font-bold mb-2 text-[#E63946]">{project.title}</h3>
              <p className="text-white text-center">{project.description}</p>
            </div>
          ))}
        </div>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} lang={lang} />
        )}
      </div>
    </section>
  );
}
