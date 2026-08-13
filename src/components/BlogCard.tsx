import { Link } from "react-router-dom";
import type { BlogPost } from "../data/blogPosts";

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  return (
    <article className="rounded-xl border bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
      <Link to={`/blog/${post.slug}`} className="block">
        <img src={post.image} alt={post.imageAlt} className="w-full h-40 object-cover" loading="lazy" />
      </Link>
      <div className="p-4">
        <p className="text-xs uppercase text-orange-500 font-semibold">{post.category}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>{post.readTime}</span>
        </div>
        <div className="mt-4">
          <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
            Read Article
          </Link>
        </div>
      </div>
    </article>
  );
}
