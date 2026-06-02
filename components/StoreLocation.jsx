// "Visit Our Store" — shop photo + embedded map and directions.
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site, mapsLink } from "@/lib/site";
import { Pin, Clock } from "@/components/Icons";

export default function StoreLocation() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="container-x">
        <SectionHeading eyebrow="Find Us" title="Visit Our Store" />

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          {/* Shop photo */}
          <Reveal direction="left" className="h-full overflow-hidden rounded-3xl border border-soft-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1556015048-4d3aa10df74c?auto=format&fit=crop&w=900&q=80"
              alt={`${site.name} store`}
              className="h-64 w-full object-cover md:h-full"
            />
          </Reveal>

          {/* Map + address */}
          <Reveal direction="right" delay={120} className="flex h-full flex-col overflow-hidden rounded-3xl border border-soft-200">
            <iframe
              title={`${site.name} location map`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                site.mapsQuery
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[16rem] w-full flex-[3] border-0"
              allowFullScreen
            />
            <div className="flex flex-[2] flex-col gap-4 p-6">
              <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-soft-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
                <Pin className="h-3.5 w-3.5 text-brand" />
                {site.name} — {site.storeName}
              </span>

              <h3 className="text-xl font-semibold text-navy md:text-2xl">
                {site.storeName}
              </h3>

              <p className="text-sm leading-relaxed text-brand">
                {site.address}
              </p>

              <p className="flex items-center gap-2 text-sm text-slate-500">
                <Clock className="h-4 w-4 text-brand" />
                {site.hours}
              </p>

              <a
                href={mapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy/90"
              >
                <Pin className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
