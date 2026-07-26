export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.6-1.3l-.3-.2-3 .8.8-2.9-.2-.3C3.9 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7z" />
    </svg>
  );
}

export function CloudIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 18h10a4 4 0 000-8 5.5 5.5 0 00-10.5-1.8A4.5 4.5 0 007 18z" />
    </svg>
  );
}
