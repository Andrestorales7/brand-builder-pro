import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container-premium">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-lg font-light tracking-wider uppercase mb-1">
              David Sanchez Amarilla
            </p>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              {t('footer.tagline')}
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs text-muted-foreground tracking-wide"
          >
            {t('footer.copyright')}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
