import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";
import { RotateWord } from "@/components/RotateWord";
import { FeaturePills } from "@/components/FeaturePills";
import { PillBadge } from "@/components/PillBadge";
import { SelectionFrame } from "@/components/SelectionFrame";
import { GridRule } from "@/components/GridRails";
import { DesktopProductShowcase } from "@/components/DesktopProductShowcase";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-x-clip">
      <div className="container-wide relative mx-auto max-w-432 max-sm:px-0!">
        <div
          className="relative flex w-full max-w-full min-h-[calc(100dvh-80px)] flex-col items-center justify-center px-10 text-center sm:px-0 md:min-h-[calc(100dvh-95px)]"
          style={{
            gap: "clamp(24px, 4vw, 48px)",
            paddingTop: "clamp(24px, 4vw, 48px)",
            paddingBottom: "clamp(24px, 4vw, 48px)",
          }}
        >
          <div className="flex w-full max-w-full flex-col items-center gap-3 sm:gap-4">
            <PillBadge>
              <span className="text-(--accent)">✦</span>
              Elite software · Karachi
            </PillBadge>

            <h1
              className="m-0 w-full max-w-228.5 text-balance wrap-break-word font-extrabold tracking-[-0.02em] text-(--fg)"
              style={{
                fontSize: "clamp(1.65rem, 0.85rem + 4.2vw, 4rem)",
                lineHeight: 1.25,
              }}
            >
              One engineer.{" "}
              <SelectionFrame label="Ayaz" animate>
                <span className="text-(--fg)">
                  The power of a full studio
                </span>
              </SelectionFrame>
            </h1>

            <p
              className="m-0 w-full max-w-161 px-1 font-normal text-(--fg-muted) sm:px-4"
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
                <WhatsAppIcon className="h-3.75 w-3.75 sm:h-4.5 sm:w-4.5" />
                <span>Let&apos;s talk on WhatsApp</span>
              </a>
              <a
                href="/work"
                className="pill-btn pill-btn--ghost w-full sm:w-auto"
              >
                <span>View all work</span>
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

      <div className="relative hidden min-w-0 overflow-x-clip px-[calc(12px+var(--page-gutter-extra))] sm:px-6 md:block lg:px-8">
        <DesktopProductShowcase />
      </div>
    </section>
  );
}
