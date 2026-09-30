import Link from "next/link";
import type { Metadata } from "next";
import WetonCalculator from "~/components/WetonCalculator";
import { getTanggalJakarta, getWetonHariIni } from "~/lib/weton";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Weton Hari Ini — Hari dan Pasaran Jawa",
  description:
    "Cari weton hari ini, hari dan pasaran Jawa, serta neptu hari ini berdasarkan waktu Jakarta. Hitung weton dari tanggal lahir secara gratis.",
};

export default function WetonHariIniPage() {
  const weton = getWetonHariIni();
  const tanggal = getTanggalJakarta();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-sm text-amber-100/50">
        <Link href="/" className="hover:text-accent">Kalkulator Weton</Link>
        {" / Weton Hari Ini"}
      </p>

      <h1 className="mb-4 mt-2 text-3xl font-bold text-white">
        Weton Hari Ini
      </h1>
      <p className="mb-8 text-amber-100/70">
        Berikut hari, pasaran, dan neptu Jawa untuk {tanggal} berdasarkan waktu
        Jakarta (WIB).
      </p>

      <div className="card mb-8 p-6 text-center">
        <p className="text-sm text-amber-100/60">Hari dan pasaran hari ini</p>
        <p className="mt-2 text-4xl font-bold text-accent">{weton.label}</p>
        <p className="mt-3 text-amber-100/80">
          Neptu hari ini: <strong className="text-white">{weton.neptu}</strong>
        </p>
        <Link
          href={`/weton/${weton.slug}`}
          className="mt-5 inline-block text-sm font-semibold text-accent underline"
        >
          Baca watak dan arti weton {weton.label} →
        </Link>
      </div>

      <div className="card mb-8 p-6 text-sm text-amber-100/75">
        <h2 className="mb-3 text-xl font-bold text-white">
          Apa Weton Hari Ini?
        </h2>
        <p>
          Weton adalah gabungan hari dalam satu minggu dan lima pasaran Jawa:
          Legi, Pahing, Pon, Wage, dan Kliwon. Neptu hari ini dihitung dari
          nilai hari ditambah nilai pasarannya. Gunakan hasil ini sebagai
          informasi budaya dan bahan perenungan menurut tradisi primbon Jawa.
        </p>
      </div>

      <h2 className="mb-4 text-xl font-bold text-white">
        Hitung Weton dari Tanggal Lahir
      </h2>
      <WetonCalculator />

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        <Link href="/weton" className="card p-4 text-sm">
          <span className="font-semibold text-accent">35 Weton</span>
          <span className="mt-1 block text-amber-100/70">Lihat semua hari dan pasaran.</span>
        </Link>
        <Link href={`/neptu/${weton.neptu}`} className="card p-4 text-sm">
          <span className="font-semibold text-accent">Neptu {weton.neptu}</span>
          <span className="mt-1 block text-amber-100/70">Weton lain dengan neptu yang sama.</span>
        </Link>
        <Link href="/jodoh" className="card p-4 text-sm">
          <span className="font-semibold text-accent">Kecocokan Jodoh</span>
          <span className="mt-1 block text-amber-100/70">Hitung weton Anda dan pasangan.</span>
        </Link>
      </div>
    </div>
  );
}
