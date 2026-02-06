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
      {/* Background Images */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        {/* Primary background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/services-background1.jpg')`,
          }}
        />
        {/* Secondary background overlay for depth */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 0.3, x: 0 } : {}}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/services-background2.jpg')`,
          }}
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40 z-10" />
      </motion.div>

      <div className="container-premium relative z-20">
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
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-16 h-px bg-foreground mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto"
          >
            {t('services.description')}
          </motion.p>
        </div>

        {/* Main Service Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20 p-8 lg:p-12 bg-background/95 backdrop-blur-sm border border-border hover:border-foreground/30 transition-all duration-500 shadow-lg"
        >
          <div className="flex items-center mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <ChefHat size={32} strokeWidth={1} className="text-foreground mr-4" />
            </motion.div>
            <h2 className="text-2xl lg:text-3xl font-light tracking-wide">
              {t('services.cooking.title')}
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {t('services.cooking.content')}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl lg:text-3xl font-light text-center mb-12 tracking-wide"
          >
            {t('services.benefits.title')}
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.titleKey}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                className="group relative p-6 lg:p-8 bg-background/95 backdrop-blur-sm border border-border hover:border-foreground/30 transition-all duration-500 text-center shadow-lg hover:shadow-xl"
              >
                <motion.div
                  className="mb-6 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon
                    size={28}
                    strokeWidth={1}
                    className="text-foreground"
                  />
                </motion.div>
                
                <h4 className="text-lg lg:text-xl font-light mb-4 tracking-wide">
                  {t(benefit.titleKey)}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t(benefit.descKey)}
                </p>

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
        </div>

        {/* Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20 p-8 lg:p-12 bg-background/95 backdrop-blur-sm border border-border hover:border-foreground/30 transition-all duration-500 shadow-lg"
        >
          <div className="flex items-center mb-8">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Utensils size={32} strokeWidth={1} className="text-foreground mr-4" />
            </motion.div>
            <h3 className="text-2xl lg:text-3xl font-light tracking-wide">
              {t('services.details.title')}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {detailPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <Check size={20} strokeWidth={1} className="text-foreground mt-1 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  {t(point)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-center p-8 lg:p-12 bg-background/95 backdrop-blur-sm border border-border hover:border-foreground/30 transition-all duration-500 shadow-lg"
        >
          <h3 className="text-2xl lg:text-3xl font-light mb-6 tracking-wide">
            {t('services.experience.title')}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
            {t('services.experience.content')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
