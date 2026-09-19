import type { Metadata } from "next";
import Link from "next/link";
import { HARI, NEPTU_HARI, NEPTU_PASARAN, PASARAN } from "~/lib/weton";

export const metadata: Metadata = {
  title: "Tabel Neptu Jawa — Nilai Hari dan Pasaran dalam Primbon",
  description:
    "Tabel neptu lengkap: nilai hari (Minggu 5, Senin 4, Selasa 3, Rabu 7, Kamis 8, Jumat 6, Sabtu 9) dan pasaran (Legi 5, Pahing 9, Pon 7, Wage 4, Kliwon 8).",
};

export default function NeptuPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold text-white">
        Tabel Neptu Hari & Pasaran
      </h1>
      <p className="mb-8 text-amber-100/70">
        Neptu adalah nilai angka setiap hari dan pasaran. Jumlah keduanya = neptu
        weton Anda, dasar semua hitungan primbon Jawa.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-5">
          <h2 className="mb-3 font-semibold text-accent">Neptu Hari</h2>
          <table className="w-full text-sm">
            <tbody>
              {HARI.map((h) => (
                <tr key={h} className="border-b border-edge last:border-0">
                  <td className="py-2 text-amber-50">{h}</td>
                  <td className="py-2 text-right font-mono text-accent">
                    {NEPTU_HARI[h]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card p-5">
          <h2 className="mb-3 font-semibold text-accent">Neptu Pasaran</h2>
          <table className="w-full text-sm">
            <tbody>
              {PASARAN.map((p) => (
                <tr key={p} className="border-b border-edge last:border-0">
                  <td className="py-2 text-amber-50">{p}</td>
                  <td className="py-2 text-right font-mono text-accent">
                    {NEPTU_PASARAN[p]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card mt-8 p-5">
        <h2 className="mb-3 font-semibold text-white">
          Cari Weton Berdasarkan Neptu
        </h2>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 11 }, (_, i) => (
            <Link
              key={i}
              href={`/neptu/${i + 8}`}
              className="rounded-lg border border-edge bg-ink px-3 py-1.5 text-sm text-accent hover:border-accent"
            >
              Neptu {i + 8}
            </Link>
          ))}
        </div>
      </div>

      <div className="card mt-8 p-5 text-sm text-amber-100/75">
        <h2 className="mb-2 font-semibold text-white">Contoh Perhitungan</h2>
        <p>
          Lahir <strong>Senin Pahing</strong> → Senin (4) + Pahing (9) ={" "}
          <strong className="text-accent">neptu 13</strong>. Angka ini lalu
          dibaca wataknya di halaman{" "}
          <Link href="/weton/senin-pahing" className="text-accent underline">
            weton Senin Pahing
          </Link>
          , atau dijumlahkan dengan neptu pasangan untuk{" "}
          <Link href="/jodoh" className="text-accent underline">
            hitungan jodoh
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
