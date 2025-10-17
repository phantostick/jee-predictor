"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// --- Reusable SVG Icons ---
const CheckIcon = () => (
  <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)
const ShieldIcon = () => (
  <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)
const ZapIcon = () => (
  <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
  </svg>
)
const ArrowRightIcon = () => (
  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

// --- Enhanced Countdown Timer with Smoother Animation ---
const CountdownTimer = () => {
  const targetDate = useRef(new Date("2026-01-24T09:00:00"));
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const prevTimeRef = useRef({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      const difference = +targetDate.current - +new Date();
      if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Initial calculation
    const initial = calculateTimeLeft();
    setTimeLeft(initial);
    prevTimeRef.current = initial;

    // Update every second
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      prevTimeRef.current = timeLeft;
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label, prevValue }: { value: number; label: string; prevValue: number }) => {
    const hasChanged = value !== prevValue;
    
    return (
      <div className="flex flex-col items-center relative">
        <div className="relative h-20 w-16 md:h-24 md:w-20">
          <div className={`absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent transition-all duration-500 ${hasChanged ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
            {String(prevValue).padStart(2, "0")}
          </div>
          <div className={`absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent transition-all duration-500 ${hasChanged ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            {String(value).padStart(2, "0")}
          </div>
        </div>
        <div className="text-xs md:text-sm uppercase text-muted-foreground tracking-widest mt-2 font-semibold">{label}</div>
      </div>
    );
  };

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-3 md:gap-6 animate-pulse">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="h-20 w-16 md:h-24 md:w-20 bg-muted rounded-xl" />
            <div className="h-4 w-12 bg-muted rounded mt-2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            LIVE COUNTDOWN
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          JEE Mains 2026 (Session 1)
        </h3>
        <p className="text-sm text-muted-foreground">Time until exam day arrives</p>
      </div>
      
      <div className="grid grid-cols-4 gap-3 md:gap-6 p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 shadow-2xl">
        <TimeUnit value={timeLeft.days} label="Days" prevValue={prevTimeRef.current.days} />
        <TimeUnit value={timeLeft.hours} label="Hours" prevValue={prevTimeRef.current.hours} />
        <TimeUnit value={timeLeft.minutes} label="Minutes" prevValue={prevTimeRef.current.minutes} />
        <TimeUnit value={timeLeft.seconds} label="Seconds" prevValue={prevTimeRef.current.seconds} />
      </div>
      
      <div className="text-center space-y-3">
        <p className="text-sm text-muted-foreground px-4">
          Every second counts. Start your preparation journey today.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            🎯 Accurate Predictions
          </span>
        </div>
      </div>
    </div>
  );
};

// --- Animated Background Component ---
const AnimatedBackground = () => {
  // Pre-generate static positions to avoid hydration mismatch
  const particles = [
    { left: 15, top: 10, delay: 0, duration: 8 },
    { left: 25, top: 30, delay: 1, duration: 10 },
    { left: 45, top: 20, delay: 2, duration: 12 },
    { left: 65, top: 40, delay: 0.5, duration: 9 },
    { left: 75, top: 15, delay: 1.5, duration: 11 },
    { left: 85, top: 35, delay: 2.5, duration: 7 },
    { left: 10, top: 60, delay: 3, duration: 13 },
    { left: 30, top: 70, delay: 1, duration: 8 },
    { left: 50, top: 80, delay: 2, duration: 10 },
    { left: 70, top: 65, delay: 0, duration: 9 },
    { left: 90, top: 75, delay: 1.5, duration: 11 },
    { left: 20, top: 50, delay: 2.5, duration: 12 },
    { left: 40, top: 90, delay: 0.5, duration: 8 },
    { left: 60, top: 55, delay: 3, duration: 10 },
    { left: 80, top: 85, delay: 1, duration: 9 },
    { left: 5, top: 25, delay: 2, duration: 11 },
    { left: 35, top: 45, delay: 0, duration: 13 },
    { left: 55, top: 70, delay: 1.5, duration: 7 },
    { left: 95, top: 20, delay: 2.5, duration: 10 },
    { left: 12, top: 85, delay: 3, duration: 12 },
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-indigo-500/5" />
      
      {/* Animated Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function EnhancedLandingPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)

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
    if (processRef.current) observer.observe(processRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>

      {/* --- Hero Section --- */}
      <section className="relative border-b border-border/50 min-h-[85vh] md:min-h-[90vh] flex items-center">
        <AnimatedBackground />

        <div className="mx-auto max-w-7xl px-4 py-12 md:py-24 w-full" ref={heroRef}>
          <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
            {/* Content */}
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              
              
              <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-tight">
                Your Path to a
                <span className="block mt-1 md:mt-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Dream College
                </span>{" "}
                Starts Here
              </h1>
              
              <p className="max-w-2xl mx-auto lg:mx-0 text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground">
                The most accurate JEE percentile predictor with instant results. Find your perfect match from 300+ top engineering colleges including IITs, NITs, and IIITs. Simple, fast, and completely free.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                <span className="badge inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-xs md:text-sm font-medium backdrop-blur-sm hover:bg-emerald-500/20 transition-colors">
                  <CheckIcon /> Instant Results
                </span>
                <span className="badge inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 text-xs md:text-sm font-medium backdrop-blur-sm hover:bg-blue-500/20 transition-colors">
                  <ShieldIcon /> No Signup Required
                </span>
                
              </div>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-3 pt-4">
                <Link
                  href="/percentile-predictor"
                  className="cta-button group relative overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 w-full sm:w-auto hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Predict Percentile Now
                    <ArrowRightIcon />
                  </span>
                  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
                <Link
                  href="/college-predictor"
                  className="cta-button group backdrop-blur-sm border-2 border-border hover:border-primary/60 rounded-lg md:rounded-xl px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold hover:bg-primary/10 transition-all w-full sm:w-auto text-center hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore Colleges
                    <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-8 pt-4 text-xs md:text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Accurate</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure & Private</span>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl opacity-20 rounded-3xl" />
              <div className="relative rounded-2xl md:rounded-3xl border-2 border-primary/20 bg-card/50 backdrop-blur-xl p-6 md:p-8 shadow-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-purple-500/20">
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="border-b border-border/50 bg-gradient-to-br from-accent/30 to-accent/10 relative" ref={statsRef}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Trusted by Thousands</h2>
            <p className="text-lg text-muted-foreground">The simplest way to predict your JEE journey</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {[
        
              { number: '300+', label: 'Top Colleges', sublabel: 'IITs, NITs, IIITs', icon: '🏛️', color: 'from-blue-500 to-cyan-500' },
              { number: '100%', label: 'Free Forever', sublabel: 'No hidden charges', icon: '💰', color: 'from-emerald-500 to-green-500' },
              { number: '<1s', label: 'Instant Results', sublabel: 'Lightning fast', icon: '⚡', color: 'from-amber-500 to-orange-500' }
            ].map((stat) => (
              <div
                key={stat.label}
                className="animate-card opacity-0 translate-y-8 transition-all duration-700 rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-8 text-center hover:shadow-2xl hover:scale-105 hover:border-primary/30 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-base md:text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- How It Works */}
      <section className="py-16 md:py-24 relative" ref={processRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get your percentile prediction in three simple steps
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Enter Your Total Marks',
                description: 'Simply input your total marks obtained or expected in JEE Mains (out of 300).',
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
                color: 'from-purple-500 to-indigo-500'
              },
              {
                step: '02',
                title: 'Get Instant Percentile',
                description: 'Our algorithm calculates your expected percentile instantly based on historical data and trends.',
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: '03',
                title: 'Discover Your Colleges',
                description: 'Use the college predictor to find institutions that match your percentile, including branch options and cutoffs.',
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                color: 'from-emerald-500 to-green-500'
              }
            ].map((item, index) => (
              <div
                key={item.step}
                className="animate-card opacity-0 translate-y-8 transition-all duration-700 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full rounded-2xl border-2 border-border bg-card/80 backdrop-blur-sm p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-6xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity`}>
                      {item.step}
                    </span>
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/20 to-transparent" ref={featuresRef}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
              <span className="text-sm font-semibold">FEATURES</span>
            </div>
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
                description: 'Get reliable percentile estimates based on historical data, normalization patterns, and advanced statistical algorithms.',
                gradient: 'from-purple-500 to-indigo-500'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                title: '300+ Top Colleges',
                description: 'Comprehensive database covering IITs, NITs, IIITs, GFTIs, and top private engineering colleges across India.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                title: 'Lightning Fast',
                description: 'Get your results in under a second. No waiting, no delays—instant predictions whenever you need them.',
                gradient: 'from-amber-500 to-orange-500'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
                title: 'Privacy First',
                description: 'Your data stays private. Zero data collection, no signup required, no tracking—just predictions.',
                gradient: 'from-emerald-500 to-green-500'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
                title: 'Mobile Optimized',
                description: 'Perfect experience on any device—desktop, tablet, or mobile. Responsive design that works everywhere.',
                gradient: 'from-pink-500 to-rose-500'
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>,
                title: 'Expert Resources',
                description: 'Detailed guides, articles, and insights to help you understand JEE percentiles, ranks, and admissions.',
                gradient: 'from-violet-500 to-purple-500'
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="animate-card opacity-0 translate-y-8 transition-all duration-700 group rounded-2xl border-2 border-border bg-card/80 backdrop-blur-sm p-8 hover:shadow-2xl hover:border-primary/30 hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-indigo-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        </div>
        
        <div className="mx-auto max-w-4xl px-4 relative">
          <div className="rounded-3xl border-2 border-primary/30 bg-card/80 backdrop-blur-xl p-12 md:p-16 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold">START YOUR JOURNEY TODAY</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Ready to Find Your
              <span className="block mt-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
                Dream College?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join students across India who are using JEE Predictor to plan their future. Get started in seconds—completely free, always.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                 href="/percentile-predictor"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 
                        px-6 py-3 text-base font-semibold text-white shadow-2xl 
                        hover:shadow-purple-500/50 transition-all duration-300 
                        w-full sm:w-auto hover:scale-105
                        sm:px-10 sm:py-5 sm:text-lg"
                >
                        <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Get Started
                          <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </span>
                        <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      </Link>

              
              <Link
  href="/articles/how-jee-percentiles-are-calculated"
  className="group backdrop-blur-sm border-2 border-border hover:border-primary/60 rounded-xl
             px-6 py-3 text-base font-semibold text-center
             hover:bg-primary/10 transition-all duration-300
             w-full sm:w-auto hover:scale-105
             sm:px-10 sm:py-5 sm:text-lg"
>
  <span className="flex items-center justify-center gap-1.5 sm:gap-2">
    Learn More
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </span>
</Link>

            </div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant access</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
