import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next"

const satoshi = localFont({
  src: [
    {
      path: "../../public/font/Satoshi-Variable.ttf",
      style: "normal",
    },
    {
      path: "../../public/font/Satoshi-VariableItalic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const baseUrl = "https://www.aulettaadvisory.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Auletta Advisory | Strategic M&A Advisory, Venture Capital & AI Solutions",
    template: "%s | Auletta Advisory",
  },
  description:
    "Auletta Advisory is a strategic powerhouse specializing in M&A advisory, venture capital investments, and AI-driven solutions for regulated industries. Based in Rome & Milan, Italy.",
  keywords: [
    "M&A advisory",
    "mergers and acquisitions",
    "venture capital",
    "angel investing",
    "AI solutions",
    "machine learning",
    "financial advisory",
    "strategic consulting",
    "startup investing",
    "private equity",
    "Italy",
    "Rome",
    "Milan",
    "fintech",
    "healthcare AI",
    "regulatory compliance",
    "due diligence",
    "corporate finance",
    "investment banking",
    "business strategy",
  ],
  authors: [{ name: "Auletta Advisory Srl", url: baseUrl }],
  creator: "Auletta Advisory Srl",
  publisher: "Auletta Advisory Srl",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      "en": baseUrl,
      "it": `${baseUrl}/it`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "it_IT",
    url: baseUrl,
    siteName: "Auletta Advisory",
    title: "Auletta Advisory | Strategic M&A Advisory, Venture Capital & AI Solutions",
    description:
      "Strategic powerhouse specializing in M&A advisory, venture capital investments, and AI-driven solutions for regulated industries. Rome & Milan, Italy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auletta Advisory | Strategic M&A Advisory, Venture Capital & AI Solutions",
    description:
      "Strategic powerhouse specializing in M&A advisory, venture capital investments, and AI-driven solutions for regulated industries.",
    creator: "@aulettaadvisory",
    site: "@aulettaadvisory",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Business",
  classification: "Financial Services, Advisory, Technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: "Auletta Advisory",
  legalName: "Auletta Advisory Srl",
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${baseUrl}/opengraph-image`,
  description:
    "Strategic powerhouse specializing in M&A advisory, venture capital investments, and AI-driven solutions for regulated industries.",
  email: "info@aulettaadvisory.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rome",
    addressRegion: "Lazio",
    addressCountry: "IT",
  },
  sameAs: [
    "https://www.linkedin.com/company/auletta-advisory",
    "https://www.linkedin.com/in/carmine-auletta-965170",
  ],
  foundingDate: "2020",
  founders: [
    {
      "@type": "Person",
      name: "Carmine Auletta",
      url: "https://www.linkedin.com/in/carmine-auletta-965170",
    },
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 41.9028,
      longitude: 12.4964,
    },
    geoRadius: "5000",
  },
  knowsAbout: [
    "Mergers and Acquisitions",
    "Venture Capital",
    "Angel Investing",
    "Artificial Intelligence",
    "Machine Learning",
    "Financial Advisory",
    "Strategic Consulting",
    "Regulatory Compliance",
  ],
  slogan: "Strategic Advisory at the Intersection of Business, Compliance, and AI Innovation",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  url: baseUrl,
  name: "Auletta Advisory",
  description:
    "Strategic M&A advisory, venture capital investments, and AI-driven solutions for regulated industries.",
  publisher: {
    "@id": `${baseUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${baseUrl}/#service`,
  name: "Auletta Advisory",
  image: `${baseUrl}/opengraph-image`,
  url: baseUrl,
  telephone: "",
  email: "info@aulettaadvisory.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Rome",
    addressRegion: "Lazio",
    postalCode: "",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.9028,
    longitude: 12.4964,
  },
  priceRange: "$$$",
  serviceType: [
    "M&A Advisory",
    "Venture Capital",
    "Angel Investing",
    "AI Solutions",
    "Strategic Consulting",
  ],
  areaServed: [
    {
      "@type": "Country",
      name: "Italy",
    },
    {
      "@type": "Country",
      name: "European Union",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Advisory Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "M&A Advisory",
          description:
            "Strategic mergers and acquisitions advisory for companies and investors in regulated industries.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Venture Capital & Angel Investing",
          description:
            "Early-stage investments in innovative startups across fintech, healthcare, and AI sectors.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Solutions",
          description:
            "Custom AI and machine learning solutions for financial services and regulated industries.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={baseUrl} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
      </head>
      <body
        className={`${satoshi.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
