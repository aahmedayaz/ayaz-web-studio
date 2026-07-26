"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container-page max-w-[760px]">
        <Reveal className="mb-8 md:mb-10">
          <p className="eyebrow mb-3.5">Common questions</p>
          <h2 className="text-[clamp(1.7rem,3.5vw,2.45rem)] text-ivory">
            Before you message us
          </h2>
        </Reveal>

        <Reveal>
          <div>
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-line">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-[0.98rem] font-semibold text-ivory"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <Plus
                      size={18}
                      strokeWidth={1.8}
                      className={`shrink-0 text-gold-dim transition-transform duration-200 ${
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
                      <p className="pb-5 text-[0.92rem] text-ivory-muted">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
