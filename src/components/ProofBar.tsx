const STATS = [
  { value: "More walk-ins", label: "From Google & WhatsApp" },
  { value: "4–5 days", label: "Typical time to launch" },
  { value: "You stay in control", label: "Direct line — no middlemen" },
] as const;

/** No Reveal animation — was the main CLS culprit in Lighthouse. */
export function ProofBar() {
  return (
    <section
      className="border-b border-line/60 bg-ink/50 py-9 md:py-11"
      aria-label="What you get"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-5 sm:divide-x sm:divide-line">
          {STATS.map((stat) => (
            <div key={stat.value} className="min-h-[4.5rem] text-center sm:px-5">
              <div className="font-display text-[clamp(1.15rem,2.6vw,1.45rem)] font-bold text-gold">
                {stat.value}
              </div>
              <div className="mt-1.5 text-[0.88rem] text-ivory-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
