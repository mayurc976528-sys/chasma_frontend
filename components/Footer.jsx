import Link from "next/link";
import { nav, site, waLink } from "@/lib/site";
import {
  GlassesIcon,
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  Pin,
} from "@/components/Icons";

const helpLinks = [
  { label: "About Us", href: "/about" },
  { label: "Shipping Info", href: "/contact" },
  { label: "Returns & Refunds", href: "/contact" },
  { label: "Privacy Policy", href: "/contact" },
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <GlassesIcon className="h-7 w-12 text-brand" />
            <span className="flex flex-col leading-none">
              <span className="text-base font-extrabold tracking-wide">
                CHASMA <span className="text-brand">EXPRESS</span>
              </span>
              <span className="mt-0.5 text-[10px] font-light tracking-wide text-white/60">
                {site.tagline}
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Chasma Express brings you a wide range of stylish eyewear at
            affordable prices. Chat with us on WhatsApp for orders and inquiries.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-0.5 hover:bg-brand"
                aria-label="social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block transition-all hover:translate-x-1 hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">Help</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            {helpLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-block transition-all hover:translate-x-1 hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">Contact Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-brand"
              >
                <Phone className="h-4 w-4 text-brand" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4 text-brand" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Pin className="h-4 w-4 text-brand" />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-center text-xs text-white/50">
          © {year} Chasma Express. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
