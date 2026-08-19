import SEO from "../components/SEO";
import Projects from "../sections/Projects";

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="J.D. Enterprise Projects | Industrial Fabrication Gujarat"
        description="Explore completed industrial shed, PEB building, steel fabrication and warehouse construction projects delivered by J.D. Enterprise across Gujarat."
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
