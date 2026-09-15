import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://kalkulatorweton.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Kalkulator Weton Jawa — Hitung Neptu & Kecocokan Jodoh Online",
    template: "%s | Kalkulator Weton",
  },
  description:
    "Kalkulator weton Jawa gratis: hitung weton, neptu, dan kecocokan jodoh dari tanggal lahir. Berdasarkan hitungan primbon Jawa — tanpa daftar, hasil instan.",
  openGraph: {
    siteName: "Kalkulator Weton",
    type: "website",
    url: SITE,
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Kalkulator Weton Jawa",
    url: SITE,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    inLanguage: "id",
    offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
    description:
      "Kalkulator weton Jawa online: hitung neptu, watak, dan kecocokan jodoh berdasarkan primbon.",
  };
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <header className="border-b border-edge">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-lg font-bold text-accent">
              KalkulatorWeton
            </Link>
            <div className="flex items-center gap-4 text-sm text-amber-100/70">
              <Link href="/weton" className="hidden hover:text-accent md:inline">
                35 Weton
              </Link>
              <Link href="/jodoh" className="hidden hover:text-accent md:inline">
                Jodoh
              </Link>
              <Link href="/hari-baik" className="hidden hover:text-accent md:inline">
                Hari Baik
              </Link>
              <Link href="/neptu" className="hover:text-accent">
                Neptu
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-edge py-8 text-center text-sm text-amber-100/50">
          <div className="mb-2 flex justify-center gap-6">
            <Link href="/primbon" className="hover:text-accent">Primbon</Link>
            <Link href="/privacy-policy" className="hover:text-accent">Privasi</Link>
            <a href="mailto:lelea031210@gmail.com" className="hover:text-accent">
              Kontak
            </a>
          </div>
          <p>
            © {new Date().getFullYear()} KalkulatorWeton — hitungan primbon Jawa
            untuk perenungan, bukan vonis.
          </p>
        </footer>
      </body>
    </html>
  );
}
