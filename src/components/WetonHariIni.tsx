"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getWetonHariIni, type Weton } from "~/lib/weton";

export default function WetonHariIni() {
  // A static build must not freeze today's date or disagree with hydration.
  const [weton, setWeton] = useState<Weton | null>(null);

  useEffect(() => {
    const update = () => setWeton(getWetonHariIni());
    const onVisibility = () => {
      if (document.visibilityState === "visible") update();
    };
    update();
    const interval = window.setInterval(update, 60_000);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("focus", update);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("focus", update);
    };
  }, []);

  return (
    <Link
      href="/weton-hari-ini"
      className="mb-4 inline-block rounded-full border border-edge bg-panel px-4 py-1.5 text-sm text-amber-100/80 transition hover:border-accent hover:text-amber-50"
    >
      {weton ? (
        <>
          Weton hari ini: <strong className="text-accent">{weton.label}</strong>
          {" · neptu "}{weton.neptu}
        </>
      ) : (
        "Weton hari ini (WIB)"
      )}
      {" "}<span className="text-accent">→</span>
    </Link>
  );
}
