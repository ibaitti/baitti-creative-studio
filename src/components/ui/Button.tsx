import * as React from "react"
import Link from "next/link"
import { ScrollLink } from "@/components/ui/ScrollLink"

export function Button({
  className = "",
  variant = "primary",
  href,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline"
  href?: string
}) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center rounded-[var(--radius-control)] px-6 py-3 font-sans text-[length:var(--type-ui)] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-text)]"

  const variants = {
    primary: "bg-[var(--accent)] text-[var(--accent-ink)] hover:bg-[var(--accent)]/90",
    secondary: "bg-[var(--ink)] text-[var(--canvas)] hover:bg-[var(--ink)]/90",
    outline:
      "border border-[var(--border-strong)] text-[var(--ink)] hover:border-[var(--ink)]",
  }

  const classNames = `${base} ${variants[variant]} ${className}`.trim()

  if (href) {
    if (href.startsWith("/#") || href.startsWith("#")) {
      // Normalise a bare hash to a root-relative one so the link also works
      // from /work/[slug], /privacy and /terms.
      const normalizedHref = href.startsWith("#") ? `/${href}` : href
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const linkProps = props as any
      return (
        <ScrollLink href={normalizedHref} className={classNames} {...linkProps}>
          {children}
        </ScrollLink>
      )
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const linkProps = props as any
    return (
      <Link href={href} className={classNames} {...linkProps}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}
