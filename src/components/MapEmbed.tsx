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
    <div className="relative flex min-h-[280px] w-full flex-col items-center justify-center gap-3 bg-[var(--surface-2)] lg:min-h-[360px]">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 45%)",
        }}
        aria-hidden
      />
      <p className="relative z-[1] max-w-[22ch] text-center text-sm text-[var(--fg-muted)]">
        {SITE.address}
      </p>
      <button
        type="button"
        onClick={() => setActive(true)}
        className="pill-btn pill-btn--primary relative z-[1]"
      >
        Open map
      </button>
    </div>
  );
}
