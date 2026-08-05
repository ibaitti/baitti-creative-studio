"use client"
import * as React from "react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Container } from "@/components/ui/Container"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SystemReveal({
  leftContent,
  rightItems,
}: {
  leftContent: React.ReactNode
  rightItems: React.ReactNode[]
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const bgNumbersRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    if (!sectionRef.current) return

    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftRef.current,
      })

      itemsRef.current.forEach((item, i) => {
        if (!item) return
        const bgNumber = bgNumbersRef.current[i]

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        })

        tl.fromTo(
          item,
          { opacity: 0.2, filter: "blur(10px)", y: 50 },
          { opacity: 1, filter: "blur(0px)", y: 0, ease: "power2.out" },
          0
        )

        if (bgNumber) {
          tl.fromTo(
            bgNumber,
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 0.06, ease: "power2.out" },
            0
          )
        }
      })
    })

    return () => mm.revert()
  }, { scope: sectionRef })

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-[var(--surface)] py-[var(--space-8)]"
    >
      <Container className="relative flex flex-col md:flex-row">
        <div className="mb-[var(--space-6)] md:mb-0 md:w-1/3">
          <div ref={leftRef} className="md:pt-[var(--space-6)]">
            {leftContent}
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-8)] md:w-2/3 md:pl-[var(--space-7)]">
          {rightItems.map((item, i) => (
            <div key={i} className="relative">
              {/* Ghost numeral. Matches OfferReveal's zero-padded format so
                  the two sections read as one system. */}
              <div
                ref={(el) => {
                  bgNumbersRef.current[i] = el
                }}
                aria-hidden="true"
                className="pointer-events-none absolute -left-2 -top-10 select-none text-[clamp(6rem,14vw,12rem)] font-bold leading-none text-[var(--accent)]"
                style={{ opacity: 0.06 }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div
                ref={(el) => {
                  itemsRef.current[i] = el
                }}
                className="motion-reveal relative z-10"
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
