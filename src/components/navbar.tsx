"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Advisory", href: "#advisory" },
  { label: "Investing", href: "#investing" },
  { label: "AI Solutions", href: "#ai-solutions" },
]

export function Navbar() {
  const [activeLink, setActiveLink] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavHidden, setIsNavHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return

      const currentY = window.scrollY

      if (isMenuOpen) {
        setIsNavHidden(false)
        lastScrollY.current = currentY
        return
      }

      if (currentY < 80) {
        setIsNavHidden(false)
      } else if (currentY > lastScrollY.current + 6) {
        setIsNavHidden(true)
      } else if (currentY < lastScrollY.current - 6) {
        setIsNavHidden(false)
      }

      lastScrollY.current = currentY
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMenuOpen])

  const handleNavSelect = (label: string, href: string) => {
    setActiveLink(label)
    
    if (href.startsWith("#")) {
      setIsMenuOpen(false)
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 300)
    } else {
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={false}
      animate={
        isNavHidden
          ? { y: -120, opacity: 0, pointerEvents: "none" }
          : { y: 0, opacity: 1, pointerEvents: "auto" }
      }
      transition={{ duration: 0.33, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Desktop Navigation */}
        <div className="hidden items-center justify-between bg-background/95 px-6 py-3 shadow-md backdrop-blur-sm border border-border sm:flex">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xl font-medium text-foreground">
              AulettaAdvisory
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <nav aria-label="Primary" className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    activeLink === link.label
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={activeLink === link.label ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavSelect(link.label, link.href)
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <Link
              href="/contact"
              className="inline-flex items-center bg-foreground text-background hover:bg-foreground/90 px-5 py-2 text-sm font-medium shadow-md transition-all hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden">
          <div className="bg-background/95 px-5 py-3 shadow-md backdrop-blur-sm border border-border transition-all">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-lg font-medium text-foreground">
                AulettaAdvisory
              </Link>

              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="relative h-10 w-10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
              >
                <span
                  className={cn(
                    "absolute left-1/2 top-[30%] h-0.5 w-6 -translate-x-1/2 bg-foreground transition-all duration-200",
                    isMenuOpen && "top-1/2 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 bg-foreground transition-all duration-200",
                    isMenuOpen && "scale-x-0 opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-1/2 top-[70%] h-0.5 w-6 -translate-x-1/2 bg-foreground transition-all duration-200",
                    isMenuOpen && "top-1/2 -rotate-45"
                  )}
                />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -8 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
                  className="mt-4"
                >
                  <div className="h-px w-full bg-border" />
                  <div className="flex flex-col px-1 py-5">
                    <nav aria-label="Mobile primary" className="flex flex-col gap-3">
                      {NAV_LINKS.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className={cn(
                            "text-xl font-medium text-left leading-tight transition-colors duration-200",
                            activeLink === link.label
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                          onClick={(e) => {
                            e.preventDefault()
                            handleNavSelect(link.label, link.href)
                          }}
                        >
                          {link.label}
                        </a>
                      ))}
                    </nav>

                    <div className="mt-5">
                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center bg-foreground px-4 py-3 text-base font-medium text-background shadow-md transition-all hover:bg-foreground/90"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
