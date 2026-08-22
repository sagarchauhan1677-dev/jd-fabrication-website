import SEO from "../components/SEO";
import Projects from "../sections/Projects";

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="MS Fabrication & Industrial Shed Projects Gujarat | J.D. Enterprise"
        description="Explore J.D. Enterprise project experience in Ahmedabad, Sanand, Changodar, Chhatral and Vadodara, including industrial sheds, PEB and MS fabrication."
        keywords="industrial fabrication projects Gujarat, steel fabrication projects Ahmedabad, warehouse construction project Gujarat, PEB building projects Ahmedabad"
        url="https://jdfabrication.co.in/projects"
        ogTitle="J.D. Enterprise Projects | Industrial Fabrication Gujarat"
        ogDescription="View industrial fabrication and construction projects completed by J.D. Enterprise across Ahmedabad and Gujarat."
      />

      <main className="py-20">
        <h1 className="sr-only">J.D. Enterprise Industrial Fabrication Projects in Gujarat</h1>
        <Projects />
      </main>
    </>
  );
}
