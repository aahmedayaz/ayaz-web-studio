import dynamic from "next/dynamic";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";
import { RotateWord } from "@/components/RotateWord";
import { FeaturePills } from "@/components/FeaturePills";
import { PillBadge } from "@/components/PillBadge";
import { SelectionFrame } from "@/components/SelectionFrame";
import { GridRule } from "@/components/GridRails";

const ProductShowcase = dynamic(
  () =>
    import("@/components/ProductShowcase").then((m) => ({
      default: m.ProductShowcase,
    })),
  {
    loading: () => (
      <div
        className="mx-auto aspect-[4/3] w-full max-w-[860px] animate-pulse rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface)] sm:aspect-[16/10]"
        aria-hidden
      />
    ),
  },
);

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-x-clip">
      <div className="container-wide relative mx-auto max-w-[1728px]">
        <div
          className="relative flex w-full max-w-full flex-col items-center text-center"
          style={{
            gap: "clamp(24px, 4vw, 48px)",
            padding: "clamp(64px, 9.3vw, 140px) 0 clamp(40px, 6vw, 72px)",
          }}
        >
          <div className="flex w-full max-w-full flex-col items-center gap-3 sm:gap-4">
            <PillBadge>
              <span className="text-[var(--accent)]">✦</span>
              Elite software · Karachi
            </PillBadge>

            <h1
              className="m-0 w-full max-w-[914px] text-balance break-words font-extrabold tracking-[-0.02em] text-[var(--fg)]"
              style={{
                fontSize: "clamp(1.65rem, 0.85rem + 4.2vw, 4rem)",
                lineHeight: 1.25,
              }}
            >
              One engineer.{" "}
              <SelectionFrame label="Ayaz" animate>
                <span className="text-[var(--fg)]">
                  The power of a full studio
                </span>
              </SelectionFrame>
            </h1>

            <p
              className="m-0 w-full max-w-[644px] px-1 font-normal text-[var(--fg-muted)] sm:px-4"
              style={{
                fontSize: "clamp(0.95rem, 0.85rem + 0.5vw, 1.25rem)",
                lineHeight: 1.5,
              }}
            >
              We build <RotateWord /> that move businesses forward — SaaS, web
              apps, and production systems with elite polish.
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-3">
            <div className="flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:max-w-none sm:w-auto sm:flex-row sm:flex-wrap">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn--primary w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-[15px] w-[15px] sm:h-[18px] sm:w-[18px]" />
                <span>Start a project</span>
              </a>
              <a
                href="#work"
                className="pill-btn pill-btn--ghost w-full sm:w-auto"
              >
                <span>View case studies</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <GridRule />
      <div
        className="relative overflow-hidden"
        style={{
          marginLeft:
            "calc(var(--page-gutter-extra) + clamp(16px, max(-1052.75px + 71.25vw, -5436px + 335.3vw), 358px))",
          marginRight:
            "calc(var(--page-gutter-extra) + clamp(16px, max(-1052.75px + 71.25vw, -5436px + 335.3vw), 362px))",
        }}
      >
        <FeaturePills />
      </div>
      <GridRule />

      <div className="relative min-w-0 overflow-x-clip px-3 sm:px-6 lg:px-8">
        <div className="py-[clamp(40px,6vw,90px)] pb-[clamp(48px,7vw,96px)]">
          <ProductShowcase />
        </div>
      </div>
    </section>
  );
}
