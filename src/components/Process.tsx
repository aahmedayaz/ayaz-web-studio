import { PROCESS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section id="process" className="section-pad">
      <div className="container-page">
        <Reveal className="section-head mb-9 md:mb-12">
          <p className="eyebrow mb-3.5">How it works</p>
          <h2 className="text-[clamp(1.55rem,5vw,2.45rem)] text-ivory">
            From WhatsApp message to live website
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-[24rem] grid-cols-1 gap-0 md:max-w-none md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-5">
          {PROCESS.map((step) => (
            <Reveal
              key={step.num}
              className="border-t border-line py-6 text-center md:border-t-0 md:py-0 md:text-left"
            >
              <div className="font-display text-[2.1rem] font-extrabold text-gold/90">
                {step.num}
              </div>
              <h4 className="mb-1.5 mt-2.5 text-[1rem] text-ivory">{step.title}</h4>
              <p className="mx-auto max-w-[32ch] text-[0.86rem] text-ivory-muted md:mx-0 md:max-w-none">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
