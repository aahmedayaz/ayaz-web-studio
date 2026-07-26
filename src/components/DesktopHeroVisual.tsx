"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

/** Load 3D scene only on desktop after idle — keeps mobile Lighthouse clean. */
export function DesktopHeroVisual() {
  const [Scene, setScene] = useState<ComponentType | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    if (!mq.matches) return;

    let cancelled = false;
    const load = () => {
      void import("@/components/HeroScene3D").then((m) => {
        if (!cancelled) setScene(() => m.HeroScene3D);
      });
    };

    const ric = window.requestIdleCallback?.bind(window);
    if (ric) {
      const id = ric(load, { timeout: 1500 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback?.(id);
      };
    }

    const t = window.setTimeout(load, 200);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  if (!Scene) {
    return <div className="hidden min-h-[420px] xl:block" aria-hidden />;
  }

  return <Scene />;
}
