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
    title: "Research-led direction",
    desc: "Research covering your product, customer language, offer, competitors, current ads, available assets, and performance feedback you can provide.",
  },
  {
    title: "Four materially different concepts",
    desc: "Four distinct creative directions—not recolored or lightly edited variations of the same idea.",
  },
  {
    title: "Three executions per concept",
    desc: "Each approved concept is developed into three executions, producing twelve total ads.",
  },
  {
    title: "Fit-based format mix",
    desc: "A mix of short-form video, static, and carousel creative selected according to the approved concepts, product, available assets, and intended placements.",
  },
  {
    title: "Creative strategy sheet",
    desc: "A clear record of the audience insight, hypothesis, format, required proof, and intended learning behind each concept.",
  },
  {
    title: "Two-batch delivery",
    desc: "Twelve ads delivered in two batches of six, with one consolidated revision round included for each batch.",
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
            // Reaches its final clear state well before the item leaves the
            // readable band, so nothing stays blurred once active.
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
      id="offer"
      ref={sectionRef}
      className="relative bg-[var(--surface)] py-[var(--space-8)]"
    >
      <Container className="relative flex flex-col md:flex-row">
        {/* Sticky panel: eyebrow, heading, price, terms, primary CTA. */}
        <div className="mb-[var(--space-6)] md:mb-0 md:w-1/3">
          <div ref={leftRef} className="md:pt-[var(--space-6)]">
            <Eyebrow>12-Ad Creative Sprint</Eyebrow>
            <Heading as="h2" size="lg">
              Four concepts. Twelve launch-ready ads.
            </Heading>
            <p className="type-body mt-[var(--space-3)]">
              For U.S. DTC brands that need more ad creative but do not want the cost and logistics of repeated shoots, Baitti Creative Studio develops four distinct concepts and delivers twelve photorealistic, launch-ready Meta ads.
            </p>

            <div className="mt-[var(--space-4)] border-t border-[var(--line)] pt-[var(--space-3)]">
              <p className="flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight text-[var(--ink)]">
                  $2,500
                </span>
                <span className="text-[length:var(--type-body)] text-[var(--muted)]">
                  / month
                </span>
              </p>
              <p className="mt-[var(--space-1)] text-[length:var(--type-eyebrow)] uppercase tracking-[0.14em] text-[var(--muted)]">
                Month-to-month &bull; Paid upfront
              </p>
            </div>

            <div className="mt-[var(--space-3)]">
              <Button href={siteConfig.links.booking} variant="primary">
                Book a 20-minute fit call
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:w-2/3 md:pl-[var(--space-7)]">
          <div className="flex flex-col gap-[var(--space-8)]">
            {offerItems.map((item, i) => (
              <div key={item.title} className="relative">
                {/* Ghost numeral: consistent size, opacity and offset for all
                    six, and clipped by the wrapper so it cannot overflow. */}
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

          <div className="mt-[var(--space-8)] border-t border-[var(--line)] pt-[var(--space-5)]">
            <div className="space-y-[var(--space-4)]">
              <div>
                <Heading as="h4" size="sm">Included Scope</Heading>
                <p className="type-body mt-2 text-[var(--muted)]">
                  The sprint includes research, concept development, hooks, scripts, storyboards, headlines, primary-copy recommendations, production, editing, captions, strategy notes, and the format adaptations required for the approved concepts.
                </p>
              </div>
              <div>
                <Heading as="h4" size="sm">Scope Boundary</Heading>
                <p className="type-body mt-2 text-[var(--muted)]">
                  The service does not include media buying, campaign setup, ad-account management, website production, organic social management, or guaranteed advertising performance.
                </p>
              </div>
              <div>
                <Heading as="h4" size="sm">External Costs</Heading>
                <p className="type-body mt-2 text-[var(--muted)]">
                  Creator fees, product shipping, licensed assets, voice talent, and other approved external production costs are separate when required. No external cost is committed without client approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
