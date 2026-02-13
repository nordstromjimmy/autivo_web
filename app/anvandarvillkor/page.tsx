import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-8"
          ></Link>

          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Användarvillkor
          </h1>
          <p className="text-lg text-slate-600">
            Senast uppdaterad:{" "}
            {new Date().toLocaleDateString("sv-SE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-slate max-w-none">
            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              1. Godkännande av villkor
            </h2>
            <p className="text-slate-600 mb-6">
              Genom att använda Autivo accepterar du dessa användarvillkor. Om
              du inte godkänner villkoren ska du inte använda tjänsten.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              2. Tjänstebeskrivning
            </h2>
            <p className="text-slate-600 mb-6">
              Autivo är en digital tjänst för att dokumentera och hantera
              servicehistorik för fordon. Tjänsten tillhandahåller funktioner
              för att spåra underhåll, förbereda besiktning och exportera
              servicehistorik.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              3. Konto och registrering
            </h2>
            <p className="text-slate-600 mb-3">
              För att använda Autivo måste du:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Vara minst 18 år gammal</li>
              <li>
                Tillhandahålla korrekta och fullständiga uppgifter vid
                registrering
              </li>
              <li>Hålla dina inloggningsuppgifter säkra och konfidentiella</li>
              <li>
                Informera oss omedelbart om obehörig användning av ditt konto
              </li>
            </ul>
            <p className="text-slate-600 mb-6">
              Du är ansvarig för all aktivitet som sker under ditt konto.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              4. Användning av tjänsten
            </h2>
            <p className="text-slate-600 mb-3">Du får:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Använda tjänsten för personligt, icke-kommersiellt bruk</li>
              <li>Dokumentera servicehistorik för dina egna fordon</li>
              <li>Exportera och dela dina egna data</li>
            </ul>

            <p className="text-slate-600 mb-3 mt-6">Du får inte:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Använda tjänsten för olagliga syften</li>
              <li>Ladda upp skadlig kod eller virus</li>
              <li>Försöka få obehörig åtkomst till systemet</li>
              <li>Skrapa, kopiera eller duplicera tjänsten</li>
              <li>Dela ditt konto med andra</li>
              <li>Ladda upp falsk eller vilseledande information</li>
            </ul>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              5. Innehåll och ansvar
            </h2>
            <p className="text-slate-600 mb-6">
              Du äger allt innehåll du laddar upp (foton, text, servicedata). Du
              är själv ansvarig för att innehållet är korrekt och lagligt. Vi
              förbehåller oss rätten att ta bort innehåll som bryter mot dessa
              villkor.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              6. Prenumeration och betalning
            </h2>
            <p className="text-slate-600 mb-3">
              <strong>Gratis plan:</strong> Begränsad till ett fordon och
              grundläggande funktioner.
            </p>
            <p className="text-slate-600 mb-3">
              <strong>Premium:</strong> Prenumeration debiteras månadsvis eller
              årligen. Automatisk förnyelse såvida du inte säger upp
              prenumerationen minst 24 timmar före förnyelse.
            </p>
            <p className="text-slate-600 mb-6">
              Återbetalning sker inte för outnyttjad tid vid uppsägning.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              7. Garantier och ansvarsbegränsning
            </h2>
            <p className="text-slate-600 mb-6">
              Autivo tillhandahålls "som den är" utan garantier av något slag.
              Vi garanterar inte att tjänsten alltid är tillgänglig, felfri
              eller säker. Vi ansvarar inte för:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Förlust av data till följd av tekniska problem</li>
              <li>Skador på fordon baserat på information i appen</li>
              <li>Beslut du fattar baserat på tjänstens innehåll</li>
              <li>
                Tredje parts handlingar (försäkringsbolag, verkstäder, köpare)
              </li>
            </ul>
            <p className="text-slate-600 mb-6">
              Vi rekommenderar att du alltid har säkerhetskopior av viktig
              information.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              8. Uppsägning
            </h2>
            <p className="text-slate-600 mb-6">
              Du kan när som helst avsluta ditt konto via appens inställningar.
              Vi förbehåller oss rätten att stänga av konton som bryter mot
              dessa villkor utan förvarning eller återbetalning.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              9. Ändringar av tjänsten och villkor
            </h2>
            <p className="text-slate-600 mb-6">
              Vi förbehåller oss rätten att när som helst ändra, uppdatera eller
              avsluta tjänsten eller dessa villkor. Väsentliga ändringar
              meddelas via e-post eller i appen minst 30 dagar i förväg.
              Fortsatt användning efter ändringar innebär acceptans.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              10. Tvistlösning
            </h2>
            <p className="text-slate-600 mb-6">
              Dessa villkor regleras av svensk lag. Eventuella tvister ska i
              första hand lösas genom dialog. Om ingen lösning nås ska tvisten
              avgöras av svensk domstol.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              11. Kontakt
            </h2>
            <p className="text-slate-600 mb-6">
              Frågor om användarvillkoren? Kontakta oss:
              <br />
              E-post:{" "}
              <a
                href="mailto:info@autivo.se"
                className="text-blue-600 hover:text-blue-700"
              >
                info@autivo.se
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
