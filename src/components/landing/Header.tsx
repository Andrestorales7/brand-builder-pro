import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  interface NavItem {
    key: string;
    href: string;
    type: 'scroll' | 'navigate';
  }

  const navItems: NavItem[] = [
    { key: 'nav.inicio', href: '/', type: 'navigate' },
    { key: 'nav.about', href: '#about', type: 'scroll' },
    { key: 'nav.services', href: '#services', type: 'scroll' },
    { key: 'nav.skills', href: '/SkillsPage', type: 'navigate' },
    { key: 'nav.contact', href: '#contact', type: 'scroll' },
  ];

  const handleNavigation = (href: string, type: 'scroll' | 'navigate') => {
    if (type === 'navigate') {
      navigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Name */}
          <motion.button
            onClick={() => handleNavigation('/', 'navigate')}
            className="flex items-center text-lg md:text-xl font-light tracking-wider uppercase bg-transparent border-none p-0 m-0 focus:outline-none"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
            aria-label={t('nav.inicio')}
            style={{ background: 'none' }}
          >
            <img
              src="/images/logo.jpeg"
              alt="Chef David Logo"
              className="h-16 w-auto object-contain mr-2 rounded-2xl shadow"
              style={{ maxHeight: '4rem' }}
            />
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.key}
                onClick={() => handleNavigation(item.href, item.type)}
                className="editorial-link text-sm tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {t(item.key)}
              </motion.button>
            ))}
          </nav>

          {/* Language Toggle + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center border border-border rounded-sm overflow-hidden">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-all duration-300 ${
                  language === 'es'
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ES
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.href, item.type)}
                className="block w-full text-left text-lg tracking-wide text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
