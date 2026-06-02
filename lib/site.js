// Central site configuration. Update the WhatsApp number / contact details here
// and they propagate across every page and "Order on WhatsApp" button.

export const site = {
  name: "Chasma Express",
  tagline: "See Better. Look Better",
  // Use full international format without "+" or spaces for wa.me links.
  whatsappNumber: "919765285723",
  phoneDisplay: "+91 97652 85723",
  email: "chasmaexpress@gmail.com",
  instagram: "@chasma.express",
  location: "Pune, Maharashtra",
  storeName: "Shop no 11, Eiffel Square",
  address: "Ground Floor, Tilak Road, Perugate, Sadashiv Peth, Pune, Maharashtra — 411030",
  hours: "Mon – Sun · 10:00 AM – 8:00 PM",
  // Exact store coordinates (used to center the embedded map precisely).
  mapsQuery: "18.509113,73.8490479",
  // Canonical Google Maps place link for the store ("Open in Google Maps").
  mapsUrl:
    "https://www.google.com/maps/place/Chashma+Express/@18.5091181,73.846473,17z/data=!3m2!4b1!5s0x3bc2c07463c1512f:0x9add08d23035937d!4m6!3m5!1s0x3bc2c0739e49fc17:0x9d93657cd387332e!8m2!3d18.509113!4d73.8490479!16s%2Fg%2F11t6s9sydv",
};

// Google Maps "Get Directions" link — opens the store's place page.
export function mapsLink() {
  return site.mapsUrl;
}

// Build a WhatsApp deep link with a pre-filled message.
export function waLink(message) {
  const text = encodeURIComponent(message || "Hi Chasma Express, I'd like to know more about your eyewear.");
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export const nav = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "/collection" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
