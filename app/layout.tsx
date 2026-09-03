import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { person, siteConfig } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${person.fullName}`,
  },
  description: siteConfig.description,
  authors: [{ name: person.fullName, url: siteConfig.url }],
  creator: person.fullName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: person.fullName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: person.fullName,
      url: siteConfig.url,
      image: `${siteConfig.url}${person.photo}`,
      email: `mailto:${person.email}`,
      description: person.summary,
      jobTitle: "Business Administration Student",
      knowsLanguage: ["Indonesian", "English", "Mandarin Chinese"],
      knowsAbout: [
        "Accounting",
        "Economics",
        "Finance",
        "Business Administration",
        "Financial Analysis",
      ],
      affiliation: [
        {
          "@type": "CollegeOrUniversity",
          name: "S.P. Jain School of Global Management",
        },
        {
          "@type": "Organization",
          name: "Cuanvestor Community",
        },
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "S.P. Jain School of Global Management",
        },
        {
          "@type": "EducationalOrganization",
          name: "SMA Little Sun Surabaya",
        },
      ],
      sameAs: [person.linkedin, person.instagram],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: `${person.fullName} — Official Website`,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en-US",
      about: { "@id": personId },
      author: { "@id": personId },
      publisher: { "@id": personId },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={structuredData} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
