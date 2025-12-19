"use client"

 import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6">
              Ready to discuss your next move?
            </h2>
            <p className="text-lg text-background/70 leading-relaxed max-w-xl">
              Whether you&apos;re exploring a strategic transaction, raising capital, 
              or building AI infrastructure, we&apos;re here to help you navigate 
              the path forward.
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="flex lg:justify-end">
            <Button
              asChild
              size="lg"
              className="group h-12 px-6 text-base font-medium rounded-none bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
            >
              <Link href="/contact">
                Contact Us
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
