import SEO from "../components/SEO";
import Contact from "../sections/Contact";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact J.D Enterprise | Ahmedabad Fabrication Company"
        description="Contact J.D Enterprise for industrial shed fabrication, PEB buildings, steel fabrication, warehouse construction and roofing services in Ahmedabad, Gujarat."
        keywords="contact J.D Enterprise, industrial shed contractor in Gujarat, PEB structure manufacturer Ahmedabad, structural steel contractor Gujarat"
        url="https://jdfabrication.co.in/contact"
        ogTitle="Contact J.D Enterprise | Ahmedabad Fabrication Company"
        ogDescription="Get in touch with J.D Enterprise for industrial fabrication, steel work and construction services across Ahmedabad and Gujarat."
      />

      <main className="py-20">
        <Contact />
      </main>
    </>
  );
}