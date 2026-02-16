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
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BookOpen,
    title: "Digital servicebok",
    description:
      "Dokumentera varje service, reparation och underhåll. Aldrig mer förlorade kvitton.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Öka återförsäljningsvärdet",
    description:
      "Komplett verifierad historik ökar din bils värde vid försäljning.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Bell,
    title: "Smarta påminnelser",
    description:
      "Få notiser om kommande besiktning, serviceintervall och säsongsbyten.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FileText,
    title: "PDF-rapporter",
    description:
      "Exportera professionella rapporter för försäljning eller försäkringsärenden.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Lock,
    title: "Säker & privat",
    description: "Dina data lagras säkert. Full kontroll över din bilhistorik.",
    color: "from-blue-500 to-blue-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Allt du behöver för att{" "}
            <span className="text-gradient">hålla koll på din bil</span>
          </h2>
          <p className="text-xl text-slate-600">
            Från besiktningsförberedelse till försäljning – Autivo täcker hela
            bilens livscykel
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon with gradient background */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${value.color} text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8" strokeWidth={2} />
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
      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="#waitlist"
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
        >
          Kom igång idag
        </a>
      </div>
    </section>
  );
}
