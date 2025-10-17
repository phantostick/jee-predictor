"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// --- Reusable SVG Icons ---
const CheckIcon = () => (
  <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)
const ShieldIcon = () => (
  <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)
const ZapIcon = () => (
  <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
  </svg>
)
const ArrowRightIcon = () => (
  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

// --- Logo Component (Unchanged) ---
function Logo({ className = "h-8 w-8" }) {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="url(#gradient)" />
        <path d="M12 28V14h4v10.5h5V28h-9z" fill="white" />
        <path d="M23 28V14h6v2.5h-3.5v2.5h3v2.5h-3v4h3.5V28H23z" fill="white" opacity="0.9" />
        <circle cx="30" cy="12" r="3" fill="#10b981" />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

// --- Countdown Timer Component ---
const CountdownTimer = () => {
  const targetDate = useRef(new Date("2026-01-24T09:00:00"));

  const calculateTimeLeft = () => {
    const difference = +targetDate.current - +new Date();
    if (difference <= 0) return {};
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [displayTime, setDisplayTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const target = calculateTimeLeft();
    if (Object.keys(target).length === 0) return;

    const duration = 1500; // ms
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayTime({
        days: Math.floor(target.days * easeOutProgress),
        hours: Math.floor(target.hours * easeOutProgress),
        minutes: Math.floor(target.minutes * easeOutProgress),
        seconds: Math.floor(target.seconds * easeOutProgress),
      });

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayTime(target);
        setIsInitialized(true);
      }
    };

    requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const timer = setInterval(() => {
      setDisplayTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [isInitialized]);

  return (
    <div className="relative z-10 space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white">JEE Mains 2026 (Session 1)</h3>
        <p className="text-sm text-muted-foreground">Countdown to Exam Day</p>
      </div>
      <div className="grid grid-cols-4 gap-2 md:gap-4 bg-background/50 p-4 rounded-2xl border border-border">
        {Object.entries(displayTime).map(([interval, value]) => (
          <div key={interval} className="flex flex-col items-center">
            <div className="text-3xl font-semibold text-foreground">
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-xs uppercase text-muted-foreground tracking-widest">{interval}</div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground px-4">
        Get ahead of the competition. Predict your rank and explore top colleges now.
      </p>
    </div>
  );
};


export default function EnhancedLandingPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const heroElement = heroRef.current
    if (heroElement) {
      const elementsToAnimate = [
        { selector: 'h1', delay: 100 },
        { selector: 'p', delay: 300 },
        { selector: '.badge', delay: 500, stagger: 100 },
        { selector: '.cta-button', delay: 800, stagger: 100 },
      ]

      elementsToAnimate.forEach(({ selector, delay, stagger = 0 }) => {
        heroElement.querySelectorAll(selector).forEach((el, index) => {
          const htmlEl = el as HTMLElement
          htmlEl.style.opacity = '0'
          htmlEl.style.transform = 'translateY(20px)'
          setTimeout(() => {
            htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            htmlEl.style.opacity = '1'
            htmlEl.style.transform = 'translateY(0)'
          }, delay + index * stagger)
        })
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.animate-card')
            cards.forEach((card, index) => {
              const el = card as HTMLElement
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, index * 150)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) observer.observe(statsRef.current)
    if (featuresRef.current) observer.observe(featuresRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* --- Hero Section --- */}
      <section className="relative border-b border-border/50">
        {/* Background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-background">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />
        </div>

        {/* FIX: Adjusted vertical padding for mobile */}
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-28" ref={heroRef}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <h1 className="text-balance text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                Your Path to a
                <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
                  {" "}Dream College
                </span>{" "}
                Starts Here
              </h1>
              <p className="max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl leading-relaxed text-muted-foreground">
                Free JEE percentile predictor with instant results. Find your perfect match from 300+ colleges including IITs, NITs, and IIITs.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                <span className="badge inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                  <CheckIcon /> Instant Results
                </span>
                <span className="badge hidden sm:inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                  <ShieldIcon /> No Signup Required
                </span>
                <span className="badge hidden sm:inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                  <ZapIcon /> Always Free
                </span>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-4 pt-4">
                <Link
                  href="/percentile-predictor"
                  className="cta-button group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Predict Percentile Now
                    <ArrowRightIcon />
                  </span>
                  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
                <Link
                  href="/college-predictor"
                  className="cta-button backdrop-blur-sm border border-border hover:border-primary/60 rounded-xl px-8 py-4 text-base font-semibold hover:bg-primary/10 transition-all w-full sm:w-auto text-center"
                >
                  Explore Colleges
                </Link>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative rounded-3xl border border-primary/20 bg-card/50 backdrop-blur-xl p-8 shadow-2xl hover:border-primary/40 transition-all duration-500">
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="border-b border-border/50 bg-accent/30" ref={statsRef}>
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { number: '300+', label: 'Top Colleges', sublabel: 'IITs, NITs, IIITs', icon: '🏛️' },
              { number: '100%', label: 'Free Forever', sublabel: 'No hidden charges', icon: '💰' },
              { number: '<1s', label: 'Instant Results', sublabel: 'Lightning fast', icon: '⚡' }
            ].map((stat) => (
              <div
                key={stat.label}
                className="animate-card opacity-0 translate-y-8 transition-all duration-700 rounded-2xl border border-border bg-card p-6 text-center hover:shadow-xl hover:scale-105 hover:border-primary/30"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-base md:text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="py-16 md:py-20" ref={featuresRef}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Why Choose JEE Predictor?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to plan your JEE journey. Accurate, fast, and built for students just like you.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                title: 'Accurate Predictions',
                description: 'Get reliable percentile estimates based on historical data and advanced algorithms.'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                title: 'Top Colleges Database',
                description: 'Access information about 300+ premier engineering colleges across India.'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                title: 'Lightning Fast',
                description: 'Get your results instantly without any waiting time or delays.'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
                title: 'Privacy First',
                description: 'Your data stays private. No signup required, no tracking, no data collection.'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
                title: 'Mobile Friendly',
                description: 'Use on any device - desktop, tablet, or mobile. Responsive design everywhere.'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>,
                title: 'Expert Guidance',
                description: 'Detailed articles and resources to help you understand the admission process.'
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="animate-card opacity-0 translate-y-8 transition-all duration-700 group rounded-2xl border border-border bg-card p-6 hover:shadow-xl hover:border-primary/30"
              >
                <div className="text-primary bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
