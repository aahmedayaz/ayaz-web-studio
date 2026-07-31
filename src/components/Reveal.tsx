import type { ReactNode } from "react";

/** CSS view-timeline reveal — zero client JS. Visible by default where unsupported. */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}) {
  return <Tag className={`reveal ${className}`.trim()}>{children}</Tag>;
}
