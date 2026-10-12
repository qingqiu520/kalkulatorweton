import type { Metadata } from "next";
import Link from "next/link";
import WetonCalculator from "~/components/WetonCalculator";
import { HARI, NEPTU_HARI, NEPTU_PASARAN, PASARAN } from "~/lib/weton";

export const metadata: Metadata = {
  title: "Kalkulator Neptu Jawa — Hitung dari Tanggal Lahir",
  description:
    "Hitung neptu Jawa dari tanggal lahir langsung di halaman ini. Lihat hari, pasaran, rincian penjumlahan, serta tabel neptu dan contoh perhitungan.",
  alternates: { canonical: "/neptu" },
};

export default function NeptuPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold text-white">
        Kalkulator Neptu Jawa & Tabel Neptu
      </h1>
      <p className="mb-4 text-amber-100/70">
        Hitung neptu Jawa dari tanggal lahir Anda tanpa pindah halaman. Kalkulator
        neptu ini menampilkan hari, pasaran, dan penjumlahan keduanya. Neptu adalah
        nilai angka hari dan pasaran yang digunakan dalam tradisi primbon Jawa.
      </p>
      <section className="mb-8" aria-labelledby="hitung-neptu">
        <h2 id="hitung-neptu" className="mb-4 text-xl font-semibold text-white">
          Hitung Neptu dari Tanggal Lahir
        </h2>
        <WetonCalculator mode="neptu" />
        <p className="mt-3 text-sm text-amber-100/65">
          Perhitungan berjalan di browser tanpa mengirim tanggal lahir ke server.
          Hasil primbon adalah informasi budaya, bukan kepastian tentang nasib
          atau kecocokan pasangan.
        </p>
      </section>

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

      <section className="mt-8 text-amber-100/75">
        <h2 className="mb-3 text-xl font-semibold text-white">Cara Menghitung Neptu</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Masukkan tanggal lahir dan pilih Hitung Neptu.</li>
          <li>Lihat hari dan pasaran yang ditampilkan dalam hasil.</li>
          <li>Jumlahkan nilai hari dengan nilai pasaran, misalnya Senin 4 + Pahing 9 = 13.</li>
        </ol>
        <p className="mt-4">
          Jika hari dan pasaran sudah diketahui, gunakan dua tabel di atas untuk
          memeriksa penjumlahannya. Untuk menghitung dua tanggal, gunakan{" "}
          <Link href="/jodoh" className="text-accent underline">kalkulator weton jodoh</Link>.
        </p>
      </section>

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
