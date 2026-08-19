"use client"
import * as React from "react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Heading"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/config/site"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const offerItems = [
  {
    title: "Research & customer insight",
    desc: "We analyze your product, customer language, offer, competitors, and live Meta ads.",
  },
  {
    title: "4 distinct concepts",
    desc: "4 materially different creative directions. Not 1 idea recolored.",
  },
  {
    title: "12 launch-ready ads",
    desc: "3 executions per concept across video (9:16), static (4:5), and carousel (1:1).",
  },
  {
    title: "Creative strategy sheet",
    desc: "Full breakdown of insight, hypothesis, proof, and intended learnings for every ad.",
  },
  {
    title: "2-batch delivery",
    desc: "6 ads in 14 business days, 6 ads 2 weeks later. 1 consolidated revision round per batch.",
  },
  {
    title: "The Winning Ad Guarantee",
    desc: "If 1 ad in your first batch doesn't beat your account's best CTR or hook rate baseline, you get 100% of your money back and keep all 12 ads.",
  },
]

export function OfferReveal() {
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
            start: "top 75%",
            end: "top 45%",
            scrub: 1,
          },
        })

        tl.fromTo(
          item,
          { opacity: 0.25, filter: "blur(8px)", y: 40 },
          { opacity: 1, filter: "blur(0px)", y: 0, ease: "power2.out" },
          0
        )

        if (bgNumber) {
          tl.fromTo(
            bgNumber,
            { scale: 0.6, opacity: 0 },
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
      id="pricing"
      ref={sectionRef}
      className="relative bg-[var(--surface)] py-[var(--space-8)]"
    >
      <Container className="relative flex flex-col md:flex-row">
        {/* Sticky panel: eyebrow, heading, price, terms, primary CTA. */}
        <div className="mb-[var(--space-6)] md:mb-0 md:w-1/3">
          <div ref={leftRef} className="md:pt-[var(--space-6)]">
            <Eyebrow className="text-[var(--accent)] font-bold">12-AD CREATIVE SPRINT</Eyebrow>
            <Heading as="h2" size="lg">
              $2,500/month.
            </Heading>
            <p className="type-body mt-[var(--space-3)] font-medium">
              4 concepts. 12 launch-ready ads. No contract. First month paid upfront.
            </p>
            <p className="type-body text-xs text-[var(--muted)] mt-2">
              Compare to traditional shoot production ($8,000 to $15,000/mo).
            </p>

            <div className="mt-[var(--space-4)] p-3 rounded border border-[var(--accent)]/30 bg-[var(--accent)]/5">
              <p className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Fast Action Bonus</p>
              <p className="text-xs text-[var(--ink)] mt-1">Sign within 7 days of call: Free 3-competitor ad teardown.</p>
            </div>

            <div className="mt-[var(--space-4)]">
              <Button href={siteConfig.links.booking} variant="primary">
                Book a fit call
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:w-2/3 md:pl-[var(--space-7)]">
          <div className="flex flex-col gap-[var(--space-8)]">
            {offerItems.map((item, i) => (
              <div key={item.title} className="relative">
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
                  <Heading as="h3" size="sm">
                    {item.title}
                  </Heading>
                  <p className="type-body measure mt-[var(--space-2)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra costs */}
          <div className="mt-[var(--space-8)] border-t border-[var(--line)] pt-[var(--space-6)] space-y-[var(--space-4)]">
            <div>
              <p className="type-body text-[var(--ink)] font-semibold">
                Extra costs:
              </p>
              <p className="type-body text-[var(--muted)] mt-1">
                Creator fees, shipping, licensed assets, and voice talent are billed separately after your approval.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
