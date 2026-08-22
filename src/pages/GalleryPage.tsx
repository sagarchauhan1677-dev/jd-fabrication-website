import SEO from "../components/SEO";
import Gallery from "../sections/Gallery";

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="Industrial Shed Projects Ahmedabad & Gujarat | J.D. Enterprise"
        description="See real industrial shed, MS fabrication, PEB, roofing and warehouse project photographs from J.D. Enterprise across Ahmedabad and Gujarat."
        keywords="industrial shed gallery Ahmedabad, steel fabrication project images Gujarat, PEB building gallery Ahmedabad, warehouse construction gallery Gujarat"
        url="https://jdfabrication.co.in/gallery"
        ogTitle="Industrial Shed & MS Fabrication Projects | J.D. Enterprise"
        ogDescription="Browse images of industrial fabrication and construction projects completed by J.D. Enterprise in Ahmedabad and Gujarat."
      />

      <main className="py-20">
        <h1 className="sr-only">J.D. Enterprise Industrial Shed and Steel Fabrication Gallery</h1>
        <Gallery />
      </main>
    </>
  );
}
