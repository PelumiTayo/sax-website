import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site, socials } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.artistName}, ${site.role}`,
    template: `%s · ${site.artistName}`,
  },
  description: `${site.artistName} (${site.realName}) is a Lagos-born, Seattle-based saxophonist rooted in Afrobeats, available for weddings, events, live shows, collaborations and studio sessions. ${site.tagline}`,
  keywords: [
    site.artistName,
    site.realName,
    "saxophonist",
    "Seattle saxophonist",
    "Nigerian saxophonist",
    "Afrobeats saxophonist",
    "Afrobeats saxophonist Seattle",
    "live saxophonist",
    "saxophonist for events",
    "wedding saxophonist",
  ],
  authors: [{ name: site.artistName }],
  openGraph: {
    type: "website",
    siteName: site.artistName,
    title: `${site.artistName}, ${site.role}`,
    description: site.tagline,
    url: site.url,
    // PLACEHOLDER: add /public/og.jpg (1200×630), a strong landscape portrait
    // with room for a small name overlay, for rich social sharing previews.
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.artistName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.artistName}, ${site.role}`,
    description: site.tagline,
  },
  alternates: { canonical: "/" },
};

function PersonJsonLd() {
  const sameAs = socials.map((s) => s.href).filter(Boolean);
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.realName,
    alternateName: site.artistName,
    jobTitle: "Saxophonist",
    description: site.tagline,
    url: site.url,
    address: { "@type": "PostalAddress", addressLocality: site.location },
    ...(sameAs.length ? { sameAs } : {}),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        <PersonJsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-espresso focus:px-5 focus:py-2 focus:text-sm focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
