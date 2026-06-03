import { Mulish } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://chashmaexpres.in"),
  title: "Chasma Express | See Better. Look Better",
  description:
    "Premium eyewear for everyone — spectacles, sunglasses & computer glasses that match your style and your budget. Order easily on WhatsApp.",
  alternates: {
    canonical: "/",
  },
  // Google Search Console "HTML tag" verification.
  // Paste the content value Google gives you (the part inside content="...").
  verification: {
    google: "PASTE_GOOGLE_VERIFICATION_CODE_HERE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.variable}>
      <body className="flex min-h-screen flex-col bg-white text-navy antialiased">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
