/** Vertical content rails + diamond markers — Brilliant.design layout chrome. */
export function GridRails() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
    >
      <div
        className="absolute inset-y-0 w-px bg-(--grid-line)"
        style={{
          left: "calc(var(--page-gutter-extra) + clamp(16px, max(-1052.75px + 71.25vw, -5436px + 335.3vw), 358px))",
        }}
      />
      <div
        className="absolute inset-y-0 w-px bg-(--grid-line)"
        style={{
          right: "calc(var(--page-gutter-extra) + clamp(16px, max(-1052.75px + 71.25vw, -5436px + 335.3vw), 362px))",
        }}
      />
    </div>
  );
}

export function GridRule({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative h-px w-full ${className}`}>
      <div className="absolute inset-x-0 top-0 h-px bg-(--grid-line)" />
      <svg
        className="absolute -top-3 z-2"
        width="24"
        height="24"
        aria-hidden
        style={{
          left: "calc(-12px + var(--page-gutter-extra) + clamp(16px, max(-1052.75px + 71.25vw, -5436px + 335.3vw), 358px))",
        }}
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          transform="rotate(45 12 12)"
          fill="var(--bg)"
          stroke="var(--line-strong)"
          strokeWidth="1"
        />
      </svg>
      <svg
        className="absolute -top-3 z-2"
        width="24"
        height="24"
        aria-hidden
        style={{
          right: "calc(-12px + var(--page-gutter-extra) + clamp(16px, max(-1052.75px + 71.25vw, -5436px + 335.3vw), 362px))",
        }}
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          transform="rotate(45 12 12)"
          fill="var(--bg)"
          stroke="var(--line-strong)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
