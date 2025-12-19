"use client"

 import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { Globe } from "@/components/ui/globe"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "mask-b-from-white mask-t-from-white",
          "inset-x-0 inset-y-[-30%] h-[200%]"
        )}
      />
      
      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[70%] hidden lg:block pointer-events-auto">
        <Globe 
          className="w-full h-full"
          config={{
            width: 800,
            height: 800,
            onRender: () => {},
            devicePixelRatio: 2,
            phi: 0,
            theta: 0.1,
            dark: 0,
            diffuse: 1,
            mapSamples: 16000,
            mapBrightness: 1,
            baseColor: [0.94, 0.96, 0.97],
            markerColor: [0.15, 0.22, 0.39],
            glowColor: [0.79, 0.84, 0.89],
            markers: [
              { location: [51.5074, -0.1278], size: 0.08 },
              { location: [60.1259, 24.5551], size: 0.08 },
              { location: [41.9028, 12.4964], size: 0.07 },
              { location: [40.4168, -3.7038], size: 0.07 },
              { location: [32.0694, 34.7845], size: 0.07 },
              { location: [37.7749, -122.4194], size: 0.07 },
            ],
          }}
        />
      </div> */}
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground mb-6">
            AulettaAdvisory
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            From pre-seed incubation to global M&A exits, we drive the entire lifecycle of innovation in regulated markets. 
            We transform <span className="font-medium">complex regulatory barriers into competitive advantages</span> by deploying scalable AI and strategic capital on a global stage.
          </p>
          
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
    </section>
  )
}
