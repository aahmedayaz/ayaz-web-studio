import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";
import { MapEmbed } from "@/components/MapEmbed";
import { PillBadge } from "@/components/PillBadge";

export function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <Reveal className="section-center mb-10 md:mb-14">
          <PillBadge className="mb-5">
            <span className="text-[var(--accent)]">✦</span>
            Start building
          </PillBadge>
          <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-extrabold text-[var(--fg)]">
            Ready to ship your next product?
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-[1rem] text-[var(--fg-muted)]">
            SaaS, web apps, platforms, or automation — send a WhatsApp message
            and get a clear next step, usually within the hour.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn--primary"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Message on WhatsApp
            </a>
            <a href={`mailto:${SITE.email}`} className="pill-btn pill-btn--ghost">
              Email us
            </a>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-[28rem] grid-cols-1 gap-5 min-[640px]:max-w-none lg:grid-cols-2 lg:gap-7">
          <div className="rounded-[var(--radius-xl)] border border-[var(--line)] bg-[var(--surface)] p-5 min-[375px]:p-6 md:p-8">
            <div className="flex gap-3.5 border-b border-[var(--line)] py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-[var(--accent)]">
                <Phone size={17} strokeWidth={1.6} />
              </div>
              <div className="min-w-0">
                <div className="mb-0.5 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-[var(--fg-soft)]">
                  WhatsApp / Phone
                </div>
                <a
                  href={SITE.whatsappShort}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words text-[0.96rem] font-semibold text-[var(--fg)] hover:text-[var(--accent)]"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-3.5 border-b border-[var(--line)] py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-[var(--accent)]">
                <Mail size={17} strokeWidth={1.6} />
              </div>
              <div className="min-w-0">
                <div className="mb-0.5 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-[var(--fg-soft)]">
                  Email
                </div>
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-[0.96rem] font-semibold text-[var(--fg)] hover:text-[var(--accent)]"
                >
                  {SITE.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3.5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-[var(--accent)]">
                <MapPin size={17} strokeWidth={1.6} />
              </div>
              <div className="min-w-0">
                <div className="mb-0.5 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-[var(--fg-soft)]">
                  Studio Address
                </div>
                <span className="text-[0.96rem] font-semibold text-[var(--fg)]">
                  {SITE.address}
                </span>
              </div>
            </div>
          </div>

          <div className="min-h-[240px] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--line)] shadow-[var(--shadow-float)] min-[375px]:min-h-[280px]">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
