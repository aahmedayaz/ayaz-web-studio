import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { PortfolioGrid } from "@/components/PortfolioCard";

export function CaseStudies() {
  return (
    <section id="work" className="section-pad">
      <div className="container-page">
        <Reveal className="section-center mb-12 md:mb-16">
          <p className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-(--line) bg-(--surface) px-3.5 py-1.5 text-[0.78rem] font-medium text-(--fg-muted)">
            <span className="text-(--accent)">✦</span>
            Selected work
          </p>
          <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-extrabold text-(--fg)">
            Products that prove the craft
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-base text-(--fg-muted)">
            Live products across SaaS, AI, commerce, and interactive experiences
            — shipped to production, not stuck in mockups.
          </p>
        </Reveal>

        <Reveal>
          <PortfolioGrid projects={FEATURED_PROJECTS} />
        </Reveal>

        <Reveal className="mt-12 flex justify-center md:mt-16">
          <Link
            href="/work"
            className="pill-btn pill-btn--ghost inline-flex items-center gap-2"
          >
            <span>View all work</span>
            <ArrowRight size={16} strokeWidth={1.85} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
