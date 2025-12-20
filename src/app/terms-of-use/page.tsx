import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Auletta Advisory website. Read our terms and conditions governing the use of our website and services.",
  keywords: [
    "terms of use",
    "terms and conditions",
    "legal terms",
    "website terms",
    "Auletta Advisory terms",
  ],
  openGraph: {
    title: "Terms of Use | Auletta Advisory",
    description:
      "Terms of Use for Auletta Advisory website and services.",
    url: "https://www.aulettaadvisory.com/terms-of-use",
    type: "website",
  },
  alternates: {
    canonical: "https://www.aulettaadvisory.com/terms-of-use",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
        <p className="text-muted-foreground mb-12">Effective Date: December 20, 2025</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <p>
            Welcome to the Auletta Advisory Srl website (the &ldquo;Site&rdquo;). These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the Site, including any content, functionality, and services offered on or through the Site.
          </p>

          <p>
            By accessing or using the Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use the Site.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. No Professional Advice or Relationship</h2>
            <p>
              The information provided on this Site is for general informational purposes only. Accessing this Site or communicating with Auletta Advisory Srl through the Site does not create an advisory, fiduciary, or consultant-client relationship.
            </p>
            <p>
              Strategic M&A, Compliance, or AI/ML advisory services are only provided under a separate, formal, and written engagement agreement. The content on this Site should not be used as a substitute for consultation with professional advisors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site and its entire contents, features, and functionality—including but not limited to all information, software, proprietary frameworks, AI/ML models, text, displays, images, video, and audio—are owned by Auletta Advisory Srl, its licensors, or other providers of such material.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Trademarks:</strong> The name &ldquo;Auletta Advisory,&rdquo; the company logo, and all related names and logos are trademarks of Auletta Advisory Srl. You must not use such marks without prior written permission.
              </li>
              <li>
                <strong>Limited License:</strong> You are granted a non-exclusive, non-transferable, revocable license to access and use the Site for internal, non-commercial purposes only.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Restrictions on Use</h2>
            <p>You may use the Site only for lawful purposes. You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Scraping & AI Training:</strong> Use any robot, spider, or other automated device to access the Site for any purpose, including monitoring or copying material. Specifically, you may not use Site content to develop, train, or optimize any machine learning or artificial intelligence models without express written consent.
              </li>
              <li>
                <strong>Reverse Engineering:</strong> Decompile, reverse engineer, or attempt to derive the source code of any proprietary tools or AI/ML intelligence deployed on the Site.
              </li>
              <li>
                <strong>Regulatory Violation:</strong> Use the Site in any way that violates applicable laws or regulations, particularly those governing financial services, healthcare, or data privacy.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Content</h2>
            <p>
              If you provide any feedback, data, or suggestions via the Site, you grant Auletta Advisory Srl a worldwide, perpetual, irrevocable, royalty-free license to use and incorporate such information into our services or frameworks without obligation to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Disclaimer of Warranties</h2>
            <p>
              The Site is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis. Auletta Advisory Srl makes no warranties, express or implied, regarding the accuracy, completeness, or security of the Site.
            </p>
            <p>
              In regulated sectors (Finance, Healthcare, etc.), regulatory frameworks are subject to frequent change. We do not warrant that the information on this Site reflects the most current legal developments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event will Auletta Advisory Srl, its affiliates, or their licensors, employees, or directors be liable for damages of any kind arising out of or in connection with your use of the Site, including any direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Auletta Advisory Srl and its affiliates from and against any claims, liabilities, damages, or expenses arising out of your violation of these Terms or your use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law and Jurisdiction</h2>
            <p>
              All matters relating to the Site and these Terms shall be governed by and construed in accordance with the laws of Italy, without giving effect to any choice or conflict of law provision. Any legal suit, action, or proceeding shall be instituted exclusively in the courts of Rome, Italy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to the Terms</h2>
            <p>
              We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
            <p>To ask questions or comment about these Terms, contact us at:</p>
            <p>
              <strong>Auletta Advisory Srl</strong><br />
              <a href="mailto:info@aulettaadvisory.com" className="text-primary hover:underline">
                info@aulettaadvisory.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
