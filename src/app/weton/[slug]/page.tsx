import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import WetonCalculator from "~/components/WetonCalculator";
import { ALL_WETON, NEPTU_HARI, NEPTU_PASARAN, wetonFromSlug } from "~/lib/weton";
import { WATAK_HARI, WATAK_PASARAN, WETON_KHUSUS } from "~/lib/content";

export function generateStaticParams() {
  return ALL_WETON.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = wetonFromSlug(slug);
  if (!w) return {};
  return {
    title: `Weton ${w.label}: Neptu ${w.neptu}, Watak & Kecocokan`,
    description: `Weton ${w.label} memiliki neptu ${w.neptu}. Baca watak, rezeki, dan kecocokan jodoh weton ${w.label} menurut hitungan primbon Jawa.`,
  };
}

export default async function WetonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = wetonFromSlug(slug);
  if (!w) notFound();

  const khusus = WETON_KHUSUS[w.slug];
  const others = ALL_WETON.filter((x) => x.slug !== w.slug).slice(0, 10);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-sm text-amber-100/50">
        <Link href="/" className="hover:text-accent">Kalkulator Weton</Link>
        {" / "}
        <Link href="/weton" className="hover:text-accent">35 Weton</Link>
        {" / "}{w.label}
      </p>
      <h1 className="mb-2 mt-2 text-4xl font-bold text-white">
        Weton {w.label}
      </h1>
      <p className="mb-8 text-lg text-amber-100/70">
        Neptu {w.neptu} = {w.hari} {NEPTU_HARI[w.hari]} + {w.pasaran}{" "}
        {NEPTU_PASARAN[w.pasaran]}
      </p>

      <div className="card mb-6 p-6">
        <h2 className="mb-2 text-xl font-bold text-accent">Watak {w.label}</h2>
        <p className="mb-3 text-amber-100/80">{WATAK_HARI[w.hari.toLowerCase()]}</p>
        <p className="text-amber-100/80">{WATAK_PASARAN[w.pasaran.toLowerCase()]}</p>
        {khusus && (
          <p className="mt-3 rounded-lg border border-accent/40 bg-ink p-4 text-amber-100/90">
            {khusus}
          </p>
        )}
      </div>

      <div className="card mb-6 p-6">
        <h2 className="mb-2 text-xl font-bold text-accent">
          Kecocokan Jodoh {w.label}
        </h2>
        <p className="text-amber-100/80">
          Untuk membaca kecocokan {w.label} dengan pasangan, jumlahkan neptu{" "}
          {w.label} ({w.neptu}) dengan neptu weton pasangan, lalu bagi 8 — sisa
          pembagian menentukan kategori: Pegat, Ratu, Jodoh, Topo, Tinari, Padu,
          Sujanan, atau Pesthi.{" "}
          <Link href="/jodoh" className="text-accent underline">
            Lihat arti tiap kategori →
          </Link>
        </p>
      </div>

      <div className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-white">
          Hitung Kecocokan {w.label} Sekarang
        </h2>
        <WetonCalculator />
      </div>

      <h2 className="mb-4 text-lg font-bold text-white">Weton Lainnya</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {others.map((x) => (
          <Link key={x.slug} href={`/weton/${x.slug}`} className="card px-3 py-2 text-center text-sm">
            {x.label}
            <span className="block text-xs text-amber-100/50">neptu {x.neptu}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
