"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { PillBadge } from "@/components/PillBadge";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad border-y border-[var(--line)]">
      <div className="container-page">
        <div className="mx-auto w-full max-w-[720px]">
          <Reveal className="section-center mb-10 md:mb-12">
            <PillBadge className="mb-5">
              <span className="text-[var(--accent)]">✦</span>
              Common questions
            </PillBadge>
            <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-extrabold text-[var(--fg)]">
              Before we build together
            </h2>
          </Reveal>

          <Reveal>
            <div className="rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface)] px-4 sm:px-6">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={item.q}
                    className={i < FAQ_ITEMS.length - 1 ? "border-b border-[var(--line)]" : ""}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-3 py-5 text-left text-[0.95rem] font-semibold text-[var(--fg)]"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className="min-w-0">{item.q}</span>
                      <Plus
                        size={18}
                        strokeWidth={1.8}
                        className={`shrink-0 text-[var(--accent)] transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-5 text-[0.92rem] text-[var(--fg-muted)]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
