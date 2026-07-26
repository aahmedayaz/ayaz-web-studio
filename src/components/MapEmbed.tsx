"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

/** Click-to-load map — keeps Google Maps off the critical path. */
export function MapEmbed() {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        src={SITE.mapEmbed}
        title={`${SITE.name} location — ${SITE.address}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[280px] w-full border-0 lg:min-h-[360px]"
        allowFullScreen
      />
    );
  }

  return (
    <div className="relative flex min-h-[280px] w-full flex-col items-center justify-center gap-3 bg-elevated lg:min-h-[360px]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, rgba(229,162,70,0.2), transparent 45%), radial-gradient(circle at 70% 60%, rgba(42,56,41,0.8), transparent 50%)",
        }}
        aria-hidden
      />
      <p className="relative z-[1] max-w-[22ch] text-center text-sm text-ivory-muted">
        {SITE.address}
      </p>
      <button
        type="button"
        onClick={() => setActive(true)}
        className="relative z-[1] min-h-11 bg-gold px-5 py-2.5 text-sm font-semibold text-void transition hover:bg-gold-dim"
      >
        Open map
      </button>
    </div>
  );
}
