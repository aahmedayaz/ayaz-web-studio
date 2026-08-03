import type { ReactNode } from "react";

/** Design-tool selection frame — matches Brilliant hero / testimonial chrome. */
export function SelectionFrame({
  children,
  label,
  className = "",
  nowrap = true,
  animate = false,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
  /** Keep phrase on one line (hero). Set false for multi-line quotes. */
  nowrap?: boolean;
  /** Continuous auto-drag: cursor selects across, holds, then loops. */
  animate?: boolean;
}) {
  return (
    <span
      className={`selection-frame relative inline-block max-w-full px-[0.18em] py-[0.08em] leading-[1.15] ${
        nowrap
          ? "whitespace-normal sm:whitespace-nowrap"
          : "whitespace-normal"
      } ${animate ? "selection-frame--animate" : ""} ${className}`}
    >
      <span
        aria-hidden
        className="selection-frame__chrome pointer-events-none absolute inset-y-0 left-0 z-1 w-full overflow-visible"
      >
        <span className="selection-frame__box absolute inset-0 rounded-xs outline-solid outline-[2.5px] outline-(--accent) sm:outline-4" />
        <span className="absolute -left-1.25 -top-1.25 h-2 w-2 rounded-xs bg-(--bg) outline-solid outline-[2.5px] outline-(--accent) -outline-offset-2 sm:-left-1.75 sm:-top-1.75 sm:h-3 sm:w-3 sm:outline-4" />
        <span className="absolute -right-1.25 -top-1.25 h-2 w-2 rounded-xs bg-(--bg) outline-solid outline-[2.5px] outline-(--accent) -outline-offset-2 sm:-right-1.75 sm:-top-1.75 sm:h-3 sm:w-3 sm:outline-4" />
        <span className="absolute -bottom-1.25 -left-1.25 h-2 w-2 rounded-xs bg-(--bg) outline-solid outline-[2.5px] outline-(--accent) -outline-offset-2 sm:-bottom-1.75 sm:-left-1.75 sm:h-3 sm:w-3 sm:outline-4" />
        <span className="absolute -bottom-1.25 -right-1.25 h-2 w-2 rounded-xs bg-(--bg) outline-solid outline-[2.5px] outline-(--accent) -outline-offset-2 sm:-bottom-1.75 sm:-right-1.75 sm:h-3 sm:w-3 sm:outline-4" />
      </span>

      <span className="relative z-0">{children}</span>

      {label ? (
        <span
          aria-hidden
          className={`selection-frame__cursor pointer-events-none absolute z-2 ${
            animate
              ? "left-0 top-0"
              : "left-full top-full translate-x-[-20%] translate-y-0.5 sm:translate-x-[-15%]"
          }`}
        >
          <svg
            viewBox="210 38 30 27"
            fill="none"
            className="block h-auto w-7 overflow-visible drop-shadow-[0_4px_8px_rgba(41,41,41,0.2)] sm:w-11"
          >
            <g transform="rotate(8.26 224.81 51.715)">
              <path
                d="M222.08,61.93 C222.08,61.93 214.08,41.91 214.08,41.91 C214.08,41.91 214.53,41.43 214.53,41.43 C214.53,41.43 235.38,48.16 235.38,48.16 C235.38,48.16 235.54,48.8 235.54,48.8 C235.54,48.8 227.06,54.11 227.06,54.11 L222.82,62 C222.82,62 222.08,61.93 222.08,61.93 Z"
                fill="var(--accent)"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M222.08,61.93 C222.08,61.93 214.08,41.91 214.08,41.91 C214.08,41.91 214.53,41.43 214.53,41.43 C214.53,41.43 235.38,48.16 235.38,48.16 C235.38,48.16 235.54,48.8 235.54,48.8 C235.54,48.8 227.06,54.11 227.06,54.11 L222.82,62 C222.82,62 222.08,61.93 222.08,61.93 Z"
                fill="var(--accent)"
                stroke="var(--fg)"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <span className="selection-frame__tag absolute left-3.5 top-4 whitespace-nowrap rounded-xl bg-(--accent) px-2 py-0.5 text-[0.65rem] font-bold text-(--accent-fg) sm:left-5 sm:top-6 sm:rounded-2xl sm:px-3.5 sm:py-1 sm:text-[clamp(0.75rem,1.2vw,0.95rem)]">
            {label}
          </span>
        </span>
      ) : null}
    </span>
  );
}
