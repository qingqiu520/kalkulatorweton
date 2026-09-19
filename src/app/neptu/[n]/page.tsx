import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ALL_WETON, NEPTU_HARI, NEPTU_PASARAN } from "~/lib/weton";

const NEPTU_VALUES = Array.from({ length: 11 }, (_, i) => i + 8); // 8..18

export function generateStaticParams() {
  return NEPTU_VALUES.map((n) => ({ n: String(n) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ n: string }>;
}): Promise<Metadata> {
  const { n } = await params;
  return {
    title: `Neptu ${n} — Weton Apa Saja yang Berneptu ${n}?`,
    description: `Daftar weton dengan neptu ${n} menurut primbon Jawa, beserta makna dan cara menghitungnya.`,
  };
}

export default async function NeptuDetail({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const num = Number(n);
  if (!NEPTU_VALUES.includes(num)) notFound();

  const combos = ALL_WETON.filter((w) => w.neptu === num);
  const others = NEPTU_VALUES.filter((x) => x !== num);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-sm text-amber-100/50">
        <Link href="/neptu" className="hover:text-accent">Neptu</Link>
        {" / "}{num}
      </p>
      <h1 className="mb-4 mt-2 text-3xl font-bold text-white">
        Weton dengan Neptu {num}
      </h1>
      <p className="mb-8 text-amber-100/70">
        Neptu {num} diperoleh dari jumlah nilai hari dan pasaran. Berikut semua
        weton yang berneptu {num}:
      </p>

      <div className="card mb-8 p-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-edge text-left text-amber-100/50">
              <th className="py-2">Weton</th>
              <th className="py-2">Hitungan</th>
              <th className="py-2 text-right">Neptu</th>
            </tr>
          </thead>
          <tbody>
            {combos.map((w) => (
              <tr key={w.slug} className="border-b border-edge last:border-0">
                <td className="py-2">
                  <Link href={`/weton/${w.slug}`} className="text-accent underline">
                    {w.label}
                  </Link>
                </td>
                <td className="py-2 text-amber-100/70">
                  {w.hari} {NEPTU_HARI[w.hari]} + {w.pasaran}{" "}
                  {NEPTU_PASARAN[w.pasaran]}
                </td>
                <td className="py-2 text-right font-mono text-accent">{w.neptu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card mb-8 p-6 text-sm text-amber-100/75">
        <p>
          Dalam hitungan jodoh, neptu {num} dijumlahkan dengan neptu pasangan
          lalu dibagi 8 — sisanya menentukan kategori kecocokan (Pegat, Ratu,
          Jodoh, Topo, Tinari, Padu, Sujanan, Pesthi).{" "}
          <Link href="/jodoh" className="text-accent underline">
            Hitung kecocokan sekarang →
          </Link>
        </p>
      </div>

      <h2 className="mb-3 text-lg font-bold text-white">Neptu Lainnya</h2>
      <div className="flex flex-wrap gap-2">
        {others.map((x) => (
          <Link key={x} href={`/neptu/${x}`} className="card px-3 py-1.5 text-sm">
            {x}
          </Link>
        ))}
      </div>
    </div>
  );
}
