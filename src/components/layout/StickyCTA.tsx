"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/config/site"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return

      const scrollY = window.scrollY
      const vh = window.innerHeight
      const scrollHeight = document.documentElement.scrollHeight
      const isNearBottom = scrollY + vh >= scrollHeight - 200

      setIsVisible(scrollY > vh * 0.8 && !isNearBottom)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  if (isDismissed) return null

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-40 transition-all duration-300 ease-in-out sm:hidden ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-20 opacity-0"
      }`}
    >
      <div className="flex items-center justify-between gap-[var(--space-2)] rounded-[var(--radius-control)] border border-[var(--line)] bg-[var(--canvas)]/95 p-[var(--space-2)] shadow-2xl backdrop-blur-md">
        <Button
          href={siteConfig.links.booking}
          variant="primary"
          className="flex-1 justify-center"
        >
          Book a call
        </Button>
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="flex h-11 w-11 shrink-0 items-center justify-center text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          aria-label="Dismiss booking shortcut"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  )
}
