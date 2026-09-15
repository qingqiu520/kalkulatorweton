import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import WetonCalculator from "~/components/WetonCalculator";
import { HARI_BAIK_TOPICS } from "~/lib/content";

export function generateStaticParams() {
  return HARI_BAIK_TOPICS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = HARI_BAIK_TOPICS.find((x) => x.slug === slug);
  if (!t) return {};
  return { title: `${t.title} Menurut Primbon Jawa`, description: t.desc };
}

export default async function HariBaikPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = HARI_BAIK_TOPICS.find((x) => x.slug === slug);
  if (!t) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-sm text-amber-100/50">
        <Link href="/hari-baik" className="hover:text-accent">Hari Baik</Link>
        {" / "}{t.title}
      </p>
      <h1 className="mb-4 mt-2 text-3xl font-bold text-white">{t.title}</h1>
      <p className="mb-6 text-amber-100/80">{t.desc}</p>

      <div className="card mb-8 p-6">
        <h2 className="mb-3 font-semibold text-accent">Tips Menurut Primbon</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-amber-100/80">
          {t.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>

      <h2 className="mb-4 text-xl font-bold text-white">
        Hitung Weton Anda Dulu
      </h2>
      <WetonCalculator />

      <div className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-white">Acara Lain</h2>
        <div className="flex flex-wrap gap-2">
          {HARI_BAIK_TOPICS.filter((x) => x.slug !== t.slug).map((x) => (
            <Link key={x.slug} href={`/hari-baik/${x.slug}`} className="card px-3 py-1.5 text-sm">
              {x.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
