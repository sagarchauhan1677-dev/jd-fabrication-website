import BlogCard from "./BlogCard";
import { blogPosts } from "../data/blogPosts";

type Props = {
  currentSlug: string;
  category?: string;
};

export default function RelatedArticles({ currentSlug, category }: Props) {
  const related = blogPosts
    .filter((p) => p.slug !== currentSlug && (!category || p.category === category))
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-12">
      <h3 className="text-xl font-semibold">Related Articles</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map((r) => (
          <BlogCard key={r.slug} post={r} />
        ))}
      </div>
    </section>
  );
}
