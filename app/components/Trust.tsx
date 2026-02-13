export default function Trust() {
  const stats = [
    { number: "500+", label: "Användare i väntelistan" },
    { number: "15%", label: "Ökat återförsäljningsvärde" },
    { number: "100%", label: "Säker datahantering" },
    { number: "4.9", label: "Beta-betyg ⭐️" },
  ];

  const testimonials = [
    {
      quote:
        "Äntligen en app som gör det enkelt att hålla koll på bilens service. Slipper leta efter gamla kvitton!",
      author: "Erik S.",
      role: "Volvo V70 ägare",
      avatar: "👨‍💼",
    },
    {
      quote:
        "Besiktningschecklistan sparade mig från ett underkänt. Upptäckte problem jag kunnat fixa i förväg.",
      author: "Maria L.",
      role: "BMW 3-serie ägare",
      avatar: "👩‍💻",
    },
    {
      quote:
        "Sålde min bil 10 000 kr dyrare tack vare den kompletta servicehistoriken från Autivo.",
      author: "Johan A.",
      role: "Tidigare Toyota Avensis ägare",
      avatar: "👨‍🔧",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Bilägare <span className="text-gradient">litar på Autivo</span>
          </h2>
          <p className="text-xl text-slate-600">
            Gå med i hundratals bilägare som redan dokumenterar sin
            servicehistorik
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-700">🔒</div>
              <div className="text-sm text-slate-600 mt-2">GDPR-kompatibel</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-700">🇸🇪</div>
              <div className="text-sm text-slate-600 mt-2">Svenskt företag</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-700">☁️</div>
              <div className="text-sm text-slate-600 mt-2">
                Säker molnlagring
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-700">📱</div>
              <div className="text-sm text-slate-600 mt-2">iOS & Android</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
