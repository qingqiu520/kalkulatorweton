import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold text-white">Kebijakan Privasi</h1>
      <div className="space-y-4 text-sm text-amber-100/75">
        <p>
          <strong>KalkulatorWeton.com</strong> berkomitmen melindungi privasi
          pengguna. Halaman ini menjelaskan data apa yang kami kumpulkan.
        </p>
        <h2 className="text-lg font-semibold text-white">Data yang Anda Masukkan</h2>
        <p>
          Tanggal lahir yang Anda masukkan ke kalkulator <strong>diproses
          sepenuhnya di perangkat Anda sendiri</strong> (browser). Kami tidak
          mengirim, menyimpan, atau membagikan tanggal lahir Anda ke server mana
          pun.
        </p>
        <h2 className="text-lg font-semibold text-white">Iklan & Cookie</h2>
        <p>
          Situs ini dapat menampilkan iklan Google AdSense. Google dapat
          menggunakan cookie untuk menayangkan iklan yang relevan. Anda dapat
          mengatur preferensi iklan melalui pengaturan iklan Google atau
          menghapus cookie di browser Anda.
        </p>
        <h2 className="text-lg font-semibold text-white">Analitik</h2>
        <p>
          Kami dapat menggunakan alat analitik untuk memahami penggunaan situs
          secara agregat (jumlah kunjungan, halaman populer) tanpa mengidentifikasi
          individu.
        </p>
        <h2 className="text-lg font-semibold text-white">Kontak</h2>
        <p>
          Pertanyaan privasi:{" "}
          <a href="mailto:lelea031210@gmail.com" className="text-accent underline">
            lelea031210@gmail.com
          </a>
        </p>
        <p className="text-amber-100/50">Terakhir diperbarui: September 2026</p>
      </div>
    </div>
  );
}
