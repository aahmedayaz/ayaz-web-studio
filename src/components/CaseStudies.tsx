import { ArrowRight } from "lucide-react";
import { CASE_STUDIES, SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const ACCENT = {
  mint: {
    glow: "rgba(125, 206, 160, 0.22)",
    chip: "bg-mint/15 text-mint",
    bar: "bg-mint",
  },
  gold: {
    glow: "rgba(0, 128, 255, 0.24)",
    chip: "bg-gold/15 text-gold",
    bar: "bg-gold",
  },
  violet: {
    glow: "rgba(167, 139, 250, 0.22)",
    chip: "bg-[#a78bfa]/15 text-[#c4b5fd]",
    bar: "bg-[#a78bfa]",
  },
  blue: {
    glow: "rgba(96, 165, 250, 0.22)",
    chip: "bg-[#60a5fa]/15 text-[#93c5fd]",
    bar: "bg-[#60a5fa]",
  },
} as const;

function CaseVisual({
  visual,
  tag,
  accent,
}: {
  visual: (typeof CASE_STUDIES)[number]["visual"];
  tag: string;
  accent: (typeof CASE_STUDIES)[number]["accent"];
}) {
  const a = ACCENT[accent];

  if (visual === "mobile") {
    return (
      <div className="case-visual relative flex h-full items-end justify-center overflow-hidden bg-gradient-to-br from-[#1f2a1e] via-[#141c13] to-[#0a0e0a] px-6 pb-0 pt-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(50% 45% at 70% 20%, ${a.glow}, transparent 70%)`,
          }}
        />
        <span className="absolute left-6 top-6 font-display text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold tracking-tight text-ivory/12">
          {tag}
        </span>
        <div className="case-device relative z-[1] w-[42%] max-w-[140px] overflow-hidden rounded-[1.35rem] border border-ivory/15 bg-void shadow-[0_24px_50px_rgba(0,0,0,0.45)] transition duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]">
          <div className="mx-auto mt-2.5 h-1 w-10 rounded-full bg-ivory/20" />
          <div className="space-y-2 p-3">
            <div className={`h-1.5 w-12 rounded-full ${a.bar}`} />
            <div className="h-16 rounded-lg bg-ivory/[0.06]" />
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-10 rounded-md bg-ivory/[0.05]" />
              <div className="h-10 rounded-md bg-ivory/[0.05]" />
            </div>
            <div className="h-8 rounded-full bg-whatsapp/90" />
          </div>
        </div>
        <div className="case-device absolute bottom-4 left-[12%] z-0 w-[34%] max-w-[110px] -rotate-6 overflow-hidden rounded-[1.1rem] border border-ivory/10 bg-elevated/90 opacity-70 transition duration-500 group-hover:-translate-y-3 group-hover:opacity-90">
          <div className="space-y-1.5 p-2.5">
            <div className="h-1.5 w-8 rounded-full bg-ivory/20" />
            <div className="h-12 rounded-md bg-ivory/[0.05]" />
            <div className="h-1.5 w-full rounded-full bg-ivory/10" />
          </div>
        </div>
      </div>
    );
  }

  if (visual === "desktop") {
    return (
      <div className="case-visual relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#f7f4ea] via-[#ebe6d8] to-[#d9d2c0] px-5 py-8">
        <span className="absolute left-5 top-5 font-display text-[clamp(1.5rem,3.5vw,2.2rem)] font-extrabold tracking-tight text-[#0e140d]/10">
          {tag}
        </span>
        <div className="case-device relative z-[1] w-[88%] max-w-[320px] overflow-hidden rounded-xl border border-[#0e140d]/10 bg-white shadow-[0_28px_50px_rgba(14,20,13,0.18)] transition duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
          <div className="flex items-center gap-1.5 border-b border-[#0e140d]/8 bg-[#f3f0e6] px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0e140d]/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#0e140d]/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#0e140d]/25" />
            <span className="ml-2 font-mono text-[0.58rem] text-[#0e140d]/40">
              app.commerceos.io
            </span>
          </div>
          <div className="grid grid-cols-[0.28fr_0.72fr] gap-2 p-3">
            <div className="space-y-1.5 rounded-lg bg-[#0e140d]/[0.04] p-2">
              <div className={`h-1.5 w-8 rounded-full ${a.bar}`} />
              <div className="h-1.5 w-full rounded-full bg-[#0e140d]/10" />
              <div className="h-1.5 w-[70%] rounded-full bg-[#0e140d]/8" />
              <div className="h-1.5 w-[85%] rounded-full bg-[#0e140d]/8" />
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-10 rounded-md bg-[#0e140d]/[0.05]" />
                <div className="h-10 rounded-md bg-[#0e140d]/[0.05]" />
                <div className="h-10 rounded-md bg-gold/20" />
              </div>
              <div className="h-16 rounded-md bg-[#0e140d]/[0.04]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "ai") {
    return (
      <div className="case-visual relative flex h-full items-center justify-center overflow-hidden bg-[#07090c] px-5 py-8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(40% 40% at 20% 80%, ${a.glow}, transparent 60%),
              radial-gradient(45% 40% at 85% 20%, rgba(229,162,70,0.12), transparent 55%),
              linear-gradient(160deg, #0c1014, #07090c)
            `,
          }}
        />
        <span className="absolute right-5 top-5 font-display text-[clamp(1.5rem,3.5vw,2.2rem)] font-extrabold tracking-tight text-white/10">
          {tag}
        </span>
        <div className="case-device relative z-[1] w-[90%] max-w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_24px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm transition duration-500 group-hover:-translate-y-1.5 group-hover:border-[#a78bfa]/35">
          <div className="mb-3 flex items-center justify-between">
            <span className={`rounded-full px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.1em] ${a.chip}`}>
              Generating
            </span>
            <span className="font-mono text-[0.58rem] text-ivory/40">v2.4</span>
          </div>
          <div className="mb-3 grid grid-cols-3 gap-2">
            <div className="aspect-square rounded-lg border border-white/10 bg-gradient-to-br from-[#a78bfa]/40 to-transparent" />
            <div className="aspect-square rounded-lg border border-white/10 bg-gradient-to-br from-gold/30 to-transparent" />
            <div className="aspect-square rounded-lg border border-white/10 bg-gradient-to-br from-mint/30 to-transparent" />
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div className="case-progress h-full w-[68%] rounded-full bg-gradient-to-r from-[#a78bfa] to-gold" />
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-[90%] rounded-full bg-white/15" />
            <div className="h-1.5 w-[62%] rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="case-visual relative flex h-full items-end justify-center overflow-hidden bg-gradient-to-br from-[#101820] via-[#0c1218] to-[#080b10] px-6 pb-0 pt-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(50% 45% at 30% 25%, ${a.glow}, transparent 65%)`,
        }}
      />
      <span className="absolute left-6 top-6 font-display text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold tracking-tight text-ivory/10">
        {tag}
      </span>
      <div className="case-device relative z-[1] mb-0 w-[46%] max-w-[150px] overflow-hidden rounded-[1.4rem] border border-ivory/15 bg-[#0a1016] shadow-[0_24px_50px_rgba(0,0,0,0.5)] transition duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]">
        <div className="mx-auto mt-2.5 h-1 w-10 rounded-full bg-ivory/20" />
        <div className="space-y-2.5 p-3.5">
          <div className="flex items-center justify-between">
            <div className={`h-6 w-6 rounded-full ${a.bar}/30`} />
            <div className="h-1.5 w-10 rounded-full bg-ivory/20" />
          </div>
          <div className="rounded-xl border border-ivory/10 bg-ivory/[0.04] p-3">
            <div className="mb-2 font-mono text-[0.58rem] text-ivory/45">Balance</div>
            <div className="font-display text-lg font-bold text-ivory">₨ 48,200</div>
          </div>
          <div className={`flex h-9 items-center justify-center rounded-full text-[0.62rem] font-semibold text-void ${a.bar}`}>
            Send Payment
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="section-pad">
      <div className="container-page">
        <Reveal className="section-center mb-12 md:mb-16">
          <p className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-1.5 text-[0.78rem] font-medium text-[var(--fg-muted)]">
            <span className="text-[var(--accent)]">✦</span>
            Case studies
          </p>
          <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-extrabold text-[var(--fg)]">
            Products that prove the craft
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-[1rem] text-[var(--fg-muted)]">
            Selected builds across SaaS, AI, commerce, and fintech — designed
            and engineered as production systems, not mockups.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-[28rem] grid-cols-1 gap-8 min-[480px]:max-w-none sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 lg:gap-y-12">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.id} as="article" className="group">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-offset-4"
              >
                <div
                  className="case-frame relative aspect-[4/3] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--line)] shadow-[var(--shadow-float)] transition duration-500 group-hover:border-[var(--accent)]/40"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <CaseVisual
                    visual={study.visual}
                    tag={study.tag}
                    accent={study.accent}
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4 px-1">
                  <div className="min-w-0">
                    <h3 className="text-[1.15rem] font-bold text-[var(--fg)] transition group-hover:text-[var(--accent)] sm:text-[1.25rem]">
                      {study.title}
                    </h3>
                    <p className="mt-1.5 text-[0.88rem] text-[var(--fg-muted)]">
                      {study.category}
                    </p>
                  </div>

                  <span
                    className="case-arrow inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-[var(--fg)] transition duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-fg)]"
                    aria-hidden
                  >
                    <ArrowRight
                      size={18}
                      strokeWidth={1.8}
                      className="transition duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
