type LogoProps = { className?: string };

export function ReactLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

export function NextLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10.5" fill="#fff" />
      <path
        d="M8.2 7.2h1.55l5.1 7.55V7.2H16.4v9.6h-1.5L9.75 9.15V16.8H8.2V7.2Z"
        fill="#000"
      />
    </svg>
  );
}

export function NodeLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2.2 3.8 6.9v10.2L12 21.8l8.2-4.7V6.9L12 2.2Z"
        fill="#393"
      />
      <path
        d="M12 2.2v19.6l8.2-4.7V6.9L12 2.2Z"
        fill="#3C3"
      />
      <path
        d="M12 6.4c-1.9 0-3.1.8-3.7 2.3l1.55.9c.3-.8.8-1.2 2.1-1.2 1.35 0 1.85.55 1.85 1.5v.2h-1.9c-2.1 0-3.25.95-3.25 2.55 0 1.55 1 2.5 2.65 2.5 1.1 0 1.9-.4 2.45-1.15V15.2h1.65v-3.55c0-2.15-1.35-3.25-3.4-3.25Zm.05 7.15c-.75 0-1.25-.35-1.25-1s.45-.95 1.3-.95h1.85c0 1.15-.75 1.95-1.9 1.95Z"
        fill="#fff"
      />
    </svg>
  );
}

export function MongoLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12.3 2.2c.2 1.6-.2 3.1-.9 4.5-.8 1.6-1.7 3.1-2.1 4.8-.3 1.2-.3 2.4.2 3.5.4.9 1.1 1.6 1.7 2.4.4.5.7 1.1.6 1.8-.1.5-.4.9-.8 1.2-.1-.8.1-1.5.5-2.1.5-.8 1.1-1.5 1.4-2.4.4-1 .5-2.1.3-3.2-.3-1.9-1.2-3.5-2-5.2-.4-.8-.7-1.7-.7-2.6 0-.9.3-1.7.8-2.5l1 2.8Z"
        fill="#10AA50"
      />
      <path
        d="M12.3 2.2c.7.9 1.1 2 1.1 3.2 0 1.1-.3 2.1-.7 3.1-.9 1.8-1.9 3.5-2.2 5.5-.2 1.2 0 2.4.5 3.5.4.8 1 1.5 1.4 2.3.3.5.5 1.1.4 1.7 0 .2 0 .3-.1.5 1.1-.6 1.7-1.7 1.8-2.9.1-1.1-.2-2.1-.7-3-.6-1.1-1.3-2.1-1.6-3.3-.4-1.4-.3-2.8.2-4.1.6-1.6 1.6-2.9 2.1-4.5.2-.5.2-1 .1-1.5-.4-.2-.8-.3-1.2-.5l-1.1-.5Z"
        fill="#B8C4C2"
      />
      <path
        d="M12.05 18.6c0 .9-.1 1.7-.35 2.5-.1.3-.15.6-.15.9 0 .2.05.4.15.55.35-.7.55-1.5.6-2.3.05-.55 0-1.1-.1-1.65-.05 0-.15 0-.15 0Z"
        fill="#00684A"
      />
    </svg>
  );
}

export function TypeScriptLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path
        d="M13.4 17.7v-1.35c.55.3 1.15.5 1.85.5.75 0 1.15-.25 1.15-.7 0-.4-.3-.6-1.15-.9l-.55-.2c-1.35-.45-2-1.15-2-2.35 0-1.25.95-2.2 2.45-2.2.8 0 1.5.2 2.1.5v1.3c-.5-.3-1.1-.5-1.75-.5-.65 0-1 .25-1 .65 0 .4.35.6 1.2.9l.5.18c1.5.5 2.15 1.2 2.15 2.4 0 1.4-1.05 2.3-2.65 2.3-.9 0-1.75-.25-2.3-.53Zm-5.55-.15h1.55V11.9h2.35V10.5H5.5v1.4h2.35v5.65Z"
        fill="#fff"
      />
    </svg>
  );
}

export function TailwindLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 6.4c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.95-1.65 3.15-1.35.69.17 1.18.67 1.72 1.22C13.26 10.8 14.2 11.7 16.5 11.7c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.69-.17-1.18-.67-1.72-1.22C15.24 7.3 14.3 6.4 12 6.4Zm-4.5 5.9c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.95-1.65 3.15-1.35.69.17 1.18.67 1.72 1.22.89.93 1.83 1.83 4.13 1.83 2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.69-.17-1.18-.67-1.72-1.22-.89-.93-1.83-1.83-4.13-1.83Z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function CloudLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.8 17.8h10.2A3.9 3.9 0 0 0 17.4 10a5.35 5.35 0 0 0-10.2.85A4.15 4.15 0 0 0 6.8 17.8Z"
        fill="#FF9900"
      />
      <path
        d="M7.6 15.1c1.5 1.05 3.15 1.6 4.9 1.6s3.4-.55 4.9-1.6"
        stroke="#232F3E"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FigmaLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8.5 2.5h3.5v5H8.5a2.5 2.5 0 0 1 0-5Z" fill="#F24E1E" />
      <path d="M12 2.5h3.5a2.5 2.5 0 0 1 0 5H12v-5Z" fill="#FF7262" />
      <path d="M8.5 9h3.5v5H8.5a2.5 2.5 0 0 1 0-5Z" fill="#A259FF" />
      <path d="M12 9h3.5a2.5 2.5 0 1 1 0 5H12V9Z" fill="#1ABCFE" />
      <path d="M8.5 15.5h3.5v5a2.5 2.5 0 1 1-3.5-2.5 2.5 2.5 0 0 1 0-2.5Z" fill="#0ACF83" />
    </svg>
  );
}

export function WhatsAppLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10.5" fill="#25D366" />
      <path
        d="M17.1 14.5c-.25-.12-1.45-.72-1.67-.8-.23-.09-.4-.12-.56.12-.17.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.24 3.74 1.7.74 2.18.74 2.96.63.48-.07 1.45-.59 1.65-1.17.2-.57.2-1.06.14-1.17-.06-.1-.23-.17-.48-.29Z"
        fill="#fff"
      />
    </svg>
  );
}

export function VercelLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 4.2 21 19.8H3L12 4.2Z" fill="#fff" />
    </svg>
  );
}
