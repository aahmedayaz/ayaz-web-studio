import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";
import { MapEmbed } from "@/components/MapEmbed";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line/50 bg-ink/40 py-16 md:py-24">
      <div className="container-page">
        <Reveal className="mb-8 max-w-xl md:mb-10">
          <p className="eyebrow mb-3.5">Start growing</p>
          <h2 className="text-[clamp(1.7rem,3.5vw,2.45rem)] text-ivory">
            Tell us what you want more of
          </h2>
          <p className="mt-3 text-ivory-muted">
            Sales, bookings, orders, or walk-ins — send a WhatsApp message and
            get a clear next step, usually within the hour.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          <div className="border border-line bg-surface p-7 md:p-8">
            <div className="flex gap-3.5 border-b border-line py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-gold/15 text-gold">
                <Phone size={17} strokeWidth={1.6} />
              </div>
              <div>
                <div className="mb-0.5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-ivory/55">
                  WhatsApp / Phone
                </div>
                <a
                  href={SITE.whatsappShort}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.96rem] font-semibold text-ivory hover:text-gold"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-3.5 border-b border-line py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-gold/15 text-gold">
                <Mail size={17} strokeWidth={1.6} />
              </div>
              <div>
                <div className="mb-0.5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-ivory/55">
                  Email
                </div>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[0.96rem] font-semibold text-ivory hover:text-gold"
                >
                  {SITE.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3.5 py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-gold/15 text-gold">
                <MapPin size={17} strokeWidth={1.6} />
              </div>
              <div>
                <div className="mb-0.5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-ivory/55">
                  Studio Address
                </div>
                <span className="text-[0.96rem] font-semibold text-ivory">
                  {SITE.address}
                </span>
              </div>
            </div>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full min-h-12 items-center justify-center gap-2.5 bg-whatsapp px-5 py-3.5 text-[0.94rem] font-semibold text-white transition hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Message Us on WhatsApp
            </a>
          </div>

          <div className="min-h-[280px] overflow-hidden border border-line shadow-[var(--shadow-elite)]">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
