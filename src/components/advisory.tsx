"use client"

 import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp, Handshake, Target } from "lucide-react"

const stats = [
  {
    value: "50+",
    label: "Companies Advised",
  },
  {
    value: "€2B+",
    label: "Deal Value",
  },
  {
    value: "30+",
    label: "Transactions",
  },
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "5",
    label: "Sectors Covered",
  },
]

const services = [
  {
    icon: TrendingUp,
    title: "M&A Advisory",
    description: "End-to-end support for mergers, acquisitions, and divestitures. From valuation and due diligence to negotiation and deal structuring.",
  },
  {
    icon: Handshake,
    title: "Fundraising",
    description: "Strategic guidance for Series A through growth rounds. We connect founders with the right investors and help craft compelling narratives.",
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Long-term growth strategies, market entry planning, and competitive positioning for tech companies scaling across Europe.",
  },
]

export function Advisory() {
  return (
    <section id="advisory" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Advisory
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-tight">
              Strategic guidance for complex transactions
            </h3>
            <div className="flex flex-col justify-end">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide expert advisory services for M&A transactions and venture 
                capital fundraising, with deep expertise in the European tech and AI 
                ecosystem. Our hands-on approach ensures founders and executives 
                navigate complex deals with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 mb-20 md:mb-28">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Two Column: Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 md:mb-28">
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholder-advisory.jpg')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="text-2xl md:text-3xl font-medium text-foreground mb-6 leading-tight">
              Trusted partner for founders and executives navigating critical moments
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 15 years of experience in European tech M&A and venture capital, 
              we bring institutional-grade expertise to every engagement. Our team has 
              advised on transactions across fintech, healthtech, SaaS, and deep tech sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work closely with founders from initial strategy through deal close, 
              providing hands-on support at every stage. Our network spans leading VCs, 
              corporate acquirers, and family offices across Europe and the US.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16 md:mb-20">
          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-10">
            What we do
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="group relative bg-background border border-border rounded-none p-8 md:p-10 transition-all duration-300 hover:border-foreground/30 hover:shadow-sm"
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-none bg-foreground flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                    <service.icon className="h-6 w-6 text-background" />
                  </div>
                  <h5 className="text-xl font-semibold text-foreground mb-4 tracking-tight">
                    {service.title}
                  </h5>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-12 px-6 text-base font-medium rounded-none border-foreground/20 hover:bg-foreground hover:text-background transition-all"
          >
            <Link href="/contact?service=advisory">
              Get Advisory Support
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
