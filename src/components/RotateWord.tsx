"use client";

import { useEffect, useState } from "react";
import { ROTATE_WORDS } from "@/lib/site";

/** Longest word locks the slot — "Platforms" / "Web Apps" ≈ 9ch */
const SLOT_CH = "9ch";

export function RotateWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let intervalId = 0;
    const start = window.setTimeout(() => {
      setActive(true);
      intervalId = window.setInterval(() => {
        setPhase("out");
        window.setTimeout(() => {
          setWordIndex((i) => (i + 1) % ROTATE_WORDS.length);
          setPhase("in");
        }, 280);
      }, 2800);
    }, 1200);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(intervalId);
    };
  }, []);

  const word = ROTATE_WORDS[wordIndex];

  return (
    <span
      className="rotate-word relative inline-flex items-baseline align-baseline"
      aria-live="polite"
      aria-atomic="true"
    >
      <span
        className="rotate-word__viewport relative inline-block overflow-hidden whitespace-nowrap font-semibold text-[var(--accent)]"
        style={{ width: SLOT_CH }}
      >
        <span
          key={`${word}-${phase}`}
          className={`rotate-word__text inline-block ${
            active && phase === "out"
              ? "rotate-word__text--out"
              : active
                ? "rotate-word__text--in"
                : ""
          }`}
        >
          {word}
        </span>
        <span className="rotate-word__underline" aria-hidden />
      </span>
    </span>
  );
}
