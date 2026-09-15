import Link from "next/link";
import type { Metadata } from "next";
import { HARI_BAIK_TOPICS } from "~/lib/content";

export const metadata: Metadata = {
  title: "Hari Baik Menurut Primbon Jawa — Pernikahan, Usaha, Pindah Rumah",
  description:
    "Panduan hari baik menurut primbon Jawa: pernikahan, membuka usaha, pindah rumah, beli kendaraan, dan acara penting lainnya.",
};

export default function HariBaikIndex() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold text-white">
        Hari Baik Menurut Primbon Jawa
      </h1>
      <p className="mb-8 text-amber-100/70">
        Tradisi Jawa memilih hari baik dengan menghitung weton dan neptu. Pilih
        acara di bawah untuk panduan lengkapnya.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {HARI_BAIK_TOPICS.map((t) => (
          <Link key={t.slug} href={`/hari-baik/${t.slug}`} className="card p-5">
            <p className="font-semibold text-accent">{t.title}</p>
            <p className="mt-1 text-sm text-amber-100/60">{t.keyword}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
