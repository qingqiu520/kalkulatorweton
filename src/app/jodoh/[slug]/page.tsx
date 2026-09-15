import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import WetonCalculator from "~/components/WetonCalculator";
import { JODOH_CATEGORIES, KETEMU_RANGE, ketemuCategory } from "~/lib/weton";
import { JODOH_DETAIL } from "~/lib/content";

export function generateStaticParams() {
  const cats = JODOH_CATEGORIES.map((c) => ({ slug: c.slug }));
  const ketemus = KETEMU_RANGE.map((n) => ({ slug: `ketemu-${n}` }));
  return [...cats, ...ketemus];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = JODOH_CATEGORIES.find((c) => c.slug === slug);
  if (cat) {
    return {
      title: `Weton Jodoh ${cat.name}: Arti & Makna Hasil Hitungan`,
      description: `Arti hasil hitungan jodoh "${cat.name}" menurut primbon Jawa: ${cat.ringkas}. Baca makna lengkap dan saran untuk pasangan.`,
    };
  }
  const m = slug.match(/^ketemu-(\d+)$/);
  if (m) {
    const n = Number(m[1]);
    const c = ketemuCategory(n);
    return {
      title: `Weton Jodoh Ketemu ${n} Artinya: Kategori ${c.name}`,
      description: `Weton jodoh ketemu ${n} artinya masuk kategori ${c.name} (sisa ${c.sisa} dari pembagian 8). Baca makna dan saran menurut primbon Jawa.`,
    };
  }
  return {};
}

export default async function JodohPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = JODOH_CATEGORIES.find((c) => c.slug === slug);
  const m = slug.match(/^ketemu-(\d+)$/);

  if (!cat && !m) notFound();

  if (m) {
    const n = Number(m[1]);
    if (!KETEMU_RANGE.includes(n)) notFound();
    const c = ketemuCategory(n);
    const detail = JODOH_DETAIL[c.slug];
    const neighbors = KETEMU_RANGE.filter((x) => Math.abs(x - n) <= 2 && x !== n);
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm text-amber-100/50">
          <Link href="/jodoh" className="hover:text-accent">Weton Jodoh</Link>
          {" / "}Ketemu {n}
        </p>
        <h1 className="mb-2 mt-2 text-3xl font-bold text-white">
          Weton Jodoh Ketemu {n} Artinya
        </h1>
        <p className="mb-6 text-lg text-amber-100/70">
          Total neptu {n} → sisa {c.sisa} jika dibagi 8 → kategori{" "}
          <strong className="text-accent">{c.name}</strong>
        </p>
        <div className="card mb-6 p-6">
          <h2 className="mb-2 text-xl font-bold text-accent">
            Arti Kategori {c.name}
          </h2>
          <p className="mb-3 text-amber-100/80">{detail.arti}</p>
          <p className="rounded-lg border border-edge bg-ink p-4 text-sm text-amber-100/70">
            <strong className="text-amber-50">Saran primbon:</strong> {detail.saran}
          </p>
        </div>
        <div className="card mb-6 p-6 text-sm text-amber-100/75">
          <h2 className="mb-2 font-semibold text-white">
            Cara dapat angka {n}?
          </h2>
          <p>
            "Ketemu {n}" berarti jumlah neptu weton Anda + neptu weton pasangan =
            {" "}{n}. Contoh: Anda {n - 10} + pasangan 10, atau 11 + {n - 11}, dst.
            Hitung tanggal lahir asli Anda dengan kalkulator di bawah.
          </p>
        </div>
        <h2 className="mb-4 text-xl font-bold text-white">
          Coba Hitung Sendiri
        </h2>
        <WetonCalculator />
        <div className="mt-8 flex flex-wrap gap-2">
          {neighbors.map((x) => (
            <Link key={x} href={`/jodoh/ketemu-${x}`} className="card px-3 py-1.5 text-sm">
              Ketemu {x}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (!cat) notFound();
  const detail = JODOH_DETAIL[cat.slug];
  const others = JODOH_CATEGORIES.filter((c) => c.slug !== cat.slug);
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-sm text-amber-100/50">
        <Link href="/jodoh" className="hover:text-accent">Weton Jodoh</Link>
        {" / "}{cat.name}
      </p>
      <h1 className="mb-2 mt-2 text-3xl font-bold text-white">
        Weton Jodoh {cat.name}
      </h1>
      <p className="mb-6 text-lg text-amber-100/70">{cat.ringkas}</p>
      <div className="card mb-6 p-6">
        <p className="mb-3 text-amber-100/80">{detail.arti}</p>
        <p className="rounded-lg border border-edge bg-ink p-4 text-sm text-amber-100/70">
          <strong className="text-amber-50">Saran primbon:</strong> {detail.saran}
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-white">
          Hitung Weton Jodoh Anda
        </h2>
        <WetonCalculator />
      </div>
      <h2 className="mb-3 text-lg font-bold text-white">Kategori Lain</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {others.map((c) => (
          <Link key={c.slug} href={`/jodoh/${c.slug}`} className="card p-3 text-center text-sm font-semibold">
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
