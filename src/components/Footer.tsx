import { GridRule } from "@/components/GridRails";
import { NAV_LINKS, SITE } from "@/lib/site";

const CONTACT_LINKS = [
  { href: SITE.whatsapp, label: "WhatsApp", external: true },
  { href: `mailto:${SITE.email}`, label: "Email", external: false },
  { href: "/#contact", label: "Start a project", external: false },
] as const;

const SOCIAL_LINKS = [
  { href: SITE.social.linkedin, label: "LinkedIn" },
  { href: SITE.social.github, label: "GitHub" },
] as const;

export function Footer() {
  return (
    <footer className="relative w-full">
      <GridRule />

      <div className="container-page py-[clamp(3.25rem,7vw,5.5rem)]">
        <div className="grid gap-12 sm:gap-14 md:grid-cols-12 md:gap-x-8 md:gap-y-12">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-6">
            <a
              href="/"
              className="group inline-flex items-center gap-2.5"
              aria-label={SITE.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/logo-mark.svg"
                alt=""
                width={36}
                height={36}
                className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                decoding="async"
              />
              <span className="text-[1.15rem] font-extrabold tracking-tight text-(--fg) sm:text-[1.3rem]">
                Ayaz{" "}
                <span className="text-(--accent) transition group-hover:brightness-110">
                  Web Studio
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-[32ch] text-[0.95rem] leading-relaxed text-(--fg-muted) sm:mt-6 sm:text-[1.05rem]">
              Elite software for SaaS, products &amp; web apps — built in
              Karachi.
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3 sm:mt-8">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.88rem] font-medium text-(--fg-soft) transition-colors hover:text-(--accent)"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3 md:col-start-7 lg:col-span-3 lg:col-start-8">
            <h3 className="m-0 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-(--fg-soft)">
              Navigate
            </h3>
            <ul className="mt-5 flex list-none flex-col gap-3.5 p-0 sm:mt-6 sm:gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.98rem] font-medium text-(--fg) transition-colors hover:text-(--accent)"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="m-0 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-(--fg-soft)">
              Contact
            </h3>
            <ul className="mt-5 flex list-none flex-col gap-3.5 p-0 sm:mt-6 sm:gap-4">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-[0.98rem] font-medium text-(--fg) transition-colors hover:text-(--accent)"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <GridRule />

      <div className="container-page flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">
        <p className="m-0 text-[0.82rem] text-(--fg-soft) sm:text-[0.88rem]">
          &copy; {SITE.year} {SITE.name}. All rights reserved.
        </p>
        <p className="m-0 text-[0.82rem] text-(--fg-soft) sm:text-[0.88rem]">
          Karachi, Pakistan
        </p>
      </div>
    </footer>
  );
}
