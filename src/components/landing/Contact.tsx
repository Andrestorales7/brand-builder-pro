import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual only - no actual submission
    console.log('Form submitted (visual only):', formState);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-foreground text-background"
    >
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Section Header */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs tracking-[0.3em] uppercase text-background/60 mb-4"
            >
              {t('contact.title')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-display-md font-light mb-8"
            >
              {t('contact.subtitle')}
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-16 h-px bg-background/30 mb-12 origin-left"
            />

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <MapPin size={20} className="text-background/60" />
                <span className="text-lg">{t('contact.location')}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <Phone size={20} className="text-background/60" />
                <div className="flex flex-col">
                  <a
                    href="tel:+14353287426"
                    className="text-lg hover:text-background/80 transition-colors"
                  >
                    +1 435 328 7426
                  </a>
                  <a
                    href="tel:435-327-8939"
                    className="text-base text-background/60 hover:text-background/80 transition-colors"
                  >
                    435-327-8939
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-4"
              >
                <Mail size={20} className="text-background/60" />
                <a
                  href="mailto:rolo2309@hotmail.com"
                  className="text-lg hover:text-background/80 transition-colors"
                >
                  rolo2309@hotmail.com
                </a>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              href="mailto:rolo2309@hotmail.com"
              className="group inline-flex items-center gap-4 border border-background px-8 py-4 text-sm tracking-wider uppercase transition-all duration-500 hover:bg-background hover:text-foreground"
            >
              <span>{t('contact.cta')}</span>
              <motion.span
                className="inline-block"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label
                  htmlFor="name"
                  className="block text-xs tracking-[0.2em] uppercase text-background/60 mb-3"
                >
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-background/30 pb-3 text-lg focus:border-background outline-none transition-colors placeholder:text-background/30"
                  placeholder="John Doe"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className="block text-xs tracking-[0.2em] uppercase text-background/60 mb-3"
                >
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-background/30 pb-3 text-lg focus:border-background outline-none transition-colors placeholder:text-background/30"
                  placeholder="john@example.com"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.2em] uppercase text-background/60 mb-3"
                >
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-background/30 pb-3 text-lg focus:border-background outline-none transition-colors resize-none placeholder:text-background/30"
                  placeholder="I'm planning a private dinner for 8 guests..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-background text-foreground py-4 text-sm tracking-wider uppercase transition-all duration-500 hover:bg-background/90"
              >
                {t('contact.form.submit')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
