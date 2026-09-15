// Kalkulasi weton Jawa — semua murni dihitung dari tanggal, tanpa API.
//
// Siklus pasaran (5 hari): Legi -> Pahing -> Pon -> Wage -> Kliwon -> Legi
// Jangkar terverifikasi: 2025-12-01 = Senin Pahing, 2025-07-22 = Selasa Kliwon.

export const HARI = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
] as const;
export type Hari = (typeof HARI)[number];

export const PASARAN = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"] as const;
export type Pasaran = (typeof PASARAN)[number];

export const NEPTU_HARI: Record<Hari, number> = {
  Minggu: 5,
  Senin: 4,
  Selasa: 3,
  Rabu: 7,
  Kamis: 8,
  Jumat: 6,
  Sabtu: 9,
};

export const NEPTU_PASARAN: Record<Pasaran, number> = {
  Legi: 5,
  Pahing: 9,
  Pon: 7,
  Wage: 4,
  Kliwon: 8,
};

// 2025-12-01 adalah Senin Pahing (Pahing = index 1 di PASARAN).
const ANCHOR = Date.UTC(2025, 11, 1);
const ANCHOR_PASARAN_INDEX = 1;
const DAY_MS = 86400000;

export interface Weton {
  hari: Hari;
  pasaran: Pasaran;
  neptu: number;
  slug: string;
  label: string; // "Senin Pahing"
}

export function getWeton(date: Date): Weton {
  const utc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const hari = HARI[new Date(utc).getUTCDay()];
  const diff = Math.round((utc - ANCHOR) / DAY_MS);
  const idx = (((ANCHOR_PASARAN_INDEX + diff) % 5) + 5) % 5;
  const pasaran = PASARAN[idx];
  const neptu = NEPTU_HARI[hari] + NEPTU_PASARAN[pasaran];
  return {
    hari,
    pasaran,
    neptu,
    slug: `${hari.toLowerCase()}-${pasaran.toLowerCase()}`,
    label: `${hari} ${pasaran}`,
  };
}

export function wetonFromSlug(slug: string): Weton | null {
  const [h, p] = slug.split("-");
  const hari = HARI.find((x) => x.toLowerCase() === h);
  const pasaran = PASARAN.find((x) => x.toLowerCase() === p);
  if (!hari || !pasaran) return null;
  return {
    hari,
    pasaran,
    neptu: NEPTU_HARI[hari] + NEPTU_PASARAN[pasaran],
    slug,
    label: `${hari} ${pasaran}`,
  };
}

export const ALL_WETON: Weton[] = HARI.flatMap((hari) =>
  PASARAN.map((pasaran) => ({
    hari,
    pasaran,
    neptu: NEPTU_HARI[hari] + NEPTU_PASARAN[pasaran],
    slug: `${hari.toLowerCase()}-${pasaran.toLowerCase()}`,
    label: `${hari} ${pasaran}`,
  }))
);

// ---- Jodoh (kecocokan pasangan) ----
// Sistem mod 8: sisa 1..7 = Pegat..Sujanan, sisa 0 = Pesthi.

export const JODOH_CATEGORIES = [
  { slug: "pegat", name: "Pegat", sisa: 1, ringkas: "Sering cekcok, rawan perpisahan" },
  { slug: "ratu", name: "Ratu", sisa: 2, ringkas: "Dihormati, harmonis, disegani" },
  { slug: "jodoh", name: "Jodoh", sisa: 3, ringkas: "Bergenuk jodoh, saling menerima" },
  { slug: "topo", name: "Topo", sisa: 4, ringkas: "Awal sulit, akhir bahagia" },
  { slug: "tinari", name: "Tinari", sisa: 5, ringkas: "Rezeki mudah, penuh keberuntungan" },
  { slug: "padu", name: "Padu", sisa: 6, ringkas: "Sering bertengkar tapi langgeng" },
  { slug: "sujanan", name: "Sujanan", sisa: 7, ringkas: "Rawan gangguan pihak ketiga" },
  { slug: "pesthi", name: "Pesthi", sisa: 0, ringkas: "Rukun dan harmonis sampai tua" },
] as const;

export interface JodohResult {
  a: Weton;
  b: Weton;
  total: number; // neptuA + neptuB ("ketemu")
  sisa: number; // total mod 8
  category: (typeof JODOH_CATEGORIES)[number];
}

export function hitungJodoh(dateA: Date, dateB: Date): JodohResult {
  const a = getWeton(dateA);
  const b = getWeton(dateB);
  const total = a.neptu + b.neptu;
  const sisa = total % 8;
  const category =
    JODOH_CATEGORIES.find((c) => c.sisa === sisa) ?? JODOH_CATEGORIES[7];
  return { a, b, total, sisa, category };
}

// Rentang total neptu dua pasangan: min 8+8=16, max 18+18=36.
export const KETEMU_RANGE = Array.from({ length: 21 }, (_, i) => i + 16);

export function ketemuCategory(total: number) {
  const sisa = ((total % 8) + 8) % 8;
  return JODOH_CATEGORIES.find((c) => c.sisa === sisa) ?? JODOH_CATEGORIES[7];
}
