import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-[#F5F1EC] text-black"
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
                <a
                  href="tel:+14353287426"
                  className="text-lg hover:text-background/80 transition-colors"
                >
                  +1 435 328 7426
                </a>
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
            {/* WhatsApp Message Section ÚNICO (mezcla de formulario y WhatsApp) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 bg-background/90 rounded-2xl p-8 shadow-lg border border-background/20"
            >
              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-black">
                {t('contact.whatsappTitle')}
              </h3>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value || '';
                  const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value || '';
                  const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value || '';
                  let msg = '';
                  if (name) msg += `${t('contact.form.name')}: ${name}\n`;
                  if (email) msg += `${t('contact.form.email')}: ${email}\n`;
                  msg += `${t('contact.form.message')}: ${message}`;
                  const phone = '+14353287426';
                  const url = `https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(msg)}`;
                  window.open(url, '_blank');
                }}
                className="flex flex-col gap-4"
              >
                <label htmlFor="name" className="block text-xs tracking-[0.2em] uppercase text-black mb-3">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-transparent border-b border-black pb-3 text-lg text-black focus:border-black outline-none transition-colors placeholder:text-black/40"
                  placeholder="John Doe"
                  required
                />
                <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase text-black mb-3">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-transparent border-b border-black pb-3 text-lg text-black focus:border-black outline-none transition-colors placeholder:text-black/40"
                  placeholder="john@example.com"
                  required
                />
                <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase text-black mb-3">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-black pb-3 text-lg text-black focus:border-black outline-none transition-colors resize-none placeholder:text-black/40"
                  placeholder={t('contact.whatsappPlaceholder')}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white font-semibold py-4 rounded-lg text-lg flex items-center justify-center gap-2 hover:bg-neutral-900 transition-all mt-4"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.669.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.521.074-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.209 5.077 4.504.711.306 1.264.489 1.698.626.713.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.569-.347z" fill="currentColor"/></svg>
                  {t('contact.whatsappButton')}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
