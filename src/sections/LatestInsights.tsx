import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function LatestInsights() {
  const latest = blogPosts.slice(0, 3);
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Latest Insights</h2>
        <Link to="/blog" className="text-sm text-orange-600 font-semibold">View All Articles</Link>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {latest.map((p) => (
          <article key={p.slug} className="rounded-xl border bg-white p-4 shadow-sm">
            <Link to={`/blog/${p.slug}`} className="block">
              <img src={p.image} alt={p.imageAlt} className="w-full h-36 object-cover rounded-md" loading="lazy" />
            </Link>
            <p className="mt-3 text-xs uppercase text-orange-500 font-semibold">{p.category}</p>
            <h3 className="mt-2 text-lg font-semibold"><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
            <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
            <div className="mt-4">
              <Link to={`/blog/${p.slug}`} className="text-sm font-semibold text-orange-600">Read Article</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
