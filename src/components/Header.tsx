"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GridRule } from "@/components/GridRails";

const NAV_TOGGLE_ID = "aws-mobile-nav";

function closeMobileNav() {
  const el = document.getElementById(NAV_TOGGLE_ID) as HTMLInputElement | null;
  if (el) el.checked = false;
  document.body.style.overflow = "";
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        ticking = false;
      });
    };
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
      className={`site-header fixed inset-x-0 top-0 z-[9999] transition-[background,border-color] duration-300 ${
        scrolled
          ? "is-scrolled border-b border-[var(--line)]"
          : "border-b border-transparent"
      }`}
      style={{ background: scrolled ? "var(--header-bg)" : "transparent" }}
    >
      <input
        id={NAV_TOGGLE_ID}
        type="checkbox"
        className="site-nav-toggle sr-only"
        aria-hidden
        tabIndex={-1}
      />

      <div className="container-wide relative flex items-center justify-between gap-2 py-3 min-[400px]:gap-3 md:py-4">
        <a
          href="#top"
          className="relative z-10 flex min-w-0 flex-1 items-center gap-2 min-[400px]:gap-2.5"
          aria-label={SITE.name}
          onClick={closeMobileNav}
        >
          <img
            src="/brand/logo-mark.svg"
            alt=""
            width={36}
            height={36}
            className="h-8 w-8 shrink-0 object-contain min-[375px]:h-9 min-[375px]:w-9"
            decoding="async"
          />
          <span className="truncate text-[0.88rem] font-semibold tracking-tight text-[var(--fg)] min-[400px]:text-[0.95rem] sm:text-[1.02rem]">
            Ayaz <span className="text-[var(--accent)]">Web Studio</span>
          </span>
        </a>

        {/* Brilliant: desktop links sit dead-center in the rail */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-[1rem] font-medium text-[var(--fg-muted)] xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--fg)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-1.5 min-[400px]:gap-2.5">
          <ThemeToggle className="!h-9 !w-9 min-[400px]:!h-10 min-[400px]:!w-10" />
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn pill-btn--primary !hidden !min-h-10 !rounded-2xl !px-4 !py-2 !text-[0.9rem] xl:!inline-flex"
          >
            Start a project
          </a>

          <label
            htmlFor={NAV_TOGGLE_ID}
            className="site-nav-btn inline-flex h-9 w-9 cursor-pointer touch-manipulation items-center justify-center rounded-lg text-[var(--fg)] transition hover:bg-[var(--surface-2)] min-[400px]:h-10 min-[400px]:w-10 xl:hidden"
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

      {/* Brilliant: hairline rule + diamond markers under the nav */}
      <GridRule className={scrolled ? "opacity-100" : "opacity-60"} />

      <div className="site-nav-panel border-t border-[var(--line)] bg-[var(--bg)] xl:hidden">
        <nav className="container-wide flex flex-col pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-[var(--line)] py-3.5 text-center font-medium text-[var(--fg)] sm:text-left"
              onClick={closeMobileNav}
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn pill-btn--primary mt-5 w-full xl:hidden"
            onClick={closeMobileNav}
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
