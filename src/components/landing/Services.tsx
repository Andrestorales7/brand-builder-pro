import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';
import { ChefHat, Clock, Heart, Check, Star, Utensils } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: Clock,
      titleKey: 'services.benefits.save_time.title',
      descKey: 'services.benefits.save_time.content',
    },
    {
      icon: Heart,
      titleKey: 'services.benefits.eat_healthy.title',
      descKey: 'services.benefits.eat_healthy.content',
    },
    {
      icon: Star,
      titleKey: 'services.benefits.live_freely.title',
      descKey: 'services.benefits.live_freely.content',
    },
  ];

  const detailPoints = [
    'services.details.point1',
    'services.details.point2',
    'services.details.point3',
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Fondo editorial con imagen y overlays, transición suave */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url('/images/services-background1.jpg')` }}
        />
        {/* Sombra/difuminado para suavizar el cambio visual */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#f5f4f3]/80 transition-all duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f1ec]/80 via-[#f7f6f3]/70 to-[#e9e6e2]/90 transition-all duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent transition-all duration-1000" />
      </motion.div>

      <div className="container-premium relative z-20">
        {/* Título y descripción */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-light tracking-wide text-[#2E2E2E] mb-6 drop-shadow-lg"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#5A5A5A] font-serif leading-relaxed max-w-3xl mx-auto mb-8"
          >
            {t('services.description')}
          </motion.p>
        </div>

        {/* Beneficios principales en tarjetas delicadas */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="bg-white/80 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-[#e9e6e2] hover:shadow-2xl transition-all"
            >
              <span className="mb-4 text-[#C6A85C]">
                {benefit.icon && <benefit.icon size={48} strokeWidth={1.5} />}
              </span>
              <h3 className="font-serif text-2xl font-light mb-2 text-[#2E2E2E]">{t(benefit.titleKey)}</h3>
              <p className="text-[#5A5A5A] text-base font-serif leading-relaxed">{t(benefit.descKey)}</p>
            </motion.div>
          ))}
        </div>

        {/* Detalles del servicio en lista editorial */}
        <div className="max-w-4xl mx-auto mb-16">
          <ul className="grid md:grid-cols-3 gap-8">
            {detailPoints.map((key, i) => (
              <li key={i} className="flex flex-col items-center text-center">
                <span className="mb-3 text-[#C6A85C]">
                  <Check size={32} />
                </span>
                <span className="font-serif text-lg text-[#2E2E2E] mb-1">{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Experiencia personal chef, destacado editorial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#fff9f2] rounded-3xl shadow-md px-8 py-12 max-w-3xl mx-auto text-center border border-[#e9e6e2]"
        >
          <h4 className="font-serif text-2xl md:text-3xl text-[#2E2E2E] mb-4 font-light">{t('services.personal_chef.title')}</h4>
          <p className="text-[#5A5A5A] text-lg font-serif leading-relaxed">
            {t('services.personal_chef.content')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
