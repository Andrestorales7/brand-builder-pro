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
    'nav.inicio': 'Home',
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
    'services.title': 'Our Services',
    'services.description': 'A professional chef cooks in your home every week, preparing all your meals in advance. We design healthy, balanced, and flavorful menus so you can enjoy high-quality nutrition without spending time cooking.',
    'services.cooking.title': 'We Cook the Week for You',
    'services.cooking.content': 'We handle menu planning, ingredient shopping, meal preparation, and organization. In just a few hours, your kitchen is stocked with meals prepared for the entire week, neatly organized and labeled for convenience.',
    'services.benefits.title': 'Service Benefits',
    'services.benefits.save_time.title': 'Save Time',
    'services.benefits.save_time.content': 'Free yourself from daily cooking and make better use of your time while we take care of everything.',
    'services.benefits.eat_healthy.title': 'Eat Healthy',
    'services.benefits.eat_healthy.content': 'Complete and balanced menus tailored to your tastes, nutritional needs, and lifestyle.',
    'services.benefits.live_freely.title': 'Live More Freely',
    'services.benefits.live_freely.content': 'Focus on what truly matters while a professional chef prepares your meals at home.',
    'services.details.title': 'Attention to Every Detail',
    'services.details.point1': 'Fresh, high-quality ingredients',
    'services.details.point2': 'The chef cooks directly in your kitchen, tailored to your taste',
    'services.details.point3': 'Meals organized and labeled for the entire week',
    'services.experience.title': 'The Personal Chef Experience',
    'services.experience.content': 'Every week, enjoy the peace of mind of having a personal chef who adapts to your lifestyle and turns healthy eating into an effortless experience.',
    
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

    // HomeChefIntro
    'homechefintro.title': 'What is HomeChef Weekly?',
    'homechefintro.description': 'HomeChef Weekly offers the service of a professional private chef, bringing you an exclusive and healthy culinary experience directly to your home.',
    'homechefintro.check1': 'Chef in your home',
    'homechefintro.check2': 'Meals ready for the week',
    'homechefintro.check3': 'Order, cleanliness, labels',
    'homechefintro.chefAlt': 'Chef cooking',
    'homechefintro.mealPrepAlt': 'Meal prep containers',
    'homechefintro.fridgeAlt': 'Organized containers in fridge',
    'homechefintro.bottomText': 'Enjoy balanced, exclusive, and ready-to-heat meals served by a professional chef who adapts to your taste and lifestyle.',
    'homechefintro.logoAlt': 'HomeChef Logo',

    // Booking/Calendar
    'booking.title': 'Reserve Your Private Experience',
    'booking.desc': 'Select a date and time for your exclusive culinary event. Reservations are confirmed instantly and dates are blocked in real time.',
    'booking.days.0': 'Sun',
    'booking.days.1': 'Mon',
    'booking.days.2': 'Tue',
    'booking.days.3': 'Wed',
    'booking.days.4': 'Thu',
    'booking.days.5': 'Fri',
    'booking.days.6': 'Sat',
    'booking.selected': 'Selected date',
    'booking.name': 'Full Name',
    'booking.email': 'Email',
    'booking.phone': 'Phone',
    'booking.confirm': 'Confirm Reservation',
    'booking.back': 'Back',
    'booking.success': 'Reservation confirmed! We look forward to serving you.',
    'booking.errorRequired': 'All fields and a time slot are required.',
    'booking.errorTaken': 'This time slot is already booked. Please choose another.',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre Mí',
    'nav.services': 'Servicios',
    'nav.inicio': 'Inicio',
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
    'services.title': 'Nuestros Servicios',
    'services.description': 'Un chef profesional cocina cada semana directamente en tu hogar, dejando todas tus comidas listas para la semana. Diseñamos menús saludables, equilibrados y deliciosos para que disfrutes de una alimentación de calidad sin perder tiempo en la cocina.',
    'services.cooking.title': 'Cocinamos la semana por ti',
    'services.cooking.content': 'Nos encargamos de la planificación, compra de ingredientes, preparación y organización de las comidas. En pocas horas, tu cocina queda lista con platos preparados para toda la semana, organizados y etiquetados para tu comodidad.',
    'services.benefits.title': 'Beneficios del servicio',
    'services.benefits.save_time.title': 'Ahorra tiempo',
    'services.benefits.save_time.content': 'Libérate de la rutina diaria de cocinar y aprovecha mejor tu semana mientras nosotros nos encargamos de todo.',
    'services.benefits.eat_healthy.title': 'Come saludable',
    'services.benefits.eat_healthy.content': 'Menús completos y balanceados, adaptados a tus gustos, necesidades nutricionales y estilo de vida.',
    'services.benefits.live_freely.title': 'Vive con más libertad',
    'services.benefits.live_freely.content': 'Dedica tu tiempo a lo que realmente importa mientras un chef profesional cocina por ti en casa.',
    'services.details.title': 'Cuidamos cada detalle',
    'services.details.point1': 'Ingredientes frescos de alta calidad',
    'services.details.point2': 'El chef cocina en tu propia cocina, a tu gusto',
    'services.details.point3': 'Comidas organizadas y etiquetadas para toda la semana',
    'services.experience.title': 'La experiencia de un chef personal',
    'services.experience.content': 'Cada semana disfruta la tranquilidad de contar con un chef personal que se adapta a tu estilo de vida y transforma tu alimentación en una experiencia práctica y saludable.',
    
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

    // HomeChefIntro
    'homechefintro.title': '¿Qué es HomeChef Weekly?',
    'homechefintro.description': 'HomeChef Weekly ofrece el servicio de un chef privado profesional, llevándote una experiencia culinaria exclusiva y saludable directamente a tu hogar.',
    'homechefintro.check1': 'Chef en tu hogar',
    'homechefintro.check2': 'Comidas listas para la semana',
    'homechefintro.check3': 'Orden, limpieza, etiquetas',
    'homechefintro.chefAlt': 'Chef cocinando',
    'homechefintro.mealPrepAlt': 'Recipientes de meal prep',
    'homechefintro.fridgeAlt': 'Recipientes organizados en refrigerador',
    'homechefintro.bottomText': 'Disfruta de comidas balanceadas, exclusivas y listas para calentar servidas por un chef profesional que se adapta a tu gusto y ritmo de vida.',
    'homechefintro.logoAlt': 'Logo HomeChef',

    // Booking/Calendar
    'booking.title': 'Reserva tu experiencia privada',
    'booking.desc': 'Selecciona fecha y horario para tu evento culinario exclusivo. Las reservas se confirman al instante y las fechas se bloquean en tiempo real.',
    'booking.days.0': 'Dom',
    'booking.days.1': 'Lun',
    'booking.days.2': 'Mar',
    'booking.days.3': 'Mié',
    'booking.days.4': 'Jue',
    'booking.days.5': 'Vie',
    'booking.days.6': 'Sáb',
    'booking.selected': 'Fecha seleccionada',
    'booking.name': 'Nombre completo',
    'booking.email': 'Correo electrónico',
    'booking.phone': 'Teléfono',
    'booking.confirm': 'Confirmar reserva',
    'booking.back': 'Volver',
    'booking.success': '¡Reserva confirmada! Será un placer atenderte.',
    'booking.errorRequired': 'Todos los campos y un horario son obligatorios.',
    'booking.errorTaken': 'Ese horario ya está reservado. Elige otro.',
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
