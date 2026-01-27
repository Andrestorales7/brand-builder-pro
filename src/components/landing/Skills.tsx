import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';
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

const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="section-padding bg-background">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            {t('skills.title')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display-sm font-light mb-6 max-w-2xl mx-auto"
          >
            {t('skills.subtitle')}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-px bg-foreground mx-auto"
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
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

export default Skills;
