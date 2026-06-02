"use client";

import { useState } from "react";
import Link from "next/link";
import { site, mapsLink, waLink } from "@/lib/site";
import { Mail, Pin, Instagram, Clock, WhatsAppIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Faq from "@/components/Faq";

const contactItems = [
  { icon: WhatsAppIcon, label: "Phone / WhatsApp", value: site.phoneDisplay, href: waLink() },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    icon: Instagram,
    label: "Instagram",
    value: site.instagram,
    href: `https://instagram.com/${site.instagram.replace(/^@/, "")}`,
  },
  { icon: Pin, label: "Location", value: site.location, href: mapsLink() },
];

const storeCards = [
  {
    icon: Pin,
    title: "Visit Our Store",
    text: site.storeName,
    sub: site.address,
  },
  {
    icon: Clock,
    title: "Business Hours",
    text: site.hours,
    sub: "Open all week — walk in anytime during hours.",
  },
  {
    icon: WhatsAppIcon,
    title: "Quick Response",
    text: "Replies within minutes",
    sub: "Message us on WhatsApp for the fastest help.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Chasma Express!%0A%0AName: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* ===== Light hero (background photo) ===== */}
      <section
        className="relative overflow-hidden bg-soft bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/collection.png')" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white from-10% via-white/40 via-40% to-transparent to-70%" />
        <div className="container-x relative flex min-h-[260px] items-center py-12 md:min-h-[340px] md:py-16">
          <div className="animate-fade-up">
            <span className="block h-1 w-10 rounded-full bg-brand" />
            <h1 className="mt-4 text-3xl font-extrabold text-navy md:text-5xl">
              Contact Us
            </h1>
            <nav className="mt-3 flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="transition-colors hover:text-brand">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand">Contact</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 md:py-10">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          {/* Left — info */}
          <Reveal direction="left" className="flex flex-col">
            <h2 className="text-3xl font-extrabold text-navy">Let&apos;s Connect</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              Have a question or need help? Chat with us on WhatsApp — we&apos;re
              here to help!
            </p>

            <div className="mt-7 space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-soft-200 bg-white p-3.5 transition-all hover:border-brand/40 hover:shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      {label}
                    </p>
                    <p className="truncate text-sm font-semibold text-navy">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal direction="right" delay={120} className="rounded-3xl border border-soft-200 bg-white p-6 shadow-xl shadow-navy/5 md:p-8">
            <h3 className="text-xl font-bold text-navy">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your Name"
                className="w-full rounded-xl border border-soft-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
              />
              <input
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="Your Email Address"
                className="w-full rounded-xl border border-soft-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
              />
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Your Message"
                className="w-full resize-none rounded-xl border border-soft-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Send on WhatsApp
                <WhatsAppIcon className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Store details strip */}
      <section className="bg-white pb-8 md:pb-10">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {storeCards.map(({ icon: Icon, title, text, sub }, i) => (
            <Reveal
              key={title}
              delay={i * 90}
              className="rounded-2xl border border-soft-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-navy">{title}</h3>
              <p className="mt-1 text-sm font-semibold text-brand">{text}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{sub}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-8 md:pb-10">
        <div className="container-x">
          <SectionHeading eyebrow="Find Us Here" title="Our Location" />
          <Reveal className="relative mt-8 overflow-hidden rounded-3xl border border-soft-200">
            <iframe
              title="Chasma Express location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                site.mapsQuery
              )}&output=embed`}
              className="h-72 w-full md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={mapsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-navy/90"
            >
              <Pin className="h-4 w-4" />
              Open in Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <Faq />
    </>
  );
}
