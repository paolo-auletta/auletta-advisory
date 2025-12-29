import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-sm font-medium text-background/50 uppercase tracking-wider mb-3">
              Location
            </h3>
            <p className="text-background/80">
              Rome & Milan, Italy
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-background/50 uppercase tracking-wider mb-3">
              Email
            </h3>
            <a 
              href="mailto:info@aulettaadvisory.com" 
              className="text-background/80 hover:text-background transition-colors"
            >
              info@aulettaadvisory.com
            </a>
          </div>
          <div>
            <h3 className="text-sm font-medium text-background/50 uppercase tracking-wider mb-3">
              Connect
            </h3>
            <a 
              href="https://www.linkedin.com/in/carmine-auletta-965170" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-background transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} AulettaAdvisory. All rights reserved.
            </p>
            <p className="text-sm text-background/50">
              Auletta Advisory Srl - P.IVA: 18319361004
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/terms-of-use" className="text-sm text-background/50 hover:text-background transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="text-sm text-background/50 hover:text-background transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
