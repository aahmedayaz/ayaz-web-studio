import {
  CalendarClock,
  LayoutTemplate,
  Layers3,
  PackageSearch,
  ShoppingBag,
} from "lucide-react";
import { SERVICES } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const ICONS = {
  layout: LayoutTemplate,
  layers: Layers3,
  calendar: CalendarClock,
  package: PackageSearch,
  store: ShoppingBag,
} as const;

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-page">
        <Reveal className="section-head mb-9 md:mb-12">
          <p className="eyebrow mb-3.5">What you get</p>
          <h2 className="text-[clamp(1.55rem,5vw,2.45rem)] text-ivory">
            Tools that bring you customers — and keep them coming back
          </h2>
          <p className="mx-auto mt-3 max-w-[42ch] text-[0.95rem] text-ivory-muted lg:mx-0 lg:max-w-none lg:text-base">
            Whether you need a sharp online presence or a system that runs the
            day-to-day, every build is aimed at one outcome: more business for
            you.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-[28rem] grid-cols-1 gap-3.5 min-[480px]:max-w-none min-[480px]:gap-4 sm:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal
                key={service.title}
                className="border border-line bg-surface p-5 text-center transition hover:-translate-y-1 hover:border-gold/35 min-[480px]:p-6 min-[480px]:text-left md:p-7"
              >
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center border border-gold/25 bg-void text-gold min-[480px]:mx-0">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <h3 className="mb-2 text-[1.08rem] text-ivory min-[480px]:text-[1.12rem]">
                  {service.title}
                </h3>
                <p className="mx-auto max-w-[36ch] text-[0.9rem] text-ivory-muted min-[480px]:mx-0 min-[480px]:max-w-none min-[480px]:text-[0.92rem]">
                  {service.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
