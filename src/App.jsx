import React, { useState, useRef, useEffect } from 'react';
import useSectionSnap from './hooks/useSectionSnap';
import LanguageToggle from './components/LanguageToggle';
import DarkModeToggle from './components/DarkModeToggle';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Projects from './components/Projects';




export default function App() {
  useSectionSnap();
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');
  const [fade, setFade] = useState(false);
  const timeoutRef = useRef();


  const handleLangChange = (newLang) => {
    if (newLang === lang) return;
    setFade(true);
    setTimeout(() => {
      setLang(newLang);
      setFade(false);
    }, 250);
  };

  // Seções em ordem
  const sectionIds = [
    'hero',
    'about',
    'experience',
    'education',
    'skills',
    'technologies',
    'contact',
    'projects',
  ];

  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    function onScroll() {
      let minDist = Infinity;
      let current = 'hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - window.innerHeight / 2);
        if (dist < minDist) {
          minDist = dist;
          current = id;
        }
      }
      setCurrentSection(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Funções para navegação
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden transition-colors duration-500 text-[#18181b] dark:text-white">
      {/* Fundo: degradê escuro no dark, branco no light */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-[#18181b] dark:via-[#232323] dark:to-[#252525] transition-colors duration-500" />
      </div>
      <DarkModeToggle />
      <LanguageToggle onChange={handleLangChange} />
      <div className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}> 
        <Hero lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Education lang={lang} />
        <div className="max-w-4xl mx-auto px-4 my-12">
          <Skills lang={lang} />
        </div>
        <div className="max-w-4xl mx-auto px-4 my-12">
          <Technologies lang={lang} />
        </div>
        <Contact lang={lang} />
        <Projects lang={lang} />
      </div>
      <footer className="w-full text-center py-8 text-[#8B1E3F] dark:text-[#E63946] text-sm">
        &copy; {new Date().getFullYear()} Lucas Dillenburg. Inspired by Deadpool & Interestelar.
      </footer>
    </div>
  );
}
