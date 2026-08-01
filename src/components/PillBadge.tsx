import type { ReactNode } from "react";

export function PillBadge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-1.5 text-[0.78rem] font-medium text-[var(--fg-muted)] ${className}`}
    >
      {children}
    </span>
  );
}
