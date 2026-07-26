import { PROCESS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container-page">
        <Reveal className="mb-10 max-w-xl md:mb-12">
          <p className="eyebrow mb-3.5">How it works</p>
          <h2 className="text-[clamp(1.7rem,3.5vw,2.45rem)] text-ivory">
            From WhatsApp message to live website
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-5">
          {PROCESS.map((step) => (
            <Reveal
              key={step.num}
              className="border-t border-line py-5 md:border-t-0 md:py-0"
            >
              <div className="font-display text-[2.1rem] font-extrabold text-gold/90">
                {step.num}
              </div>
              <h4 className="mb-1.5 mt-2.5 text-[1rem] text-ivory">{step.title}</h4>
              <p className="text-[0.86rem] text-ivory-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
