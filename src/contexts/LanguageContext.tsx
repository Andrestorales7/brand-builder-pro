import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.headline': 'Private Culinary Experiences, Crafted with Precision',
    'hero.subheadline': 'Executive & Private Chef Services in Park City, Utah',
    'hero.cta': 'Book a Private Experience',
    'hero.scroll': 'Scroll to explore',
    
    // About
    'about.title': 'About',
    'about.name': 'David Sanchez Amarilla',
    'about.role': 'Kitchen Professional / Sous Chef',
    'about.bio.1': 'With extensive experience in luxury resort and restaurant kitchens across Park City and the Heber Valley, I bring refined culinary expertise directly to discerning clients seeking exceptional private dining experiences.',
    'about.bio.2': 'My background spans from line cooking at prestigious establishments like Waldorf Astoria and Ruth\'s Chris to leading kitchen operations as Sous Chef, overseeing daily operations and staff coordination.',
    'about.bio.3': 'Currently operating my own culinary business, I combine hands-on kitchen execution with thoughtful management—delivering personalized, discreet, and unforgettable dining experiences for clients who value excellence.',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Tailored culinary solutions for the most discerning palates',
    'services.private.title': 'Private Chef',
    'services.private.desc': 'Personalized in-home dining experiences for luxury residences, vacation properties, and intimate gatherings.',
    'services.executive.title': 'Executive Chef',
    'services.executive.desc': 'Strategic kitchen leadership and menu development for high-end events and corporate engagements.',
    'services.hourly.title': 'Hourly Arrangements',
    'services.hourly.desc': 'Flexible scheduling for ongoing support, special occasions, or trial experiences.',
    'services.longterm.title': 'Long-Term Engagements',
    'services.longterm.desc': 'Dedicated culinary partnership for seasonal residents, estates, and extended stays.',
    'services.note': 'All services emphasize discretion, personalization, and exceptional quality.',
    
    // Experience
    'experience.title': 'Experience',
    'experience.present': 'Present',
    'experience.1.title': 'Business Owner / Kitchen Operator',
    'experience.1.location': 'Utah',
    'experience.1.desc': 'Operating personal culinary venture, combining kitchen execution with business management.',
    'experience.2.title': 'Sous Chef',
    'experience.2.location': 'Homestead Resort (Pool Kitchen), Midway, UT',
    'experience.2.desc': 'Oversaw daily kitchen operations and staff coordination in a luxury resort setting.',
    'experience.3.title': 'Sous Chef',
    'experience.3.location': 'The Hub, Heber City, UT',
    'experience.3.desc': 'Led kitchen team and managed high-volume service with attention to quality.',
    'experience.4.title': 'Line Cook',
    'experience.4.location': 'Waldorf Astoria & Pendry, Park City, UT',
    'experience.4.desc': 'Executed refined dishes in world-class hospitality environments.',
    'experience.5.title': 'Line Cook',
    'experience.5.location': 'Ruth\'s Chris Steak House, Park City, UT',
    'experience.5.desc': 'Mastered precision cooking at a premier steakhouse known for excellence.',
    
    // Skills
    'skills.title': 'Skills',
    'skills.subtitle': 'Core competencies developed through years of professional kitchen experience',
    'skills.1': 'Line Cooking',
    'skills.2': 'Food Preparation',
    'skills.3': 'Kitchen Operations',
    'skills.4': 'Staff Supervision',
    'skills.5': 'Inventory Management',
    'skills.6': 'Food Safety & Sanitation',
    'skills.7': 'Time Management',
    'skills.8': 'Menu Development',
    
    // Languages
    'languages.title': 'Languages',
    'languages.spanish': 'Spanish',
    'languages.spanish.level': 'Native',
    'languages.english': 'English',
    'languages.english.level': 'Intermediate',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Begin your culinary journey',
    'contact.location': 'Heber City, Utah',
    'contact.cta': 'Request Availability',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Tell me about your event or needs',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.copyright': '© 2025 David Sanchez Amarilla. All rights reserved.',
    'footer.tagline': 'Private Culinary Excellence',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre Mí',
    'nav.services': 'Servicios',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.headline': 'Experiencias Culinarias Privadas, Creadas con Precisión',
    'hero.subheadline': 'Servicios de Chef Ejecutivo y Privado en Park City, Utah',
    'hero.cta': 'Reservar Experiencia Privada',
    'hero.scroll': 'Desplázate para explorar',
    
    // About
    'about.title': 'Sobre Mí',
    'about.name': 'David Sanchez Amarilla',
    'about.role': 'Profesional de Cocina / Sous Chef',
    'about.bio.1': 'Con amplia experiencia en cocinas de resorts de lujo y restaurantes en Park City y Heber Valley, llevo mi refinada experiencia culinaria directamente a clientes exigentes que buscan experiencias gastronómicas privadas excepcionales.',
    'about.bio.2': 'Mi trayectoria abarca desde cocinero de línea en establecimientos prestigiosos como Waldorf Astoria y Ruth\'s Chris hasta liderar operaciones de cocina como Sous Chef, supervisando las operaciones diarias y la coordinación del personal.',
    'about.bio.3': 'Actualmente operando mi propio negocio culinario, combino la ejecución práctica en cocina con una gestión reflexiva—ofreciendo experiencias gastronómicas personalizadas, discretas e inolvidables para clientes que valoran la excelencia.',
    
    // Services
    'services.title': 'Servicios',
    'services.subtitle': 'Soluciones culinarias a medida para los paladares más exigentes',
    'services.private.title': 'Chef Privado',
    'services.private.desc': 'Experiencias gastronómicas personalizadas en el hogar para residencias de lujo, propiedades vacacionales y reuniones íntimas.',
    'services.executive.title': 'Chef Ejecutivo',
    'services.executive.desc': 'Liderazgo estratégico de cocina y desarrollo de menús para eventos de alto nivel y compromisos corporativos.',
    'services.hourly.title': 'Acuerdos por Hora',
    'services.hourly.desc': 'Programación flexible para apoyo continuo, ocasiones especiales o experiencias de prueba.',
    'services.longterm.title': 'Compromisos a Largo Plazo',
    'services.longterm.desc': 'Asociación culinaria dedicada para residentes de temporada, fincas y estancias prolongadas.',
    'services.note': 'Todos los servicios enfatizan discreción, personalización y calidad excepcional.',
    
    // Experience
    'experience.title': 'Experiencia',
    'experience.present': 'Presente',
    'experience.1.title': 'Propietario / Operador de Cocina',
    'experience.1.location': 'Utah',
    'experience.1.desc': 'Operando emprendimiento culinario personal, combinando ejecución en cocina con gestión empresarial.',
    'experience.2.title': 'Sous Chef',
    'experience.2.location': 'Homestead Resort (Pool Kitchen), Midway, UT',
    'experience.2.desc': 'Supervisé las operaciones diarias de cocina y coordinación de personal en un entorno de resort de lujo.',
    'experience.3.title': 'Sous Chef',
    'experience.3.location': 'The Hub, Heber City, UT',
    'experience.3.desc': 'Lideré el equipo de cocina y gestioné servicio de alto volumen con atención a la calidad.',
    'experience.4.title': 'Cocinero de Línea',
    'experience.4.location': 'Waldorf Astoria & Pendry, Park City, UT',
    'experience.4.desc': 'Ejecuté platos refinados en entornos de hospitalidad de clase mundial.',
    'experience.5.title': 'Cocinero de Línea',
    'experience.5.location': 'Ruth\'s Chris Steak House, Park City, UT',
    'experience.5.desc': 'Dominé la cocina de precisión en una steakhouse premier conocida por su excelencia.',
    
    // Skills
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Competencias centrales desarrolladas a través de años de experiencia profesional en cocina',
    'skills.1': 'Cocina de Línea',
    'skills.2': 'Preparación de Alimentos',
    'skills.3': 'Operaciones de Cocina',
    'skills.4': 'Supervisión de Personal',
    'skills.5': 'Gestión de Inventario',
    'skills.6': 'Seguridad e Higiene Alimentaria',
    'skills.7': 'Gestión del Tiempo',
    'skills.8': 'Desarrollo de Menús',
    
    // Languages
    'languages.title': 'Idiomas',
    'languages.spanish': 'Español',
    'languages.spanish.level': 'Nativo',
    'languages.english': 'Inglés',
    'languages.english.level': 'Intermedio',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Comienza tu viaje culinario',
    'contact.location': 'Heber City, Utah',
    'contact.cta': 'Consultar Disponibilidad',
    'contact.form.name': 'Tu Nombre',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.message': 'Cuéntame sobre tu evento o necesidades',
    'contact.form.submit': 'Enviar Mensaje',
    
    // Footer
    'footer.copyright': '© 2025 David Sanchez Amarilla. Todos los derechos reservados.',
    'footer.tagline': 'Excelencia Culinaria Privada',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
