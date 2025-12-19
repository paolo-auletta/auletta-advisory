"use client"

 import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp, Clock, CheckCircle2 } from "lucide-react"

const capabilities = [
  {
    label: "THE SHIELD",
    title: "Regulatory-First AI Governance",
    description:
      "While most firms treat compliance as an afterthought, we bake Regulatory Frameworks into the development lifecycle. This capability ensures that every model deployed is \"Audit-Ready\" from day one.",
    highlight: "Regulatory Frameworks",
    value:
      "We eliminate the \"compliance bottleneck,\" allowing our clients to move from pilot to production faster than competitors.",
  },
  {
    label: "THE ENGINE",
    title: "Scalable ML Intelligence in High-Stakes Environments",
    description:
      "We bridge the gap between \"Lab AI\" and \"Enterprise AI.\" Our expertise lies in deploying scalable ML architectures specifically designed for the data sensitivities of finance and healthcare.",
    highlight: "scalable ML architectures",
    value:
      "We ensure AI doesn't just work in a demo—it scales across global operations without compromising data integrity or system stability, providing a robust foundation for long-term innovation.",
  },
  {
    label: "THE MULTIPLIER",
    title: "Strategic Value & M&A Engineering",
    description:
      "Leveraging our background as Venture Builders and M&A Advisors, we ensure AI adoption is tied directly to the balance sheet. We don't just look for \"cool\" use cases; we look for \"valuable\" ones that increase enterprise value.",
    highlight: "Venture Builders and M&A Advisors",
    value:
      "We optimize technical debt and IP portfolio, ensuring that AI investments make the company more attractive for future M&A activity, partnerships, or public offerings.",
  },
]

export function AISolutions() {
  return (
    <section id="ai-solutions" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6">
            AI Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            We bridge the gap between AI potential and regulatory reality. 
            Our advisory services empower corporates to transform complex compliance 
            hurdles into competitive moats by deploying scalable, audit-ready AI strategies 
            that drive immediate operational value.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Featured Case Study
            </h3>
          </div>

          <div className="bg-muted/30 border border-border rounded-none overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image/Visual Side */}
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <Image
                  src="/ai-solutions/cover.png"
                  alt="Market Anomaly Detection System"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-background">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider border-r border-border pr-4">
                    Financial AI
                  </span>
                  <span className="text-sm text-muted-foreground">
                    2024
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4 leading-tight">
                  Detecting Abnormal Markets: Early Warning Systems
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Machine learning system that detects early warning signs of market instability 
                  by analyzing 43 financial indicators, achieving 90% F1 score with LSTM Autoencoder 
                  and active learning.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span className="text-2xl font-semibold text-foreground">90%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">F1 Score</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span className="text-2xl font-semibold text-foreground">99%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Recall</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-2xl font-semibold text-foreground">43</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Indicators</p>
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group h-11 px-6 text-sm font-medium rounded-none border-accent/30 hover:bg-accent hover:text-accent-foreground transition-all w-fit"
                >
                  <Link href="/case-studies/market-anomaly-detection">
                    Read Full Case Study
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Our Capabilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {capabilities.map((capability) => {
              const descriptionParts = capability.description.split(capability.highlight)
              
              return (
                <div
                  key={capability.label}
                  className="bg-background border border-border rounded-none p-8 md:p-10 transition-all duration-300 hover:border-foreground/30 hover:shadow-sm"
                >
                  <div className="mb-6">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 block">
                      {capability.label}
                    </span>
                    <h4 className="text-2xl font-semibold text-foreground tracking-tight">
                      {capability.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-[15px] mb-6">
                    {descriptionParts[0]}
                    <span className="font-medium text-foreground">{capability.highlight}</span>
                    {descriptionParts[1]}
                  </p>
                  <div className="border-t border-border pt-5 mt-auto">
                    <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                      Value Created
                    </h5>
                    <p className="text-muted-foreground text-[14px] leading-relaxed">
                      {capability.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-12 px-6 text-base font-medium rounded-none border-accent/30 hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <Link href="/contact?service=ai-solutions">
              Discuss Your AI Challenge
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
