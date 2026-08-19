import SEO from "../components/SEO";
import About from "../sections/About";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About J.D. Enterprise | Steel Fabricators Ahmedabad"
        description="Learn about J.D. Enterprise, a leading industrial fabrication and construction company in Ahmedabad, Gujarat established in 1996."
        keywords="about J.D. Enterprise, industrial fabrication Ahmedabad, steel fabrication company Ahmedabad, industrial shed contractor Gujarat"
        url="https://jdfabrication.co.in/about"
        ogTitle="About J.D. Enterprise | Steel Fabricators Ahmedabad"
        ogDescription="Learn about J.D. Enterprise, a leading industrial fabrication company in Ahmedabad, Gujarat with over 28 years of experience."
      />

      <main className="py-20">
        <h1 className="sr-only">About J.D. Enterprise – Steel Fabricators in Ahmedabad</h1>
        <About />
      </main>
    </>
  );
}
