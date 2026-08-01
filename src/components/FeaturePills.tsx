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
  { label: "SaaS platforms", tone: "primary", Icon: Layers },
  { label: "Web apps", tone: "secondary", Icon: AppWindow },
  { label: "AI automation", tone: "tertiary", Icon: Sparkles },
  { label: "Cloud & serverless", tone: "quaternary", Icon: Cloud },
  { label: "Fintech flows", tone: "primary", Icon: Wallet },
  { label: "Real-time apps", tone: "secondary", Icon: Radio },
  { label: "Auth & security", tone: "tertiary", Icon: Lock },
  { label: "Analytics", tone: "quaternary", Icon: ChartColumn },
  { label: "Booking systems", tone: "primary", Icon: CalendarClock },
  { label: "3D experiences", tone: "secondary", Icon: Boxes },
  { label: "Payments", tone: "tertiary", Icon: CreditCard },
  { label: "Product design", tone: "quaternary", Icon: Palette },
  { label: "Next.js & React", tone: "primary", Icon: Code2 },
  { label: "API platforms", tone: "secondary", Icon: Server },
  { label: "Dashboards", tone: "tertiary", Icon: LayoutTemplate },
  { label: "Mobile-ready web", tone: "quaternary", Icon: Smartphone },
] as const;

const TONE: Record<(typeof CAPABILITY_PILLS)[number]["tone"], string> = {
  primary: "bg-[var(--accent)] text-[#1a140c] border-[var(--line)]",
  secondary: "bg-[#7dcea0] text-[#0f1a14] border-[var(--line)]",
  tertiary: "bg-[#60a5fa] text-[#0c1520] border-[var(--line)]",
  quaternary: "bg-[#c4b5fd] text-[#1a1028] border-[var(--line)]",
};

export function FeaturePills() {
  /* Two copies for seamless loop — keep DOM lean */
  const tiles = [...CAPABILITY_PILLS, ...CAPABILITY_PILLS];

  return (
    <div className="marquee-mask relative overflow-hidden py-3">
      <div
        className="marquee-track flex w-max items-center gap-2"
        style={{ animationDuration: "90s" }}
        aria-hidden
      >
        {tiles.map((pill, i) => {
          const Icon = pill.Icon;
          return (
            <span
              key={`${pill.label}-${i}`}
              className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-[0.8125rem] font-medium ${TONE[pill.tone]}`}
            >
              <Icon size={14} strokeWidth={2.25} className="shrink-0 opacity-90" aria-hidden />
              {pill.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
