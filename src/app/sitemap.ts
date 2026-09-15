import type { MetadataRoute } from "next";
import { ALL_WETON, JODOH_CATEGORIES, KETEMU_RANGE } from "~/lib/weton";
import { HARI_BAIK_TOPICS } from "~/lib/content";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://kalkulatorweton.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/weton", "/jodoh", "/hari-baik", "/neptu", "/primbon"].map(
    (p) => ({ url: `${SITE}${p}`, changeFrequency: "weekly" as const })
  );
  const wetonPages = ALL_WETON.map((w) => ({
    url: `${SITE}/weton/${w.slug}`,
    changeFrequency: "monthly" as const,
  }));
  const jodohCats = JODOH_CATEGORIES.map((c) => ({
    url: `${SITE}/jodoh/${c.slug}`,
    changeFrequency: "monthly" as const,
  }));
  const ketemus = KETEMU_RANGE.map((n) => ({
    url: `${SITE}/jodoh/ketemu-${n}`,
    changeFrequency: "monthly" as const,
  }));
  const hariBaik = HARI_BAIK_TOPICS.map((t) => ({
    url: `${SITE}/hari-baik/${t.slug}`,
    changeFrequency: "monthly" as const,
  }));
  return [...staticPages, ...wetonPages, ...jodohCats, ...ketemus, ...hariBaik];
}
