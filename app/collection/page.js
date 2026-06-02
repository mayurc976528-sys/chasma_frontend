"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products, categories } from "@/lib/products";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

export default function CollectionPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <>
      {/* ===== Light hero (background photo: public/collection.jpg) ===== */}
      <section
        className="relative overflow-hidden bg-soft bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/collection.png')" }}
      >
        {/* white wash on the left so the text stays readable over the photo */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white from-10% via-white/40 via-40% to-transparent to-70%" />
        <div className="container-x relative flex min-h-[260px] items-center py-12 md:min-h-[340px] md:py-16">
          <div className="animate-fade-up">
            <span className="block h-1 w-10 rounded-full bg-brand" />
            <h1 className="mt-4 text-3xl font-extrabold text-navy md:text-5xl">
              Our Collection
            </h1>
            <nav className="mt-3 flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="transition-colors hover:text-brand">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand">Collection</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-12">
        <div className="container-x">
          {/* Filter tabs — wrap and center so they fit any mobile width, left-aligned on larger screens */}
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start sm:gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition-colors sm:px-5 sm:py-2 sm:text-sm ${
                  active === cat.key
                    ? "bg-brand text-white"
                    : "border border-soft-200 bg-white text-navy hover:border-brand hover:text-brand"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, i) => (
              <Reveal key={product.id} delay={(i % 3) * 90}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-slate-500">
              No products in this category yet — check back soon!
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-10 md:pb-12">
        <div className="container-x">
          <Reveal direction="scale" className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-navy p-8 text-center text-white md:flex-row md:p-10 md:text-left">
            {/* dotted pattern, right side */}
            <div
              className="pointer-events-none absolute bottom-0 right-0 top-0 w-48 opacity-30"
              style={{
                backgroundImage: "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
              }}
            />
            <div className="relative">
              <h3 className="text-xl font-bold md:text-2xl">
                Didn&apos;t find what you like?
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Explore the latest eyewear designs that combine comfort &amp;
                style — message us and we&apos;ll help you find the perfect pair.
              </p>
            </div>
            <a
              href={waLink("Hi Chasma Express, I couldn't find what I was looking for in your collection. Can you help?")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
