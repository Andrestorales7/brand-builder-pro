import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Contact from '@/components/landing/Contact';

const ContactPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main>
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default ContactPage;
