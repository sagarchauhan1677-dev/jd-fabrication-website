import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";
import ServiceCTA from "../components/service-pages/ServiceCTA";
import RelatedArticles from "../components/RelatedArticles";

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  const { contentWithIds, toc } = useMemo(() => {
    if (!post) return { contentWithIds: "", toc: [] as { id: string; text: string; level: number }[] };
    let html = post.content;
    const tocItems: { id: string; text: string; level: number }[] = [];

    html = html.replace(/<(h[23])>(.*?)<\/\1>/g, (_match, tag, inner) => {
      const text = inner.replace(/<[^>]+>/g, "");
      const id = slugifyHeading(text);
      // only add H2 headings to the main table of contents
      if (tag === "h2") {
        tocItems.push({ id, text, level: 2 });
      }
      return `<${tag} id=\"${id}\">${inner}</${tag}>`;
    });

    return { contentWithIds: html, toc: tocItems };
  }, [post]);

  if (!post) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-24">
        <p>Article not found.</p>
        <p>
          <Link to="/blog">Back to blog</Link>
        </p>
      </main>
    );
  }

  const canonical = `https://jdfabrication.co.in/blog/${post.slug}`;

  const blogPostingSchema = {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: [new URL(post.image, "https://jdfabrication.co.in").toString()],
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: { "@type": "Organization", name: "J.D. Enterprise", url: "https://jdfabrication.co.in/" },
    publisher: { "@type": "Organization", name: "J.D. Enterprise", logo: { "@type": "ImageObject", url: "https://jdfabrication.co.in/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://jdfabrication.co.in/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://jdfabrication.co.in/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  };

  // Add FAQ structured data for this specific article
  const faqSchema = post.slug === "industrial-shed-construction-cost-ahmedabad" ? {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does an industrial shed cost in Ahmedabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no single fixed price. Preliminary planning ranges are provided in the article — final cost depends on span, height, steel tonnage, roofing, foundations and site logistics."
        }
      },
      {
        "@type": "Question",
        name: "What affects industrial shed construction cost the most?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Structural steel quantity (tonnage), clear span, eave height, crane loads and foundation complexity are typically the largest cost drivers."
        }
      },
      {
        "@type": "Question",
        name: "Does industrial shed cost include foundations and flooring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Inclusions vary by quotation. Many contractors itemise foundations and flooring separately — confirm scope when requesting a quotation."
        }
      },
      {
        "@type": "Question",
        name: "Does an EOT crane increase shed cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Provision for an EOT crane generally requires stronger structural members, additional bracing and deeper foundations, which increases cost."
        }
      },
      {
        "@type": "Question",
        name: "How long does industrial shed construction take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timelines depend on project size, fabrication lead times, site readiness and erection scope. Small to mid-size projects often take several weeks to a few months."
        }
      },
      {
        "@type": "Question",
        name: "What information is required for an industrial shed quotation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Provide length, width, clear height, location, intended use, crane requirement, roofing preference and any available drawings or site photos. A soil report helps with foundation pricing."
        }
      },
      {
        "@type": "Question",
        name: "Can J.D. Enterprise provide a BOQ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — a detailed BOQ can be prepared after structural design and scope are sufficiently defined."
        }
      }
    ]
  } : null;

  return (
    <>
      <SEO
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        url={canonical}
        type="article"
        structuredData={faqSchema ? [blogPostingSchema, breadcrumbSchema, faqSchema] : [blogPostingSchema, breadcrumbSchema]}
      />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <nav className="text-sm text-slate-500">Home &gt; <Link to="/blog">Blog</Link> &gt; {post.title}</nav>

        <article className="mt-6">
          <header>
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>{post.category}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              {post.updatedDate && <><span>•</span><span>Updated {new Date(post.updatedDate).toLocaleDateString()}</span></>}
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </header>

          {post.image && (
            <figure className="mt-6">
              <img src={post.image} alt={post.imageAlt} className="w-full h-64 object-cover rounded-xl" loading="eager" decoding="async" />
            </figure>
          )}

          <div className="mt-8 lg:flex gap-8">
            {toc.length > 0 && (
              <aside className="hidden lg:block w-60 sticky top-28 h-fit">
                <div className="rounded-lg border bg-white p-4 text-sm shadow">
                  <div className="font-semibold text-slate-700">Contents</div>
                  <ul className="mt-3 space-y-2">
                    {toc.map((t) => (
                      <li key={t.id} className={`pl-${t.level === 3 ? "4" : "0"}`}>
                        <a href={`#${t.id}`} className="text-slate-600 hover:text-orange-600">{t.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}

            <div className="prose max-w-none prose-slate">
              {contentWithIds.includes("<!-- CTA-MID -->") ? (
                (() => {
                  const parts = contentWithIds.split("<!-- CTA-MID -->");
                  return (
                    <>
                      <div dangerouslySetInnerHTML={{ __html: parts[0] }} />
                      <div className="my-8">
                        <ServiceCTA
                          title="Planning an Industrial Shed Project?"
                          description="J.D. Enterprise provides industrial shed fabrication, PEB structures, roofing, structural steel fabrication and warehouse solutions across Ahmedabad and Gujarat."
                          buttonLabel="Request Free Quotation"
                          buttonTo="/contact"
                        />
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: parts[1] }} />
                    </>
                  );
                })()
              ) : (
                <div dangerouslySetInnerHTML={{ __html: contentWithIds }} />
              )}

              <div className="mt-8">
                <ServiceCTA
                  title="Get a Project-Specific Quotation"
                  description="Contact us for detailed estimates, site visits and technical clarifications."
                  buttonLabel="Request Free Quotation"
                  buttonTo="/contact"
                />
              </div>

              <RelatedArticles currentSlug={post.slug} category={post.category} />
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
