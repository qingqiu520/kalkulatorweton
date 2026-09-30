"use client";

import Link from "next/link";
import { getWetonHariIni } from "~/lib/weton";

export default function WetonHariIni() {
  const w = getWetonHariIni();
  return (
    <Link
      href="/weton-hari-ini"
      className="mb-4 inline-block rounded-full border border-edge bg-panel px-4 py-1.5 text-sm text-amber-100/80 transition hover:border-accent hover:text-amber-50"
    >
      Weton hari ini: <strong className="text-accent">{w.label}</strong> · neptu{" "}
      {w.neptu} <span className="text-accent">→</span>
    </Link>
  );
}
