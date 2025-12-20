import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Market Anomaly Detection Case Study | AI Solutions",
  description:
    "Discover how Auletta Advisory built an LSTM Autoencoder with Active Learning to detect market anomalies with 90% F1 score and 99% recall. A deep dive into financial AI and machine learning.",
  keywords: [
    "market anomaly detection",
    "LSTM autoencoder",
    "active learning",
    "financial AI",
    "machine learning finance",
    "anomaly detection",
    "risk management AI",
    "market instability detection",
    "financial machine learning",
    "AI case study",
    "quantitative finance",
  ],
  openGraph: {
    title: "Market Anomaly Detection Case Study | Auletta Advisory",
    description:
      "LSTM Autoencoder with Active Learning achieving 90% F1 score for detecting market anomalies across 43 financial indicators.",
    url: "https://www.aulettaadvisory.com/case-studies/market-anomaly-detection",
    type: "article",
    images: [
      {
        url: "/ai-solutions/cover.png",
        width: 1200,
        height: 630,
        alt: "Market Anomaly Detection System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Anomaly Detection Case Study | Auletta Advisory",
    description:
      "LSTM Autoencoder with Active Learning achieving 90% F1 score for detecting market anomalies.",
    images: ["/ai-solutions/cover.png"],
  },
  alternates: {
    canonical: "https://www.aulettaadvisory.com/case-studies/market-anomaly-detection",
  },
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
