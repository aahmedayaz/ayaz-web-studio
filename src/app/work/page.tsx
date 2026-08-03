import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ARCHIVE_PROJECTS, FEATURED_PROJECTS, SITE } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GridRails, GridRule } from "@/components/GridRails";
import { PortfolioGrid } from "@/components/PortfolioCard";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Work · ${SITE.name}`,
  description:
    "Full portfolio of products and platforms engineered by Ayaz Web Studio — SaaS, AI, commerce, dashboards, and brand experiences.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <div className="site-shell relative pt-16 md:pt-18">
        <GridRails />
        <main className="relative z-1">
          <section className="section-pad">
            <div className="container-page">
              <Reveal className="mb-10 md:mb-14">
                <div className="mb-6 flex flex-col items-start gap-4">
                  <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 text-[0.9rem] font-medium text-(--fg-muted) transition hover:text-(--accent)"
                  >
                    <ArrowLeft size={16} strokeWidth={1.85} />
                    Back to home
                  </Link>
                  <p className="inline-flex items-center gap-1.5 rounded-full border border-(--line) bg-(--surface) px-3.5 py-1.5 text-[0.78rem] font-medium text-(--fg-muted)">
                    <span className="text-(--accent)">✦</span>
                    Full portfolio
                  </p>
                </div>
                <h1 className="max-w-[18ch] text-[clamp(1.9rem,5vw,3.25rem)] font-extrabold tracking-tight text-(--fg)">
                  Work that ships
                </h1>
                <p className="mt-4 max-w-[48ch] text-[1.02rem] text-(--fg-muted)">
                  Featured builds plus additional products across healthcare,
                  AI, nonprofit, analytics, and brand systems — each linked to
                  the live experience.
                </p>
              </Reveal>

              <Reveal className="mb-6">
                <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-(--fg-soft)">
                  Featured
                </h2>
              </Reveal>
              <Reveal className="mb-14 md:mb-20">
                <PortfolioGrid projects={FEATURED_PROJECTS} priorityCount={3} />
              </Reveal>

              <GridRule className="mb-12 md:mb-16" />

              <Reveal className="mb-6">
                <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-(--fg-soft)">
                  More work
                </h2>
              </Reveal>
              <Reveal>
                <PortfolioGrid projects={ARCHIVE_PROJECTS} />
              </Reveal>

              <Reveal className="mt-14 flex flex-wrap justify-center gap-3 md:mt-20">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-btn pill-btn--primary"
                >
                  Start a project
                </a>
                <Link href="/#contact" className="pill-btn pill-btn--ghost">
                  Contact
                </Link>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
