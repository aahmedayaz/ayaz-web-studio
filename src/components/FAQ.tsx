"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad">
      <div className="container-page">
        <div className="mx-auto w-full max-w-[760px]">
          <Reveal className="section-head mx-auto mb-8 text-center md:mb-10">
            <p className="eyebrow mb-3.5 justify-center">Common questions</p>
            <h2 className="text-[clamp(1.55rem,5vw,2.45rem)] text-ivory">
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
                      className="flex w-full items-center justify-between gap-3 py-4 text-left font-display text-[0.92rem] font-semibold text-ivory min-[375px]:gap-4 min-[375px]:py-5 min-[375px]:text-[0.98rem]"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className="min-w-0">{item.q}</span>
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
                        <p className="pb-5 text-[0.9rem] text-ivory-muted min-[375px]:text-[0.92rem]">
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
