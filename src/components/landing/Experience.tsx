import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

const Experience = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const experiences = [
    {
      titleKey: 'experience.1.title',
      locationKey: 'experience.1.location',
      descKey: 'experience.1.desc',
      period: t('experience.present'),
      isCurrent: true,
    },
    {
      titleKey: 'experience.2.title',
      locationKey: 'experience.2.location',
      descKey: 'experience.2.desc',
      period: '2023',
      isCurrent: false,
    },
    {
      titleKey: 'experience.3.title',
      locationKey: 'experience.3.location',
      descKey: 'experience.3.desc',
      period: '2022',
      isCurrent: false,
    },
    {
      titleKey: 'experience.4.title',
      locationKey: 'experience.4.location',
      descKey: 'experience.4.desc',
      period: '2021',
      isCurrent: false,
    },
    {
      titleKey: 'experience.5.title',
      locationKey: 'experience.5.location',
      descKey: 'experience.5.desc',
      period: '2020',
      isCurrent: false,
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            {t('experience.title')}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-16 h-px bg-foreground mx-auto"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border origin-top hidden md:block"
            style={{ transform: 'translateX(-50%)' }}
          />

          {/* Experience Items */}
          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.titleKey}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 md:mb-16 ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0
                      ? 'md:pr-12 md:text-right'
                      : 'md:pl-12 md:col-start-2'
                  }`}
                >
                  {/* Period Badge */}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className={`inline-block px-4 py-1.5 text-xs tracking-widest uppercase mb-4 ${
                      exp.isCurrent
                        ? 'bg-foreground text-background'
                        : 'border border-border text-muted-foreground'
                    }`}
                  >
                    {exp.period}
                  </motion.span>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-light mb-2 tracking-wide">
                    {t(exp.titleKey)}
                  </h3>

                  {/* Location */}
                  <div
                    className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <MapPin size={14} />
                    <span>{t(exp.locationKey)}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {t(exp.descKey)}
                  </p>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                  className={`absolute left-0 md:left-1/2 top-1 w-3 h-3 rounded-full border-2 border-foreground bg-background hidden md:block ${
                    exp.isCurrent ? 'bg-foreground' : ''
                  }`}
                  style={{ transform: 'translateX(-50%)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
