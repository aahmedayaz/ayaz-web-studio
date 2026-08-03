import { PROOF_STATS } from "@/lib/site";

export function ProofBar() {
  return (
    <section
      className="border-y border-(--line) bg-(--bg-elevated) py-8 sm:py-10 md:py-12"
      aria-label="What you get"
    >
      <div className="container-page">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {PROOF_STATS.map((stat) => (
            <div key={stat.value} className="min-w-0 px-0.5 text-center sm:px-3">
              <div className="text-[clamp(0.72rem,2.8vw,1.25rem)] font-bold leading-snug tracking-tight text-(--accent)">
                {stat.value}
              </div>
              <div className="mt-1 text-[clamp(0.58rem,2.2vw,0.88rem)] leading-snug text-(--fg-muted) sm:mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
