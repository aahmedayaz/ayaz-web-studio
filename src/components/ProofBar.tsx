import { PROOF_STATS } from "@/lib/site";

/** No Reveal animation — was the main CLS culprit in Lighthouse. */
export function ProofBar() {
  return (
    <section
      className="border-b border-line/60 bg-ink/50 py-8 min-[375px]:py-9 md:py-11"
      aria-label="Why Ayaz Web Studio"
    >
      <div className="container-page">
        <div className="mx-auto grid max-w-[22rem] grid-cols-1 gap-6 min-[480px]:max-w-none min-[480px]:grid-cols-3 min-[480px]:gap-4 sm:gap-5 sm:divide-x sm:divide-line">
          {PROOF_STATS.map((stat) => (
            <div
              key={stat.value}
              className="min-h-[4rem] text-center min-[480px]:px-3 sm:min-h-[4.5rem] sm:px-5"
            >
              <div className="font-display text-[clamp(1.05rem,4.2vw,1.35rem)] font-bold text-gold">
                {stat.value}
              </div>
              <div className="mt-1.5 text-[0.84rem] text-ivory-muted min-[375px]:text-[0.88rem]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
