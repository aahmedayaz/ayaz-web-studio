import {
  AppWindow,
  Cloud,
  Code2,
  Layers,
  Lock,
  Sparkles,
  Wallet,
  LayoutTemplate,
} from "lucide-react";

const CAPABILITY_PILLS = [
  { label: "SaaS platforms", Icon: Layers },
  { label: "Web apps", Icon: AppWindow },
  { label: "AI automation", Icon: Sparkles },
  { label: "Cloud & serverless", Icon: Cloud },
  { label: "Fintech flows", Icon: Wallet },
  { label: "Auth & security", Icon: Lock },
  { label: "Next.js & React", Icon: Code2 },
  { label: "Dashboards", Icon: LayoutTemplate },
] as const;

const TONES = [
  { bg: "#0080FF", fg: "#ffffff" },
  { bg: "#FF2D8B", fg: "#ffffff" },
  { bg: "#F5C518", fg: "#1a1408" },
  { bg: "#FF7A1A", fg: "#ffffff" },
] as const;

export function FeaturePills() {
  const tiles = [...CAPABILITY_PILLS, ...CAPABILITY_PILLS];

  return (
    <div className="marquee-mask relative overflow-hidden py-2.5 sm:py-4">
      <div
        className="marquee-track flex w-max items-center gap-1.5 sm:gap-3"
        style={{ animationDuration: "42s" }}
        aria-hidden
      >
        {tiles.map((pill, i) => {
          const Icon = pill.Icon;
          const tone = TONES[i % TONES.length];
          return (
            <span
              key={`${pill.label}-${i}`}
              className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[-0.01em] sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
              style={{ background: tone.bg, color: tone.fg }}
            >
              <Icon
                className="h-3 w-3 shrink-0 sm:h-4 sm:w-4"
                strokeWidth={2.35}
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
