"use client"

import { cn } from "@/lib/utils"

const services = [
  {
    number: "1",
    title: "Advisory",
    description:
      "Strategic guidance for M&A transactions and venture capital fundraising. We help tech companies navigate complex deals with deep market expertise.",
  },
  {
    number: "2",
    title: "Investing",
    description:
      "Angel investment and mentorship for early-stage startups. Access to an international portfolio network and hands-on support for founders.",
  },
  {
    number: "3",
    title: "AI Solutions",
    description:
      "Deep learning infrastructure and AI implementation services. We architect and deploy cutting-edge solutions tailored to your business needs.",
  },
]

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-tight">
              Our comprehensive suite of{" "}
              <span className="italic">services</span> are crafted to meet the
              needs of our clients.
            </h2>
          </div>
          <div className="flex items-end">
            <div className="w-full aspect-[4/3] bg-muted rounded-lg" />
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-12">Our services</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service) => (
              <div key={service.title} className="group">
                <div className="mb-6">
                  <span
                    className={cn(
                      "inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
                      "bg-foreground text-background"
                    )}
                  >
                    {service.number}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
