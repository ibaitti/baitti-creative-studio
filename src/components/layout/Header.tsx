"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useLenis } from "lenis/react"
import { ScrollLink } from "@/components/ui/ScrollLink"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/config/site"

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#offer", label: "Offer" },
  { href: "/#fit", label: "Fit" },
  { href: "/#faq", label: "FAQ" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const lenis = useLenis()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Lock scrolling through Lenis. Setting body.overflow alone does not stop
  // Lenis, which drives scrolling itself.
  useEffect(() => {
    if (!isOpen) return
    lenis?.stop()
    document.body.style.overflow = "hidden"
    return () => {
      lenis?.start()
      document.body.style.overflow = ""
    }
  }, [isOpen, lenis])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-[var(--header-h)] bg-[var(--canvas)]/85 backdrop-blur-md border-b border-[var(--line)]">
        <Container className="flex h-[var(--header-h)] items-center justify-between">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center text-2xl font-bold tracking-tight"
            onClick={closeMenu}
          >
            Baitti.
          </Link>

          <nav className="hidden md:flex items-center gap-[var(--space-4)]">
            {NAV.map((item) => (
              <ScrollLink
                key={item.href}
                href={item.href}
                className="inline-flex min-h-[44px] items-center text-[length:var(--type-ui)] font-medium transition-colors hover:text-[var(--accent-text)]"
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>

          <div className="flex items-center gap-[var(--space-2)]">
            <Button
              href={siteConfig.links.booking}
              variant="primary"
              className="hidden sm:inline-flex"
            >
              Book a 20-minute fit call
            </Button>
            <button
              ref={buttonRef}
              type="button"
              className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`block h-0.5 w-6 bg-[var(--ink)] transition-transform ${isOpen ? "translate-y-[4px] rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-[var(--ink)] transition-transform ${isOpen ? "-translate-y-[4px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </Container>

        {/* Only mounted while open, so its links are never focusable and the
            dialog is never announced when closed. */}
        {isOpen && (
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute left-0 top-[var(--header-h)] w-full border-b border-[var(--line)] bg-[var(--canvas)] md:hidden"
          >
            <nav className="flex flex-col gap-[var(--space-2)] p-[var(--space-3)]">
              {NAV.map((item) => (
                <ScrollLink
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-[44px] items-center text-xl font-medium transition-colors hover:text-[var(--accent-text)]"
                  onClick={closeMenu}
                >
                  {item.label}
                </ScrollLink>
              ))}
              <div className="border-t border-[var(--line)] pt-[var(--space-3)]">
                <Button
                  href={siteConfig.links.booking}
                  variant="primary"
                  className="w-full justify-center"
                  onClick={closeMenu}
                >
                  Book a 20-minute fit call
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}
