import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/app/lib/blog-posts";
import MinaFordonContent from "@/app/content/blog/mina-fordon-alternativ";
import BesiktningContent from "@/app/content/blog/besiktningschecklista-2026";
import ServicehistorikContent from "@/app/content/blog/servicehistorik-viktig";
import Footer from "@/app/components/Footer";

// Import blog content components

// Map slugs to their content components
const contentComponents: Record<string, React.ComponentType> = {
  "mina-fordon-alternativ": MinaFordonContent,
  "besiktningschecklista-2026": BesiktningContent,
  "servicehistorik-viktig": ServicehistorikContent,
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found | Autivo",
    };
  }

  return {
    title: `${post.title} | Autivo`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `https://autivo.se/blogg/${post.slug}`,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get other posts for "related posts" section
  const otherPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Hem
            </Link>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/blogg"
              className="hover:text-blue-600 transition-colors"
            >
              Blogg
            </Link>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-slate-900 font-medium">{post.category}</span>
          </div>

          {/* Category Badge */}
          <div className="mb-6">
            <span
              className={`inline-block px-5 py-2 bg-gradient-to-r ${post.categoryColor} text-white rounded-full text-sm font-semibold shadow-lg`}
            >
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <time>
                {new Date(post.date).toLocaleDateString("sv-SE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{post.readTime} läsning</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Placeholder for blog content - you'll fill this in later */}
        {/* Render the appropriate content component based on slug */}
        {(() => {
          const ContentComponent = contentComponents[post.slug];

          if (ContentComponent) {
            return <ContentComponent />;
          }

          // Fallback to placeholder if no content component exists
          return (
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  [Detta är en placeholder för blogginnehållet. Skapa en content
                  fil för detta inlägg i{" "}
                  <code>content/blog/{post.slug}.tsx</code>]
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Artikeln kommer att innehålla värdefullt innehåll om{" "}
                  {post.title.toLowerCase()}.
                </p>
              </div>
            </div>
          );
        })()}

        {/* CTA Box */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl text-white">
          <div className="text-center">
            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Börja dokumentera din bils historia idag
            </h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Prenumerera för nyheter
            </p>
            <Link
              href="/#waitlist"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Prenumerera
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Läs mer
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blogg/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                    {/* Image placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${relatedPost.categoryColor} opacity-10`}
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`inline-block px-3 py-1 bg-gradient-to-r ${relatedPost.categoryColor} text-white rounded-full text-xs font-semibold`}
                        >
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3
                        className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {relatedPost.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
