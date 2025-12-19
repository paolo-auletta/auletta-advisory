"use client"

 import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%]"
        )}
      />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground mb-6">
            AulettaAdvisory
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Strategic advisory for venture capital and M&A, angel investing with 
            international portfolio visibility, and cutting-edge AI infrastructure 
            solutions. Bridging technology and finance across the European market.
          </p>
          
          <Button
            asChild
            size="lg"
            className="group h-12 px-6 text-base font-medium rounded-none bg-foreground text-background hover:bg-foreground/90 transition-all"
          >
            <Link href="/contact">
              Contact Us
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
