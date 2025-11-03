import React, { useState } from 'react';

const translations = {
  en: {
    close: 'Close',
    view: 'View Project',
    image: 'Image',
  },
  pt: {
    close: 'Fechar',
    view: 'Ver Projeto',
    image: 'Imagem',
  },
};

export default function ProjectModal({ project, onClose, lang = 'en' }) {
  const [index, setIndex] = useState(0);
  if (!project) return null;
  const t = translations[lang] || translations.en;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#18181b]/90 animate-fadeIn transition-colors duration-500">
  <div className="bg-gradient-to-br from-[#18181b] via-[#252525] to-[#8B1E3F] rounded-2xl shadow-2xl p-8 max-w-3xl w-full relative animate-slideUp transition-colors duration-500 overflow-y-auto" style={{maxHeight: '90vh'}}>
        <button
          className="absolute top-4 right-4 text-[#E63946] hover:text-white text-2xl font-bold bg-[#18181b] bg-opacity-80 rounded-full p-2 shadow-lg transition-colors"
          onClick={onClose}
          aria-label={t.close}
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Descrição à esquerda */}
          <div className="flex-1 md:pr-4">
            <h3 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-[#8B1E3F] to-[#E63946] bg-clip-text text-transparent drop-shadow-lg text-center md:text-left">{project.title}</h3>
            <p className="text-[#F3F3F3] mb-4 text-center md:text-left">{project.description}</p>
            {/* Link removido conforme solicitado */}
          </div>
          {/* Imagem e navegação à direita */}
          <div className="flex flex-col items-center">
            <img
              src={project.gallery[index]}
              alt={project.title}
              className="h-[60vh] w-auto object-contain rounded-xl shadow-lg mb-4"
              style={{maxHeight: '60vh'}}
            />
            <div className="flex items-center gap-2 mb-4 flex-wrap justify-center">
              <button
                onClick={() => setIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1))}
                className="px-2 py-1 rounded-full bg-gradient-to-br from-[#8B1E3F] to-[#E63946] text-white text-xs font-bold shadow-lg hover:scale-110 transition-transform"
                aria-label="Anterior"
              >
                &#8592;
              </button>
              {project.gallery.map((img, i) => (
                <button
                  key={i}
                  className={`w-1 h-1 rounded-full ${i === index ? 'bg-[#E63946]' : 'bg-[#232323]'} transition-colors`}
                  onClick={() => setIndex(i)}
                  aria-label={`${t.image} ${i + 1}`}
                />
              ))}
              <button
                onClick={() => setIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1))}
                className="px-2 py-1 rounded-full bg-gradient-to-br from-[#E63946] to-[#8B1E3F] text-white text-xs font-bold shadow-lg hover:scale-110 transition-transform"
                aria-label="Próxima"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
