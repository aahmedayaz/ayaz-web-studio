import { GridRule } from "@/components/GridRails";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative w-full">
      <GridRule />

      <div className="container-wide px-8 py-[clamp(3.5rem,6.7vw,6rem)] pb-[clamp(2.5rem,4vw,4rem)]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left">
              <a
                href="#top"
                className="text-[1.35rem] font-extrabold tracking-tight text-[var(--fg)]"
              >
                {SITE.name}
              </a>
              <p className="max-w-[28ch] text-[clamp(1rem,1.4vw,1.25rem)] font-medium text-[var(--fg-muted)]">
                Elite software for SaaS, products & web apps — built in Karachi.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 text-center">
            <h3 className="m-0 text-[0.875rem] font-extrabold uppercase tracking-[0.08em] text-[var(--fg-muted)]">
              Navigate
            </h3>
            <ul className="m-0 flex list-none flex-col items-center gap-6 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[1rem] text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-6 text-center">
            <h3 className="m-0 text-[0.875rem] font-extrabold uppercase tracking-[0.08em] text-[var(--fg-muted)]">
              Contact
            </h3>
            <ul className="m-0 flex list-none flex-col items-center gap-6 p-0">
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[1rem] text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[1rem] text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
                >
                  Start a project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <GridRule />

      <div className="container-wide px-8 py-[clamp(1.5rem,2.4vw,2rem)] pb-8">
        <p className="m-0 text-[clamp(0.875rem,1.1vw,1rem)] text-[var(--fg-muted)]">
          &copy; {SITE.year} {SITE.name}, Karachi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
