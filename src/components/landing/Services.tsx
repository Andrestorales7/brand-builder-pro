import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';
import { ChefHat, Users, Clock, Calendar } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const services = [
    {
      icon: ChefHat,
      titleKey: 'services.private.title',
      descKey: 'services.private.desc',
    },
    {
      icon: Users,
      titleKey: 'services.executive.title',
      descKey: 'services.executive.desc',
    },
    {
      icon: Clock,
      titleKey: 'services.hourly.title',
      descKey: 'services.hourly.desc',
    },
    {
      icon: Calendar,
      titleKey: 'services.longterm.title',
      descKey: 'services.longterm.desc',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-background"
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
            {t('services.title')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display-md font-light mb-6"
          >
            {t('services.subtitle')}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-px bg-foreground mx-auto"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
              className="group relative p-8 lg:p-12 border border-border hover:border-foreground/30 transition-all duration-500"
            >
              {/* Icon */}
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon
                  size={32}
                  strokeWidth={1}
                  className="text-foreground"
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-light mb-4 tracking-wide">
                {t(service.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {t(service.descKey)}
              </p>

              {/* Hover accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-foreground origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center text-sm text-muted-foreground tracking-wide italic"
        >
          {t('services.note')}
        </motion.p>
      </div>
    </section>
  );
};

export default Services;
