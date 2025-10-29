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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 dark:bg-black/80 animate-fadeIn transition-colors duration-500">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 max-w-lg w-full relative animate-slideUp transition-colors duration-500">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-pink-400 text-2xl font-bold"
          onClick={onClose}
          aria-label={t.close}
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-2 text-pink-500 dark:text-pink-400 text-center">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">{project.description}</p>
        <div className="flex flex-col items-center">
          <img
            src={project.gallery[index]}
            alt={project.title}
            className="w-72 h-48 object-cover rounded-lg shadow mb-4 border-4 border-blue-500"
          />
          <div className="flex gap-2 mb-4">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                className={`w-4 h-4 rounded-full border-2 ${i === index ? 'bg-pink-500 dark:bg-pink-400 border-pink-500 dark:border-pink-400' : 'bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-500'} transition-colors`}
                onClick={() => setIndex(i)}
                aria-label={`${t.image} ${i + 1}`}
              />
            ))}
          </div>
        </div>
        {project.link && project.link !== '#' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center text-blue-400 hover:underline"
          >
            {t.view}
          </a>
        )}
      </div>
    </div>
  );
}
