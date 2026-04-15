import { createClient } from "@supabase/supabase-js";
import { Metadata } from "next";
import Image from "next/image";

// ==================== TYPES ====================

interface VehicleData {
  registration_number: string;
  make: string;
  model: string;
  year: number;
  fuel_type?: string;
  current_mileage?: number;
  ownership_start_date?: string;
  next_besiktning_date?: string;
  is_verified: boolean;
  verification_badge?: string;
}

interface ServiceRecord {
  date: string;
  type: string;
  description: string;
  location?: string;
  mileage?: number;
  cost?: number;
}

interface ReceiptData {
  description?: string;
  date?: string;
  amount?: number;
  image_url?: string;
}

interface ReportSnapshot {
  vehicle: VehicleData;
  records: ServiceRecord[];
  receipts: ReceiptData[];
  generated_at: string;
}

interface PublicReport {
  share_id: string;
  vehicle_snapshot: ReportSnapshot;
  created_at: string;
  expires_at: string;
}

// ==================== DATA FETCHING ====================

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

async function getReport(shareId: string): Promise<PublicReport | null> {
  const { data, error } = await supabase
    .from("public_reports")
    .select("*")
    .eq("share_id", shareId)
    .single();

  if (error || !data) return null;
  return data as PublicReport;
}

// ==================== METADATA ====================

export async function generateMetadata({
  params,
}: {
  params: Promise<{ share_id: string }>;
}): Promise<Metadata> {
  const { share_id } = await params;
  const report = await getReport(share_id);

  if (!report) {
    return { title: "Rapport hittades inte | Autivo" };
  }

  const { vehicle, records } = report.vehicle_snapshot;

  return {
    title: `${vehicle.registration_number} – ${vehicle.make} ${vehicle.model} ${vehicle.year} | Autivo`,
    description: `Verifierad servicehistorik för ${vehicle.registration_number}. ${records.length} serviceposter dokumenterade.`,
    openGraph: {
      title: `${vehicle.registration_number} – Servicehistorik`,
      description: `${vehicle.make} ${vehicle.model} ${vehicle.year} · ${records.length} serviceposter`,
      siteName: "Autivo",
    },
  };
}

// ==================== HELPERS ====================

function formatDate(dateStr?: string): string {
  if (!dateStr) return "–";
  return new Date(dateStr).toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatCost(cost?: number): string {
  if (cost == null) return "–";
  return `${cost.toLocaleString("sv-SE")} kr`;
}

function formatMileage(mileage?: number): string {
  if (mileage == null) return "–";
  return `${mileage.toLocaleString("sv-SE")} km`;
}

function formatRecordType(type: string): string {
  const types: Record<string, string> = {
    service: "Service",
    parts: "Reservdel",
    besiktning: "Besiktning",
    other: "Annat",
  };
  return types[type] ?? type;
}

// ==================== PAGE ====================

export default async function ShareReportPage({
  params,
}: {
  params: Promise<{ share_id: string }>;
}) {
  const { share_id } = await params;
  const report = await getReport(share_id);

  if (!report) {
    return <ExpiredOrNotFound />;
  }

  const { vehicle, records, receipts, generated_at } = report.vehicle_snapshot;
  const totalCost = records.reduce((sum, r) => sum + (r.cost ?? 0), 0);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ── Blue gradient header ── */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          {/* Branding */}
          <Image
            src="/weblogo4.png"
            alt="Autivo"
            width={140}
            height={140}
            className="rounded-xl mb-2"
          />
          <div className="flex items-center gap-2 opacity-90 mb-12">
            <a
              href="https://autivo.se/"
              className="text-4xl md:text-5xl font-bold tracking-widest uppercase"
            >
              Autivo.se
            </a>
          </div>

          {/* Vehicle identity */}
          <h1
            className="text-5xl md:text-8xl font-bold tracking-tight mb-3 break-words"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {vehicle.registration_number}
          </h1>
          <p className="text-xl md:text-3xl text-white/85 mb-6">
            {vehicle.make} {vehicle.model} {vehicle.year}
          </p>

          {/* Verified badge */}
          {vehicle.is_verified && (
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-2">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-semibold">
                {vehicle.verification_badge ?? "VERIFIERAD"}
              </span>
            </div>
          )}

          {/* Stats */}
          <div className="mt-8 flex gap-6 md:gap-10 flex-wrap">
            <Stat label="Serviceposter" value={`${records.length} st`} />
            {totalCost > 0 && (
              <Stat label="Total kostnad" value={formatCost(totalCost)} />
            )}
            {vehicle.current_mileage && (
              <Stat
                label="Mätarställning"
                value={formatMileage(vehicle.current_mileage)}
              />
            )}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-8 md:py-10 space-y-4 md:space-y-6">
        {/* Vehicle details */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100">
          <h2 className="text-base font-bold text-slate-900 mb-4">
            Fordonsuppgifter
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <DetailItem
              label="Registreringsnummer"
              value={vehicle.registration_number}
            />
            <DetailItem label="Märke" value={vehicle.make} />
            <DetailItem label="Modell" value={vehicle.model} />
            <DetailItem label="Årsmodell" value={String(vehicle.year)} />
            {vehicle.fuel_type && (
              <DetailItem label="Bränsle" value={vehicle.fuel_type} />
            )}
            {vehicle.current_mileage && (
              <DetailItem
                label="Mätarställning"
                value={formatMileage(vehicle.current_mileage)}
              />
            )}
            {vehicle.ownership_start_date && (
              <DetailItem
                label="Ägare sedan"
                value={formatDate(vehicle.ownership_start_date)}
              />
            )}
            {vehicle.next_besiktning_date && (
              <DetailItem
                label="Nästa besiktning"
                value={formatDate(vehicle.next_besiktning_date)}
              />
            )}
          </div>
        </div>

        {/* Service history */}
        {records.length > 0 && (
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100">
            <h2 className="text-base font-bold text-slate-900 mb-4">
              Servicehistorik{" "}
              <span className="font-normal text-slate-400 text-sm">
                ({records.length} poster)
              </span>
            </h2>

            <div className="divide-y divide-slate-50">
              {records.map((record, index) => (
                <div
                  key={index}
                  className="flex gap-3 md:gap-4 py-3 first:pt-0 last:pb-0"
                >
                  {/* Date — hidden on very small screens, shown from xs up */}
                  <div className="w-12 md:w-14 flex-shrink-0">
                    <p className="text-xs font-medium text-slate-500">
                      {new Date(record.date).toLocaleDateString("sv-SE", {
                        day: "numeric",
                        month: "short",
                      })}
                    </p>
                    <p className="text-xs text-slate-400">
                      {new Date(record.date).getFullYear()}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 rounded-full px-2 py-0.5 whitespace-nowrap">
                        {formatRecordType(record.type)}
                      </span>
                      {record.location && (
                        <span className="text-xs text-slate-400 truncate">
                          {record.location}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-slate-800 break-words">
                      {record.description}
                    </p>
                    {record.mileage && (
                      <p className="text-xs text-slate-400 mt-0.5">
                        {formatMileage(record.mileage)}
                      </p>
                    )}
                  </div>

                  {/* Cost */}
                  {record.cost != null && (
                    <div className="flex-shrink-0 text-right">
                      <p className="text-sm font-semibold text-slate-800 whitespace-nowrap">
                        {formatCost(record.cost)}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Total row */}
            {totalCost > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between">
                <p className="text-sm text-slate-500">Totalt</p>
                <p className="text-base font-bold text-slate-900">
                  {formatCost(totalCost)}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Receipts */}
        {receipts.length > 0 && (
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100">
            <h2 className="text-base font-bold text-slate-900 mb-4">
              Kvitton{" "}
              <span className="font-normal text-slate-400 text-sm">
                ({receipts.length})
              </span>
            </h2>

            <div className="space-y-3">
              {receipts.map((receipt, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-xl"
                >
                  <div className="min-w-0 mr-3">
                    <p className="text-sm font-medium text-slate-800 truncate">
                      {receipt.description ?? `Kvitto ${index + 1}`}
                    </p>
                    {receipt.date && (
                      <p className="text-xs text-slate-400">
                        {formatDate(receipt.date)}
                      </p>
                    )}
                  </div>
                  {receipt.amount != null && (
                    <p className="text-sm font-bold text-slate-900 whitespace-nowrap flex-shrink-0">
                      {formatCost(receipt.amount)}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Contact note */}
            <div className="mt-4 flex items-center gap-2 text-slate-400">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6.75A4.5 4.5 0 1112 2.25a4.5 4.5 0 014.5 4.5zM18.75 19.5a6.75 6.75 0 00-13.5 0"
                />
              </svg>
              <p className="text-xs">Kontakta säljaren för att se kvitton</p>
            </div>
          </div>
        )}

        {/* Generated timestamp */}
        <p className="text-center text-xs text-slate-400 mb-16 mt-4">
          Genererad {formatDate(generated_at)} via Autivo
        </p>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 md:p-8 text-white text-center">
          <h3
            className="text-xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Dokumentera din bils historia
          </h3>
          <p className="text-white/80 text-sm mb-6">
            Ladda ner Autivo och börja bygga din fordonshistorik idag
          </p>

          {/* Buttons — stacked on mobile, side by side on sm+ */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=se.autivo.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Ladda ner på Google Play
            </a>
            <a
              href="https://apps.apple.com/sv/app/autivo/id6761551909"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/20 text-white border border-white/30 font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300"
            >
              App Store — Kommer snart
            </a>
          </div>
        </div>

        <div className="pt-8" />
      </div>
    </main>
  );
}

// ==================== SMALL COMPONENTS ====================

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-xl md:text-2xl font-bold">{value}</p>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-slate-400 mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-slate-800 break-words">
        {value}
      </p>
    </div>
  );
}

function ExpiredOrNotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        </div>
        <h1
          className="text-2xl font-bold text-slate-900 mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Rapporten hittades inte
        </h1>
        <p className="text-slate-500 mb-8">
          Länken har antingen löpt ut eller tagits bort av ägaren.
        </p>
        <a
          href="https://autivo.se"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
        >
          Gå till autivo.se
        </a>
      </div>
    </main>
  );
}
