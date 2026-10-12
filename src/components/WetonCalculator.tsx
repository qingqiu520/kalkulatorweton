"use client";

import { useId, useState } from "react";
import Link from "next/link";
import {
  getWeton,
  hitungJodoh,
  NEPTU_HARI,
  NEPTU_PASARAN,
  type JodohResult,
  type Weton,
} from "~/lib/weton";

function parseDate(v: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return null;
  const [y, m, d] = v.split("-").map(Number);
  if (y < 1 || m < 1 || m > 12 || d < 1 || d > 31) return null;
  const date = new Date(0);
  date.setHours(0, 0, 0, 0);
  date.setFullYear(y, m - 1, d);
  return date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d
    ? date
    : null;
}

export default function WetonCalculator({ mode = "weton" }: { mode?: "weton" | "neptu" } = {}) {
  const isNeptu = mode === "neptu";
  const id = useId();
  const [error, setError] = useState("");
  const [tab, setTab] = useState<"weton" | "jodoh">("weton");
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [weton, setWeton] = useState<Weton | null>(null);
  const [jodoh, setJodoh] = useState<JodohResult | null>(null);

  return (
    <div className="rounded-2xl border border-edge bg-panel p-6">
      {!isNeptu && <div className="mb-6 flex gap-2">
        <button
          onClick={() => { setTab("weton"); setError(""); }}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            tab === "weton" ? "bg-accent text-ink" : "text-amber-100/60 hover:text-amber-100"
          }`}
        >
          Kalkulator Weton
        </button>
        <button
          onClick={() => { setTab("jodoh"); setError(""); }}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            tab === "jodoh" ? "bg-accent text-ink" : "text-amber-100/60 hover:text-amber-100"
          }`}
        >
          Weton Jodoh (Kecocokan)
        </button>
      </div>}

      {error && <p role="alert" className="mb-4 text-sm text-red-300">{error}</p>}
      {tab === "weton" ? (
        <div>
          <label htmlFor={`${id}-date-a`} className="mb-2 block text-sm text-amber-100/70">
            Tanggal lahir Anda
          </label>
          <input
            type="date"
            id={`${id}-date-a`}
            value={d1}
            onChange={(e) => { setD1(e.target.value); setWeton(null); setJodoh(null); setError(""); }}
            className="input-date mb-4"
          />
          <button
            onClick={() => {
              const d = parseDate(d1);
              if (!d) { setError("Masukkan tanggal lahir yang valid."); return; }
              setError("");
              setWeton(getWeton(d));
            }}
            className="btn-primary w-full"
          >
            {isNeptu ? "Hitung Neptu" : "Hitung Weton"}
          </button>

          {weton && (
            <div role="status" className="mt-6 rounded-xl border border-accent/40 bg-ink p-5">
              <p className="text-sm text-amber-100/60">{isNeptu ? "Neptu Anda" : "Weton Anda"}</p>
              <p className="mt-1 text-3xl font-bold text-accent">{isNeptu ? weton.neptu : weton.label}</p>
              {isNeptu && <p className="mt-2 text-amber-100/80">Weton: <strong className="text-white">{weton.label}</strong></p>}
              <p className="mt-2 text-amber-100/80">
                Neptu: <strong className="text-white">{weton.neptu}</strong>{" "}
                ({weton.hari} {NEPTU_HARI[weton.hari]} + {weton.pasaran}{" "}
                {NEPTU_PASARAN[weton.pasaran]})
              </p>
              <Link
                href={`/weton/${weton.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-accent underline"
              >
                Baca watak, rezeki & jodoh weton {weton.label} →
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor={`${id}-date-a`} className="mb-2 block text-sm text-amber-100/70">
                Tanggal lahir Anda
              </label>
              <input
                type="date"
                id={`${id}-date-a`}
                value={d1}
                onChange={(e) => { setD1(e.target.value); setWeton(null); setJodoh(null); setError(""); }}
                className="input-date"
              />
            </div>
            <div>
              <label htmlFor={`${id}-date-b`} className="mb-2 block text-sm text-amber-100/70">
                Tanggal lahir pasangan
              </label>
              <input
                type="date"
                id={`${id}-date-b`}
                value={d2}
                onChange={(e) => { setD2(e.target.value); setJodoh(null); setError(""); }}
                className="input-date"
              />
            </div>
          </div>
          <button
            onClick={() => {
              const a = parseDate(d1);
              const b = parseDate(d2);
              if (!a || !b) { setError("Masukkan kedua tanggal lahir yang valid."); return; }
              setError("");
              setJodoh(hitungJodoh(a, b));
            }}
            className="btn-primary mt-4 w-full"
          >
            Hitung Kecocokan
          </button>

          {jodoh && (
            <div className="mt-6 rounded-xl border border-accent/40 bg-ink p-5">
              <div className="flex justify-between text-sm text-amber-100/70">
                <span>
                  {jodoh.a.label} (neptu {jodoh.a.neptu})
                </span>
                <span>
                  {jodoh.b.label} (neptu {jodoh.b.neptu})
                </span>
              </div>
              <p className="mt-3 text-center text-2xl font-bold text-white">
                Ketemu {jodoh.total} →{" "}
                <span className="text-accent">{jodoh.category.name}</span>
              </p>
              <p className="mt-2 text-center text-sm text-amber-100/80">
                {jodoh.category.ringkas}
              </p>
              <Link
                href={`/jodoh/${jodoh.category.slug}`}
                className="mt-4 block text-center text-sm font-semibold text-accent underline"
              >
                Arti kategori {jodoh.category.name} selengkapnya →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
