"use client";

import { useState } from "react";
import { TIER1, TIER2 } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function Industries() {
  const [tab, setTab] = useState<"tier1" | "tier2">("tier1");
  const items = tab === "tier1" ? TIER1 : TIER2;

  return (
    <section id="industries" className="section-pad border-y border-line/50 bg-ink/40">
      <div className="container-page">
        <Reveal className="section-head mb-8 md:mb-10">
          <p className="eyebrow mb-3.5">Who we build for</p>
          <h2 className="text-[clamp(1.55rem,5vw,2.45rem)] text-ivory">
            Product teams and industries that need real software
          </h2>
          <p className="mx-auto mt-3 max-w-[44ch] text-[0.95rem] text-ivory-muted lg:mx-0 lg:max-w-[52ch] lg:text-base">
            Whether you are shipping a SaaS MVP or digitizing a complex
            operation — we engineer systems that scale with ambition.
          </p>
        </Reveal>

        <Reveal className="mb-7 flex flex-col gap-2.5 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:justify-center lg:justify-start">
          <button
            type="button"
            onClick={() => setTab("tier1")}
            className={`min-h-11 w-full px-5 py-2.5 text-[0.88rem] font-semibold transition min-[480px]:w-auto ${
              tab === "tier1"
                ? "bg-gold text-void"
                : "border border-line bg-surface text-ivory-muted hover:border-gold/40 hover:text-ivory"
            }`}
          >
            Product & Growth
          </button>
          <button
            type="button"
            onClick={() => setTab("tier2")}
            className={`min-h-11 w-full px-5 py-2.5 text-[0.88rem] font-semibold transition min-[480px]:w-auto ${
              tab === "tier2"
                ? "bg-gold text-void"
                : "border border-line bg-surface text-ivory-muted hover:border-gold/40 hover:text-ivory"
            }`}
          >
            Platforms & Enterprise
          </button>
        </Reveal>

        <div className="mx-auto grid max-w-[28rem] grid-cols-1 gap-3 min-[480px]:max-w-none sm:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className={`industry-card border border-line border-l-4 bg-surface px-5 py-4 text-center transition duration-300 hover:-translate-y-0.5 hover:border-gold/30 min-[480px]:text-left ${
                tab === "tier2" ? "border-l-[#c1443b]" : "border-l-gold"
              }`}
            >
              <span
                className={`mb-2.5 inline-block font-mono text-[0.66rem] uppercase tracking-[0.08em] ${
                  tab === "tier2"
                    ? "bg-[rgba(193,68,59,0.12)] px-2.5 py-1 text-[#c1443b]"
                    : "bg-gold/15 px-2.5 py-1 text-gold-dim"
                }`}
              >
                {tab === "tier1" ? "Growth" : "Scale"}
              </span>
              <h4 className="mb-1.5 text-[1rem] text-ivory">{item.title}</h4>
              <p className="mx-auto max-w-[36ch] text-[0.86rem] text-ivory-muted min-[480px]:mx-0 min-[480px]:max-w-none">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
