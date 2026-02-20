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
    <section id="homechef-intro" className="w-full bg-[#F5F1EC] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Columna Izquierda: Texto */}
        <div className="flex flex-col gap-10">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2E2E2E] leading-tight tracking-wide mb-4" style={{fontFamily: 'Playfair Display, Cormorant Garamond, Libre Baskerville, serif'}}>
            {t('homechefintro.title')}
          </h2>
          <p className="text-lg md:text-xl text-[#5A5A5A] font-serif leading-relaxed mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            {t('homechefintro.description')}
          </p>
          <ul className="flex flex-col gap-3 mb-6">
            {checks.map((key, i) => (
              <li key={i} className="flex items-center gap-3 text-[#2E2E2E] text-lg font-serif">
                <CheckCircle className="w-6 h-6 text-[#C6A85C]" strokeWidth={2} />
                {t(key)}
              </li>
            ))}
          </ul>
          
          {/* Important Notice - 4 Hour Requirement */}
          <div className="bg-white rounded-lg p-6 border-l-4 border-[#C6A85C] shadow-sm">
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
        {/* Columna Derecha: Calendly embed */}
        <div className="flex flex-col gap-8 items-center w-full">
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
              data-url="https://calendly.com/infohomechefutah/4hr?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f3eeea&primary_color=5f657e"
              style={{ width: '100%', maxWidth: '560px', minWidth: '320px', height: '700px' }}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
