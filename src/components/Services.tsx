import {
  Boxes,
  ChartColumn,
  Cloud,
  LayoutTemplate,
  Sparkles,
  Wallet,
} from "lucide-react";
import { SERVICES, TECH_STACK, SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { PillBadge } from "@/components/PillBadge";
import {
  CloudLogo,
  FigmaLogo,
  MongoLogo,
  NextLogo,
  NodeLogo,
  ReactLogo,
  TailwindLogo,
  TypeScriptLogo,
  VercelLogo,
  WhatsAppLogo,
} from "@/components/TechLogos";

const ICONS = {
  layout: LayoutTemplate,
  box: Boxes,
  spark: Sparkles,
  cloud: Cloud,
  chart: ChartColumn,
  wallet: Wallet,
} as const;

const LOGO_MAP = {
  react: ReactLogo,
  next: NextLogo,
  node: NodeLogo,
  mongo: MongoLogo,
  typescript: TypeScriptLogo,
  tailwind: TailwindLogo,
  cloud: CloudLogo,
  figma: FigmaLogo,
  whatsapp: WhatsAppLogo,
  vercel: VercelLogo,
} as const;

/** Core stack icons for side tickers (seamless loop duplicates in the track). */
const TICKER_STACK = TECH_STACK;

function VerticalIconTicker({
  direction,
  side,
  reverse = false,
}: {
  direction: "down" | "up";
  side: "left" | "right";
  reverse?: boolean;
}) {
  const items = reverse ? [...TICKER_STACK].reverse() : TICKER_STACK;

  return (
    <div
      aria-hidden
      className={`services-ticker pointer-events-none absolute inset-y-0 z-[1] hidden w-[5.5rem] overflow-hidden lg:block xl:w-[6.25rem] ${
        side === "left" ? "left-0" : "right-0"
      }`}
    >
      <div
        className={`services-ticker__track absolute inset-x-0 top-0 flex flex-col items-center ${
          direction === "down"
            ? "services-ticker__track--down"
            : "services-ticker__track--up"
        }`}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex flex-col items-center gap-4 pb-4 xl:gap-5 xl:pb-5"
          >
            {items.map((item) => {
              const Logo = LOGO_MAP[item.id];
              return (
                <div
                  key={`${copy}-${item.id}`}
                  title={item.label}
                  className="services-ticker__icon flex h-14 w-14 items-center justify-center rounded-[1.15rem] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] xl:h-16 xl:w-16 xl:rounded-[1.25rem]"
                >
                  <Logo
                    className={`h-8 w-8 xl:h-9 xl:w-9 ${
                      item.id === "vercel" ? "services-ticker__logo--ink" : ""
                    }`}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="section-pad blueprint-grid">
      <div className="container-page">
        <Reveal className="section-center mb-12 md:mb-16">
          <PillBadge className="mb-5">
            <span className="text-[var(--accent)]">✦</span>
            Capabilities
          </PillBadge>
          <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-extrabold text-[var(--fg)]">
            Six capabilities. Zero fluff.
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-[1rem] text-[var(--fg-muted)]">
            The core stack we ship most — product, AI, cloud, analytics, and
            payments — engineered as one coherent delivery.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn--primary"
            >
              Start a project
            </a>
            <a href="#work" className="pill-btn pill-btn--ghost">
              See our work
            </a>
          </div>
        </Reveal>

        <div className="relative">
          <VerticalIconTicker side="left" direction="down" />
          <VerticalIconTicker side="right" direction="up" reverse />

          <div className="min-w-0 lg:px-[5.5rem] xl:px-[6.25rem]">
            <div className="grid grid-cols-1 border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3 lg:border-x lg:border-[var(--line)]">
              {SERVICES.map((service, index) => {
                const Icon = ICONS[service.icon];
                const num = String(index + 1).padStart(2, "0");

                return (
                  <Reveal
                    key={service.title}
                    as="article"
                    className="group border-b border-[var(--line)] p-6 transition-colors hover:bg-[var(--surface)] sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 md:p-8"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] text-[0.72rem] font-medium text-[var(--fg-soft)]">
                        {num}
                      </span>
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-[var(--accent)] transition group-hover:scale-110"
                      />
                    </div>
                    <h3 className="mb-2 text-[1.08rem] font-bold tracking-tight text-[var(--fg)]">
                      {service.title}
                    </h3>
                    <p className="text-[0.9rem] leading-relaxed text-[var(--fg-muted)]">
                      {service.description}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
