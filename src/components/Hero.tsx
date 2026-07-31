import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";
import { RotateWord } from "@/components/RotateWord";
import { DesktopHeroVisual } from "@/components/DesktopHeroVisual";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_35%_35%,rgba(42,56,41,0.9),transparent_65%),radial-gradient(45%_40%_at_8%_10%,rgba(58,74,46,0.35),transparent_55%)] xl:bg-[radial-gradient(55%_48%_at_22%_40%,rgba(42,56,41,0.75),transparent_62%),radial-gradient(40%_40%_at_85%_45%,rgba(229,162,70,0.12),transparent_55%)]"
        aria-hidden
      />

      <div className="container-page relative grid items-center gap-6 py-7 min-[375px]:py-8 sm:gap-8 sm:py-10 lg:py-12 xl:min-h-[min(520px,calc(100svh-4.5rem))] xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-10 xl:pb-14 xl:pt-8">
        <div className="hero-copy relative z-10 mx-auto flex w-full max-w-[22rem] flex-col items-center text-center min-[375px]:max-w-[26rem] sm:max-w-[34rem] xl:mx-0 xl:max-w-[42rem] xl:items-start xl:text-left">
          <p className="eyebrow mb-3 justify-center sm:mb-4 xl:justify-start">
            Elite software company · Karachi
          </p>

          <h1 className="text-balance text-[clamp(1.75rem,7.2vw,3.15rem)] leading-[1.15] text-ivory">
            We build <RotateWord />
            <br />
            that move businesses forward
          </h1>

          <p className="mt-4 max-w-[38ch] text-[0.95rem] leading-relaxed text-ivory-muted min-[375px]:mt-5 min-[375px]:text-[1.02rem] sm:max-w-[44ch] sm:text-[1.08rem]">
            SaaS platforms, web apps, and digital solutions — designed,
            engineered, and launched as production systems with elite polish.
          </p>

          <div className="mt-7 flex w-full max-w-[20rem] flex-col gap-3 min-[375px]:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center xl:justify-start">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 bg-whatsapp px-5 py-3.5 text-[0.94rem] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(37,211,102,0.35)] sm:w-auto"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-ivory/20 bg-void/30 px-5 py-3.5 text-[0.94rem] font-semibold text-ivory backdrop-blur-sm transition hover:border-mint/50 hover:text-mint sm:w-auto"
            >
              View case studies
              <ArrowRight size={16} strokeWidth={1.8} />
            </a>
          </div>

          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-5 inline-flex items-center gap-2 text-sm text-ivory-muted transition hover:text-gold"
          >
            <Phone size={15} strokeWidth={1.75} />
            Or call {SITE.phoneDisplay}
          </a>
        </div>

        <DesktopHeroVisual />
      </div>
    </section>
  );
}
