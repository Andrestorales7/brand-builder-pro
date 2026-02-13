import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

const checks = [
  'homechefintro.check1',
  'homechefintro.check2',
  'homechefintro.check3',
];

export default function HomeChefIntro() {
  const { t } = useLanguage();
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
          <div className="flex items-end gap-4 mt-auto">
            <img src="/images/plate2.jpeg" alt={t('homechefintro.chefAlt')} className="w-40 h-40 object-cover rounded-xl shadow-lg border-4 border-white" style={{boxShadow:'0 10px 30px rgba(0,0,0,0.05)'}} />
          </div>
        </div>
        {/* Columna Derecha: Collage */}
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-8 w-full items-center">
            <div className="relative w-64 h-44 mb-8">
              <img src="/images/meal-prep.jpg" alt={t('homechefintro.mealPrepAlt')} className="absolute top-0 left-0 w-full h-full object-cover rounded-xl border-8 border-white shadow-lg" style={{boxShadow:'0 10px 30px rgba(0,0,0,0.05)'}} />
            </div>
            <div className="relative w-56 h-36">
              <img src="/images/fridge.jpg" alt={t('homechefintro.fridgeAlt')} className="absolute top-0 left-0 w-full h-full object-cover rounded-xl border-8 border-white shadow-lg" style={{boxShadow:'0 10px 30px rgba(0,0,0,0.05)'}} />
            </div>
          </div>
          <div className="flex flex-col items-end w-full mt-8">
            <p className="text-[#5A5A5A] text-base font-serif leading-relaxed max-w-xs mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              {t('homechefintro.bottomText')}
            </p>
            <div className="flex items-center gap-2">
              <img src="/images/logo.jpeg" alt={t('homechefintro.logoAlt')} className="w-16 h-16 object-contain" />
              <div className="text-[#B89B5E] font-serif text-lg leading-tight">
                <span className="block font-bold">HomeChef</span>
                <span className="block text-xs tracking-widest">WEEKLY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
