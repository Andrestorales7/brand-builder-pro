import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Experience from '@/components/landing/Experience';
import BookingCalendar from '@/components/landing/BookingCalendar';
import Footer from '@/components/landing/Footer';
import { Skiper52 } from '@/components/landing/Skiper52';
import Services from '@/components/landing/Services';
import HomeChefIntro from '@/components/landing/HomeChefIntro';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          {/* HomeChefIntro debajo de About */}
          <HomeChefIntro />
          
          {/* Gallery Section - Skiper52 */}
          <section id="gallery" className="w-full bg-[#f5f4f3]">
            <Skiper52 />
          </section>
          <Services />
          {/* <Contact /> eliminado para que solo esté en su propia vista */}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
