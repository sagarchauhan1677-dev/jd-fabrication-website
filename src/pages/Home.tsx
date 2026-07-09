import SEO from "../components/SEO";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Goal from "../sections/Goal";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";
import Statistics from "../sections/Statistics";
import Projects from "../sections/Projects";
import Gallery from "../sections/Gallery";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
     <SEO
  title="Industrial Shed Fabrication Company | J.D Enterprise"
  description="J.D Enterprise is a leading industrial fabrication company in India specializing in Industrial Sheds, PEB Buildings, Steel Fabrication, Warehouse Construction, Roofing Solutions and Custom Engineering with 28+ years of experience."
  keywords="Industrial Shed, PEB Building, Steel Fabrication, Warehouse Construction, Roofing, Industrial Structure, J.D Enterprise, Ahmedabad, Gujarat, India"
  url="https://jdfabrication.co.in/"
/>
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
    </>
  );
}