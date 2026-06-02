import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PopularPicks from "@/components/PopularPicks";
import TrustindexReviews from "@/components/TrustindexReviews";
import Faq from "@/components/Faq";
import StoreLocation from "@/components/StoreLocation";
import Reveal from "@/components/Reveal";
import { waLink } from "@/lib/site";
import {
  WhatsAppIcon,
  GlassesIcon,
  Tag,
  Shield,
  Sparkles,
  Truck,
  Headset,
} from "@/components/Icons";

const heroBadges = [
  { icon: Tag, label: "Affordable Prices" },
  { icon: Shield, label: "Quality Lenses" },
  { icon: Truck, label: "Fast Delivery" },
  { icon: Headset, label: "Friendly Support" },
];

const features = [
  {
    icon: Tag,
    title: "Affordable Prices",
    text: "Best eyewear at prices you'll love.",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    text: "High quality lenses with UV protection.",
  },
  {
    icon: Sparkles,
    title: "Trendy Designs",
    text: "Stylish frames for every personality.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Quick delivery to your doorstep.",
  },
  {
    icon: Headset,
    title: "Friendly Support",
    text: "We're here to help you on WhatsApp anytime.",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      {/* Background image (public/hero.png) already contains the model, the
          blue blob and the dotted pattern, so the section just overlays text. */}
      <section className="hero-bg relative overflow-hidden">
        <div className="container-x relative flex items-center md:min-h-[560px]">
          <div className="animate-fade-up py-12 md:max-w-[52%] md:py-20">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Premium Eyewear for Every You
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-navy sm:text-5xl md:text-6xl">
              Your Vision. <br />
              <span className="text-brand">Our Style.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
              Trendy spectacles, sunglasses &amp; computer glasses that match your
              style and fit your budget. Contact us on WhatsApp for orders and
              inquiries.
            </p>

            <div className="mt-7 flex gap-3">
              <Link
                href="/collection"
                className="btn-press inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand-dark sm:flex-none sm:px-6"
              >
                <GlassesIcon className="h-5 w-8" />
                Browse Collection
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 shadow-lg shadow-slate-200/50 hover:bg-slate-200 sm:flex-none sm:px-6"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-10 grid grid-cols-4 gap-2 sm:gap-4">
              {heroBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <Icon className="h-6 w-6 text-brand" />
                  <span className="text-[11px] font-medium leading-tight text-navy sm:text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* model image (mobile) — the top edge is masked to fade into the
            section so the model emerges as one continuous hero (no seam/break)
            instead of sitting in a separate block below the text. */}
        <div className="relative -mt-6 md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero.png"
            alt="Young man wearing stylish glasses"
            className="h-[260px] w-full object-cover object-right [mask-image:linear-gradient(to_bottom,transparent,#000_26%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_26%)] sm:h-[320px]"
          />
        </div>
      </section>

      {/* ===== Popular Picks + Fresh Styles ===== */}
      <PopularPicks />

      {/* ===== Why choose us ===== */}
      <section className="bg-white py-10 md:py-12">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose Chasma Express?"
            title="We Focus on What Matters"
          />
          <div className="mt-10 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-soft-200">
            {features.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                key={title}
                delay={i * 80}
                className="group px-6 text-center"
              >
                <Icon className="mx-auto h-8 w-8 text-brand transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
                <h3 className="mt-4 text-sm font-bold text-navy">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="bg-white py-10 md:py-12">
        <div className="container-x">
          <SectionHeading
            eyebrow="What Our Customers Say"
            title="Happy Customers"
          />
          <div className="mt-10">
            <TrustindexReviews />
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <Faq />

      {/* ===== Store location ===== */}
      <StoreLocation />
    </>
  );
}
