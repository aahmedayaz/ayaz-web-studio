import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-8 text-[0.82rem] text-ivory/60">
      <div className="container-page flex flex-col gap-3.5 md:flex-row md:items-center md:justify-between">
        <span className="font-display font-semibold text-ivory">{SITE.name}</span>
        <span>
          &copy; {SITE.year} {SITE.name}, Karachi. Websites & business systems
          for local businesses.
        </span>
      </div>
    </footer>
  );
}
