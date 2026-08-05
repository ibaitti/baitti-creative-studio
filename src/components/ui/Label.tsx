import * as React from "react"

/**
 * A real form label. For section eyebrows use `Eyebrow`, which renders a
 * span instead of a <label> and therefore does not claim to label a field.
 */
export function Label({
  className = "",
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={`field-label ${className}`.trim()} {...props}>
      {children}
    </label>
  )
}
