import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { eventData } from "@/data/event";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: eventData.seo.title,
  description: eventData.seo.description,
  metadataBase: new URL(eventData.seo.canonical),
  openGraph: {
    title: eventData.seo.title,
    description: eventData.seo.description,
    type: "website",
    locale: "fr_FR",
    url: eventData.seo.canonical,
    siteName: "CGEL",
  },
  twitter: {
    card: "summary_large_image",
    title: eventData.seo.title,
    description: eventData.seo.description,
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-[#0F1D3A] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#023DA5] focus:text-white focus:px-4 focus:py-2"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="main" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
