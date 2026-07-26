"use client";

import { useEffect, useRef } from "react";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("in");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      show();
      return;
    }

    const fallback = window.setTimeout(show, 1500);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            window.clearTimeout(fallback);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: "40px 0px" },
    );

    io.observe(el);
    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  return (
    <Tag ref={ref as never} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
