import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

// Thin promo strip pinned above the navbar.
export default function TopBar() {
  return (
    <div className="bg-navy text-white">
      <div className="container-x flex h-9 items-center justify-center gap-2 text-center text-[11px] font-medium sm:text-xs">
        <span className="hidden sm:inline">Stylish Eyewear at Affordable Prices</span>
        <span className="hidden text-white/50 sm:inline">|</span>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold underline-offset-2 hover:underline"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          Chat with us on WhatsApp
        </a>
      </div>
    </div>
  );
}
