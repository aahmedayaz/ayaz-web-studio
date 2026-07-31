import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-8 text-[0.82rem] text-ivory/60">
      <div className="container-page flex flex-col items-center gap-3.5 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <span className="font-display font-semibold text-ivory">{SITE.name}</span>
        <span className="max-w-[36ch] md:max-w-none">
          &copy; {SITE.year} {SITE.name}, Karachi. Websites & business systems
          for local businesses.
        </span>
      </div>
    </footer>
  );
}
