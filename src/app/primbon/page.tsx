import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apa Itu Primbon Jawa? — Pengertian dan Isi Kitab Primbon",
  description:
    "Primbon Jawa adalah kitab tradisional Jawa berisi hitungan weton, ramalan, tafsir mimpi, dan petunjuk hari baik. Kenali isi dan cara memakainya.",
};

export default function PrimbonPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold text-white">Apa Itu Primbon Jawa?</h1>
      <div className="space-y-4 text-amber-100/80">
        <p>
          <strong>Primbon</strong> adalah kitab warisan budaya Jawa yang berisi
          kumpulan pengetahuan tradisional: hitungan <strong>weton</strong> dan
          {" "}<strong>neptu</strong>, ramalan jodoh dan rezeki, tafsir mimpi,
          petunjuk <Link href="/hari-baik" className="text-accent underline">hari baik</Link>,
          sampai tanda-tanda alam.
        </p>
        <p>
          Primbon berasal dari kata <em>imbu/imbuh</em> — "simpanan/catatan".
          Dahulu dicatat turun-temurun oleh leluhur Jawa sebagai pedoman hidup:
          kapan menikah, kapan membuka usaha, bagaimana membaca watak anak yang
          lahir di hari tertentu.
        </p>
        <p>
          Isi utama primbon meliputi:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <Link href="/weton" className="text-accent underline">
              Perhitungan weton
            </Link>{" "}
            dan watak berdasarkan hari lahir + pasaran
          </li>
          <li>
            <Link href="/jodoh" className="text-accent underline">
              Petung perjodohan
            </Link>{" "}
            (kecocokan pasangan dari jumlah neptu)
          </li>
          <li>Hari baik untuk acara penting</li>
          <li>Tafsir mimpi dan firasat</li>
        </ul>
        <p>
          Situs ini menghadirkan hitungan primbon dalam bentuk kalkulator modern
          — Anda cukup memasukkan tanggal lahir, sisanya dihitung otomatis.
          Gunakan sebagai bahan perenungan dan kekayaan budaya, bukan vonis
          mutlak atas nasib.
        </p>
      </div>
    </div>
  );
}
