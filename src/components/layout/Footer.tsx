import * as React from "react"
import Link from "next/link"
import { ScrollLink } from "@/components/ui/ScrollLink"
import { Container } from "@/components/ui/Container"
import { siteConfig } from "@/config/site"

const LINKS = [
  { href: "/", label: "Home", scroll: false },
  { href: "/#work", label: "Work", scroll: true },
  { href: "/#process", label: "Process", scroll: true },
  { href: "/#offer", label: "Offer", scroll: true },
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
        <div className="flex flex-col items-start justify-between gap-[var(--space-4)] md:flex-row md:items-center">
        <div className="space-y-[var(--space-1)]">
          <p className="text-[length:var(--type-ui)] text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Baitti Creative Studio.
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
              <span>[PENDING: contact email]</span>
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
        <div className="border-t border-[var(--line)] pt-[var(--space-4)]">
          <p className="type-body text-[length:var(--type-ui)] text-[var(--muted)] max-w-4xl">
            Baitti Creative Studio provides ad creative production only. Clients control claims, approvals, launching, and media buying. No advertising, revenue, ROAS, CPA, ad-approval, or business result is guaranteed.
          </p>
        </div>
      </Container>
    </footer>
  )
}
