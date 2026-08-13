import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";
import BlogCard from "../components/BlogCard";
import ServiceCTA from "../components/service-pages/ServiceCTA";

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Industrial Fabrication & Construction Blog | J.D. Enterprise"
        description="Expert insights and practical guides about industrial sheds, PEB buildings, steel fabrication, warehouse construction and roofing from J.D. Enterprise."
        url="https://jdfabrication.co.in/blog"
      />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <nav className="text-sm text-slate-500">Home &gt; Blog</nav>
        <header className="mt-6">
          <h1 className="text-3xl font-bold">Industrial Fabrication & Construction Blog</h1>
          <p className="mt-2 text-slate-600">Expert insights, practical guides and project knowledge about industrial sheds, PEB buildings, steel fabrication, warehouse construction, roofing and structural engineering from J.D. Enterprise.</p>
        </header>

        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>

        <div className="mt-12">
          <ServiceCTA
            title="Planning an Industrial Project?"
            description="Need an industrial shed, PEB building, warehouse or structural fabrication solution?"
            buttonLabel="Get Free Quotation"
            buttonTo="/contact"
          />
        </div>
      </main>
    </>
  );
}
