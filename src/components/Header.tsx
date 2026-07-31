"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

const NAV_TOGGLE_ID = "aws-mobile-nav";

function closeMobileNav() {
  const el = document.getElementById(NAV_TOGGLE_ID) as HTMLInputElement | null;
  if (el) el.checked = false;
  document.body.style.overflow = "";
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const input = document.getElementById(
      NAV_TOGGLE_ID,
    ) as HTMLInputElement | null;
    if (!input) return;

    const sync = () => {
      document.body.style.overflow = input.checked ? "hidden" : "";
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && input.checked) {
        input.checked = false;
        sync();
      }
    };

    const mq = window.matchMedia("(min-width: 1280px)");
    const onMq = () => {
      if (mq.matches && input.checked) {
        input.checked = false;
        sync();
      }
    };

    input.addEventListener("change", sync);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      input.removeEventListener("change", sync);
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-[9999] transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "is-scrolled border-b border-line bg-void/95 backdrop-blur-xl"
          : "border-b border-transparent bg-void/80 backdrop-blur-md"
      }`}
    >
      {/* Native checkbox — works even if React hydration fails */}
      <input
        id={NAV_TOGGLE_ID}
        type="checkbox"
        className="site-nav-toggle sr-only"
        aria-hidden
        tabIndex={-1}
      />

      <div className="container-page flex items-center justify-between gap-3 py-3 min-[375px]:py-3.5 md:py-4">
        <a
          href="#top"
          className="relative z-10 flex min-w-0 items-center gap-2 min-[375px]:gap-2.5"
          aria-label={SITE.name}
          onClick={closeMobileNav}
        >
          <Image
            src="/brand/logo-mark.svg"
            alt=""
            width={36}
            height={36}
            className="h-8 w-8 shrink-0 object-contain min-[375px]:h-9 min-[375px]:w-9"
            priority
          />
          <span className="font-display truncate text-[0.88rem] font-semibold tracking-tight text-ivory min-[375px]:text-[0.95rem] sm:text-[1.05rem]">
            Ayaz <span className="text-gold">Web Studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-[0.9rem] font-semibold text-ivory-muted xl:flex xl:gap-7 xl:text-[0.92rem]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-2">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 bg-gold px-4 py-2.5 text-[0.86rem] font-semibold text-void transition hover:bg-gold-dim lg:inline-flex"
          >
            Start a project
          </a>

          <label
            htmlFor={NAV_TOGGLE_ID}
            className="site-nav-btn inline-flex h-11 w-11 cursor-pointer touch-manipulation items-center justify-center rounded-md text-ivory transition hover:bg-ivory/10 xl:hidden"
            aria-label="Open menu"
          >
            <Menu
              size={22}
              strokeWidth={1.75}
              className="site-nav-icon-open"
              aria-hidden
            />
            <X
              size={22}
              strokeWidth={1.75}
              className="site-nav-icon-close"
              aria-hidden
            />
          </label>
        </div>
      </div>

      <div className="site-nav-panel border-t border-line bg-void xl:hidden">
        <nav className="container-page flex flex-col pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-line py-3.5 text-center font-semibold text-ivory sm:text-left"
              onClick={closeMobileNav}
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-12 items-center justify-center bg-gold px-4 py-3.5 text-sm font-semibold text-void lg:hidden"
            onClick={closeMobileNav}
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
