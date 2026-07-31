import { PROCESS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section id="process" className="section-pad">
      <div className="container-page">
        <Reveal className="section-head mb-9 md:mb-12">
          <p className="eyebrow mb-3.5">How it works</p>
          <h2 className="text-[clamp(1.55rem,5vw,2.45rem)] text-ivory">
            From vision to production software
          </h2>
          <p className="mx-auto mt-3 max-w-[44ch] text-[0.95rem] text-ivory-muted lg:mx-0 lg:max-w-[52ch] lg:text-base">
            A clear, founder-led process — discovery through launch — so your
            product ships with confidence.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-[24rem] grid-cols-1 gap-0 md:max-w-none md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-5">
          {PROCESS.map((step, i) => (
            <Reveal
              key={step.num}
              className="process-step relative border-t border-line py-6 text-center md:border-t-0 md:py-0 md:text-left"
            >
              <div className="font-display text-[2.1rem] font-extrabold text-gold/90">
                {step.num}
              </div>
              <h4 className="mb-1.5 mt-2.5 text-[1rem] text-ivory">{step.title}</h4>
              <p className="mx-auto max-w-[32ch] text-[0.86rem] text-ivory-muted md:mx-0 md:max-w-none">
                {step.description}
              </p>
              {i < PROCESS.length - 1 ? (
                <div
                  className="pointer-events-none absolute right-0 top-4 hidden h-px w-8 bg-gradient-to-r from-gold/40 to-transparent lg:block"
                  aria-hidden
                />
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
