import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kalkulatorweton.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Kalkulator Weton Jawa — Hitung Neptu & Kecocokan Jodoh Online",
    template: "%s | Kalkulator Weton",
  },
  description:
    "Kalkulator weton Jawa gratis: hitung weton, neptu, dan kecocokan jodoh dari tanggal lahir. Berdasarkan hitungan primbon Jawa — tanpa daftar, hasil instan.",
  verification: {
    google: "n1acla19hg5RJmY-Jw3E1Ch724f_LRgrZT-RAXtkO6Y",
  },
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
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MMRB0J2L8T"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MMRB0J2L8T');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <header className="border-b border-edge">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-accent"
            >
              <svg
                viewBox="0 0 64 64"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <circle cx="32" cy="32" r="17" fill="none" stroke="currentColor" strokeWidth="4" />
                <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                  <line x1="32" y1="7" x2="32" y2="14" />
                  <line x1="32" y1="50" x2="32" y2="57" />
                  <line x1="7" y1="32" x2="14" y2="32" />
                  <line x1="50" y1="32" x2="57" y2="32" />
                  <line x1="14.3" y1="14.3" x2="19.2" y2="19.2" />
                  <line x1="44.8" y1="44.8" x2="49.7" y2="49.7" />
                  <line x1="49.7" y1="14.3" x2="44.8" y2="19.2" />
                  <line x1="19.2" y1="44.8" x2="14.3" y2="49.7" />
                </g>
                <circle cx="32" cy="32" r="5" fill="currentColor" />
              </svg>
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
            <Link href="/tentang" className="hover:text-accent">Tentang</Link>
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
