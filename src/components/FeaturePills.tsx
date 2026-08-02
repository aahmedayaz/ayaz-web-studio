import {
  AppWindow,
  Boxes,
  ChartColumn,
  Cloud,
  Code2,
  CreditCard,
  Layers,
  Lock,
  Palette,
  Radio,
  Smartphone,
  Sparkles,
  CalendarClock,
  Wallet,
  LayoutTemplate,
  Server,
} from "lucide-react";

const CAPABILITY_PILLS = [
  { label: "SaaS platforms", Icon: Layers },
  { label: "Web apps", Icon: AppWindow },
  { label: "AI automation", Icon: Sparkles },
  { label: "Cloud & serverless", Icon: Cloud },
  { label: "Fintech flows", Icon: Wallet },
  { label: "Real-time apps", Icon: Radio },
  { label: "Auth & security", Icon: Lock },
  { label: "Analytics", Icon: ChartColumn },
  { label: "Booking systems", Icon: CalendarClock },
  { label: "3D experiences", Icon: Boxes },
  { label: "Payments", Icon: CreditCard },
  { label: "Product design", Icon: Palette },
  { label: "Next.js & React", Icon: Code2 },
  { label: "API platforms", Icon: Server },
  { label: "Dashboards", Icon: LayoutTemplate },
  { label: "Mobile-ready web", Icon: Smartphone },
] as const;

/** Brilliant-style cycle: blue → pink → yellow → orange */
const TONES = [
  { bg: "#0080FF", fg: "#ffffff" },
  { bg: "#FF2D8B", fg: "#ffffff" },
  { bg: "#F5C518", fg: "#1a1408" },
  { bg: "#FF7A1A", fg: "#ffffff" },
] as const;

export function FeaturePills() {
  /* Two copies for seamless loop — keep DOM lean */
  const tiles = [...CAPABILITY_PILLS, ...CAPABILITY_PILLS];

  return (
    <div className="marquee-mask relative overflow-hidden py-3.5 sm:py-4">
      <div
        className="marquee-track flex w-max items-center gap-2.5 sm:gap-3"
        style={{ animationDuration: "55s" }}
        aria-hidden
      >
        {tiles.map((pill, i) => {
          const Icon = pill.Icon;
          const tone = TONES[i % TONES.length];
          return (
            <span
              key={`${pill.label}-${i}`}
              className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 text-[0.8125rem] font-semibold tracking-[-0.01em] sm:px-4 sm:py-2.5 sm:text-[0.875rem]"
              style={{ background: tone.bg, color: tone.fg }}
            >
              <Icon
                size={15}
                strokeWidth={2.35}
                className="shrink-0 sm:size-4"
                aria-hidden
              />
              {pill.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
