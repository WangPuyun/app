import { LanguageProvider } from '@/hooks/useLanguage';
import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import PI from '@/sections/PI';
import Research from '@/sections/Research';
import Publications from '@/sections/Publications';
import Projects from '@/sections/Projects';
import Team from '@/sections/Team';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <PI />
          <Research />
          <Publications />
          <Projects />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
