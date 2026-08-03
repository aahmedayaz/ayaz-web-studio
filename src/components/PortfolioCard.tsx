import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/lib/site";

function hostLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function PortfolioCard({
  project,
  index = 0,
  priority = false,
}: {
  project: PortfolioProject;
  index?: number;
  priority?: boolean;
}) {
  const host = hostLabel(project.url);
  const monogram = project.title.trim().charAt(0).toUpperCase();

  return (
    <article className="group flex h-full flex-col">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col focus-visible:outline-offset-4"
      >
        <div
          className="relative overflow-hidden rounded-xl border border-(--line) bg-(--surface) shadow-elite transition duration-500 group-hover:-translate-y-1 group-hover:border-(--accent)/45 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
          style={{ animationDelay: `${index * 40}ms` }}
        >
          <div className="flex items-center gap-2 border-b border-(--line) bg-(--surface-2) px-3 py-2.5">
            <span className="flex gap-1.5" aria-hidden>
              <span className="h-2 w-2 rounded-full bg-[#FF5F57]/90" />
              <span className="h-2 w-2 rounded-full bg-[#FEBC2E]/90" />
              <span className="h-2 w-2 rounded-full bg-[#28C840]/90" />
            </span>
            <div className="ml-1 flex min-w-0 flex-1 items-center gap-2 rounded-full border border-(--line) bg-(--bg) px-2.5 py-1">
              <span
                className="inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] text-[0.55rem] font-bold text-white"
                style={{ background: project.accent }}
                aria-hidden
              >
                {monogram}
              </span>
              <span className="truncate font-mono text-[0.65rem] text-(--fg-muted)">
                {host}
              </span>
            </div>
          </div>

          <div className="relative aspect-16/10 overflow-hidden bg-(--bg-elevated)">
            <Image
              src={project.image}
              alt={`${project.title} website preview`}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
              quality={55}
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 opacity-70"
              style={{
                background: `linear-gradient(to top, ${project.accent}22, transparent)`,
              }}
            />
          </div>
        </div>

        <div className="mt-4 flex flex-1 items-start justify-between gap-3 px-0.5">
          <div className="min-w-0">
            <p className="mb-1 text-[0.72rem] font-medium uppercase tracking-[0.08em] text-(--fg-soft)">
              {project.category}
            </p>
            <h3 className="text-[1.05rem] font-bold tracking-tight text-(--fg) transition group-hover:text-(--accent) sm:text-[1.15rem]">
              {project.title}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-[0.86rem] leading-relaxed text-(--fg-muted)">
              {project.description}
            </p>
          </div>
          <span
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--line) text-(--fg) transition duration-300 group-hover:border-(--accent) group-hover:bg-(--accent) group-hover:text-(--accent-fg)"
            aria-hidden
          >
            <ArrowUpRight
              size={17}
              strokeWidth={1.85}
              className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </a>
    </article>
  );
}

export function PortfolioGrid({
  projects,
  priorityCount = 0,
}: {
  projects: PortfolioProject[];
  /** First N cards get priority loading (above the fold). */
  priorityCount?: number;
}) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-6 md:gap-y-10 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-12">
      {projects.map((project, i) => (
        <PortfolioCard
          key={project.id}
          project={project}
          index={i}
          priority={i < priorityCount}
        />
      ))}
    </div>
  );
}
