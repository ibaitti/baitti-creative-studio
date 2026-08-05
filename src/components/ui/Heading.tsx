import * as React from "react"

/**
 * `lg` and `md` intentionally resolve to the same section scale: the design
 * system allows exactly one section-heading size per breakpoint. Both keys
 * are kept so existing callers keep compiling.
 */
export function Heading({
  as: Component = "h2",
  size = "md",
  className = "",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: "xl" | "lg" | "md" | "sm"
  className?: string
  children: React.ReactNode
}) {
  const sizes = {
    xl: "type-hero",
    lg: "type-section",
    md: "type-section",
    sm: "type-item",
  }

  return (
    <Component
      className={`font-sans text-[var(--ink)] ${sizes[size]} ${className}`.trim()}
    >
      {children}
    </Component>
  )
}
