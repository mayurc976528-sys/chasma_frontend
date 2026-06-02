// Centered "EYEBROW LABEL" + big heading with a short trailing dash,
// matching the "Popular Picks —" style used across the design.
import Reveal from "@/components/Reveal";

export default function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <Reveal className="text-center">
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-2 flex items-center justify-center gap-3 text-2xl font-extrabold md:text-3xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
        <span className="h-[3px] w-8 rounded-full bg-brand" />
      </h2>
    </Reveal>
  );
}
