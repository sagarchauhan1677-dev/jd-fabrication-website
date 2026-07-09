import SEO from "../components/SEO";
import About from "../sections/About";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About J.D Enterprise | Steel Fabrication Company in Ahmedabad"
        description="J.D Enterprise is one of Gujarat's trusted steel fabrication, industrial shed, structural fabrication and warehouse construction companies with over 28 years of experience delivering quality engineering solutions."
        keywords="About J.D Enterprise, Steel Fabrication Ahmedabad, Industrial Fabrication Gujarat, Structural Fabrication, Industrial Shed Company"
        url="https://jdfabrication.co.in/about"
      />

      <main className="py-20">
        <About />
      </main>
    </>
  );
}