import * as React from "react"

/**
 * The single eyebrow treatment for every section label.
 *
 * Renders a span (or p) rather than a heading, so section labels never
 * compete with the h1/h2/h3 outline. Styling lives in globals.css under
 * `.eyebrow` so there is exactly one definition of the treatment.
 */
export function Eyebrow({
  as: Component = "span",
  align = "left",
  className = "",
  children,
}: {
  as?: "span" | "p"
  align?: "left" | "center"
  className?: string
  children: React.ReactNode
}) {
  return (
    <Component
      className={`eyebrow${align === "center" ? " eyebrow--center" : ""} ${className}`.trim()}
    >
      {children}
    </Component>
  )
}
