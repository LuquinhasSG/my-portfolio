import React, { useState, useEffect } from 'react';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' }
];

export default function LanguageToggle({ onChange }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');

  useEffect(() => {
    localStorage.setItem('lang', lang);
    if (onChange) onChange(lang);
  }, [lang, onChange]);

  return (
    <div className="fixed top-4 left-4 z-50 flex gap-2">
      {LANGS.map(l => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-3 py-1 rounded-full font-bold border-2 transition-colors duration-200
            ${lang === l.code
              ? 'bg-[#E63946] text-white border-[#E63946]'
              : 'bg-[#232323] text-[#E63946] border-[#232323] dark:bg-[#18181b] dark:text-[#E63946] dark:border-[#232323] hover:bg-[#E63946]/20'}
          `}
          aria-label={`Switch to ${l.label}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
