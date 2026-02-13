import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autivo - Din app för bilservice, besiktning och servicehistorik",
  description:
    "Autivo hjälper dig hålla koll på bilens service, förbereda besiktning och dokumentera servicehistorik. Öka din bils värde vid försäljning.",
  keywords: [
    "bilservice",
    "besiktning",
    "servicebok",
    "bilhistorik",
    "fordonsunderhåll",
    "service app",
  ],
  openGraph: {
    title: "Autivo - Din bils digitala historia",
    description:
      "Håll koll på service, besiktning och historik. Öka din bils värde.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body
        className={`${sora.variable} ${manrope.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
