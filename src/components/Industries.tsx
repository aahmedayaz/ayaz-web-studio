"use client";

import { useState } from "react";
import { TIER1, TIER2, SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { PillBadge } from "@/components/PillBadge";

export function Industries() {
  const [tab, setTab] = useState<"tier1" | "tier2">("tier1");
  const items = tab === "tier1" ? TIER1 : TIER2;

  return (
    <section id="industries" className="section-pad blueprint-grid">
      <div className="container-page">
        <Reveal className="section-center mb-10 md:mb-14">
          <PillBadge className="mb-5">
            <span className="text-[var(--accent)]">✦</span>
            Who we build for
          </PillBadge>
          <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-extrabold text-[var(--fg)]">
            Product teams and industries that need real software
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-[1rem] text-[var(--fg-muted)]">
            Whether you are shipping a SaaS MVP or digitizing a complex
            operation — we engineer systems that scale with ambition.
          </p>
        </Reveal>

        <Reveal className="mb-8 flex flex-col items-center justify-center gap-2.5 min-[480px]:flex-row">
          <button
            type="button"
            onClick={() => setTab("tier1")}
            className={`pill-btn w-full min-[480px]:w-auto ${
              tab === "tier1" ? "pill-btn--primary" : "pill-btn--ghost"
            }`}
          >
            Product & Growth
          </button>
          <button
            type="button"
            onClick={() => setTab("tier2")}
            className={`pill-btn w-full min-[480px]:w-auto ${
              tab === "tier2" ? "pill-btn--primary" : "pill-btn--ghost"
            }`}
          >
            Platforms & Enterprise
          </button>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface)] px-5 py-5 transition hover:border-[var(--accent)]/40"
            >
              <span className="mb-2.5 inline-flex rounded-full bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] px-2.5 py-1 text-[0.68rem] font-semibold text-[var(--accent)]">
                {tab === "tier1" ? "Growth" : "Scale"}
              </span>
              <h4 className="mb-1.5 text-[1.02rem] font-bold text-[var(--fg)]">
                {item.title}
              </h4>
              <p className="text-[0.88rem] text-[var(--fg-muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn pill-btn--primary"
          >
            Talk about your industry
          </a>
        </div>
      </div>
    </section>
  );
}
