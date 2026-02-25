import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRef, useEffect } from 'react';
import {
  Flame,
  Utensils,
  Settings,
  Users,
  Package,
  Shield,
  Clock,
  BookOpen,
} from 'lucide-react';
import Experience from '@/components/landing/Experience';

const SkillsHero = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/pic4.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="container-premium relative z-30 pt-20"
      >
        <div className="max-w-3xl text-center mx-auto">
          {/* Pre-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-white/80 mb-6"
          >
            {t('skills.title')}
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 text-white leading-tight"
          >
            {t('skills.subtitle')}
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-white mx-auto mb-8"
          />
        </div>
      </motion.div>
    </section>
  );
};

const SkillsContent = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const skills = [
    { icon: Flame, key: 'skills.1' },
    { icon: Utensils, key: 'skills.2' },
    { icon: Settings, key: 'skills.3' },
    { icon: Users, key: 'skills.4' },
    { icon: Package, key: 'skills.5' },
    { icon: Shield, key: 'skills.6' },
    { icon: Clock, key: 'skills.7' },
    { icon: BookOpen, key: 'skills.8' },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-premium">
        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-24">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group text-center p-6 lg:p-8"
            >
              {/* Icon */}
              <motion.div
                className="mb-4 inline-block"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <skill.icon
                  size={36}
                  strokeWidth={1}
                  className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                />
              </motion.div>

              {/* Skill Name */}
              <p className="text-sm tracking-wide text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {t(skill.key)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-24 text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
            {t('languages.title')}
          </p>
          <div className="flex justify-center gap-12 md:gap-24">
            <div>
              <p className="text-2xl font-light mb-1">{t('languages.spanish')}</p>
              <p className="text-sm text-muted-foreground tracking-wide">
                {t('languages.spanish.level')}
              </p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-2xl font-light mb-1">{t('languages.english')}</p>
              <p className="text-sm text-muted-foreground tracking-wide">
                {t('languages.english.level')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main>
          <SkillsHero />
          <SkillsContent />
          <Experience />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default SkillsPage;