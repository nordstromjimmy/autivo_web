"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            {/* Logo: Image "A" + Text "utivo" = "Autivo" */}
            <div className="flex items-center gap-2 mb-4">
              {/* Logo Image (A with car) */}
              <Image
                src="/weblogo4.png"
                alt="Autivo"
                width={40}
                height={40}
                className="w-11 h-11"
              />

              {/* Text "utivo" */}
              <span className="text-2xl font-display font-bold text-white">
                Autivo
              </span>
            </div>

            <p className="text-slate-400 mb-6 max-w-sm">
              Din bils digitala historia. Håll koll på service, besiktning och
              historik – allt på ett ställe.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-display font-bold mb-4">Produkt</h3>
            <ul className="space-y-3">
              <li>
                {isHomePage ? (
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Funktioner
                  </a>
                ) : (
                  <Link
                    href="/#features"
                    className="hover:text-white transition-colors"
                  >
                    Funktioner
                  </Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a
                    href="#how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    Så fungerar det
                  </a>
                ) : (
                  <Link
                    href="/#how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    Så fungerar det
                  </Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a
                    href="#waitlist"
                    className="hover:text-white transition-colors"
                  >
                    Väntelista
                  </a>
                ) : (
                  <Link
                    href="/#waitlist"
                    className="hover:text-white transition-colors"
                  >
                    Väntelista
                  </Link>
                )}
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-display font-bold mb-4">Företag</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/om-oss"
                  className="hover:text-white transition-colors"
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <Link
                href="/blogg"
                className="text-white font-display font-bold mb-4"
              >
                Blogg
              </Link>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {currentYear} Autivo. Alla rättigheter förbehållna.
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="integritetspolicy"
              className="hover:text-white transition-colors"
            >
              Integritetspolicy
            </a>
            <a
              href="anvandarvillkor"
              className="hover:text-white transition-colors"
            >
              Användarvillkor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
