import Link from "next/link";
import type { Metadata } from "next";
import { ALL_WETON } from "~/lib/weton";

export const metadata: Metadata = {
  title: "Daftar 35 Weton Jawa Lengkap — Neptu, Watak & Jodoh",
  description:
    "Daftar lengkap 35 weton Jawa (Senin Legi sampai Sabtu Kliwon): neptu, watak, dan kecocokan jodoh masing-masing menurut primbon Jawa.",
};

export default function WetonIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold text-white">35 Weton Jawa</h1>
      <p className="mb-8 text-amber-100/70">
        Setiap weton adalah kombinasi hari (7) dan pasaran (5) dengan neptu dan
        wataknya masing-masing. Klik untuk membaca watak dan kecocokan jodohnya.
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {ALL_WETON.map((w) => (
          <Link key={w.slug} href={`/weton/${w.slug}`} className="card px-3 py-3 text-center">
            <p className="text-sm font-semibold text-amber-50">{w.label}</p>
            <p className="text-xs text-amber-100/50">neptu {w.neptu}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
