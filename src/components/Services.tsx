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
    <section id="services" className="py-16 md:py-24">
      <div className="container-page">
        <Reveal className="mb-10 max-w-xl md:mb-12">
          <p className="eyebrow mb-3.5">What you get</p>
          <h2 className="text-[clamp(1.7rem,3.5vw,2.45rem)] text-ivory">
            Tools that bring you customers — and keep them coming back
          </h2>
          <p className="mt-3 text-ivory-muted">
            Whether you need a sharp online presence or a system that runs the
            day-to-day, every build is aimed at one outcome: more business for
            you.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal
                key={service.title}
                className="border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-gold/35 md:p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center border border-gold/25 bg-void text-gold">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <h3 className="mb-2 text-[1.12rem] text-ivory">{service.title}</h3>
                <p className="text-[0.92rem] text-ivory-muted">
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
