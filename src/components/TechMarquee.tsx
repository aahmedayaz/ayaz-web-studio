import { TECH_STACK } from "@/lib/site";
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

export function TechMarquee() {
  const tiles = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="border-y border-[var(--line)] py-14 md:py-16">
      <div className="container-page">
        <p className="mb-8 text-center text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--fg-soft)]">
          Engineered with the stack modern products ship on
        </p>
        <div
          className="overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="marquee-track flex w-max gap-4 sm:gap-5" role="list">
            {tiles.map((item, i) => {
              const Logo = LOGO_MAP[item.id];
              return (
                <div
                  key={`${item.id}-${i}`}
                  role="listitem"
                  title={item.label}
                  className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface)] transition hover:border-[var(--accent)]/50 sm:h-[5rem] sm:w-[5rem]"
                >
                  <Logo className="h-9 w-9 sm:h-10 sm:w-10" />
                  <span className="sr-only">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
