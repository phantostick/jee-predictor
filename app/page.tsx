import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FAQ } from "@/components/faq"

export default function HomePage() {
  return (
    <main>
      {/* FAQ structured data for SEO (JSON-LD) - extended JEE-focused answers */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
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

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-pretty text-3xl font-semibold leading-tight md:text-4xl">
                Predict your JEE Percentile and find the colleges you can get into — fast and simple
              </h1>
              <p className="max-w-2xl leading-relaxed text-foreground/70">
                Built for students. Clean interface, crystal-clear steps, and quick results. No signup required.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                  Accurate mock estimates
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                  Student-friendly UI
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                  Free to use
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild>
                  <Link href="/percentile-predictor">Try Percentile Predictor</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/college-predictor">Try College Predictor</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-3 shadow-sm">
              <img
                src="/student-friendly-dashboard-with-charts-and-steps.jpg"
                alt="Preview of the student-friendly predictor interface"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

  <FAQ />


      {/* 'How it works' section removed per request */}
    </main>
  )
}
