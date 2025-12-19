"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, ExternalLink } from "lucide-react"
import Image from "next/image"

export interface Investment {
  id: string
  lat: number
  lng: number
  company: string
  location: string
  country: string
  sector: string
  description: string
  stage: string
  website?: string
  logo?: string
}

interface WorldMapProps {
  investments: Investment[]
  dotColor?: string
}

export default function WorldMap({
  investments = [],
  dotColor = "#3B4C74",
}: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null)
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 })

  // Visible map bounds - manually tuned to match the CSS transform
  // CSS: scale(2.5), transformOrigin: "40% 18%", objectPosition: "22% 18%"
  // These bounds define what geographic region is visible in the cropped view
  const bounds = {
    minLng: -150,  // West edge (shows US west coast)
    maxLng: 50,    // East edge (shows Finland/Israel)
    maxLat: 72,    // North edge (shows Scandinavia)
    minLat: 25     // South edge (shows North Africa border)
  }
  
  const viewWidth = 800
  const viewHeight = 400

  const projectPoint = (lat: number, lng: number) => {
    const x = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * viewWidth
    const y = ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * viewHeight
    return { x, y }
  }

  const handleDotClick = (investment: Investment) => {
    const point = projectPoint(investment.lat, investment.lng)
    setPopupPosition({ x: point.x, y: point.y })
    setSelectedInvestment(investment)
  }

  const closePopup = () => {
    setSelectedInvestment(null)
  }

  return (
    <div className="w-full aspect-[2.5/1] relative font-sans">
      {/* Map container with overflow hidden */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-muted/20 rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/world-map.svg"
          alt="world map"
          fill
          className="object-cover pointer-events-none select-none"
          draggable={false}
          style={{
            objectPosition: "22% 18%",
            transform: "scale(2.5)",
            transformOrigin: "40% 18%"
          }}
          priority
        />
      </div>
      {/* SVG overlay for dots - outside overflow hidden container */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 rounded-2xl"
        style={{ pointerEvents: "none" }}
      >
        {investments.map((investment) => {
          const point = projectPoint(investment.lat, investment.lng)
          return (
            <g key={investment.id} style={{ pointerEvents: "auto" }}>
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill={dotColor}
                className="cursor-pointer hover:fill-[#263864] transition-colors"
                onClick={() => handleDotClick(investment)}
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill={dotColor}
                opacity="0.4"
                style={{ pointerEvents: "none" }}
              >
                <animate
                  attributeName="r"
                  from="4"
                  to="12"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.4"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          )
        })}
      </svg>

      <AnimatePresence mode="sync">
        {selectedInvestment && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute inset-0 bg-black/5 z-10 rounded-2xl"
              onClick={closePopup}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute z-20 bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden w-72"
              style={{
                left: `clamp(1rem, ${(popupPosition.x / 800) * 100}%, calc(100% - 19rem))`,
                top: `clamp(1rem, ${(popupPosition.y / 400) * 100}%, calc(100% - 14rem))`,
              }}
            >
              {/* Header with logo */}
              <div className="px-5 py-4 bg-muted/30 border-b border-border/50 flex items-center justify-between">
                {selectedInvestment.logo ? (
                  <img
                    src={selectedInvestment.logo}
                    alt={`${selectedInvestment.company} logo`}
                    className="h-6 w-auto object-contain grayscale opacity-80"
                  />
                ) : (
                  <span className="text-base font-semibold text-foreground">
                    {selectedInvestment.company}
                  </span>
                )}
                <button
                  onClick={closePopup}
                  className="shrink-0 w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <X className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {selectedInvestment.stage}
                  </span>
                  <span className="text-muted-foreground/30">•</span>
                  <span className="text-xs text-muted-foreground">
                    {selectedInvestment.sector}
                  </span>
                </div>

                {selectedInvestment.logo && (
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {selectedInvestment.company}
                  </h3>
                )}

                <p className="text-sm text-muted-foreground mb-3">
                  {selectedInvestment.location}, {selectedInvestment.country}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {selectedInvestment.description}
                </p>

                {selectedInvestment.website && (
                  <a
                    href={selectedInvestment.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Visit website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

