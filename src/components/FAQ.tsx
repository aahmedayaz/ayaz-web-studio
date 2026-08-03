import { FAQ_ITEMS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { PillBadge } from "@/components/PillBadge";

/** Native details/summary — no client hydration for accordion. */
export function FAQ() {
  return (
    <section id="faq" className="section-pad border-y border-(--line)">
      <div className="container-page">
        <div className="mx-auto w-full max-w-180">
          <Reveal className="section-center mb-10 md:mb-12">
            <PillBadge className="mb-5">
              <span className="text-(--accent)">✦</span>
              Common questions
            </PillBadge>
            <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-extrabold text-(--fg)">
              Before we build together
            </h2>
          </Reveal>

          <Reveal>
            <div className="rounded-lg border border-(--line) bg-(--surface) px-4 sm:px-6">
              {FAQ_ITEMS.map((item, i) => (
                <details
                  key={item.q}
                  className={`faq-item group ${
                    i < FAQ_ITEMS.length - 1 ? "border-b border-(--line)" : ""
                  }`}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-5 text-left text-[0.95rem] font-semibold text-(--fg) [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0">{item.q}</span>
                    <span
                      className="faq-plus relative inline-flex size-4.5 shrink-0 text-(--accent)"
                      aria-hidden
                    >
                      <span className="absolute left-1/2 top-0 h-full w-[1.8px] -translate-x-1/2 rounded-full bg-current transition group-open:rotate-90 group-open:opacity-0" />
                      <span className="absolute left-0 top-1/2 h-[1.8px] w-full -translate-y-1/2 rounded-full bg-current" />
                    </span>
                  </summary>
                  <p className="pb-5 text-[0.92rem] text-(--fg-muted)">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
