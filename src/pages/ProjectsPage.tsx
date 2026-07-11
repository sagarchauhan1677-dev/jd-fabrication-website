import SEO from "../components/SEO";
import Projects from "../sections/Projects";

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects | J.D Enterprise"
        description="Explore completed industrial shed, PEB building, steel fabrication and warehouse construction projects by J.D Enterprise across Ahmedabad and Gujarat."
        keywords="Industrial Shed Projects, Steel Fabrication Projects, PEB Building Projects, Warehouse Construction"
        url="https://jdfabrication.co.in/projects"
      />

      <main className="py-20">
        <Projects />
      </main>
    </>
  );
}