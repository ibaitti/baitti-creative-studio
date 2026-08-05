import * as React from "react"

export function Textarea({
  className = "",
  rows = 3,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      rows={rows}
      className={`field-input field-textarea ${className}`.trim()}
      {...props}
    />
  )
}
