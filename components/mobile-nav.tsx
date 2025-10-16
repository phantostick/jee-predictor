"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export function MobileNav() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      href: "/percentile-predictor",
      label: "Percentile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      ),
    },
    {
      href: "/college-predictor",
      label: "College",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M2 22V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v15" />
          <path d="M2 17h20" />
          <path d="M12 2v5" />
          <path d="M7 15v2" />
          <path d="M17 15v2" />
          <path d="M12 15v2" />
        </svg>
      ),
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background pb-safe md:hidden">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-1 rounded-md p-2 relative ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-md bg-primary/10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}