import Footer from "../components/Footer";
import { Mail } from "lucide-react";

export default function ContactPage() {
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
            Hör av dig till <span className="text-gradient">oss</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Vi svarar på alla frågor och tar gärna emot feedback.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contact info - centered column */}
          <div className="max-w-md mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-8">
              <Mail className="w-8 h-8 text-white" strokeWidth={2} />
            </div>

            {/* Heading */}
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Kontaktinformation
            </h2>

            {/* Email info */}
            <h3 className="font-semibold text-slate-900 mb-2">E-post</h3>
            <a
              href="mailto:info@autivo.se"
              className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium"
            >
              info@autivo.se
            </a>
            <p className="text-sm text-slate-600 mt-2">
              Vi svarar inom 24 timmar
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
