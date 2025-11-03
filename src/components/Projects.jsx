import React, { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';


const translations = {
  en: {
    title: 'Projects',
    construction: 'This section is under construction. More projects and updates coming soon!',
    allpDesc: 'Allp is a mobile app built with Flutter for personal and project organization, combining lists, boards, and checklists in a modern and intuitive interface. Uses Firebase Firestore for cloud storage, user authentication, payment integration, and advanced UX/UI features.'
  },
  pt: {
    title: 'Projetos',
    construction: 'Esta seção está em construção. Em breve mais projetos e novidades!',
    allpDesc: 'Allp é um aplicativo mobile desenvolvido em Flutter para organização pessoal e de projetos, combinando listas, quadros e checklists em uma interface moderna e intuitiva. Utiliza Firebase Firestore para armazenamento em nuvem, autenticação de usuários, integração com sistema de pagamentos e recursos avançados de UX/UI.'
  },
};

export default function Projects({ lang = 'en' }) {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const t = translations[lang] || translations.en;

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}projects.json`)
      .then((res) => res.json())
      .then(data => {
        // Substitui a descrição do projeto Allp pela tradução correta
        if (data.length && data[0].title === 'Allp') {
          data[0].description = t.allpDesc;
        }
        setProjects(data);
      });
  }, [lang]);

  // For translation of project fields, you could add translated fields in the JSON or handle here if needed

  return (
    <section className="relative min-h-screen py-16 transition-colors duration-500 flex items-center bg-transparent" id="projects">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#8B1E3F] to-[#E63946] bg-clip-text text-transparent drop-shadow-lg">
          {t.title}
        </h2>
        <div className="mb-8">
          <div className="bg-gradient-to-r from-[#8B1E3F] to-[#E63946] text-white rounded-xl px-6 py-4 text-center font-semibold shadow-md border-l-4 border-[#E63946] flex items-center justify-center gap-3">
            <span className="text-2xl animate-bounce">🚧</span>
            <span>{t.construction}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp w-full max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#18181b]/90 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform transition-colors duration-500 cursor-pointer border-t-4 border-[#E63946]"
              onClick={() => setSelected(project)}
            >
              <img src={project.image} alt={project.title} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#E63946] shadow-md" />
              <h3 className="text-xl font-bold mb-2 text-[#E63946]">{project.title}</h3>
              <p className="text-white text-center">
                {project.description.length > 90
                  ? project.description.slice(0, 90).trim() + '...'
                  : project.description}
              </p>
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
