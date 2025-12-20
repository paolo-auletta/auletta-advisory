import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Auletta Advisory for M&A advisory, venture capital investments, or AI solutions. We're based in Rome & Milan, Italy and serve clients across Europe.",
  keywords: [
    "contact Auletta Advisory",
    "M&A advisory contact",
    "venture capital inquiry",
    "AI solutions consultation",
    "business advisory Italy",
    "strategic consulting contact",
  ],
  openGraph: {
    title: "Contact Us | Auletta Advisory",
    description:
      "Get in touch with Auletta Advisory for M&A advisory, venture capital investments, or AI solutions.",
    url: "https://www.aulettaadvisory.com/contact",
    type: "website",
  },
  twitter: {
    title: "Contact Us | Auletta Advisory",
    description:
      "Get in touch with Auletta Advisory for M&A advisory, venture capital investments, or AI solutions.",
  },
  alternates: {
    canonical: "https://www.aulettaadvisory.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
