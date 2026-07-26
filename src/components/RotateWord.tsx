"use client";

import { useEffect, useState } from "react";
import { ROTATE_WORDS } from "@/lib/site";

/** Tiny client island — CSS reserves width so no layout thrash / reflow. */
export function RotateWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setOut(true);
      window.setTimeout(() => {
        setWordIndex((i) => (i + 1) % ROTATE_WORDS.length);
        setOut(false);
      }, 280);
    }, 2200);

    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="inline-block min-w-[10.5ch] text-gold">
      <span
        className={`inline-block transition-opacity duration-300 ease-out ${
          out ? "opacity-0" : "opacity-100"
        }`}
      >
        {ROTATE_WORDS[wordIndex]}
      </span>
    </span>
  );
}
