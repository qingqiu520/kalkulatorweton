import Link from "next/link";
import type { Metadata } from "next";
import WetonCalculator from "~/components/WetonCalculator";
import { JODOH_CATEGORIES, KETEMU_RANGE } from "~/lib/weton";

export const metadata: Metadata = {
  title: "Kalkulator Weton Jodoh — Hitung Kecocokan Pasangan Online",
  description:
    "Hitung kecocokan jodoh Anda dan pasangan dari tanggal lahir. Hasil kategori: Pegat, Ratu, Jodoh, Topo, Tinari, Padu, Sujanan, Pesthi — menurut primbon Jawa.",
};

export default function JodohIndex() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold text-white">
        Kalkulator Weton Jodoh
      </h1>
      <p className="mb-8 text-amber-100/70">
        Masukkan tanggal lahir Anda dan pasangan — sistem menjumlahkan neptu
        kedua weton lalu membacanya menurut 8 kategori primbon Jawa.
      </p>
      <WetonCalculator />

      <h2 className="mb-4 mt-12 text-2xl font-bold text-white">
        8 Kategori Hasil Hitungan Jodoh
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {JODOH_CATEGORIES.map((c) => (
          <Link key={c.slug} href={`/jodoh/${c.slug}`} className="card p-4">
            <p className="font-semibold text-accent">
              {c.name}
              <span className="ml-2 text-xs font-normal text-amber-100/50">
                sisa {c.sisa}
              </span>
            </p>
            <p className="mt-1 text-sm text-amber-100/70">{c.ringkas}</p>
          </Link>
        ))}
      </div>

      <h2 className="mb-4 mt-12 text-2xl font-bold text-white">
        Weton Jodoh Ketemu Berapa?
      </h2>
      <p className="mb-4 text-sm text-amber-100/70">
        "Ketemu" adalah jumlah neptu kedua pasangan (16–36). Klik angka untuk
        melihat artinya:
      </p>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
        {KETEMU_RANGE.map((n) => (
          <Link
            key={n}
            href={`/jodoh/ketemu-${n}`}
            className="card py-2 text-center text-sm font-semibold"
          >
            {n}
          </Link>
        ))}
      </div>
    </div>
  );
}
