"use client";

import { useState } from "react";
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
  const [y, m, d] = v.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

export default function WetonCalculator() {
  const [tab, setTab] = useState<"weton" | "jodoh">("weton");
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [weton, setWeton] = useState<Weton | null>(null);
  const [jodoh, setJodoh] = useState<JodohResult | null>(null);

  return (
    <div className="rounded-2xl border border-edge bg-panel p-6">
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setTab("weton")}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            tab === "weton" ? "bg-accent text-ink" : "text-amber-100/60 hover:text-amber-100"
          }`}
        >
          Kalkulator Weton
        </button>
        <button
          onClick={() => setTab("jodoh")}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            tab === "jodoh" ? "bg-accent text-ink" : "text-amber-100/60 hover:text-amber-100"
          }`}
        >
          Weton Jodoh (Kecocokan)
        </button>
      </div>

      {tab === "weton" ? (
        <div>
          <label className="mb-2 block text-sm text-amber-100/70">
            Tanggal lahir Anda
          </label>
          <input
            type="date"
            value={d1}
            onChange={(e) => setD1(e.target.value)}
            className="input-date mb-4"
          />
          <button
            onClick={() => {
              const d = parseDate(d1);
              if (d) setWeton(getWeton(d));
            }}
            className="btn-primary w-full"
          >
            Hitung Weton
          </button>

          {weton && (
            <div className="mt-6 rounded-xl border border-accent/40 bg-ink p-5">
              <p className="text-sm text-amber-100/60">Weton Anda</p>
              <p className="mt-1 text-3xl font-bold text-accent">{weton.label}</p>
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
              <label className="mb-2 block text-sm text-amber-100/70">
                Tanggal lahir Anda
              </label>
              <input
                type="date"
                value={d1}
                onChange={(e) => setD1(e.target.value)}
                className="input-date"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-amber-100/70">
                Tanggal lahir pasangan
              </label>
              <input
                type="date"
                value={d2}
                onChange={(e) => setD2(e.target.value)}
                className="input-date"
              />
            </div>
          </div>
          <button
            onClick={() => {
              const a = parseDate(d1);
              const b = parseDate(d2);
              if (a && b) setJodoh(hitungJodoh(a, b));
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
