import React from 'react';



const translations = {
  en: {
    title: 'Technologies',
    techs: [
      'Dart','TypeScript','JavaScript','PHP','Flutter','React Native','Vue.js','Ionic','MySQL','Firebase','DynamoDB','AWS','Git','REST APIs','Expo','DeepSource',
    ],
  },
  pt: {
    title: 'Tecnologias',
    techs: [
      'Dart','TypeScript','JavaScript','PHP','Flutter','React Native','Vue.js','Ionic','MySQL','Firebase','DynamoDB','AWS','Git','REST APIs','Expo','DeepSource',
    ],
  },
};

export default function Technologies({ lang = 'en' }) {
  const t = translations[lang] || translations.en;
  return (
    <section id="technologies" className="relative py-16 transition-colors duration-500 min-h-[40vh] flex items-center bg-transparent">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#8B1E3F] to-[#E63946] bg-clip-text text-transparent drop-shadow-lg">{t.title}</h2>
  <div className="bg-[#18181b]/90 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center text-center transition-colors duration-500 w-full max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-3 md:gap-4 w-full justify-center">
            {t.techs.map((tech, i) => {
              const colors = [
                'bg-[#FF1744]/20 text-[#FF1744]',
                'bg-[#FF9100]/20 text-[#FF9100]',
                'bg-[#FFD600]/20 text-[#FFD600]',
                'bg-[#00E676]/20 text-[#00E676]',
                'bg-[#2979FF]/20 text-[#2979FF]',
                'bg-[#D500F9]/20 text-[#D500F9]',
              ];
              const icons = [
                '💻', '⚙️', '🌐', '🛠️', '📱', '☁️', '🔗', '🧩', '🗄️', '🔥', '🔄', '🚀', '🔧', '🔌', '📦', '🔍'
              ];
              return (
                <span
                  key={tech}
                  className={`flex items-center gap-2 ${colors[i % colors.length]} min-w-[120px] max-w-[150px] justify-center px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-colors duration-500 truncate`}
                  title={tech}
                >
                  <span>{icons[i % icons.length]}</span>
                  <span className="truncate">{tech}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
