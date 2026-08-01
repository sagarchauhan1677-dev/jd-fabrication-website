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
  title="Industrial Shed Fabrication Company Ahmedabad | J.D Enterprise"
  description="J.D Enterprise is a trusted industrial fabrication company in Ahmedabad, Gujarat offering industrial sheds, PEB buildings, steel fabrication, warehouse construction and roofing solutions."
  keywords="industrial shed fabrication company in Ahmedabad, PEB building manufacturer in Gujarat, steel fabrication company in Ahmedabad, warehouse construction company in Gujarat"
  url="https://jdfabrication.co.in/"
  ogTitle="Industrial Shed Fabrication Company Ahmedabad | J.D Enterprise"
  ogDescription="Trusted industrial fabrication company in Ahmedabad, Gujarat delivering industrial sheds, PEB buildings, steel fabrication, warehouse construction and roofing solutions."
  imageAlt="Industrial fabrication and construction services by J.D Enterprise in Ahmedabad, Gujarat"
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