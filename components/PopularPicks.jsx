// Self-contained "Popular Picks" + "Fresh Styles" section, matching the
// reference design exactly (CE product codes, fixed prices, glasses-icon CTA).
// Drop <PopularPicks /> anywhere — it carries its own data and styling.
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { GlassesIcon } from "@/components/Icons";
import { popularPicks as picks } from "@/lib/products";

// Banner image — lifestyle sunglasses shot.
const bannerImage =
  "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80";

export default function PopularPicks() {
  return (
    <>
      {/* ===== Popular Picks ===== */}
      <section className="bg-white py-10 md:py-12">
        <div className="container-x">
          <SectionHeading eyebrow="Featured Collection" title="Popular Picks" />
          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {picks.map((product, i) => (
              <Reveal key={product.id} delay={(i % 3) * 90}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Fresh Styles banner ===== */}
      <section className="bg-white py-10 md:py-12">
        <div className="container-x">
          <Reveal className="grid items-center gap-8 overflow-hidden rounded-3xl bg-navy p-6 text-white md:grid-cols-2 md:p-10">
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bannerImage}
                alt="Stylish sunglasses"
                className="h-64 w-full object-cover md:h-80"
              />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                New Arrivals
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                Fresh Styles. <br /> Better Vision.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                Explore the latest eyewear designs that combine comfort, quality
                and style.
              </p>
              <Link
                href="/collection"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                <GlassesIcon className="h-5 w-8" />
                View All Collection
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
