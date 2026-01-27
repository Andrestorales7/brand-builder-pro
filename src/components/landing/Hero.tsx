import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { FlipText } from './FlipText';

const Hero = () => {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const plateScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const plateY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animated headline phrases
  const flipPhrases = language === 'es'
    ? [
        'Culinarias Privadas',
        'Gastronómicas Exclusivas',
        'De Alta Cocina',
      ]
    : [
        'Culinary Experiences',
        'Dining Experiences',
        'Chef Services',
      ];

  // Static headline parts
  const staticStart = language === 'es' ? 'Experiencias' : 'Private';
  const staticEnd = language === 'es' ? 'Creadas con Precisión' : 'Crafted with Precision';

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - B&W Chef Image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-10" />
        {/* Placeholder for B&W chef image - using gradient as placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-background/60" />
      </motion.div>

      {/* Colorful Plate Overlay */}
      <motion.div
        style={{ scale: plateScale, y: plateY }}
        className="absolute right-[5%] md:right-[10%] top-[15%] md:top-[20%] w-[200px] md:w-[350px] lg:w-[450px] z-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Gourmet dish"
            className="w-full h-auto rounded-full shadow-2xl"
          />
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20" />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="container-premium relative z-30 pt-20"
      >
        <div className="max-w-3xl">
          {/* Pre-headline */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-6"
          >
            Park City, Utah
          </motion.p>

          {/* Main Headline with FlipText */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-display-lg md:text-display-xl font-light leading-[0.95] mb-8"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5ch', alignItems: 'center' }}
          >
            <span style={{ whiteSpace: 'pre' }}>{staticStart} </span>
            <FlipText
              phrases={flipPhrases}
              interval={5000}
              className="hero-flip-text"
              ariaLabel={flipPhrases.join(', ')}
            />
            <span style={{ whiteSpace: 'pre' }}> {staticEnd}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl"
          >
            {t('hero.subheadline')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 text-sm tracking-wider uppercase transition-all duration-500 hover:bg-foreground/90"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>{t('hero.cta')}</span>
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
          {t('hero.scroll')}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
