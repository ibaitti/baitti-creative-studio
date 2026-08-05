"use client"
import * as React from "react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { siteConfig } from "@/config/site"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroZoom() {
  const containerRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current || !textRef.current || !mediaRef.current) return

    // Scroll-linked zoom is an enhancement. Under reduced motion nothing runs
    // and the markup's own static state is what the visitor sees.
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        },
      })

      tl.to(
        textRef.current,
        { scale: 0.5, opacity: 0, yPercent: -20, ease: "power2.inOut" },
        0
      )

      tl.fromTo(
        mediaRef.current,
        { scale: 1.5, filter: "blur(20px)", opacity: 0 },
        { scale: 1, filter: "blur(8px)", opacity: 1, ease: "power2.inOut" },
        0
      )
    })

    return () => mm.revert()
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[var(--canvas)]"
    >
      {/* Decorative. No opacity-0 in markup, so this is still visible with JS
          disabled or motion reduced. */}
      <div
        ref={mediaRef}
        className="motion-reveal pointer-events-none absolute inset-0 z-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
        aria-hidden="true"
      >
        <Image
          src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=2000"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover blur-[8px]"
        />
      </div>

      {/* Constant scrim: guarantees the headline stays readable whatever the
          media is doing. */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[var(--canvas)]/70"
        aria-hidden="true"
      />

      <div ref={textRef} className="relative z-10 w-full">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <Eyebrow align="center">
              AI-native ad creative production for U.S. DTC brands
            </Eyebrow>
            <h1 className="type-hero">
              Campaign-scale creative.
              <br />
              Without campaign-scale production.
            </h1>
            <p className="type-body measure mx-auto mt-[var(--space-3)]">
              Baitti Creative Studio turns product assets and customer insight into distinct concepts, then delivers campaign-scale, photorealistic Meta ads that are ready to launch—without organizing a traditional production shoot.
            </p>
            <div className="mt-[var(--space-4)] flex w-full flex-col justify-center gap-[var(--space-2)] sm:w-auto sm:flex-row">
              <Button href={siteConfig.links.booking} variant="primary">
                Book a 20-minute fit call
              </Button>
              <Button href="/#work" variant="outline">
                See the work
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
