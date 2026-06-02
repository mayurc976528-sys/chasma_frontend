import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

// Persistent floating "Chat on WhatsApp" action shown bottom-right on every page.
// Expands to reveal a label on hover for a polished, app-like feel.
export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 items-center gap-0 overflow-hidden rounded-full bg-whatsapp pl-[14px] pr-[14px] text-white shadow-lg shadow-whatsapp/40 transition-all duration-300 hover:pr-6 hover:shadow-xl hover:shadow-whatsapp/50"
    >
      <span className="absolute left-0 top-0 inline-flex h-14 w-14 animate-ping rounded-full bg-whatsapp/40" />
      <WhatsAppIcon className="relative h-7 w-7 shrink-0" />
      <span className="relative max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[140px] group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
