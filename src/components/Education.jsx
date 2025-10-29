import React from 'react';


const translations = {
  en: {
    title: 'Education & Awards',
    education: {
      degree: 'Bachelor in Information Systems',
      school: 'Universidade Paranaense (UNIPAR)',
      year: '2025',
    },
    award: {
      title: 'Best Student',
      school: 'UNIPAR',
      year: '2025',
    },
  },
  pt: {
    title: 'Educação & Prêmios',
    education: {
      degree: 'Bacharelado em Sistemas de Informação',
      school: 'Universidade Paranaense (UNIPAR)',
      year: '2025',
    },
    award: {
      title: 'Melhor Aluno',
      school: 'UNIPAR',
      year: '2025',
    },
  },
};
export default function Education({ lang = 'en' }) {
  const t = translations[lang] || translations.en;
  return (
    <section id="education" className="relative py-16 transition-colors duration-500 min-h-[40vh] flex items-center bg-transparent">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#8B1E3F] to-[#E63946] bg-clip-text text-transparent drop-shadow-lg">{t.title}</h2>
  <div className="flex flex-col items-center gap-8 w-full">
          {/* Card principal: Graduação */}
          <div className="relative bg-[#18181b]/90 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center text-center w-full border-l-8 border-[#8B1E3F]">
            <span className="absolute -left-6 top-8 hidden md:block w-8 h-8 rounded-full bg-gradient-to-br from-[#8B1E3F] to-[#E63946] flex items-center justify-center text-2xl text-white shadow-lg">🎓</span>
            <span className="md:hidden text-4xl mb-4">🎓</span>
            <h3 className="font-extrabold text-xl md:text-2xl mb-2 text-white">{t.education.degree}</h3>
            <p className="text-[#F3F3F3] mb-2 text-base md:text-lg font-semibold">{t.education.school}</p>
            <span className="text-xs font-bold text-white bg-gradient-to-r from-[#8B1E3F] to-[#E63946] px-3 py-1 rounded-full mt-2 shadow">{t.education.year}</span>
          </div>
          {/* Linha de timeline */}
          <div className="w-1 h-8 bg-gradient-to-b from-[#8B1E3F] to-[#E63946] rounded-full opacity-70" />
          {/* Card menor: Prêmio */}
          <div className="relative bg-[#18181b]/90 rounded-xl shadow-lg p-6 flex flex-col items-center text-center w-full border-l-4 border-[#E63946]">
            <span className="absolute -left-5 top-6 hidden md:block w-7 h-7 rounded-full bg-gradient-to-br from-[#E63946] to-[#8B1E3F] flex items-center justify-center text-xl text-white shadow">🏆</span>
            <span className="md:hidden text-2xl mb-2">🏆</span>
            <h3 className="font-extrabold text-base md:text-lg mb-1 text-white">{t.award.title}</h3>
            <p className="text-[#F3F3F3] mb-1 text-sm md:text-base font-semibold">{t.award.school}</p>
            <span className="text-xs font-bold text-white bg-gradient-to-r from-[#E63946] to-[#8B1E3F] px-3 py-1 rounded-full mt-2 shadow">{t.award.year}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
