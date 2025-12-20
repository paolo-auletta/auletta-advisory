import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Auletta Advisory's Privacy Policy. Learn how we collect, use, and protect your personal information in compliance with GDPR and applicable data protection laws.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "personal information",
    "Auletta Advisory privacy",
  ],
  openGraph: {
    title: "Privacy Policy | Auletta Advisory",
    description:
      "Learn how Auletta Advisory collects, uses, and protects your personal information.",
    url: "https://www.aulettaadvisory.com/privacy-policy",
    type: "website",
  },
  alternates: {
    canonical: "https://www.aulettaadvisory.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last Updated: December 20, 2025</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <p>
            Auletta Advisory Srl (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy and personal information. As a strategic powerhouse operating at the vital intersection of Business Strategy, Compliance, and AI-driven innovation, we understand that data integrity and trust are the foundations of our relationship with clients, partners, and investors.
          </p>

          <p>
            This Privacy Statement applies to personal information you provide or that we collect when you access and use our website, subscribe to our insights, or engage with our advisory and venture-building services (collectively, the &ldquo;Services&rdquo;).
          </p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Personal Information We Collect</h2>
            <p>
              We collect information that identifies you or relates to you as an individual (&ldquo;Personal Information&rdquo;) through various touchpoints:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Advisory & Professional Engagements:</strong> Names, professional addresses, email addresses, phone numbers, and employment details (company, job title) collected during M&A mandates, venture-building activities, or investment inquiries.
              </li>
              <li>
                <strong>Digital Interaction & Insights:</strong> Information collected when you subscribe to our AI/ML research, strategic newsletters, or white papers.
              </li>
              <li>
                <strong>Events & Roundtables:</strong> Information provided during registration for conferences, webinars, or industry-specific roundtables focused on regulated sectors.
              </li>
              <li>
                <strong>Cookies & Analytics:</strong> Technical data including IP addresses, browser types, and usage patterns collected via cookies to optimize our digital presence and ensure our market intelligence is delivered effectively.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Personal Information</h2>
            <p>
              Auletta Advisory processes your information to deliver high-stakes strategic value and maintain regulatory compliance:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Strategic Advisory & Execution:</strong> To manage and execute M&A advisory, venture building, and early-stage investment activities.
              </li>
              <li>
                <strong>Technical Innovation:</strong> To refine our AI/ML models and ensure the &ldquo;scalable intelligence&rdquo; we deploy remains relevant to regulated sectors.
              </li>
              <li>
                <strong>Compliance &amp; Risk Management:</strong> To perform due diligence, prevent fraud, and ensure all operations adhere to the strict regulatory frameworks of the jurisdictions in which we operate.
              </li>
              <li>
                <strong>Institutional Outreach:</strong> To inform you about market shifts, regulatory updates, and proprietary venture opportunities that align with your professional interests.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Legal Basis for Processing</h2>
            <p>
              In accordance with the EU General Data Protection Regulation (GDPR), we process data based on:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contractual Necessity:</strong> To perform our advisory services.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To improve our AI-driven strategies and provide institutional-grade insights.
              </li>
              <li>
                <strong>Legal Obligation:</strong> To comply with anti-money laundering (AML) and &ldquo;Know Your Customer&rdquo; (KYC) requirements in regulated sectors.
              </li>
              <li>
                <strong>Consent:</strong> Where you have explicitly opted-in to receive our strategic communications.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclosure of Personal Information</h2>
            <p>
              We do not sell your personal information. We may disclose your data to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Professional Service Providers:</strong> Third-party vendors supporting our technical AI infrastructure, IT security, and administrative functions.
              </li>
              <li>
                <strong>Transaction Partners:</strong> In the context of M&A or Venture Building, data may be shared with co-investors, top-tier PE funds, or regulatory bodies, subject to strict confidentiality agreements.
              </li>
              <li>
                <strong>Legal Authorities:</strong> When mandated by law, court order, or to protect the &ldquo;Audit-Ready&rdquo; integrity of our firm and our clients.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. International Data Transfers</h2>
            <p>
              Auletta Advisory operates globally. Your information may be transferred to, and processed in, countries outside the European Economic Area (EEA). We ensure these transfers are protected by Standard Contractual Clauses (SCCs) or other legally recognized safeguards to maintain a level of protection equivalent to that of the GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you have specific rights regarding your Personal Information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Access &amp; Portability:</strong> Request a copy of the data we hold about you in a structured format.
              </li>
              <li>
                <strong>Correction &amp; Erasure:</strong> Request the rectification of inaccurate data or the deletion of your information (&ldquo;Right to be Forgotten&rdquo;).
              </li>
              <li>
                <strong>Objection &amp; Restriction:</strong> Object to processing based on legitimate interests or request that we restrict how we use your data.
              </li>
              <li>
                <strong>Withdrawal of Consent:</strong> Revoke your consent for marketing communications at any time.
              </li>
            </ul>
            <p>
              To exercise these rights, please contact our Data Protection Office at:{" "}
              <a href="mailto:privacy@aulettaadvisory.com" className="text-primary hover:underline">
                privacy@aulettaadvisory.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Security</h2>
            <p>
              We implement &ldquo;Compliance-by-Design&rdquo; technical and organizational measures to protect your data from unauthorized access, loss, or alteration. Our systems are engineered to meet the exacting security standards required for high-stakes finance and healthcare data environments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Links to Third-Party Sites</h2>
            <p>
              Our website may contain links to external sites (e.g., portfolio companies, PE funds, or regulatory portals). Auletta Advisory is not responsible for the privacy practices of these external entities. We encourage you to review their policies independently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p>
              For questions regarding this Privacy Policy or our data practices, please contact:
            </p>
            <p>
              <strong>Auletta Advisory Srl</strong><br />
              <a href="mailto:privacy@aulettaadvisory.com" className="text-primary hover:underline">
                privacy@aulettaadvisory.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
