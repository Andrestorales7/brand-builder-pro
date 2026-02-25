import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Clock } from 'lucide-react';
import { useEffect } from 'react';

const checks = [
  'homechefintro.check1',
  'homechefintro.check2',
  'homechefintro.check3',
];

export default function HomeChefIntro() {
  const { t } = useLanguage();
  useEffect(() => {
    if (!document.getElementById('calendly-script')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.id = 'calendly-script';
      document.body.appendChild(script);
    }
  }, []);
  return (
    <section id="homechef-intro" className="relative w-full bg-[#F5F1EC] py-16 md:py-28 overflow-hidden">
      {/* Decorative Overlapping Plate Image (mobile: behind, desktop: right) */}
      <img
        src="/images/plate.jpeg"
        alt="Decorative plate"
        className="absolute left-1/2 top-0 md:top-[10%] md:right-0 md:left-auto -translate-x-1/2 md:translate-x-0 w-[220px] md:w-[400px] lg:w-[520px] opacity-30 md:opacity-60 pointer-events-none select-none z-0"
        style={{filter: 'drop-shadow(0 8px 32px #C6A85C55)'}}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center z-10">
        {/* Columna Izquierda: Texto */}
        <div className="flex flex-col gap-10 md:gap-12 relative">
          {/* Floating badge for mobile */}
          
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2E2E2E] leading-tight tracking-wide mb-4 relative z-10" style={{fontFamily: 'Playfair Display, Cormorant Garamond, Libre Baskerville, serif'}}>
            {t('homechefintro.title')}
          </h2>
          <p className="text-lg md:text-xl text-[#5A5A5A] font-serif leading-relaxed mb-2 relative z-10" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            {t('homechefintro.description')}
          </p>
          <ul className="flex flex-col gap-3 mb-6 relative z-10">
            {checks.map((key, i) => (
              <li key={i} className="flex items-center gap-3 text-[#2E2E2E] text-lg font-serif">
                <CheckCircle className="w-6 h-6 text-[#C6A85C]" strokeWidth={2} />
                {t(key)}
              </li>
            ))}
          </ul>
          {/* Important Notice - 4 Hour Requirement */}
          <div className="bg-white rounded-lg p-6 border-l-4 border-[#C6A85C] shadow-xl relative z-10">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-[#C6A85C] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#2E2E2E] mb-2">{t('homechefintro.scheduleTitle')}</h3>
                <p className="text-[#5A5A5A] font-serif leading-relaxed">
                  {t('homechefintro.scheduleNote')}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Columna Derecha: Calendly embed, with bold card and overlap */}
        <div className="flex flex-col gap-8 items-center w-full relative z-10">
          <div className="bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 border border-[#C6A85C] -mt-12 md:mt-0 relative z-20 backdrop-blur-sm">
            <div className="text-center mb-4">
              <h3 className="font-serif text-2xl md:text-3xl text-[#2E2E2E] mb-2" style={{fontFamily: 'Playfair Display, Cormorant Garamond, serif'}}>
                {t('homechefintro.appointmentTitle')}
              </h3>
              <p className="text-[#5A5A5A] font-serif">
                {t('homechefintro.appointmentSubtitle')}
              </p>
            </div>
            <div className="w-full flex justify-center">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/infohomechefutah/infohomechefutah?background_color=f5f0eb&primary_color=97938c"
                style={{ width: '100%', maxWidth: '560px', minWidth: '320px', height: '700px' }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Decorative gold gradient overlay for bold visuals */}
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-[#C6A85C]/40 via-transparent to-transparent pointer-events-none z-20" />
    </section>
  );
}
