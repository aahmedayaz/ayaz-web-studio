import Image from "next/image";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { SelectionFrame } from "@/components/SelectionFrame";

export function ManifestoQuote() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal className="mx-auto max-w-[70%] text-center max-md:max-w-full">
          <SelectionFrame
            label="Client"
            className="selection-frame--quote w-full text-left"
            nowrap={false}
            animate
          >
            <p className="m-0 text-balance px-2 py-3 text-[clamp(1.5rem,4.2vw,2.75rem)] font-extrabold leading-[1.25] tracking-[-0.01em] text-[var(--fg)] sm:px-4">
              <span className="manifesto-accent manifesto-accent--1 text-[var(--accent)]">
                OH MY GOD!
              </span>{" "}
              We&apos;re shipping in{" "}
              <span className="manifesto-accent manifesto-accent--2 text-[var(--accent)]">
                weeks
              </span>{" "}
              what used to take{" "}
              <span className="manifesto-accent manifesto-accent--3 text-[var(--accent)]">
                quarters
              </span>{" "}
              with agencies.
            </p>
          </SelectionFrame>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:mt-12 sm:flex-row sm:items-center sm:text-left">
            <div className="manifesto-founder flex items-center gap-3">
              <Image
                src="/brand/founder.webp"
                alt=""
                width={48}
                height={48}
                sizes="48px"
                quality={55}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--accent)]"
              />
              <div>
                <div className="font-semibold text-[var(--fg)]">{SITE.founder}</div>
                <div className="text-sm text-[var(--fg-muted)]">
                  Founder · {SITE.name}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn--primary"
              >
                <span>Start a project</span>
              </a>
              <a
                href="#founder"
                className="pill-btn pill-btn--ghost"
              >
                <span>Meet the founder</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
