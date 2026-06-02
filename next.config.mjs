/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a fully static site (plain HTML/CSS/JS) into `out/`.
  // Every page here is static, so this needs almost no memory to serve
  // and can be hosted on any static host (Netlify, Vercel, GitHub Pages, etc.).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
