import { NAV_LINKS, SITE } from "@/lib/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GridRule } from "@/components/GridRails";

const NAV_TOGGLE_ID = "aws-mobile-nav";

/** Inline icons — keep Header as a Server Component (no lucide in critical path). */
function IconMenu({ className = "" }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconClose({ className = "" }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-9999 border-b border-transparent">
      <input
        id={NAV_TOGGLE_ID}
        type="checkbox"
        className="site-nav-toggle sr-only"
        aria-hidden
        tabIndex={-1}
      />

      <div className="container-wide relative z-20 grid grid-cols-[1fr_auto] items-center gap-2 py-3 min-[400px]:gap-3 md:py-4 xl:grid-cols-[1fr_auto_1fr]">
        <a
          href="/"
          className="relative z-10 flex min-w-0 items-center gap-1.5 justify-self-start pl-4 sm:gap-2.5 sm:pl-0"
          aria-label={SITE.name}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-mark.svg"
            alt=""
            width={36}
            height={36}
            className="h-6 w-6 shrink-0 object-contain sm:h-9 sm:w-9"
            decoding="async"
          />
          <span className="truncate text-xs font-semibold tracking-tight text-(--fg) sm:text-[1.02rem]">
            Ayaz <span className="text-(--accent)">Web Studio</span>
          </span>
        </a>

        <nav
          className="hidden items-center justify-center gap-6 text-base font-medium text-(--fg-muted) xl:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative z-10 transition-colors hover:text-(--fg)"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center justify-self-end gap-1.5 pr-4 min-[400px]:gap-2.5 sm:pr-0">
          <ThemeToggle className="h-9! w-9! min-[400px]:h-10! min-[400px]:w-10!" />
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn pill-btn--primary hidden! min-h-10! rounded-2xl! px-4! py-2! text-[0.9rem]! xl:inline-flex!"
          >
            Start a project
          </a>

          <label
            htmlFor={NAV_TOGGLE_ID}
            className="site-nav-btn inline-flex h-9 w-9 cursor-pointer touch-manipulation items-center justify-center rounded-lg text-(--fg) transition hover:bg-(--surface-2) min-[400px]:h-10 min-[400px]:w-10 xl:hidden"
            aria-label="Toggle menu"
          >
            <IconMenu className="site-nav-icon-open" />
            <IconClose className="site-nav-icon-close" />
          </label>
        </div>
      </div>

      <GridRule className="site-header__rule opacity-60" />

      <label
        htmlFor={NAV_TOGGLE_ID}
        className="site-nav-backdrop"
        aria-hidden
      />

      <div className="site-nav-panel" id="mobile-nav-panel">
        <div className="flex h-full flex-col bg-(--bg)">
          <div className="flex items-center justify-between gap-3 border-b border-(--line) px-5 py-4">
            <span className="text-[0.95rem] font-semibold text-(--fg)">
              Menu
            </span>
            <label
              htmlFor={NAV_TOGGLE_ID}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-(--fg) transition hover:bg-(--surface-2)"
              aria-label="Close menu"
            >
              <IconClose />
            </label>
          </div>

          <nav
            className="flex flex-1 flex-col overflow-y-auto px-3 py-2"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="site-nav-link rounded-xl px-3 py-3.5 text-[1.05rem] font-medium text-(--fg) transition hover:bg-(--surface)"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-(--line) p-5">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn--primary site-nav-link w-full"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>

      {/* Tiny non-React helpers: close drawer on nav click / Escape */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var t=document.getElementById('${NAV_TOGGLE_ID}');if(!t)return;document.getElementById('mobile-nav-panel')?.addEventListener('click',function(e){if(e.target.closest('a.site-nav-link'))t.checked=false});document.addEventListener('keydown',function(e){if(e.key==='Escape')t.checked=false});})();`,
        }}
      />
    </header>
  );
}
