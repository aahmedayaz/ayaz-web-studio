import { ROTATE_WORDS } from "@/lib/site";

/** CSS-only word cycle — zero client JS on the hero critical path. */
export function RotateWord() {
  return (
    <span
      className="rotate-word relative inline-flex items-baseline align-baseline"
      aria-hidden
    >
      <span
        className="rotate-word__viewport relative inline-block overflow-hidden whitespace-nowrap font-semibold text-(--accent)"
        style={{ width: "9ch", height: "1.2em" }}
      >
        <span className="rotate-word__track">
          {ROTATE_WORDS.map((word) => (
            <span key={word} className="rotate-word__item">
              {word}
            </span>
          ))}
          <span className="rotate-word__item" aria-hidden>
            {ROTATE_WORDS[0]}
          </span>
        </span>
        <span className="rotate-word__underline" />
      </span>
      <span className="sr-only">Products, SaaS, Web Apps, and Platforms</span>
    </span>
  );
}
