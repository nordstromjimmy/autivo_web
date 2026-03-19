export default function BesiktningContent() {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Introduction */}
      <p className="text-xl text-slate-600 leading-relaxed mb-8">
        Att klara besiktningen första gången sparar både tid och pengar. Med vår
        kompletta checklista kan du förbereda din bil och undvika vanliga fel
        som leder till underkännande. Här är allt du behöver veta inför
        besiktningen 2026.
      </p>

      {/* Section 1 */}
      <h2
        className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Vad kontrolleras vid besiktningen?
      </h2>
      <p className="text-slate-600 leading-relaxed mb-6">
        Besiktningen kontrollerar din bils säkerhet och miljöpåverkan.
        Kontrollanterna går igenom hundratals kontrollpunkter för att
        säkerställa att bilen uppfyller svenska krav.
      </p>

      <p className="text-slate-600 leading-relaxed mb-4">
        <strong>Huvudkategorier som kontrolleras:</strong>
      </p>

      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-slate-600">
            <strong>Bromsar</strong> - Bromsverkan, slitage och vätskenivåer
          </span>
        </li>
        <li className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-slate-600">
            <strong>Däck</strong> - Mönsterdjup, skador och slitage
          </span>
        </li>
        <li className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-slate-600">
            <strong>Belysning</strong> - Alla lampor och reflexer
          </span>
        </li>
        <li className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-slate-600">
            <strong>Avgaser</strong> - Miljöpåverkan och utsläpp
          </span>
        </li>
        <li className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-slate-600">
            <strong>Chassi</strong> - Leder och fjädring
          </span>
        </li>
      </ul>

      {/* Tips Box */}
      <div className="my-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-r-2xl">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h3
              className="text-xl font-bold text-blue-900 mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              💡 Tips från Autivo
            </h3>
            <p className="text-blue-800 leading-relaxed">
              Använd Autivos besiktningschecklista för att gå igenom alla
              kontrollpunkter innan du åker till besiktningen. På så sätt kan du
              åtgärda problem i förväg och öka chansen att klara besiktningen
              första gången.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Checklista */}
      <h2
        className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Komplett checklista inför besiktningen
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        Använd denna checklista 1-2 veckor innan besiktningen för att hinna
        åtgärda eventuella problem:
      </p>

      <h3
        className="text-2xl font-bold mt-8 mb-4 text-slate-900"
        style={{ fontFamily: "var(--font-display)" }}
      >
        1 vecka innan
      </h3>

      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-slate-600">
            Kontrollera alla lampor (helljus, halvljus, bromsljus, blinkers,
            bakljus)
          </span>
        </li>
        <li className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-slate-600">
            Mät däckdjup (minst 1.6 mm, rekommenderat 3 mm)
          </span>
        </li>
        <li className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-slate-600">
            Kontrollera vindrutetorkarblad och spolarvätska
          </span>
        </li>
        <li className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-slate-600">Testa alla säkerhetsbälten</span>
        </li>
        <li className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-slate-600">
            Kontrollera alla vätskenivåer (olja, kylvätska, bromsvätska)
          </span>
        </li>
      </ul>

      {/* Vanliga fel */}
      <h2
        className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Vanliga besiktningsfel och hur du undviker dem
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        Här är de vanligaste orsakerna till underkännande och hur du förebygger
        dem:
      </p>

      <div className="space-y-6 mb-8">
        <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
          <h4 className="font-bold text-red-900 mb-2">
            Felaktiga lampor (30% av underkännanden)
          </h4>
          <p className="text-red-800 text-sm">
            <strong>Lösning:</strong> Kontrollera alla lampor innan besiktning
            och byt eventuella trasiga glödlampor.
          </p>
        </div>

        <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
          <h4 className="font-bold text-red-900 mb-2">
            Slitna däck (25% av underkännanden)
          </h4>
          <p className="text-red-800 text-sm">
            <strong>Lösning:</strong> Byt däck i god tid om mönsterdjupet närmar
            sig 3 mm (lagkrav 1.6 mm).
          </p>
        </div>

        <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
          <h4 className="font-bold text-red-900 mb-2">
            Höga avgasutsläpp (20% av underkännanden)
          </h4>
          <p className="text-red-800 text-sm">
            <strong>Lösning:</strong> Kör bilen varm innan besiktning och se
            till att motorn är välservad.
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <h2
        className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Sammanfattning
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        Med rätt förberedelse ökar du kraftigt chansen att klara besiktningen
        första gången. Använd vår checklista systematiskt och åtgärda problem i
        god tid innan besiktningsdatumet.
      </p>

      <p className="text-slate-600 leading-relaxed mb-6">
        Med Autivo får du automatiska påminnelser om när det är dags för
        besiktning och en inbyggd checklista som hjälper dig förbereda bilen
        optimalt. Så slipper du stressen och kan känna dig säker på att allt är
        i sin ordning.
      </p>
    </div>
  );
}
