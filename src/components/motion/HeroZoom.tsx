"use client"
import * as React from "react"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { siteConfig } from "@/config/site"


export function HeroZoom() {
  return (
    <section className="relative flex min-h-[calc(100svh-var(--header-h))] w-full items-center justify-center overflow-hidden bg-[var(--canvas)] py-[var(--space-8)]">
      <div className="relative z-10 w-full">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <Eyebrow align="center" className="text-[var(--accent)] font-bold">
              AI-NATIVE META AD STUDIO FOR DTC BRANDS
            </Eyebrow>
            <h1 className="type-hero">
              Campaign-scale creative. Zero shoot stress.
            </h1>
            <p className="type-body measure mx-auto mt-[var(--space-3)] font-medium">
              4 concepts. 12 launch-ready Meta ads. $2,500/mo. If 1 ad doesn't beat your best CTR, you get 100% of your money back and keep all 12 ads.
            </p>
            <div className="mt-[var(--space-4)] flex w-full flex-col justify-center gap-[var(--space-2)] sm:w-auto sm:flex-row">
              <Button href={siteConfig.links.booking} variant="primary">
                Book a 20-min fit call
              </Button>
              <Button href="/#work" variant="outline">
                See the work
              </Button>
            </div>
            <p className="mt-[var(--space-3)] text-[length:var(--type-ui)] text-[var(--muted)] font-medium">
              $2,500/mo. Month to month. Backed by the Winning Ad Guarantee.
            </p>
          </div>
        </Container>
      </div>
    </section>
  )
}
