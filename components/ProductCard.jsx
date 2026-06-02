"use client";

import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

export default function ProductCard({ product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-soft-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/products/placeholder.svg";
          }}
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-4 text-sm font-semibold text-navy">{product.name}</h3>

        <a
          href={waLink(`Hi Chasma Express, I'm interested in the ${product.name}. Could you share the price and details?`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press mt-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-100 px-3 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-200"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
