
import lucasImg from '../assets/images/lucas.png';
import React from 'react';



const translations = {
  en: {
    name: 'Lucas Dillenburg',
    title: 'Software Developer',
    desc: 'Building modern, animated, and professional apps with a focus on great user experience and clean code.',
    button: 'See Projects',
  },
  pt: {
    name: 'Lucas Dillenburg',
    title: 'Desenvolvedor de Software',
    desc: 'Construindo apps modernos, animados e profissionais com foco em experiência do usuário e clean code.',
    button: 'Ver Projetos',
  },
};

export default function Hero({ lang = 'en' }) {
  const t = translations[lang] || translations.en;
  return (
    <section id="hero" className="relative flex flex-col md:flex-row items-center justify-center min-h-screen h-screen px-4 overflow-hidden transition-colors duration-500">
      {/* Fundo escuro com gradiente sutil e tons de vermelho */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 0,
          background:
            'linear-gradient(135deg, #18181b 0%, #252525 60%, #B3262E 100%)',
        }}
      />
      <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start justify-center gap-4 sm:gap-6 animate-fadeIn max-w-2xl w-full md:pl-8 md:pr-8 lg:pl-24 xl:pl-40 text-center lg:text-left lg:ml-12 xl:ml-24">
  <span className="block text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#8B1E3F] to-[#E63946] bg-clip-text text-transparent drop-shadow-lg leading-tight py-2">
          {t.name}
        </span>
  <h2 className="text-lg md:text-2xl font-semibold text-[#E63946] mb-1">
          {t.title}
        </h2>
  <p className="max-w-xl text-white text-base md:text-lg mb-4">
          {t.desc}
        </p>
        <button
          onClick={() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-[#8B1E3F] to-[#252525] text-white font-bold shadow-xl hover:bg-gradient-to-r hover:from-[#252525] hover:to-[#E63946] hover:text-[#E63946] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#E63946] animate-bounce mt-2"
        >
          {t.button}
        </button>
      </div>
      <div
        className="relative z-10 flex-1 hidden lg:flex justify-end items-end w-full h-full lg:pr-4 xl:pr-8"
        style={{height: '100%'}}
      >
        <img
          src={lucasImg}
          alt="Lucas Dillenburg Avatar"
          className="w-[850px] h-[850px] object-contain animate-fadeIn"
          style={{maxWidth: '100vw'}}
        />
      </div>
      {/* Seta para baixo removida, controle global pelo App.jsx */}
    </section>
  );
}
