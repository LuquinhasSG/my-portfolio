import lucasImg from '../assets/images/lucas.png';


const translations = {
  en: {
    title: 'About Me',
    name: 'Lucas Dillenburg',
  desc: 'Software Developer passionate about creating modern, scalable, and animated digital experiences. Always striving to evolve and deliver the best results!',
  },
  pt: {
    title: 'Sobre Mim',
    name: 'Lucas Dillenburg',
  desc: 'Software Developer apaixonado por criar experiências digitais modernas, escaláveis e animadas. Sempre buscando evoluir e entregar o melhor resultado!',
  },
};

export default function About({ lang = 'en' }) {
  const t = translations[lang] || translations.en;
  return (
    <section className="relative py-16 transition-colors duration-500 min-h-screen flex items-center bg-transparent" id="about">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#8B1E3F] to-[#E63946] bg-clip-text text-transparent drop-shadow-lg">{t.title}</h2>
        <div className="bg-[#18181b]/90 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-center md:text-left transition-colors duration-500">
          <img
            src={lucasImg}
            alt="Lucas Dillenburg"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-[#E63946] shadow-lg mb-4 md:mb-0"
          />
          <div className="flex-1 flex flex-col justify-center items-center md:items-start">
            <p className="text-white text-lg md:text-xl leading-relaxed mb-2 max-w-xl">{t.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 rounded-full bg-[#E63946]/20 text-[#E63946] text-xs font-semibold">#React</span>
              <span className="px-3 py-1 rounded-full bg-[#8B1E3F]/20 text-[#8B1E3F] text-xs font-semibold">#Flutter</span>
              <span className="px-3 py-1 rounded-full bg-[#FFD600]/20 text-[#FFD600] text-xs font-semibold">#UI/UX</span>
              <span className="px-3 py-1 rounded-full bg-[#2979FF]/20 text-[#2979FF] text-xs font-semibold">#Animation</span>
            </div>
          </div>
        </div>
      </div>
      {/* Setas removidas, controle global pelo App.jsx */}
    </section>
  );
}
