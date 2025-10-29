const translations = {
  en: {
    title: 'Experience',
    jobs: [
      {
        role: 'Pleno III Software Developer',
        company: 'Adapcon Software e Inovação',
        period: '(2022 - Present)',
        items: [
          'Mobile app development with Flutter and Dart',
          'Integration with AWS (S3, Lambda, DynamoDB, SQS, CloudWatch) and Firebase',
          'Collaboration with design teams for animated interfaces',
        ],
      },
      {
        role: 'Software Developer',
        company: 'Agência Studio Imaxis',
        period: '(2019 – 2022)',
        items: [
          'Web/mobile development with PHP, JS, Ionic, and Flutter',
          'MySQL query optimization and front-end performance',
        ],
      },
      {
        role: 'Graphic Designer',
        company: 'DNS Marketing Digital',
        period: '(2018 – 2019)',
        items: [
          'Creation of WordPress sites and digital materials',
          'Logo, banner, and promotional design',
        ],
      },
    ],
  },
  pt: {
    title: 'Experiência',
    jobs: [
      {
        role: 'Pleno III Software Developer',
        company: 'Adapcon Software e Inovação',
        period: '(2022 - Presente)',
        items: [
          'Desenvolvimento de apps mobile com Flutter e Dart',
          'Integração com AWS (S3, Lambda, DynamoDB, SQS, CloudWatch) e Firebase',
          'Colaboração com times de design para interfaces animadas',
        ],
      },
      {
        role: 'Software Developer',
        company: 'Agência Studio Imaxis',
        period: '(2019 – 2022)',
        items: [
          'Desenvolvimento web/mobile com PHP, JS, Ionic e Flutter',
          'Otimização de queries MySQL e performance front-end',
        ],
      },
      {
        role: 'Graphic Designer',
        company: 'DNS Marketing Digital',
        period: '(2018 – 2019)',
        items: [
          'Criação de sites WordPress e materiais digitais',
          'Design de logos, banners e peças promocionais',
        ],
      },
    ],
  },
};



export default function Experience({ lang = 'en' }) {
  const t = translations[lang] || translations.en;
  return (
    <section id="experience" className="relative py-10 md:py-20 transition-colors duration-500 min-h-screen flex items-center bg-transparent">
  <div className="max-w-4xl mx-auto px-4 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-center bg-gradient-to-r from-[#8B1E3F] to-[#E63946] bg-clip-text text-transparent drop-shadow-lg">{t.title}</h2>
        <div className="grid gap-8 md:gap-12">
          {t.jobs.map((job, i) => {
            const borderGradients = [
              'from-[#FF1744] to-[#FF9100]', // vermelho-laranja
              'from-[#2979FF] to-[#00E676]', // azul-verde
              'from-[#FFD600] to-[#D500F9]', // amarelo-roxo
            ];
            const iconBg = [
              'bg-[#FF1744]/20 text-[#FF1744]',
              'bg-[#2979FF]/20 text-[#2979FF]',
              'bg-[#FFD600]/20 text-[#FFD600]',
            ];
            return (
              <div
                key={i}
                className={`relative rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row gap-6 md:gap-10 items-center border-l-8 bg-white/60 dark:bg-[#18181b]/80 backdrop-blur-md border-l-transparent hover:scale-[1.025] transition-transform before:absolute before:inset-0 before:rounded-2xl before:z-[-1] before:bg-gradient-to-br before:${borderGradients[i % borderGradients.length]} before:opacity-60`}
                style={{overflow: 'hidden'}}
              >
                <span className={`text-3xl md:text-5xl w-16 h-16 flex items-center justify-center rounded-full shadow-md ${iconBg[i % iconBg.length]}`}>
                  {i === 0 ? '💼' : i === 1 ? '💻' : '🎨'}
                </span>
                <div className="pl-0 md:pl-6 w-full flex-1">
                  <h3 className="font-extrabold text-xl sm:text-2xl md:text-3xl mb-1 md:mb-2 bg-gradient-to-r from-[#FF1744] to-[#FF9100] bg-clip-text text-transparent drop-shadow-lg">{job.role}</h3>
                  <p className="text-[#18181b] dark:text-white mb-1 md:mb-2 text-base sm:text-lg font-semibold">{job.company} <span className="text-xs text-[#FF1744] dark:text-[#FF9100]">{job.period.replace(/[()]/g, '')}</span></p>
                  <ul className="list-none pl-0 text-[#232323] dark:text-[#F3F3F3] text-sm sm:text-base mt-1 md:mt-2">
                    {job.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 mb-1">
                        <span className="inline-block w-2 h-2 rounded-full bg-white flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Setas removidas, controle global pelo App.jsx */}
    </section>
  );
}
