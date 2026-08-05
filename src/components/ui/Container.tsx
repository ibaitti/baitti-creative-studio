import * as React from "react"

export function Container({ className = "", children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`mx-auto max-w-[var(--container)] px-[var(--gutter)] ${className}`}>
      {children}
    </div>
  )
}
