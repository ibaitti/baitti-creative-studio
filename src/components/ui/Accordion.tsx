"use client"

import * as React from "react"
import { Sparkle } from "lucide-react"

interface AccordionItem {
  id: string
  question: string
  answer: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  defaultOpenId?: string
  className?: string
}

/**
 * One panel open at a time. The trigger fills the row so the whole row is
 * clickable, the icon is drawn with SVG rather than a text glyph, and the
 * open and closed states share the same visual treatment - only the vertical
 * bar of the plus fades out.
 */
export function Accordion({
  items,
  defaultOpenId,
  className = "",
}: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(
    defaultOpenId || null
  )

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className={`w-full border-t border-[var(--line)] ${className}`.trim()}>
      {items.map((item) => {
        const isOpen = openId === item.id

        return (
          <div key={item.id} className="border-b border-[var(--line)]">
            <h3>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="faq-trigger group"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${item.id}`}
              >
                <span className="type-item pr-4 transition-colors group-hover:text-[var(--accent-text)]">
                  {item.question}
                </span>
                <span className="faq-icon transition-colors group-hover:border-[var(--accent-text)] group-hover:text-[var(--accent-text)]">
                  <Sparkle
                    className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={`accordion-content-${item.id}`}
              hidden={!isOpen}
              className="pb-[var(--space-3)]"
            >
              <p className="type-body measure">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
