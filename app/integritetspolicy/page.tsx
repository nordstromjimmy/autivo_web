import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Integritetspolicy
          </h1>
          <p className="text-lg text-slate-100">
            Senast uppdaterad: 7 mars 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-slate max-w-none">
            {/* Summary Box */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r">
              <p className="text-slate-700 font-semibold mb-2">
                Kort sammanfattning:
              </p>
              <p className="text-slate-600">
                Autivo hjälper dig att hantera dina fordon och deras underhåll.
                Vi samlar endast in den information som behövs för att appen ska
                fungera och delar aldrig dina uppgifter med tredje part för
                marknadsföringsändamål.
              </p>
            </div>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              1. Allmän information
            </h2>
            <p className="text-slate-600 mb-6">
              Denna integritetspolicy beskriver hur Autivo samlar in, använder
              och skyddar dina personuppgifter när du använder vår
              mobilapplikation. Genom att använda Autivo godkänner du insamling
              och användning av information i enlighet med denna policy.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              2. Vilken information samlar vi in?
            </h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              2.1 Information du tillhandahåller
            </h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>
                <strong>Fordonsinformation:</strong> Registreringsnummer, märke,
                modell, årsmodell, miltal, och annan information du väljer att
                registrera om dina fordon
              </li>
              <li>
                <strong>Underhållsuppgifter:</strong> Datum, kostnad,
                beskrivning och kategorier för service och reparationer
              </li>
              <li>
                <strong>Kontoinformation:</strong> E-postadress (om du väljer
                att skapa ett konto för molnsynkronisering)
              </li>
              <li>
                <strong>Foton:</strong> Bilder av registreringsbevis för
                verifiering av ägarskap (frivilligt)
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              2.2 Automatiskt insamlad information
            </h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>
                <strong>Enhetsidentifierare:</strong> Anonym användar-ID för att
                hantera dina data
              </li>
              <li>
                <strong>Appanvändning:</strong> Information om hur du använder
                appen (t.ex. funktioner du använder)
              </li>
              <li>
                <strong>Teknisk information:</strong> Appversion,
                operativsystem, enhetsmodell (för felsökning)
              </li>
            </ul>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              3. Hur använder vi din information?
            </h2>
            <p className="text-slate-600 mb-3">
              Vi använder den insamlade informationen för att:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Tillhandahålla och underhålla appens funktionalitet</li>
              <li>
                Spara och synkronisera din data mellan enheter (om du är
                inloggad)
              </li>
              <li>
                Verifiera fordonets ägarskap via OCR-scanning av
                registreringsbevis
              </li>
              <li>Skapa påminnelser för underhåll och besiktningar</li>
              <li>Generera rapporter och statistik om dina fordon</li>
              <li>Förbättra och optimera appens prestanda</li>
              <li>Ge teknisk support när du kontaktar oss</li>
            </ul>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              4. Datalagring
            </h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              4.1 Lokal lagring
            </h3>
            <p className="text-slate-600 mb-3">
              All din data lagras primärt lokalt på din enhet. Detta inkluderar:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Fordonsinformation</li>
              <li>Underhållshistorik</li>
              <li>Foton och dokument</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              4.2 Molnlagring (valfritt)
            </h3>
            <p className="text-slate-600 mb-6">
              Om du väljer att skapa ett konto och aktivera molnsynkronisering
              lagras dina uppgifter även i vår databas hos Supabase (en
              GDPR-kompatibel leverantör baserad inom EU).
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              5. Behörigheter och användning
            </h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Kamera</h3>
            <p className="text-slate-600 mb-2">
              <strong>Varför:</strong> För att skanna registreringsbevis och
              verifiera fordonets ägarskap via OCR-teknik.
            </p>
            <p className="text-slate-600 mb-2">
              <strong>När:</strong> Endast när du aktivt väljer att ta ett foto
              för verifiering eller sparande av kvitton.
            </p>
            <p className="text-slate-600 mb-6">
              <strong>Lagring:</strong> Foton bearbetas lokalt på din enhet. De
              laddas aldrig upp till externa servrar för OCR-analys.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Internet</h3>
            <p className="text-slate-600 mb-6">
              <strong>Varför:</strong> För att synkronisera data till molnet (om
              du har ett konto), hantera köp, och visa information om
              besiktningsstationer.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              5.3 Lokal lagring
            </h3>
            <p className="text-slate-600 mb-6">
              <strong>Varför:</strong> För att spara dina fordon,
              underhållshistorik och inställningar lokalt på enheten.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              6. Tredjepartstjänster
            </h2>
            <p className="text-slate-600 mb-4">
              Vi använder följande tredjepartstjänster som kan samla in
              information:
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              6.1 Supabase (molnlagring)
            </h3>
            <p className="text-slate-600 mb-2">
              <strong>Vad:</strong> Databashosting för molnsynkronisering
            </p>
            <p className="text-slate-600 mb-2">
              <strong>Data:</strong> Fordonsinformation, underhållshistorik,
              kontoinformation
            </p>
            <p className="text-slate-600 mb-2">
              <strong>Plats:</strong> EU (GDPR-kompatibel)
            </p>
            <p className="text-slate-600 mb-6">
              <strong>Policy:</strong>{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                https://supabase.com/privacy
              </a>
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              6.2 RevenueCat (betalningshantering)
            </h3>
            <p className="text-slate-600 mb-2">
              <strong>Vad:</strong> Hanterar köp av Premium-funktioner via
              Google Play
            </p>
            <p className="text-slate-600 mb-2">
              <strong>Data:</strong> Köpinformation, användar-ID (ingen
              betalningsinfo - hanteras av Google Play)
            </p>
            <p className="text-slate-600 mb-6">
              <strong>Policy:</strong>{" "}
              <a
                href="https://www.revenuecat.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                https://www.revenuecat.com/privacy
              </a>
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              6.3 Google Play Services
            </h3>
            <p className="text-slate-600 mb-2">
              <strong>Vad:</strong> Betalningar, appuppdateringar, kartor för
              besiktningsstationer
            </p>
            <p className="text-slate-600 mb-6">
              <strong>Policy:</strong>{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                https://policies.google.com/privacy
              </a>
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              7. Delning av information
            </h2>
            <p className="text-slate-600 mb-3">
              <strong>
                Vi säljer eller delar ALDRIG dina personuppgifter för
                marknadsföringsändamål.
              </strong>
            </p>
            <p className="text-slate-600 mb-3">
              Din information kan delas endast i följande fall:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>
                <strong>Med ditt samtycke:</strong> Om du explicit ger oss
                tillstånd
              </li>
              <li>
                <strong>Lagkrav:</strong> Om vi är skyldiga enligt lag eller
                rättslig process
              </li>
              <li>
                <strong>Tjänsteleverantörer:</strong> Med tredjepartstjänster
                som krävs för appens funktion (se avsnitt 6)
              </li>
            </ul>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              8. Datasäkerhet
            </h2>
            <p className="text-slate-600 mb-3">
              Vi skyddar din information genom:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Krypterad dataöverföring (HTTPS/TLS)</li>
              <li>Säker autentisering för molnkonton</li>
              <li>Krypterad lokal lagring på din enhet</li>
              <li>Regelbundna säkerhetsgranskningar</li>
              <li>Begränsad åtkomst till personuppgifter</li>
            </ul>
            <p className="text-slate-600 mb-6">
              Ingen metod för överföring eller lagring är dock 100% säker. Vi
              kan inte garantera absolut säkerhet.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              9. Dina rättigheter (GDPR)
            </h2>
            <p className="text-slate-600 mb-3">Enligt GDPR har du rätt att:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>
                <strong>Tillgång:</strong> Få en kopia av dina lagrade
                personuppgifter
              </li>
              <li>
                <strong>Rättelse:</strong> Korrigera felaktig eller ofullständig
                information
              </li>
              <li>
                <strong>Radering:</strong> Ta bort dina personuppgifter ("rätten
                att bli glömd")
              </li>
              <li>
                <strong>Dataportabilitet:</strong> Exportera dina data i ett
                strukturerat format
              </li>
              <li>
                <strong>Invändning:</strong> Invända mot viss behandling av dina
                uppgifter
              </li>
              <li>
                <strong>Begränsning:</strong> Begränsa behandlingen av dina
                uppgifter
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              9.1 Hur du utövar dina rättigheter
            </h3>
            <p className="text-slate-600 mb-3">För att radera dina data:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>
                <strong>Lokal data:</strong> Avinstallera appen från din enhet
              </li>
              <li>
                <strong>Molndata:</strong> Logga in i appen → Inställningar →
                Logga ut och radera konto
              </li>
              <li>
                <strong>Manuell begäran:</strong> Kontakta oss på{" "}
                <a
                  href="mailto:info@autivo.se"
                  className="text-blue-600 hover:text-blue-700"
                >
                  info@autivo.se
                </a>
              </li>
            </ul>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              10. Cookies och spårning
            </h2>
            <p className="text-slate-600 mb-6">
              Autivo-appen använder inte cookies eller spårningsteknologier för
              marknadsföringsändamål. Vi använder endast tekniskt nödvändiga
              identifierare för appens funktion.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              11. Internationell dataöverföring
            </h2>
            <p className="text-slate-600 mb-6">
              Dina uppgifter lagras primärt inom EU genom vår leverantör
              Supabase. Om data överförs utanför EU säkerställer vi att lämpliga
              skyddsåtgärder finns på plats i enlighet med GDPR.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              12. Ändringar i integritetspolicyn
            </h2>
            <p className="text-slate-600 mb-3">
              Vi kan uppdatera denna integritetspolicy från tid till annan. Vi
              meddelar dig om väsentliga ändringar genom:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Notifiering i appen</li>
              <li>E-post (om du har ett konto)</li>
              <li>Uppdaterat "Senast uppdaterad"-datum överst på denna sida</li>
            </ul>
            <p className="text-slate-600 mb-6">
              Vi rekommenderar att du regelbundet granskar denna policy för att
              hålla dig informerad.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              13. Kontakt
            </h2>
            <p className="text-slate-600 mb-3">
              Om du har frågor om denna integritetspolicy eller hur vi hanterar
              dina personuppgifter, kontakta oss:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>
                <strong>E-post:</strong>{" "}
                <a
                  href="mailto:info@autivo.se"
                  className="text-blue-600 hover:text-blue-700"
                >
                  info@autivo.se
                </a>
              </li>
              <li>
                <strong>Webb:</strong>{" "}
                <a
                  href="https://autivo.se"
                  className="text-blue-600 hover:text-blue-700"
                >
                  https://autivo.se
                </a>
              </li>
            </ul>
            <hr className="my-12 border-slate-200" />

            <p className="text-center text-slate-500 text-sm">
              © 2026 Autivo. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
