export default function ServicehistorikContent() {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Introduction */}
      <p className="text-xl text-slate-600 leading-relaxed mb-8">
        En komplett och välorganiserad servicehistorik kan vara skillnaden
        mellan att sälja din bil snabbt till ett bra pris, eller att behöva
        förhandla ner priset med tiotusentals kronor. Här är allt du behöver
        veta om varför servicehistorik är så viktigt.
      </p>

      {/* Section 1 */}
      <h2
        className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Ökat andrahandsvärde
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        Studier visar att bilar med fullständig servicehistorik säljs för{" "}
        <strong>15-20% högre pris </strong>
        än jämförbara bilar utan dokumentation. För en bil värd 200 000 kr kan
        det innebära en skillnad på 30 000-40 000 kr – bara genom att ha sparat
        kvitton och dokumenterat service.
      </p>

      <div className="my-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-xl">
        <h4 className="font-bold text-green-900 mb-2">
          💰 Exempel på värdeökning
        </h4>
        <p className="text-green-800 mb-2">
          <strong>Bil utan servicehistorik:</strong> 180 000 kr
        </p>
        <p className="text-green-800 mb-2">
          <strong>Samma bil med komplett servicehistorik:</strong> 210 000 kr
        </p>
        <p className="text-green-800 font-semibold">
          <strong>Skillnad:</strong> 30 000 kr!
        </p>
      </div>

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
              Med Autivo kan du enkelt fotografera och spara alla servicekvitton
              digitalt. Appen påminner dig också automatiskt när det är dags för
              nästa service, så du aldrig missar ett servicetillfälle.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <h2
        className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Lättare försäljning
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        När du ska sälja din bil är potentiella köpare mycket mer benägna att
        lita på en bil med komplett dokumentation. Det visar att du:
      </p>

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
            Har tagit hand om bilen och följt serviceintervaller
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
            Åtgärdat problem i tid istället för att skjuta upp dem
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
            Använt rätt reservdelar och kvalitetsolja
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
            Är seriös och pålitlig som säljare
          </span>
        </li>
      </ul>

      <p className="text-slate-600 leading-relaxed mb-6">
        Detta leder ofta till att köpare är villiga att betala mer och att
        försäljningsprocessen går snabbare eftersom köparen känner sig tryggare
        med köpet.
      </p>

      {/* Section 3 */}
      <h2
        className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Garantiskydd
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        Många garantier kräver att du kan visa att bilen har servicats enligt
        tillverkarens rekommendationer. Utan dokumentation riskerar du att:
      </p>

      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="text-slate-600">
            Förlora garantin helt och hållet
          </span>
        </li>
        <li className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="text-slate-600">Få avslag på garantiärenden</span>
        </li>
        <li className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="text-slate-600">
            Behöva betala dyra reparationer själv
          </span>
        </li>
      </ul>

      {/* Section 4 */}
      <h2
        className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Vad ska dokumenteras?
      </h2>

      <p className="text-slate-600 leading-relaxed mb-4">
        För att ha en komplett servicehistorik bör du dokumentera:
      </p>

      <div className="space-y-4 mb-8">
        <div className="p-4 bg-slate-50 rounded-xl">
          <h4 className="font-bold text-slate-900 mb-2">
            1. Alla servicetillfällen
          </h4>
          <p className="text-slate-600 text-sm">
            Även små saker som oljebyte och luftfilter. Spara kvittot och notera
            datum, körsträcka och vad som gjordes.
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl">
          <h4 className="font-bold text-slate-900 mb-2">2. Reparationer</h4>
          <p className="text-slate-600 text-sm">
            Både planerade och akuta reparationer. Dokumentera problemet,
            lösningen och vilka delar som bytts.
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl">
          <h4 className="font-bold text-slate-900 mb-2">3. Reservdelar</h4>
          <p className="text-slate-600 text-sm">
            Vilka delar som bytts, när de bytts och om det var original- eller
            tillverkade delar.
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl">
          <h4 className="font-bold text-slate-900 mb-2">4. Besiktningar</h4>
          <p className="text-slate-600 text-sm">
            Resultat och eventuella anmärkningar från varje besiktning.
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl">
          <h4 className="font-bold text-slate-900 mb-2">5. Däckbyten</h4>
          <p className="text-slate-600 text-sm">
            Både sommar- och vinterdäck, inklusive mönsterdjup vid byte.
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <h2
        className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Digital vs. pappersbaserad servicebok
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        Traditionella pappersserviceböcker har flera nackdelar jämfört med
        moderna digitala lösningar:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
          <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Pappersbaserad
          </h3>
          <ul className="space-y-2 text-red-800 text-sm">
            <li>• Lätt att tappa bort eller glömma</li>
            <li>• Kan bli oläslig över tid</li>
            <li>• Svårt att söka i historiken</li>
            <li>• Ingen backup om den förstörs</li>
            <li>• Tar fysisk plats</li>
            <li>• Svårt att dela med köpare</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
          <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            Digital (som Autivo)
          </h3>
          <ul className="space-y-2 text-green-800 text-sm">
            <li>• Alltid tillgänglig i mobilen</li>
            <li>• Automatisk backup i molnet</li>
            <li>• Enkelt att söka och filtrera</li>
            <li>• Dela snabbt med köpare</li>
            <li>• Automatiska påminnelser</li>
            <li>• Tappas aldrig bort</li>
          </ul>
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
        En komplett servicehistorik är en av de viktigaste sakerna du kan ha för
        din bil. Det ökar värdet, underlättar försäljning, skyddar garantier och
        ger dig bättre kontroll över kostnader.
      </p>

      <p className="text-slate-600 leading-relaxed mb-6">
        Med moderna digitala verktyg som Autivo är det enklare än någonsin att
        hålla koll på allt. Du fotograferar bara kvittot efter service så sparas
        allt automatiskt och säkert i molnet. Perfekt för dig som vill ha full
        koll på din bils historia utan krångel.
      </p>

      <div className="my-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-xl">
        <p className="text-green-900 font-semibold mb-2">
          ✅ Viktigaste lärdomen
        </p>
        <p className="text-green-800">
          Börja dokumentera IDAG - varje kvitto du sparar är en investering i
          din bils framtida värde. Med Autivo tar det bara några sekunder att
          fotografera och spara varje servicekvitto.
        </p>
      </div>
    </div>
  );
}
