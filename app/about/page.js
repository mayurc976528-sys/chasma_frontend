import Link from "next/link";
import Faq from "@/components/Faq";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { waLink } from "@/lib/site";
import {
  Shield,
  Sparkles,
  Headset,
  Tag,
  GlassesIcon,
  WhatsAppIcon,
} from "@/components/Icons";

export const metadata = {
  title: "About Us | Chasma Express",
};

const values = [
  {
    icon: Sparkles,
    title: "Our Vision",
    text: "To become the most loved eyewear destination — where great style, clear vision and fair prices come together for everyone.",
  },
  {
    icon: Shield,
    title: "Our Mission",
    text: "To deliver premium-quality, on-trend eyewear at honest prices, backed by friendly, personal support on every order.",
  },
];

const offerings = [
  {
    icon: GlassesIcon,
    title: "Spectacles",
    text: "Lightweight everyday frames that stay comfortable from morning to night.",
  },
  {
    icon: Sparkles,
    title: "Sunglasses",
    text: "UV-protected, head-turning styles for sunny days and road trips.",
  },
  {
    icon: Shield,
    title: "Computer Glasses",
    text: "Blue-light filtering lenses that keep your eyes fresh on screens.",
  },
  {
    icon: Tag,
    title: "Kids Glasses",
    text: "Durable, playful frames built for active little ones.",
  },
];

const pillars = [
  {
    icon: Shield,
    title: "Quality You Can Trust",
    text: "Every frame and lens is checked for durability, clarity and comfort before it reaches you.",
  },
  {
    icon: Sparkles,
    title: "Styles for Every Face",
    text: "From classic to bold, our curated range has the right fit for every face shape and personality.",
  },
  {
    icon: Headset,
    title: "Customer First Approach",
    text: "Friendly support on WhatsApp from your first question to after-sales care.",
  },
];

const stats = [
  { value: "1000+", label: "Happy Customers" },
  { value: "500+", label: "Styles Available" },
  { value: "98%", label: "Positive Feedback" },
  { value: "24/7", label: "WhatsApp Support" },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== Light hero (background photo: public/about us.png) ===== */}
      <section
        className="relative overflow-hidden bg-soft bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/about%20us.png')" }}
      >
        {/* white wash on the left so the text stays readable over the photo */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white from-10% via-white/40 via-40% to-transparent to-70%" />
        <div className="container-x relative flex min-h-[260px] items-center py-12 md:min-h-[340px] md:py-16">
          <div className="animate-fade-up">
            <span className="block h-1 w-10 rounded-full bg-brand" />
            <h1 className="mt-4 text-3xl font-extrabold text-navy md:text-5xl">
              About Us
            </h1>
            <nav className="mt-3 flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="transition-colors hover:text-brand">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand">About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-8 md:py-10">
        <div className="container-x grid items-stretch gap-8 md:grid-cols-2">
          <Reveal direction="left" className="h-full overflow-hidden rounded-3xl shadow-xl shadow-navy/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1556015048-4d3aa10df74c?auto=format&fit=crop&w=900&q=80"
              alt="Inside the Chasma Express eyewear store"
              className="h-64 min-h-full w-full object-cover"
            />
          </Reveal>

          <Reveal direction="right" delay={120}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy">
              Eyewear made simple, stylish &amp; affordable
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Chasma Express was founded with a simple vision — to make stylish,
              high-quality eyewear affordable and accessible for everyone. We
              believe the right frame can lift your confidence, sharpen your look
              and most importantly, help you see the world clearly.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              From everyday spectacles to trendy sunglasses and blue-light
              computer glasses, we hand-pick each design and bring it to you at a
              price that makes sense — all just a WhatsApp message away.
            </p>

            <div className="mt-6 space-y-3">
              {pillars.map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-navy">{title}</h3>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-8 md:py-10">
        <div className="container-x">
          <SectionHeading eyebrow="What Drives Us" title="Mission & Vision" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                key={title}
                delay={i * 100}
                className="rounded-3xl border border-soft-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-navy/5 md:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white pb-8 pt-2 md:pb-10 md:pt-4">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-y-8 border-t border-soft-200 pt-8 text-center md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} direction="scale" delay={i * 90}>
                <p className="text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-slate-500">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-white py-8 md:py-10">
        <div className="container-x">
          <SectionHeading eyebrow="Our Range" title="What We Offer" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                key={title}
                delay={(i % 4) * 80}
                className="group rounded-3xl border border-soft-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-navy/5"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-base font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq />

      {/* Closing CTA */}
      <section className="bg-white py-8 md:py-10">
        <div className="container-x">
          <Reveal className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-navy p-8 text-center text-white md:flex-row md:p-10 md:text-left">
            {/* dotted pattern, right side */}
            <div
              className="pointer-events-none absolute bottom-0 right-0 top-0 w-48 opacity-25"
              style={{
                backgroundImage: "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
              }}
            />
            <div className="relative">
              <h3 className="text-xl font-bold md:text-2xl">
                Ready to find your perfect pair?
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Browse the collection or message us on WhatsApp — we&apos;ll help
                you pick frames you&apos;ll love.
              </p>
            </div>
            <div className="relative flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href="/collection"
                className="btn-press inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
              >
                <GlassesIcon className="h-5 w-8" />
                Browse Collection
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
