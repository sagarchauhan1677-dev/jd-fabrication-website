import SEO from "../components/SEO";
import { serviceSchema } from "../utils/schema";

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
import HomeSEOIntro from "../sections/HomeSEOIntro";

export default function Home() {
  return (
    <>
     <SEO
  title="Industrial Shed & Steel Fabrication Ahmedabad | J.D."
  description="Industrial shed construction and steel fabrication in Ahmedabad since 1996. PEB buildings, warehouses, roofing and MS fabrication. Get a free quote."
  keywords="industrial shed fabrication company in Ahmedabad, PEB building manufacturer in Gujarat, steel fabrication company in Ahmedabad, warehouse construction company in Gujarat"
  url="https://jdfabrication.co.in/"
  ogTitle="Industrial Shed & MS Fabrication Company Ahmedabad | J.D. Enterprise"
  ogDescription="Trusted industrial fabrication company in Ahmedabad, Gujarat delivering industrial sheds, PEB buildings, steel fabrication, warehouse construction and roofing solutions."
  imageAlt="Industrial fabrication and construction services by J.D. Enterprise in Ahmedabad, Gujarat"
  structuredData={serviceSchema}
/>
      <main className="space-y-24">
        <Hero />
        <About />
        <HomeSEOIntro />
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
