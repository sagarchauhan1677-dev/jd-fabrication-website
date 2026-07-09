import SEO from "../components/SEO";
import Contact from "../sections/Contact";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact J.D Enterprise | Steel Fabrication Company Ahmedabad"
        description="Contact J.D Enterprise for Industrial Shed Fabrication, PEB Buildings, Steel Fabrication, Warehouse Construction, Roofing and Structural Steel projects in Ahmedabad, Gujarat."
        keywords="Contact J.D Enterprise, Steel Fabrication Ahmedabad, Industrial Shed Contractor Ahmedabad, PEB Building Company Gujarat"
        url="https://jdfabrication.co.in/contact"
      />

      <main className="py-20">
        <Contact />
      </main>
    </>
  );
}