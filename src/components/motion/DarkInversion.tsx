"use client"
import * as React from "react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Container } from "@/components/ui/Container"

/**
 * Content reveal for the Honest Filter.
 *
 * The section no longer paints its own background: it sits inside the page's
 * single dark zone so the dark surface runs unbroken into the footer. The
 * previous clip-path circle necessarily clipped that background and produced
 * a visible seam, so only the staggered content reveal is kept, and it is
 * skipped entirely when motion is reduced.
 */
export function DarkInversion({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!sectionRef.current || !contentRef.current) return

    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        contentRef.current!.children,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      )
    })

    return () => mm.revert()
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-[var(--space-8)]">
      <Container>
        <div ref={contentRef} className="motion-reveal max-w-3xl">
          {children}
        </div>
      </Container>
    </section>
  )
}
