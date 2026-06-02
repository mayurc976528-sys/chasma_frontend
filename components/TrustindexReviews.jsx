"use client";

// Trustindex self-injecting reviews widget. The loader.js inserts the widget
// immediately after its own <script> node, so we append the script into this
// container ref to guarantee the widget renders inside the "Happy Customers"
// section (next/script's afterInteractive strategy would relocate the tag).
import { useEffect, useRef } from "react";

const LOADER_SRC =
  "https://cdn.trustindex.io/loader.js?db5f092734cc320f3e661ba77ce";

export default function TrustindexReviews() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || container.dataset.loaded) return;
    container.dataset.loaded = "true";

    const script = document.createElement("script");
    script.src = LOADER_SRC;
    script.defer = true;
    script.async = true;
    container.appendChild(script);
  }, []);

  return <div ref={ref} />;
}
