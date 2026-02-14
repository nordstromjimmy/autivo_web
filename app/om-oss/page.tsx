import Link from "next/link";
import Footer from "../components/Footer";
import { Goal, Lock, Heart, LucideIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om Oss - Vår Historia & Värderingar",
  description:
    "Läs om Autivo, vår historia, värderingar och vårt uppdrag att förenkla bilägandet för svenska bilägare med digital servicehistorik.",
  openGraph: {
    title: "Om Autivo - Vår Historia & Värderingar",
    description:
      "Autivo startades 2026 för att ge svenska bilägare bättre kontroll över sin bils underhåll och servicehistorik.",
    url: "https://autivo.se/om-oss",
    type: "website",
  },
  alternates: {
    canonical: "https://autivo.se/om-oss",
  },
};

export default function AboutPage() {
  type ValueItem = {
    icon: LucideIcon | string;
    title: string;
    description: string;
    color: string;
  };

  const values: ValueItem[] = [
    {
      icon: Goal,
      title: "Enkelhet",
      description:
        "Vi gör det enkelt att hålla koll på din bils underhåll och historik.",
      color: "from-blue-500 to-blue-600",
    },

    {
      icon: Lock,
      title: "Integritet",
      description:
        "Din data är din. Vi lagrar säkert och delar aldrig med tredje part.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "SE",
      title: "Svenskt",
      description: "Byggt i Sverige, för svenska bilägare, med svensk support.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Hållbarhet",
      description:
        "Bättre underhåll = längre billivslängd = mindre miljöpåverkan.",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Vi gör bilägande <span className="text-gradient">enklare</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Autivo startades 2026 med en enkel vision: varje bilägare ska ha
            full kontroll över sin bils servicehistorik och underhåll.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Våra <span className="text-gradient">värderingar</span>
            </h2>
            <p className="text-xl text-slate-600">
              Principer som styr allt vi gör
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const isTextIcon = typeof value.icon === "string";
              const IconComponent = !isTextIcon ? value.icon : null;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Icon with gradient background */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${value.color} text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {isTextIcon ? (
                      // Display text (like "SE")
                      <span className="w-8 h-8 flex items-center justify-center text-2xl font-bold">
                        {value.icon as string}
                      </span>
                    ) : (
                      // Display Lucide icon
                      IconComponent && (
                        <IconComponent className="w-8 h-8" strokeWidth={2} />
                      )
                    )}
                  </div>

                  <h3
                    className="text-xl font-bold mb-3 text-slate-900"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-12 md:p-16 text-white text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Vårt uppdrag
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              Att ge varje svensk bilägare verktygen för att ta hand om sin bil
              på bästa sätt, öka bilens värde och förenkla bilägandet.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Vill du veta mer?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Hör av dig så berättar vi mer om Autivo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Kontakta oss
            </Link>
            <Link
              href="/#waitlist"
              className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              Gå med i väntelistan
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
