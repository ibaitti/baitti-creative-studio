"use client"

import * as React from "react"
import Link from "next/link"

import { ScrollLink } from "@/components/ui/ScrollLink"
import { Container } from "@/components/ui/Container"
import { siteConfig } from "@/config/site"

const LINKS = [
  { href: "/#work", label: "Work", scroll: true },
  { href: "/#pricing", label: "Pricing", scroll: true },
  { href: "/#fit", label: "Fit", scroll: true },
  { href: "/#faq", label: "FAQ", scroll: true },
  { href: "/privacy", label: "Privacy", scroll: false },
  { href: "/terms", label: "Terms", scroll: false },
]

export function Footer() {
  const email = siteConfig.links.contactEmail

  return (
    <footer className="dark-zone border-t border-[var(--line)] py-[var(--space-6)]">
      <Container className="flex flex-col gap-[var(--space-6)]">
        {/* Links and Contact / Copyright */}
        <div className="flex flex-col items-start justify-between gap-[var(--space-4)] md:flex-row md:items-center">
          <div className="space-y-[var(--space-1)]">
            <p className="text-[length:var(--type-ui)] text-[var(--muted)]">
              &copy; 2026 Baitti Creative Studio
            </p>
            <p className="text-[length:var(--type-ui)] text-[var(--muted)]">
              {email ? (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-[44px] items-center transition-colors hover:text-[var(--ink)]"
                >
                  {email}
                </a>
              ) : (
                <span>[Email] &bull; [Postal address]</span>
              )}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-[var(--space-4)] gap-y-[var(--space-1)]">
            {LINKS.map((link) =>
              link.scroll ? (
                <ScrollLink
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center text-[length:var(--type-ui)] font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center text-[length:var(--type-ui)] font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </Container>
    </footer>
  )
}

