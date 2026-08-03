"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ProductShowcase = dynamic(
  () =>
    import("@/components/ProductShowcase").then((m) => ({
      default: m.ProductShowcase,
    })),
  { ssr: false },
);

/** Only mount the heavy showcase on md+ after idle — never on mobile. */
export function DesktopProductShowcase() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    if (!mq.matches) return;

    let cancelled = false;
    const enable = () => {
      if (!cancelled) setReady(true);
    };

    let idleId: number | undefined;
    let timeoutId: number | undefined;

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(enable, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(enable, 200);
    }

    return () => {
      cancelled = true;
      if (idleId != null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId != null) window.clearTimeout(timeoutId);
    };
  }, []);

  if (!ready) return null;

  return (
    <div className="py-[clamp(40px,6vw,90px)] pb-[clamp(48px,7vw,96px)]">
      <ProductShowcase />
    </div>
  );
}
