"use client";

// Lightweight scroll-reveal wrapper. Fades + slides its children up the first
// time they enter the viewport (one-shot, via IntersectionObserver). Used to
// give sections a polished, professional entrance without any animation library.
import { useEffect, useRef, useState } from "react";

// Starting transform for each entrance direction. The shown state always resets
// every transform to identity, so these only describe where the element begins.
const FROM = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "-translate-x-10",
  right: "translate-x-10",
  scale: "scale-95",
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : `${FROM[direction] || FROM.up} opacity-0`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
