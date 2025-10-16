import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/percentile-predictor" className="hover:text-foreground transition-colors">
                  Percentile Predictor
                </Link>
              </li>
              <li>
                <Link href="/college-predictor" className="hover:text-foreground transition-colors">
                  College Predictor
                </Link>
              </li>
              <li>
                <Link href="/articles/how-jee-percentiles-are-calculated" className="hover:text-foreground transition-colors">
                  How Percentiles Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="https://jeemain.nta.nic.in" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  JEE Main Official
                </Link>
              </li>
              <li>
                <Link href="https://josaa.nic.in" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  JoSAA Portal
                </Link>
              </li>
              <li>
                <Link href="https://www.jeeadv.ac.in" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  JEE Advanced
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:help@jeepredictor.com" className="hover:text-foreground transition-colors">
                  help@jeepredictor.com
                </a>
              </li>
              <li>
                <a href="tel:+91-8800000000" className="hover:text-foreground transition-colors">
                  +91 88000-00000
                </a>
              </li>
              <li className="text-xs">
                Response time: Within 24 hours
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-foreground transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} jeePredictor.com — All rights reserved.</p>
          <p className="mt-2">
            Not affiliated with NTA, JEE Main, or JEE Advanced. For official information, visit{" "}
            <a
              href="https://jeemain.nta.nic.in"
              className="underline hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              NTA JEE
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}