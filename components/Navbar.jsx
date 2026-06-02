"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site, waLink } from "@/lib/site";
import {
  WhatsAppIcon,
  Home,
  GlassesIcon,
  Sparkles,
  Phone,
  ArrowRight,
} from "@/components/Icons";

// Icon shown beside each item in the mobile dropdown.
const navIcons = {
  "/": Home,
  "/collection": GlassesIcon,
  "/about": Sparkles,
  "/contact": Phone,
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-sm">
      <div className="container-x flex h-16 items-center justify-between md:h-[76px]">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-wide text-navy">
              CHASMA <span className="text-brand">EXPRESS</span>
            </span>
            <span className="mt-0.5 text-[10px] font-light tracking-wide text-slate-400">
              {site.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative text-sm transition-colors hover:text-brand ${
                isActive(item.href)
                  ? "font-semibold text-navy"
                  : "font-medium text-slate-600"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-brand transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-navy md:hidden"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span className={`h-0.5 w-full bg-navy transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-0.5 w-full bg-navy transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-navy transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu — smooth animated dropdown (height + fade), with the
          links staggering in one after another for a polished feel. */}
      <div
        className={`overflow-hidden bg-white transition-[max-height,opacity,box-shadow] duration-300 ease-out md:hidden ${
          open
            ? "max-h-96 border-t border-slate-100 opacity-100 shadow-lg shadow-navy/5"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-3">
          {nav.map((item, i) => {
            const Icon = navIcons[item.href];
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 55 + 70}ms` : "0ms" }}
                className={`group flex transform items-center gap-3 rounded-2xl px-3 py-2.5 transition-all duration-300 ${
                  open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                } ${active ? "bg-brand/5" : "hover:bg-slate-50"}`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    active
                      ? "bg-brand text-white"
                      : "bg-slate-100 text-slate-500 group-hover:bg-white"
                  }`}
                >
                  {Icon && <Icon className="h-[18px] w-[18px]" />}
                </span>
                <span
                  className={`flex-1 text-sm ${
                    active ? "font-semibold text-navy" : "font-medium text-slate-700"
                  }`}
                >
                  {item.label}
                </span>
                <ArrowRight
                  className={`h-4 w-4 transition-all ${
                    active
                      ? "text-brand"
                      : "-translate-x-1 text-slate-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: open ? `${nav.length * 55 + 70}ms` : "0ms" }}
            className={`btn-press mt-2 inline-flex transform items-center justify-center gap-2 rounded-2xl bg-brand px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark ${
              open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
