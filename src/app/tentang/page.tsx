import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang KalkulatorWeton",
  description:
    "Tentang KalkulatorWeton.com — kalkulator weton dan primbon Jawa online gratis, dibuat untuk melestarikan hitungan tradisional Jawa dalam bentuk modern.",
};

export default function TentangPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold text-white">Tentang Kami</h1>
      <div className="space-y-4 text-amber-100/80">
        <p>
          <strong>KalkulatorWeton.com</strong> adalah alat online gratis untuk
          menghitung <Link href="/" className="text-accent underline">weton</Link>,
          {" "}<Link href="/neptu" className="text-accent underline">neptu</Link>,
          dan{" "}
          <Link href="/jodoh" className="text-accent underline">
            kecocokan jodoh
          </Link>{" "}
          berdasarkan hitungan primbon Jawa.
        </p>
        <p>
          Situs ini dibuat dengan satu tujuan: melestarikan sistem penanggalan
          tradisional Jawa dalam bentuk yang mudah dipakai generasi digital.
          Semua perhitungan mengikuti tabel neptu klasik (Minggu 5, Senin 4,
          Selasa 3, Rabu 7, Kamis 8, Jumat 6, Sabtu 9; Legi 5, Pahing 9, Pon 7,
          Wage 4, Kliwon 8) dan interpretasi kategori jodoh yang umum dipakai
          dalam primbon (Pegat, Ratu, Jodoh, Topo, Tinari, Padu, Sujanan,
          Pesthi).
        </p>
        <p>
          Konten situs ini bersifat budaya dan reflektif — hitungan primbon
          adalah warisan tradisi, bukan kepastian ilmiah. Gunakan sebagai bahan
          pertimbangan, bukan keputusan mutlak.
        </p>
        <p>
          Masukan, koreksi, atau kerja sama:{" "}
          <a href="mailto:lelea031210@gmail.com" className="text-accent underline">
            lelea031210@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
