import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative py-0 bg-background border-t border-border overflow-hidden">
      {/* Imagen de fondo o principal del footer */}
      <div className="w-full h-[400px] md:h-[600px] relative">
        <img
          src="/images/footer.jpeg"
          alt="Footer background"
          className="w-full h-full object-cover object-center select-none pointer-events-none"
          draggable={false}
          style={{ filter: 'brightness(0.85)' }}
        />
        {/* Solo la imagen, sin textos superpuestos */}
      </div>
    </footer>
  );
};

export default Footer;
