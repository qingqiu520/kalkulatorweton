"use client";

import { getWeton } from "~/lib/weton";

export default function WetonHariIni() {
  const w = getWeton(new Date());
  return (
    <p className="mb-4 inline-block rounded-full border border-edge bg-panel px-4 py-1.5 text-sm text-amber-100/80">
      Weton hari ini: <strong className="text-accent">{w.label}</strong> · neptu{" "}
      {w.neptu}
    </p>
  );
}
