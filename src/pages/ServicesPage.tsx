import SEO from "../components/SEO";
import Services from "../sections/Services";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Industrial Fabrication Services | J.D Enterprise"
        description="Industrial shed fabrication, PEB buildings, structural fabrication, warehouse construction and steel fabrication services in Ahmedabad."
        keywords="Industrial Shed, PEB Building, Steel Fabrication Ahmedabad"
        url="https://jdfabrication.co.in/services"
      />

      <main className="py-20">
        <Services />
      </main>
    </>
  );
}