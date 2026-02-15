import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-8"
          ></Link>

          <h1
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Integritetspolicy
          </h1>
          <p className="text-lg text-slate-100">
            Senast uppdaterad: 1 Februari 2026
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
              1. Inledning
            </h2>
            <p className="text-slate-600 mb-6">
              Autivo värnar om din integritet. Denna policy beskriver hur vi
              samlar in, använder och skyddar dina personuppgifter i enlighet
              med GDPR.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              2. Personuppgiftsansvarig
            </h2>
            <p className="text-slate-600 mb-2">
              Autivo
              <br />
              E-post: info@autivo.se
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              3. Vilka uppgifter vi samlar in
            </h2>
            <p className="text-slate-600 mb-3">
              Vi samlar in följande uppgifter:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>
                <strong>Kontouppgifter:</strong> Namn, e-postadress
              </li>
              <li>
                <strong>Fordonsuppgifter:</strong> Registreringsnummer, märke,
                modell, årsmodell
              </li>
              <li>
                <strong>Servicedata:</strong> Servicedatum, kostnader,
                beskrivningar, fotografier av kvitton
              </li>
              <li>
                <strong>Teknisk data:</strong> IP-adress, enhetstyp,
                användningsstatistik
              </li>
            </ul>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              4. Hur vi använder dina uppgifter
            </h2>
            <p className="text-slate-600 mb-3">
              Vi använder dina uppgifter för att:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Tillhandahålla och förbättra tjänsten</li>
              <li>Skicka påminnelser om besiktning och service</li>
              <li>Generera servicehistorik och rapporter</li>
              <li>Kommunicera med dig om tjänsten</li>
              <li>Analysera användning för att förbättra appen</li>
            </ul>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              5. Lagring och säkerhet
            </h2>
            <p className="text-slate-600 mb-6">
              Dina uppgifter lagras säkert på servrar inom EU. Vi använder
              kryptering och moderna säkerhetsåtgärder för att skydda dina data.
              Data sparas så länge du har ett aktivt konto, därefter raderas
              uppgifterna inom 30 dagar.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              6. Delning med tredje part
            </h2>
            <p className="text-slate-600 mb-6">
              Vi säljer aldrig dina personuppgifter. Vi delar endast data med:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>
                <strong>Tekniska leverantörer:</strong> För drift av tjänsten
                (hosting, databas)
              </li>
              <li>
                <strong>Analytikverktyg:</strong> För att förbättra appen
                (anonymiserad data)
              </li>
            </ul>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              7. Dina rättigheter enligt GDPR
            </h2>
            <p className="text-slate-600 mb-3">Du har rätt att:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>
                <strong>Få tillgång</strong> till dina personuppgifter
              </li>
              <li>
                <strong>Rätta</strong> felaktiga uppgifter
              </li>
              <li>
                <strong>Radera</strong> dina uppgifter ("rätten att bli glömd")
              </li>
              <li>
                <strong>Begränsa</strong> behandling av dina uppgifter
              </li>
              <li>
                <strong>Dataportabilitet</strong> - få ut dina data i ett
                maskinläsbart format
              </li>
              <li>
                <strong>Invända</strong> mot behandling av dina uppgifter
              </li>
            </ul>
            <p className="text-slate-600 mb-6">
              För att utöva dina rättigheter, kontakta oss på{" "}
              <a
                href="mailto:info@autivo.se"
                className="text-blue-600 hover:text-blue-700"
              >
                info@autivo.se
              </a>
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              8. Cookies
            </h2>
            <p className="text-slate-600 mb-6">
              Vi använder nödvändiga cookies för att appen ska fungera korrekt.
              Vi använder även analytiska cookies för att förbättra tjänsten. Du
              kan blockera cookies i din webbläsare, men vissa funktioner kan då
              sluta fungera.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              9. Ändringar i policyn
            </h2>
            <p className="text-slate-600 mb-6">
              Vi kan uppdatera denna policy. Väsentliga ändringar meddelas via
              e-post eller i appen. Fortsatt användning efter ändringar innebär
              att du accepterar den nya policyn.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              10. Kontakt
            </h2>
            <p className="text-slate-600 mb-6">
              Frågor om integritet? Kontakta oss:
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
