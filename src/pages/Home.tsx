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
        title="Industrial Fabrication Company Ahmedabad | J.D. Enterprise"
        description="Industrial fabricators in Ahmedabad for industrial sheds, PEB buildings, MS and structural steel fabrication, warehouses, roofing and cladding across Gujarat since 1996."
        keywords="industrial fabricators in Ahmedabad, industrial fabrication company Ahmedabad, MS fabricator Ahmedabad, structural steel fabrication Ahmedabad, industrial shed fabrication company Ahmedabad, PEB building manufacturer Gujarat, warehouse construction Gujarat"
        url="https://jdfabrication.co.in/"
        ogTitle="Industrial Fabrication Company Ahmedabad | J.D. Enterprise"
        ogDescription="Industrial fabricators in Ahmedabad delivering industrial sheds, PEB buildings, MS and structural steel fabrication, warehouse construction, roofing and cladding across Gujarat."
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
