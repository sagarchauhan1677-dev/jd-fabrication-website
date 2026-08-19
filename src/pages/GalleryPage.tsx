import SEO from "../components/SEO";
import Gallery from "../sections/Gallery";

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="J.D. Enterprise Projects | Steel Fabrication Ahmedabad"
        description="Browse J.D. Enterprise project images featuring industrial sheds, PEB buildings, steel fabrication and warehouse construction work in Ahmedabad and Gujarat."
        keywords="industrial shed gallery Ahmedabad, steel fabrication project images Gujarat, PEB building gallery Ahmedabad, warehouse construction gallery Gujarat"
        url="https://jdfabrication.co.in/gallery"
        ogTitle="J.D. Enterprise Projects | Steel Fabrication Ahmedabad"
        ogDescription="Browse images of industrial fabrication and construction projects completed by J.D. Enterprise in Ahmedabad and Gujarat."
      />

      <main className="py-20">
        <h1 className="sr-only">J.D. Enterprise Industrial Shed and Steel Fabrication Gallery</h1>
        <Gallery />
      </main>
    </>
  );
}
