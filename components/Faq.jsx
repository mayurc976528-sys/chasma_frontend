// Frequently Asked Questions — native <details> accordion (no client JS).
// The chevron rotates on open via the `group-open` Tailwind variant.
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ChevronDown } from "@/components/Icons";

const faqs = [
  {
    q: "How do I place an order?",
    a: "Browse our collection, then tap “Order on WhatsApp” on any product. It opens a chat with the item details pre-filled — just send it and we'll guide you through the rest.",
  },
  {
    q: "What are the delivery charges and timelines?",
    a: "We offer quick and reliable delivery right to your doorstep. Charges and timelines depend on your location — message us on WhatsApp and we'll share the exact details for your area.",
  },
  {
    q: "Are the lenses good quality?",
    a: "Yes. All our frames come with high-quality lenses, including UV protection, built to last for years.",
  },
  {
    q: "Can I get prescription (power) glasses?",
    a: "Absolutely. Share your prescription with us on WhatsApp and we'll fit the right lenses into your chosen frame.",
  },
  {
    q: "What is your return or exchange policy?",
    a: "If something isn't right with your order, reach out on WhatsApp within a reasonable time and we'll help you with a return or exchange.",
  },
];

export default function Faq() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="container-x">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map(({ q, a }, i) => (
            <Reveal key={q} delay={i * 70}>
              <details
                className="group rounded-2xl border border-soft-200 bg-white px-5 py-4 transition-colors hover:border-brand/40 open:border-brand/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy md:text-base">
                  {q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
