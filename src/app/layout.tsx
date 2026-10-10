import type { Metadata, Viewport } from "next";
import { hero, site } from "@/data/content";
import "./globals.css";

const description = hero.intro;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description,
  authors: [{ name: site.name, url: site.url }],
  keywords: [
    "Max Shapira",
    "Software Developer",
    "Full-stack Developer",
    "Flutter Developer",
    "Mobile Developer",
    "Android",
    "iOS",
    ".NET",
    "Israel",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description,
    locale: "en_US",
    images: [{ url: site.photo, width: 800, height: 800, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: `${site.name} — ${site.role}`,
    description,
    images: [site.photo],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#161512",
  colorScheme: "dark light",
};

// Runs before first paint: dark unless the visitor previously chose light. Also enables scroll-reveal.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('theme')==='light'){d.dataset.theme='light';return}}catch(e){}d.dataset.theme='dark'})()`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  image: `${site.url}${site.photo}`,
  sameAs: Object.values(site.links),
  knowsLanguage: ["he", "ru", "en"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sami Shamoon College of Engineering",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&family=Shippori+Mincho:wght@500;700&family=Zen+Kaku+Gothic+New:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
