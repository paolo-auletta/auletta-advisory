"use client"

import { useState } from "react"
 import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import WorldMap, { Investment } from "@/components/ui/world-map"

interface InvestmentWithLogo extends Investment {
  logo?: string
}

const investments: InvestmentWithLogo[] = [
  {
    id: "8",
    lat: 37,
    lng: -160,
    company: "Rubedo",
    location: "San Francisco",
    country: "USA",
    sector: "Biotech",
    description: "Biotech firm focused on reversing or slowing down the aging process.",
    stage: "Series A",
    website: "https://www.rubedolife.com/",
    logo: "/investing/rubedo.png",
  },
  {
    id: "10",
    lat: 32,
    lng: 51,
    company: "Neurobrave",
    location: "Tel Aviv",
    country: "Israel",
    sector: "AI/NeuroTech",
    description: "AI-driven software to decode human brain states from wearable devices.",
    stage: "Seed",
    website: "https://neurobrave.com/",
    logo: "/investing/neurobrave.png",
  },
  {
    id: "2",
    lat: 46,
    lng: 9,
    company: "Qaplà",
    location: "Milan",
    country: "Italy",
    sector: "Logistics",
    description: "Ecommerce logistics and post-shipment marketing platform.",
    stage: "Seed, Series A",
    website: "https://www.qapla.it/",
    logo: "/investing/qapla.png",
  },
  {
    id: "1",
    lat: 68,
    lng: 30,
    company: "Sooma",
    location: "Helsinki",
    country: "Finland",
    sector: "MedTech",
    description: "Brain stimulation treatment for depression and chronic pain.",
    stage: "Seed, Series A",
    website: "https://soomamedical.com/",
    logo: "/investing/soma.png",
  },
  {
    id: "3",
    lat: 41.9028,
    lng: 12.4964,
    company: "1000 Farmacie",
    location: "Rome",
    country: "Italy",
    sector: "HealthTech",
    description: "Online pharmacy marketplace connecting customers with local pharmacies.",
    stage: "Series A",
    website: "https://www.1000farmacie.it/",
    logo: "/investing/1000.png",
  },
  {
    id: "4",
    lat: 45,
    lng: 5,
    company: "Aortic Lab",
    location: "Turin",
    country: "Italy",
    sector: "MedTech",
    description: "Advanced medical devices for interventional cardiology.",
    stage: "Seed, Series A",
    website: "https://www.aorticlab.ch/",
    logo: "/investing/aorticlb.png",
  },
  {
    id: "5",
    lat: 55,
    lng: -15,
    company: "Swoop",
    location: "London",
    country: "UK",
    sector: "FinTech",
    description: "Global fintech platform for corporate funding solutions.",
    stage: "Series A",
    website: "https://swoopfunding.com/",
    logo: "/investing/swoop.png",
  },
  {
    id: "6",
    lat: 41,
    lng: -18,
    company: "Nanoligent",
    location: "Barcelona",
    country: "Spain",
    sector: "Biotech",
    description: "Clinical-stage biotechnology firm focused on nanomedicines designed to eliminate cancer cells.",
    stage: "Seed",
    website: "https://www.nanoligent.com/",
    logo: "/investing/nanoligent.png",
  },
  {
    id: "7",
    lat: 40,
    lng: 16,
    company: "Wora",
    location: "Naples",
    country: "Italy",
    sector: "Logistics",
    description: "Ecommerce logistics platform enabling same-day delivery.",
    stage: "Seed",
    website: "https://woradelivery.com/",
    logo: "/investing/wora.png",
  },
  {
    id: "9",
    lat: 44,
    lng: 8,
    company: "Eden Ventures",
    location: "Florence",
    country: "Italy",
    sector: "Venture Capital",
    description: "Venture capital firm focused on pre-seed financing for innovative startups.",
    stage: "Pre Seed",
    website: "https://www.eden.ventures/",
    logo: "/investing/iag.png",
  },
]

export function Investing() {
  const [isExpanded, setIsExpanded] = useState(false)
  const displayedInvestments = isExpanded ? investments : investments.slice(0, 3)

  return (
    <section id="investing" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-12 md:mb-16">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Investing
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-tight">
              Global portfolio of innovative startups
            </h3>
            <div className="flex flex-col justify-end">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We invest in exceptional founders building transformative companies across the US, Europe, far and middle east. 
                Our approach fuses strategic capital and operational mentorship with elite-tier access to the private equity ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: Startup List */}
        <div className="md:hidden">
          <div className="border border-border overflow-hidden bg-white">
            {displayedInvestments.map((investment, index) => (
              <div
                key={investment.id}
                className={`p-5 ${index !== displayedInvestments.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {investment.stage}
                  </span>
                  <span className="text-muted-foreground/30">•</span>
                  <span className="text-xs text-muted-foreground">
                    {investment.sector}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-base font-semibold text-foreground">
                    {investment.company}
                  </h4>
                  {investment.website && (
                    <a
                      href={investment.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {investment.location}, {investment.country}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {investment.description}
                </p>
              </div>
            ))}
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-4 py-3 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {isExpanded ? (
              <>
                Show less
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                View all {investments.length} companies
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>

        {/* Desktop: World Map */}
        <div className="hidden md:block">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Click on a dot to learn more about each investment
            </p>
          </div>
          <div className="relative">
            <WorldMap investments={investments} />
          </div>
        </div>

        {/* Incubator Section */}
        <div className="mt-24 md:mt-32">
          <div className="mb-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Incubator
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-tight">
                Selected startups from our incubator program
              </h3>
              <div className="flex flex-col justify-end">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From idea to execution, we provide hands-on support to transform visionary concepts into thriving businesses.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                name: "MaturaMente",
                sector: "EdTech",
                description: "AI-powered study platform for Italian students preparing for the Esame di Maturità, featuring curated practice content, simulations, and personalized learning support.",
                year: "2024",
                image: "/incubator/maturamente.png",
                logo: "/incubator/maturamente-icon.jpeg",
                website: "https://maturamente.it",
              },
              {
                id: 2,
                name: "Roamlit",
                sector: "Travel Tech",
                description: "Mobile-first travel app for discovering and exploring cities through curated guides and smart recommendations, starting with Milan and expanding across Europe.",
                year: "2024",
                image: "/incubator/roamlit.png",
                logo: "/incubator/roamlit-logo.png",
                website: "https://roamlit.com",
              },
              {
                id: 3,
                name: "Cravit",
                sector: "Food Tech",
                description: "Social app for exploring food with friends through personalized taste missions, turning restaurant discovery into shared adventures with custom leaderboards.",
                year: "2024",
                image: "/incubator/cravit.png",
                logo: "/incubator/cravit-icon.png",
                website: "https://www.getcravit.com/",
              },
            ].map((project) => (
              <div
                key={project.id}
                className="group border border-border bg-white overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  {project.logo && (
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-lg overflow-hidden bg-white shadow-lg">
                      <img
                        src={project.logo}
                        alt={`${project.name} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {project.year}
                    </span>
                    <span className="text-muted-foreground/30">•</span>
                    <span className="text-xs text-muted-foreground">
                      {project.sector}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h4 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h4>
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-12 px-6 text-base font-medium rounded-none border-accent/30 hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <Link href="/contact?service=investing">
              Explore Investment Opportunities
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
