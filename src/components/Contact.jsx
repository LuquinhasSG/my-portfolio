import React from 'react';



const translations = {
  en: {
    title: 'Contact',
    subtitle: "Let's talk! Get in touch:",
    linkedin: 'LinkedIn',
  },
  pt: {
    title: 'Contato',
    subtitle: 'Vamos conversar! Entre em contato:',
    linkedin: 'LinkedIn',
  },
};

export default function Contact({ lang = 'en' }) {
  const t = translations[lang] || translations.en;
  return (
    <section id="contact" className="relative py-20 transition-colors duration-500 min-h-screen flex items-center bg-transparent w-full">
  <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#8B1E3F] to-[#E63946] bg-clip-text text-transparent drop-shadow-lg">{t.title}</h2>
  <div className="bg-[#18181b]/90 rounded-3xl shadow-2xl p-12 flex flex-col items-center text-center border-t-8 border-[#E63946] backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] w-full max-w-4xl mx-auto">
          <p className="mb-6 text-lg text-white font-medium">{t.subtitle}</p>
          <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
            <a href="mailto:dillenburg83@gmail.com" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#8B1E3F]/40 to-[#252525]/60 text-white hover:bg-gradient-to-r hover:from-[#252525] hover:to-[#E63946] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" /></svg>
              dillenburg83@gmail.com
            </a>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#E63946]/10 text-[#E63946]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              +55 (46) 98824-7903
            </div>
            <a href="https://www.linkedin.com/in/lucas-dillenburg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#E63946] to-[#8B1E3F] text-white hover:bg-gradient-to-r hover:from-[#252525] hover:to-[#E63946] transition font-semibold shadow-md mt-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
              {t.linkedin}
            </a>
          </div>
        </div>
      </div>
      {/* Setas removidas, controle global pelo App.jsx */}
    </section>
  );
}
