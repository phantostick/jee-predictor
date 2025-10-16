import React from "react"

export default function HowJeePercentilesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <article>
        <h1 className="text-pretty text-3xl font-semibold mb-4">How JEE percentiles are calculated — a practical guide</h1>

        <p className="mb-4 text-foreground/80">
          This article explains, in detail, how JEE Main percentiles are determined, why percentiles differ from raw
          scores, and how you can use percentile estimates to better understand where you might stand in the JEE
          ecosystem (JEE Main, JEE Advanced, JoSAA counseling and college shortlisting for IIT, NIT, IIIT, and state
          engineering colleges).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Raw scores vs percentile: what's the difference?</h2>
        <p className="mb-4 text-foreground/80">
          Raw scores are the sum of marks obtained across sections. Percentiles are relative measures that indicate the
          percentage of candidates you scored better than after normalization. Because JEE Main runs in multiple sessions,
          the National Testing Agency (NTA) normalizes scores to account for session-to-session variation in difficulty.
          That normalization yields percentiles, which are comparable across sessions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How normalization affects percentiles</h2>
        <p className="mb-4 text-foreground/80">
          The normalization process adjusts raw marks from different sessions; an easier session’s raw marks may be
          scaled downward relative to a harder session. The percentile is then calculated based on the normalized score
          distribution for that session. Because of normalization, a particular raw score may correspond to different
          percentiles across years — which is why any percentile-to-rank mapping is approximate and should be used
          cautiously.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Mapping percentile to rank (rough guide)</h2>
        <p className="mb-4 text-foreground/80">
          The relationship between percentile and All India Rank (AIR) depends on the number of candidates. As a rough
          guide:
        </p>
        <ul className="list-disc pl-6 mb-4 text-foreground/80">
          <li>99.9+ percentile: often within top 100–300 (year-dependent)</li>
          <li>99.5–99.8 percentile: often top 300–1000</li>
          <li>99.0–99.4 percentile: often top 1,000–5,000</li>
          <li>95–98 percentile: often within top 5,000–20,000</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Practical tips for using predictors</h2>
        <p className="mb-4 text-foreground/80">
          Use percentile predictors for scenario planning: try multiple mark values, explore category-based cutoffs
          (General/OBC-NCL/SC/ST/EWS), and pair percentile outputs with historical JoSAA cutoffs. Remember that
          seat allocation depends on category rank, home-state quotas, and seat matrices for each institute — not just
          the overall percentile.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitations and responsible usage</h2>
        <p className="mb-4 text-foreground/80">
          Predictors are approximate. They help with planning but cannot replace official NTA reports or counseling
          data. Do not treat the tool's output as a guarantee for admissions—always check official cutoffs and use the
          tool as one data point among many.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Resources and next steps</h2>
        <p className="mb-4 text-foreground/80">
          For more precise planning, combine predictions with historical cutoff tables from JoSAA and institute-specific
          past year cutoffs. Use our College Predictor and consider mock counseling sessions offered by official
          counseling bodies or respected coaching platforms.
        </p>

        <p className="mt-8 text-sm text-foreground/70">Updated: October 2025</p>
      </article>
    </main>
  )
}
