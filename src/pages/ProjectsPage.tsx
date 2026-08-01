import SEO from "../components/SEO";
import Projects from "../sections/Projects";

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects | Industrial Fabrication Gujarat | J.D Enterprise"
        description="Explore completed industrial shed, PEB building, steel fabrication and warehouse construction projects delivered by J.D Enterprise in Gujarat."
        keywords="industrial fabrication projects Gujarat, steel fabrication projects Ahmedabad, warehouse construction project Gujarat, PEB building projects Ahmedabad"
        url="https://jdfabrication.co.in/projects"
        ogTitle="Projects | Industrial Fabrication Gujarat | J.D Enterprise"
        ogDescription="View recent industrial fabrication and construction projects completed by J.D Enterprise across Ahmedabad and Gujarat."
      />

      <main className="py-20">
        <Projects />
      </main>
    </>
  );
}