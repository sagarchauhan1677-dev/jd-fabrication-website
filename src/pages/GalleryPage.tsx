import SEO from "../components/SEO";
import Gallery from "../sections/Gallery";

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="Gallery | J.D Enterprise"
        description="Explore our completed industrial shed, steel fabrication, PEB building and warehouse construction projects across Ahmedabad and Gujarat."
        keywords="Industrial Shed Gallery, Steel Fabrication Projects, PEB Building Gallery, Warehouse Construction Ahmedabad"
        url="https://jdfabrication.co.in/gallery"
      />

      <main className="py-20">
        <Gallery />
      </main>
    </>
  );
}