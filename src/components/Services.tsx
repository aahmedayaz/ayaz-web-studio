import {
  Boxes,
  CalendarClock,
  ChartColumn,
  Cloud,
  Compass,
  FileText,
  LayoutTemplate,
  Radio,
  ShieldCheck,
  Sparkles,
  Wallet,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const ICONS = {
  layout: LayoutTemplate,
  box: Boxes,
  spark: Sparkles,
  shield: ShieldCheck,
  cloud: Cloud,
  chart: ChartColumn,
  radio: Radio,
  file: FileText,
  wallet: Wallet,
  calendar: CalendarClock,
  compass: Compass,
} as const;

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-page">
        <Reveal className="section-head mb-9 md:mb-12">
          <p className="eyebrow mb-3.5">Capabilities</p>
          <h2 className="text-[clamp(1.55rem,5vw,2.45rem)] text-ivory">
            A full stack of elite software services
          </h2>
          <p className="mx-auto mt-3 max-w-[44ch] text-[0.95rem] text-ivory-muted lg:mx-0 lg:max-w-[52ch] lg:text-base">
            From product design and AI automation to cloud, payments, and
            real-time systems — engineered as one coherent delivery.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-[28rem] grid-cols-1 gap-3.5 min-[480px]:max-w-none min-[480px]:grid-cols-2 min-[480px]:gap-4 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon];
            const num = String(index + 1).padStart(2, "0");

            return (
              <Reveal
                key={service.title}
                as="article"
                className="service-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8e2d4] bg-[#f7f4ea] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_22px_44px_rgba(0,0,0,0.28)] min-[480px]:p-6"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-dim to-mint transition-transform duration-500 ease-out group-hover:scale-x-100"
                  aria-hidden
                />

                <div className="relative z-[1] flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0e140d] text-gold shadow-[inset_0_0_0_1px_rgba(229,162,70,0.35)] transition duration-300 group-hover:scale-105 group-hover:shadow-[inset_0_0_0_1px_rgba(229,162,70,0.55),0_8px_20px_rgba(14,20,13,0.25)]">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <span className="font-mono text-[0.72rem] tracking-[0.14em] text-[#0e140d]/28 transition duration-300 group-hover:text-gold-dim">
                    {num}
                  </span>
                </div>

                <h3 className="relative z-[1] mt-5 mb-2 font-display text-[1.08rem] font-bold tracking-tight text-[#0e140d] min-[480px]:text-[1.12rem]">
                  {service.title}
                </h3>
                <p className="relative z-[1] flex-1 text-[0.88rem] leading-relaxed text-[#0e140d]/62 min-[480px]:text-[0.9rem]">
                  {service.description}
                </p>

                <div className="relative z-[1] mt-5 flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-gold-dim transition duration-300 group-hover:gap-2.5 group-hover:text-[#0e140d]">
                  Explore
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.8}
                    className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                <div
                  className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-gold/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
                  aria-hidden
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
