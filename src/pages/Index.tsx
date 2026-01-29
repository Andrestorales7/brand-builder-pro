import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Services from '@/components/landing/Services';
import Experience from '@/components/landing/Experience';
import Skills from '@/components/landing/Skills';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import { Skiper52 } from '@/components/landing/Skiper52';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          {/* Gallery Section - Skiper52 */}
          <section id="gallery" className="w-full bg-[#f5f4f3]">
            <Skiper52 />
          </section>
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
