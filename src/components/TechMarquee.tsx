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
    <div className="content-auto border-y border-line/60 py-16 md:py-20 lg:py-24">
      <div className="container-page">
        <p className="mb-10 text-center font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ivory/45 md:mb-12">
          Engineered with the stack modern products ship on
        </p>
        <div
          className="overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="marquee-track flex w-max gap-5 sm:gap-6 md:gap-7" role="list">
            {tiles.map((item, i) => {
              const Logo = LOGO_MAP[item.id];
              return (
                <div
                  key={`${item.id}-${i}`}
                  role="listitem"
                  title={item.label}
                  className="marquee-tile flex h-[4.75rem] w-[4.75rem] shrink-0 items-center justify-center sm:h-[5.5rem] sm:w-[5.5rem]"
                >
                  <Logo className="h-10 w-10 sm:h-12 sm:w-12" />
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
