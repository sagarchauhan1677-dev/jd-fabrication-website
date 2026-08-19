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
import LatestInsights from "../sections/LatestInsights";

export default function Home() {
  return (
    <>
     <SEO
  title="J.D. Enterprise | Industrial Shed Fabrication Ahmedabad"
  description="J.D. Enterprise provides industrial shed fabrication, PEB buildings, MS steel fabrication, warehouse construction, roofing and cladding across Ahmedabad and Gujarat since 1996."
  keywords="industrial shed fabrication company in Ahmedabad, PEB building manufacturer in Gujarat, steel fabrication company in Ahmedabad, warehouse construction company in Gujarat"
  url="https://jdfabrication.co.in/"
  ogTitle="J.D. Enterprise | Industrial Shed Fabrication Ahmedabad"
  ogDescription="Trusted industrial fabrication company in Ahmedabad, Gujarat delivering industrial sheds, PEB buildings, steel fabrication, warehouse construction and roofing solutions."
  imageAlt="Industrial fabrication and construction services by J.D. Enterprise in Ahmedabad, Gujarat"
/>
      <main className="space-y-24">
        <Hero />
        <About />
        <Goal />
        <Services />
        <WhyChooseUs />
        <Statistics />
        <Projects />
        <LatestInsights />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
