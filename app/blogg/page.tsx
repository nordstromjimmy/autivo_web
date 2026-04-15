import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../lib/blog-posts";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blogg - Tips om bilunderhåll och servicehistorik | Autivo",
  description:
    "Läs våra artiklar om bilunderhåll, servicehistorik, besiktning och hur du ökar din bils värde. Expertråd för svenska bilägare.",
  keywords: [
    "bilblogg",
    "servicehistorik",
    "bilunderhåll",
    "besiktning",
    "bilägarskap",
    "tips",
  ],
  openGraph: {
    title: "Autivo Blogg - Tips för smartare bilägande",
    description:
      "Expertråd om bilunderhåll, servicehistorik och besiktning för svenska bilägare.",
    type: "website",
  },
  alternates: {
    canonical: "https://autivo.se/blogg",
  },
};

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Logo + Blogg */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span
              className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Autivo
            </span>
            <span className="text-3xl font-bold text-slate-400">|</span>
            <span
              className="text-3xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Blogg
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tips för smartare <span className="text-gradient">bilägande</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Guider, tips och råd om servicehistorik, besiktning och
            bilunderhåll.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blogg/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    {/* Placeholder gradient until you add real images */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${post.categoryColor} opacity-10`}
                    />

                    {/* Uncomment when you have real images */}
                    {/* <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    /> */}

                    {/* Category badge on image */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-block px-4 py-1.5 bg-gradient-to-r ${post.categoryColor} text-white rounded-full text-sm font-semibold shadow-lg`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h2
                      className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-200">
                      <time>
                        {new Date(post.date).toLocaleDateString("sv-SE", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <div className="flex items-center gap-2">
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read more link */}
                    <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      <span>Läs mer</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      ></svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-blue-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Vill du veta när Autivo lanseras?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Prenumerera för nyheter
          </p>
          <Link
            href="/#waitlist"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Prenumerera
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
