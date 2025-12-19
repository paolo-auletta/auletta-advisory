"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

const services = [
  {
    number: "1",
    title: "Advisory",
    description:
      "Strategic M&A advisory for highly regulated industries. We operate at the vital intersection of Business Strategy, Compliance, and Regulatory Frameworks.",
  },
  {
    number: "2",
    title: "Investing",
    description:
      "Venture builder and early-stage investor (Pre-Seed to Series A) managing a diverse international portfolio",
  },
  {
    number: "3",
    title: "AI Solutions",
    description:
      "Strategic AI/ML experts dedicated to driving cross-sector innovation by deploying scalable intelligence into highly regulated sectors like finance and healthcare",
  },
]

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-tight">
              Tailored for excellence, our suite of{" "}
              <span className="italic font-bold">services</span> is built to meet the rigorous standards of our premier clientele.
            </h2>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <Image
              src="/images/landscape.jpg"
              alt="Market Anomaly Detection System"
              fill
              className="object-cover"
              priority
            />
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
                      "bg-accent text-accent-foreground"
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
