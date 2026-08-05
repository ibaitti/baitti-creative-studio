"use client"
import * as React from "react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Heading"
import { Eyebrow } from "@/components/ui/Eyebrow"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export type TimelineItem = { title: string; subtitle: string; desc: string }

export function TimelineConveyor({ items }: { items: TimelineItem[] }) {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLOListElement>(null)

  useGSAP(() => {
    if (!sectionRef.current || !trackRef.current) return
    const track = trackRef.current

    const mm = gsap.matchMedia()
    mm.add("(min-width: 1024px)", () => {
      // Calculate how far to move left
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth
        const containerWidth = sectionRef.current?.clientWidth || window.innerWidth
        return Math.max(0, trackWidth - containerWidth + 64) // 64 for some padding
      }

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
      })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      })

      return () => {
        tween.kill()
      }
    })

    return () => mm.revert()
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="bg-[var(--surface)] py-[var(--space-8)] overflow-hidden">
      <Container>
        <Eyebrow>From readiness to delivery</Eyebrow>
        <Heading as="h2" size="lg">
          Two batches. Clear approval gates.
        </Heading>

        <div className="relative mt-[var(--space-6)]">
          <ol
            ref={trackRef}
            tabIndex={0}
            aria-label="Timeline from signup to live ads"
            className="timeline-track flex list-none flex-col gap-[var(--space-5)] p-0 lg:flex-row lg:gap-10 lg:flex-nowrap lg:w-max"
          >
            {items.map((item, i) => (
              <li
                key={item.subtitle}
                className="relative shrink-0 basis-auto lg:w-[22rem] lg:pr-[var(--space-5)]"
              >
                <span className="timeline-stage">{item.subtitle}</span>
                <Heading as="h3" size="sm">
                  {item.title}
                </Heading>
                <p className="type-body mt-[var(--space-2)] max-w-[34ch]">
                  {item.desc}
                </p>
                <span className="sr-only">
                  {`Stage ${i + 1} of ${items.length}`}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-[var(--space-8)] border-t border-[var(--line)] pt-[var(--space-5)]">
          <div className="grid grid-cols-1 gap-[var(--space-5)] md:grid-cols-2">
            <div>
              <Heading as="h4" size="sm">Feedback and Revisions</Heading>
              <p className="type-body mt-2 text-[var(--muted)]">
                The client provides one consolidated response within 48 hours of each batch. Each batch includes one in-scope consolidated revision round.
              </p>
            </div>
            <div>
              <Heading as="h4" size="sm">Monthly Review</Heading>
              <p className="type-body mt-2 text-[var(--muted)]">
                At the end of the service month, we review what was delivered, accepted, and launched, together with available performance signals, revisions, delays, and client feedback. Those inputs inform the next creative cycle without claiming causality from incomplete ad-account data.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
