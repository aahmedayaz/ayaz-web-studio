import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-200 flex h-14.5 w-14.5 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_26px_rgba(37,211,102,0.45)]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
