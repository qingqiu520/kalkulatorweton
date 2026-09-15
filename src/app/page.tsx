import Link from "next/link";
import WetonCalculator from "~/components/WetonCalculator";
import WetonHariIni from "~/components/WetonHariIni";
import { ALL_WETON } from "~/lib/weton";
import { FAQ_HOME } from "~/lib/content";

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_HOME.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <div>
      <section className="mx-auto max-w-3xl px-4 pb-10 pt-12 text-center">
        <WetonHariIni />
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          Kalkulator Weton Jawa Online
        </h1>
        <p className="mb-8 text-lg text-amber-100/70">
          Hitung weton, neptu, dan kecocokan jodoh dari tanggal lahir — berdasarkan
          hitungan primbon Jawa. Gratis, instan, tanpa daftar.
        </p>
        <div className="text-left">
          <WetonCalculator />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="mb-2 text-2xl font-bold text-white">
          Apa Itu Weton dan Neptu?
        </h2>
        <p className="mb-4 text-amber-100/80">
          Weton adalah gabungan <strong>hari lahir</strong> (Senin sampai Minggu)
          dan <strong>pasaran Jawa</strong> (Legi, Pahing, Pon, Wage, Kliwon).
          Keduanya punya nilai yang disebut <strong>neptu</strong>, dan jumlahnya
          dipakai dalam tradisi primbon untuk membaca watak, rezeki, kecocokan
          jodoh, sampai memilih hari baik pernikahan atau membuka usaha.
        </p>
        <p className="mb-4 text-amber-100/80">
          Contoh: lahir hari <strong>Senin Pahing</strong> → neptu Senin (4) +
          neptu Pahing (9) = <strong>13</strong>. Angka inilah yang dibaca di
          primbon.
        </p>
        <div className="card p-5">
          <h3 className="mb-3 font-semibold text-white">Tabel Neptu</h3>
          <div className="grid gap-4 text-sm text-amber-100/80 md:grid-cols-2">
            <div>
              <p className="mb-1 font-medium text-accent">Hari</p>
              <p>Minggu 5 · Senin 4 · Selasa 3 · Rabu 7 · Kamis 8 · Jumat 6 · Sabtu 9</p>
            </div>
            <div>
              <p className="mb-1 font-medium text-accent">Pasaran</p>
              <p>Legi 5 · Pahing 9 · Pon 7 · Wage 4 · Kliwon 8</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-bold text-white">
          35 Weton — Watak & Neptu
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {ALL_WETON.map((w) => (
            <Link
              key={w.slug}
              href={`/weton/${w.slug}`}
              className="card block px-3 py-3 text-center"
            >
              <p className="text-sm font-semibold text-amber-50">{w.label}</p>
              <p className="text-xs text-amber-100/50">neptu {w.neptu}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-bold text-white">Pertanyaan Umum</h2>
        <div className="space-y-4">
          {FAQ_HOME.map((f) => (
            <details key={f.q} className="card p-4">
              <summary className="cursor-pointer font-semibold text-amber-50">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-amber-100/75">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </div>
  );
}
