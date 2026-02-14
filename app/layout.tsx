import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://autivo.se"),
  title: {
    default:
      "Autivo - Din bils digitala historia | Servicehistorik & Besiktning",
    template: "%s | Autivo",
  },
  description:
    "Håll koll på din bils servicehistorik, förbered besiktning och öka återförsäljningsvärdet. Autivo är den digitala serviceboken för svenska bilägare.",
  keywords: [
    "servicehistorik",
    "digital servicebok",
    "besiktning",
    "bilunderhåll",
    "servicebok app",
    "bilhistorik",
    "fordon",
    "Mina Fordon",
    "svensk bilapp",
    "bilservice",
    "servicekvitton",
    "besiktningschecklista",
  ],
  authors: [{ name: "Autivo" }],
  creator: "Autivo",
  publisher: "Autivo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://autivo.se",
    siteName: "Autivo",
    title: "Autivo - Din bils digitala historia",
    description:
      "Håll koll på servicehistorik, förbered besiktning och öka din bils värde. Digital servicebok för svenska bilägare.",
    images: [
      {
        url: "/og-image.png", // You'll need to create this (1200x630px)
        width: 1200,
        height: 630,
        alt: "Autivo - Digital Servicehistorik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autivo - Din bils digitala historia",
    description:
      "Håll koll på servicehistorik, förbered besiktning och öka din bils värde.",
    images: ["/og-image.png"],
    creator: "@autivo", // Update with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/logo-192x192.png", sizes: "192x192", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://autivo.se",
  },
  verification: {
    google: "your-google-verification-code", // Add after setting up Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
