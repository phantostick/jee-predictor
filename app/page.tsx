"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { FAQ } from "@/components/faq"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate hero elements on load
    const heroElement = heroRef.current
    if (heroElement) {
      const title = heroElement.querySelector('h1')
      const subtitle = heroElement.querySelector('p')
      const badges = heroElement.querySelectorAll('.badge')
      const buttons = heroElement.querySelectorAll('.cta-button')

      // Stagger animations
      if (title) {
        title.style.opacity = '0'
        title.style.transform = 'translateY(30px)'
        setTimeout(() => {
          title.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          title.style.opacity = '1'
          title.style.transform = 'translateY(0)'
        }, 100)
      }

      if (subtitle) {
        subtitle.style.opacity = '0'
        subtitle.style.transform = 'translateY(30px)'
        setTimeout(() => {
          subtitle.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          subtitle.style.opacity = '1'
          subtitle.style.transform = 'translateY(0)'
        }, 300)
      }

      badges.forEach((badge, index) => {
        const el = badge as HTMLElement
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        setTimeout(() => {
          el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }, 500 + index * 100)
      })

      buttons.forEach((button, index) => {
        const el = button as HTMLElement
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        setTimeout(() => {
          el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }, 800 + index * 100)
      })
    }

    // Animate stats on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.stat-card')
            cards.forEach((card, index) => {
              const el = card as HTMLElement
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      {/* FAQ structured data for SEO (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How accurate are the percentile estimates and how do they relate to JEE Main and JEE Advanced rank predictions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Our Percentile Predictor provides ballpark estimates based on historical patterns, percentile bands, and mock mappings tailored to JEE Main scoring behavior. It does not replicate NTA's normalization algorithm or JEE Advanced scoring; rather, it offers scenario-based guidance (e.g., whether you're likely to fall in top 1%, top 5%, or below). For college shortlisting, use the predicted percentile as an exploratory figure and verify using official NTA percentiles and JoSAA cutoffs. The predictor is most useful for early-stage planning and iterative 'what-if' exploration for JEE aspirants.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose this JEE predictor over other percentile and rank predictor tools?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We emphasize transparent logic, a student-first UI, and JEE-specific considerations (category reservation, percentile bands, conservative college mapping). The tool is free, requires no signup, and pairs percentile estimates with practical counseling tips, which helps students move from a predicted percentile to a realistic college shortlist. While deterministic rank prediction is impossible without official scales, our approach focuses on clarity and actionability for JEE Main, JEE Advanced aspirants, and JoSAA counseling timelines.",
                },
              },
              {
                "@type": "Question",
                name: "How do you pick colleges in the College Predictor and should I rely on them for counseling?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "College suggestions are illustrative and derived from simple percentile buckets mapped to historically observed cutoffs for IITs, NITs, IIITs and strong state/private colleges. Use them as a starting point for shortlisting. For final decisions and seat allocation during counseling (JoSAA/state counseling bodies), consult official cutoff tables, institute seat matrices, and verified seat-allocation simulators.",
                },
              },
              {
                "@type": "Question",
                name: "Do you store my data and how is privacy handled?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "This demo aims for minimal data handling — no mandatory accounts and no retention of personal data for typical usage. Phone inputs used for OTP simulation are not persisted or transmitted in the demo. Any future features that collect PII will be documented, opt-in, and follow industry-standard security and privacy practices.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden border-b">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border/80" />
              </pattern>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.05" />
                <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.03" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#gradient)" />
          </svg>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20" ref={heroRef}>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Content */}
            <div className="space-y-5 md:space-y-6 text-center lg:text-left">
              <h1 className="text-pretty text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
                Predict your JEE Percentile and unlock your dream college
              </h1>
              <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-foreground/70">
                Free, fast, and accurate. Get instant percentile predictions and explore colleges from IITs to NITs — all without signing up.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
                <span className="badge inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs sm:text-sm font-medium text-foreground backdrop-blur-sm">
                  <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Instant Results
                </span>
                <span className="badge inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs sm:text-sm font-medium text-foreground backdrop-blur-sm">
                  <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No Signup
                </span>
                <span className="badge inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs sm:text-sm font-medium text-foreground backdrop-blur-sm">
                  <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  100% Free
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-3 pt-2">
                <Button asChild size="lg" className="cta-button group relative overflow-hidden w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow">
                  <Link href="/percentile-predictor">
                    <span className="relative z-10 flex items-center gap-2">
                      Predict Percentile
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="cta-button backdrop-blur-sm border-2 hover:bg-accent/50 w-full sm:w-auto hover:border-primary/30 transition-all">
                  <Link href="/college-predictor">
                    Explore Colleges
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl border bg-card/50 backdrop-blur-xl p-8 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Floating Elements */}
                <div className="relative z-10 space-y-6">
                  {/* Percentile Meter */}
                  <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary/20 animate-float">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground font-medium">Your Percentile</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Live</span>
                    </div>
                    <div className="text-5xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                      99.5
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[99.5%] bg-gradient-to-r from-primary to-primary/60 rounded-full animate-pulse" />
                    </div>
                  </div>
                  
                  {/* College Cards */}
                  <div className="space-y-3">
                    {['IIT Delhi', 'NIT Trichy', 'IIIT Hyderabad'].map((college, i) => (
                      <div 
                        key={college} 
                        className="bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-all duration-300 animate-float"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-sm">{college}</div>
                            <div className="text-xs text-muted-foreground">Computer Science</div>
                          </div>
                          <div className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full font-medium">
                            Eligible
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-gradient-to-b from-accent/20 to-transparent" ref={statsRef}>
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
            <div className="stat-card opacity-0 translate-y-8 transition-all duration-700 rounded-2xl border-2 bg-card p-6 md:p-8 text-center hover:shadow-xl hover:scale-105 hover:border-primary/30 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                300+
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">Top Colleges Covered</div>
              <div className="text-xs text-muted-foreground/60 mt-1">IITs, NITs, IIITs & More</div>
            </div>
            <div className="stat-card opacity-0 translate-y-8 transition-all duration-700 rounded-2xl border-2 bg-card p-6 md:p-8 text-center hover:shadow-xl hover:scale-105 hover:border-primary/30 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">Free Forever</div>
              <div className="text-xs text-muted-foreground/60 mt-1">No Hidden Charges</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Inline Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
