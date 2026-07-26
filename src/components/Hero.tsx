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

      <div className="container-page relative grid items-center gap-8 py-6 md:py-8 xl:min-h-[min(520px,calc(100svh-4.5rem))] xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-10 xl:pb-14 xl:pt-6">
        <div className="hero-copy relative z-10 mx-auto w-full max-w-[34rem] text-center xl:mx-0 xl:max-w-[40rem] xl:text-left">
          <p className="eyebrow mb-4 justify-center xl:justify-start">
            Karachi businesses · Real growth
          </p>

          <h1 className="text-[clamp(2rem,4.8vw,3.15rem)] text-ivory">
            We build your website —
            <br />
            you get more <RotateWord />.
          </h1>

          <p className="mx-auto mt-5 max-w-[42ch] text-[1.02rem] leading-relaxed text-ivory-muted sm:text-[1.08rem] xl:mx-0">
            A fast website that turns Google searches and WhatsApp chats into
            paying customers — so you spend less time chasing leads and more
            time running the business.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 xl:justify-start">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 bg-whatsapp px-5 py-3.5 text-[0.94rem] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(37,211,102,0.35)]"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Get a free quote
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center gap-2 border border-ivory/20 bg-void/30 px-5 py-3.5 text-[0.94rem] font-semibold text-ivory backdrop-blur-sm transition hover:border-mint/50 hover:text-mint"
            >
              See what you get
              <ArrowRight size={16} strokeWidth={1.8} />
            </a>
          </div>

          <a
            href={`tel:${SITE.phoneTel}`}
            className="mx-auto mt-5 inline-flex items-center gap-2 text-sm text-ivory-muted transition hover:text-gold xl:mx-0"
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
