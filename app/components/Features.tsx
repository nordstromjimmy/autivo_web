"use client";
import {
  ListCheck,
  BookOpen,
  ChartNoAxesColumnIncreasing,
  Bell,
  Lock,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: ListCheck,
    title: "Besiktningschecklista",
    description:
      "Förbered din bil med vår kompletta checklista. Aldrig mer oväntat underkänt.",
    color: "from-blue-500 to-cyan-500",
    bgPattern: "from-blue-50 to-cyan-50",
  },
  {
    icon: BookOpen,
    title: "Digital servicebok",
    description:
      "Dokumentera varje service, reparation och underhåll. Aldrig mer förlorade kvitton.",
    color: "from-blue-500 to-cyan-500",
    bgPattern: "from-blue-50 to-cyan-50",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Öka återförsäljningsvärdet",
    description:
      "Komplett verifierad historik ökar din bils värde vid försäljning.",
    color: "from-blue-500 to-cyan-500",
    bgPattern: "from-blue-50 to-cyan-50",
  },
  {
    icon: Bell,
    title: "Smarta påminnelser",
    description: "Få notiser om kommande besiktningar och serviceintervaller",
    color: "from-blue-500 to-cyan-500",
    bgPattern: "from-blue-50 to-cyan-50",
  },
  {
    icon: FileText,
    title: "PDF-rapporter",
    description:
      "Exportera professionella rapporter för försäljning eller försäkringsärenden.",
    color: "from-blue-500 to-cyan-500",
    bgPattern: "from-blue-50 to-cyan-50",
  },
  {
    icon: Lock,
    title: "Säker & privat",
    description: "Dina data lagras säkert. Full kontroll över din bilhistorik.",
    color: "from-blue-500 to-cyan-500",
    bgPattern: "from-blue-50 to-cyan-50",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Allt du behöver för att{" "}
            <span className="text-gradient block mt-2">
              hålla koll på din bil
            </span>
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            Från besiktningsförberedelse till försäljning – Autivo täcker hela
            bilens livscykel
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group relative">
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`}
                />

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Decorative corner gradient */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.bgPattern} opacity-50 rounded-bl-full blur-2xl`}
                  />

                  {/* Icon with animated gradient background */}
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
                    >
                      <IconComponent className="w-8 h-8" strokeWidth={2} />
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover arrow indicator */}
                  <div className="mt-6 flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold">Läs mer</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
