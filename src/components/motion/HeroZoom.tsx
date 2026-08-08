"use client"
import * as React from "react"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { siteConfig } from "@/config/site"

export function HeroZoom() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--canvas)] py-[var(--space-8)]">
      <div className="relative z-10 w-full">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <Eyebrow align="center">
              Meta ad creative for U.S. DTC brands
            </Eyebrow>
            <h1 className="type-hero">
              12 ads. No shoot.
            </h1>
            <p className="type-body measure mx-auto mt-[var(--space-3)]">
              Four concepts. Twelve launch-ready Meta ads. Every month.
            </p>
            <div className="mt-[var(--space-4)] flex w-full flex-col justify-center gap-[var(--space-2)] sm:w-auto sm:flex-row">
              <Button href={siteConfig.links.booking} variant="primary">
                Book a 20-min fit call
              </Button>
              <Button href="/#work" variant="outline">
                See the work
              </Button>
            </div>
            <p className="mt-[var(--space-3)] text-[length:var(--type-ui)] text-[var(--muted)]">
              $2,500/mo. You keep the media buying.
            </p>
          </div>
        </Container>
      </div>
    </section>
  )
}
