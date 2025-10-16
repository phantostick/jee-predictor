"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  const nav = [
    { href: "/", label: "Home" },
    { href: "/percentile-predictor", label: "Percentile Predictor" },
    { href: "/college-predictor", label: "College Predictor" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="jeePredictor.com Home">
          <div
            className="h-7 w-7 rounded-md ring-1 ring-border"
            style={{
              background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)",
            }}
            aria-hidden="true"
          />
          <span className="text-lg font-semibold tracking-tight text-balance">jeePredictor.com</span>
        </Link>

        <nav className="flex items-center gap-1 md:gap-2">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground/80 hover:text-foreground hover:bg-accent",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
