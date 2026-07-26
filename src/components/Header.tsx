"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { body } = document;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    // Lock scroll without scrollbar width compensation (avoids right-edge shift)
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-void/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-3.5 md:py-4">
        <a href="#top" className="flex items-center gap-2.5" aria-label={SITE.name}>
          <Image
            src="/brand/logo-mark.svg"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-display text-[0.95rem] font-semibold tracking-tight text-ivory sm:text-[1.05rem]">
            Ayaz <span className="text-gold">Web Studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-[0.92rem] font-medium text-ivory-muted lg:flex">
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

        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 bg-gold px-4 py-2.5 text-[0.86rem] font-semibold text-void transition hover:bg-gold-dim lg:inline-flex"
        >
          Get a free quote
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-void px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-line py-3.5 font-medium text-ivory"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center bg-gold px-4 py-3.5 text-sm font-semibold text-void"
              onClick={() => setOpen(false)}
            >
              Get a free quote
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
