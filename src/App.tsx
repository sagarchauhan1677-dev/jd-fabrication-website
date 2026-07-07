import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import About from './sections/About';
import Goal from './sections/Goal';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Statistics from './sections/Statistics';
import Projects from './sections/Projects';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="space-y-24">
        <Hero />
        <About />
        <Goal />
        <Services />
        <WhyChooseUs />
        <Statistics />
        <Projects />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
