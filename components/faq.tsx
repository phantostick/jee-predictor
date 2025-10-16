"use client"

import React, { useState } from "react"

export function FAQ() {
  const faqs = [
    {
      q: "How accurate are the percentile estimates and how do they relate to JEE Main and JEE Advanced rank predictions?",
      a: (
        <div className="space-y-3">
          <p>
            Short answer: our predictor gives a sensible ballpark, but it isn’t the official NTA calculation. It’s best used
            for planning and quick comparisons between mock scores.
          </p>

          <p>
            Why? JEE Main percentiles are produced after normalization across sessions and include tie-break rules and
            session-specific adjustments. We estimate percentile bands from historical patterns to show you whether your
            performance sits in the top 1%, top 5%, or another bracket.
          </p>

          <ul className="list-disc pl-5 text-sm text-foreground/80">
            <li>
              Use the predictor to set targets (e.g., what raw marks typically map to 98–99 percentile). Don’t treat it as a
              guaranteed rank — for final admissions rely on NTA and JoSAA data.
            </li>
            <li>
              If you’re preparing for JEE Advanced, remember Advanced rank depends solely on your Advanced score (Main
              qualifying rules apply).
            </li>
          </ul>

          <div className="rounded-md bg-accent/20 p-3 text-sm">
            Tip: Try a few scenarios (different marks) to understand how small improvements affect your percentile — that’s
            great for planning study time.
          </div>
        </div>
      ),
    },
    {
      q: "Why choose this JEE predictor over other percentile and rank predictor tools?",
      a: (
        <div className="space-y-3">
          <p>
            We designed the tool for clarity and speed. It’s for students who want fast, honest feedback without a long
            signup process.
          </p>

          <p>
            Key differences:
          </p>

          <ul className="list-disc pl-5 text-sm text-foreground/80">
            <li>Transparent, easy inputs — marks, category, gender.</li>
            <li>Student-first UI so you can try multiple scenarios quickly.</li>
            <li>Advice paired with each percentile bucket (what to target and next steps).</li>
          </ul>

          <div className="rounded-md bg-accent/20 p-3 text-sm">
            Student note: If you want a one-page, no-nonsense estimate during practice tests, this tool is built for that
            workflow.
          </div>
        </div>
      ),
    },
    {
      q: "How do you pick colleges in the College Predictor and should I rely on them for counseling?",
      a: (
        <div className="space-y-3">
          <p>
            The college suggestions are illustrative — we map percentile ranges to representative colleges you might
            expect to see in historical cutoffs (IITs/NITs/IIITs/state colleges/private colleges).
          </p>

          <p>
            Use this to shortlist and then verify using JoSAA cutoffs and institute-specific data during counseling.
          </p>

          <ul className="list-disc pl-5 text-sm text-foreground/80">
            <li>Start with our shortlist.</li>
            <li>Then consult official cutoff tables and mock seat allocation tools before final decisions.</li>
          </ul>
        </div>
      ),
    },
    {
      q: "Do you store my data and how is privacy handled?",
      a: (
        <div className="space-y-3">
          <p>
            We keep things simple and private by default. You don’t need to create an account to use the predictors and we
            don’t persist inputs in this demo unless you explicitly opt in to a save feature.
          </p>

          <p>
            If we add OTP or account features later we’ll make data handling explicit (opt-in, exportable, and deletable).
          </p>

          <div className="rounded-md bg-accent/20 p-3 text-sm">
            Quick privacy tip: avoid pasting sensitive information into demos. If you later enable saved scenarios, you’ll
            be able to manage them in your account.
          </div>
        </div>
      ),
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="mx-auto max-w-6xl px-4 py-12" aria-labelledby="faqs-heading">
      <h2 id="faqs-heading" className="mb-6 text-balance text-2xl font-semibold">
        Frequently asked questions
      </h2>

      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => {
          const open = openIndex === i
          return (
            <div key={f.q} className="rounded-lg border bg-card">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-body-${i}`}
                className="w-full text-left px-5 py-4 font-semibold flex items-center justify-between hover:bg-accent/10 transition-colors"
                onClick={() => setOpenIndex(open ? null : i)}
              >
                <span className="text-lg">{f.q}</span>
                <svg
                  className={`h-5 w-5 ml-4 transform transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                id={`faq-body-${i}`}
                role="region"
                className={`px-5 pb-4 transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${
                  open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-2 pb-1 text-sm text-foreground/80">{f.a}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ
