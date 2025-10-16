import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileNav } from "@/components/mobile-nav"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "jeePredictor.com — JEE Main predictor, percentile & rank estimator",
  description: "JEE Main predictor and JEE Advanced estimator — predict your JEE percentile, estimate rank, and explore college options (IIT, NIT, IIIT, state engineering colleges). Fast, free, and student-focused.",
  generator: "v0.app",
  openGraph: {
    title: "jeePredictor.com",
    description: "Predict your JEE Percentile and find the colleges you can get into — fast and simple!",
    url: "https://jeepredictor.com",
    siteName: "jeePredictor.com",
    images: [
      {
        url: "https://jeepredictor.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "jeePredictor preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "jeePredictor.com",
    description: "Predict your JEE Percentile and find the colleges you can get into — fast and simple!",
    images: ["https://jeepredictor.com/og-image.svg"],
  },
  alternates: {
    canonical: "https://jeepredictor.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SiteHeader />
          <main className="min-h-[calc(100vh-12rem)] pb-24 md:pb-16">{children}</main>
          <SiteFooter />
          <MobileNav />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
