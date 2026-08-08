import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Heading"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { Button } from "@/components/ui/Button"
import { MediaFrame } from "@/components/ui/MediaFrame"
import { Accordion } from "@/components/ui/Accordion"
import { ContactForm } from "@/components/forms/ContactForm"
import { siteConfig } from "@/config/site"
import { motionVideos, rangeBlockData, beforeAfterData } from "@/data/work"

import { HeroZoom } from "@/components/motion/HeroZoom"
import { DarkInversion } from "@/components/motion/DarkInversion"
import { OfferReveal } from "@/components/motion/OfferReveal"

export default function Home() {

  const fitBullets = [
    "U.S. DTC brand already running Meta ads",
    "A visual product where scenes and styling sell it",
    "Your ads repeat, or take too long to make",
    "$2,500/mo is fundable and one person can approve",
  ]

  const faqItems = [
    {
      id: "run-ads",
      question: "Do you run the ads?",
      answer: "No. We make them. You buy the media.",
    },
    {
      id: "dont-like",
      question: "What if we hate the concepts?",
      answer: "You approve before production. One revision round per batch.",
    },
    {
      id: "why-twelve",
      question: "Why twelve?",
      answer: "One ad teaches you nothing. Four ideas, three ways each, gives you something to compare.",
    },
    {
      id: "how-different",
      question: "Why not a freelance editor?",
      answer: "Editors edit what you shot. We build the shoot.",
    },
    {
      id: "commitment",
      question: "What's the commitment?",
      answer: "Month to month. Renew when the work earns it.",
    },
    {
      id: "start-smaller",
      question: "Can we start smaller?",
      answer: "No. Twelve is the smallest batch you can read.",
    },
    {
      id: "external-costs",
      question: "Are extra costs included?",
      answer: "No. Creator fees, shipping, licensed assets, voice talent are separate and pre-approved.",
    },
    {
      id: "what-needed",
      question: "What do you need?",
      answer: "Files, brand guidance, approved claims, rights, and one decision-maker who replies in 48 hours.",
    },
    {
      id: "use-ai",
      question: "How do you use AI?",
      answer: "To build scenes and product visuals. Everything shown must be true, authorized, and match your evidence.",
    },
    {
      id: "guarantee",
      question: "Do you guarantee results?",
      answer: "No. We guarantee scope and delivery. The account is yours.",
    },
  ]

  return (
    <main className="flex-1">
      <HeroZoom />

      {/* ============================================================
          REBUILT "THE WORK" SECTION (#work)
          3 Stacked Content Blocks: Motion Row, Range Block, Before/After
          ============================================================ */}
      <section id="work" className="py-[var(--space-8)]">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>The work</Eyebrow>
            <Heading as="h2" size="lg">
              Concept executions.
            </Heading>
            <p className="type-body measure mt-[var(--space-3)]">
              Spec work. No clients or campaign results attached.
            </p>
          </div>

          <div className="mt-[var(--space-8)] space-y-[var(--space-8)]">
            {/* Block A — Motion Row */}
            <div className="border-t border-[var(--line)] pt-[var(--space-6)]">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-[var(--space-5)]">
                <div>
                  <span className="text-[length:var(--type-eyebrow)] uppercase tracking-widest font-semibold text-[var(--muted)]">
                    Block A — Motion Row
                  </span>
                  <Heading as="h3" size="md" className="mt-1">
                    Ad creative frames
                  </Heading>
                </div>
                <p className="text-[length:var(--type-ui)] text-[var(--muted)] max-w-md">
                  Vertical 9:16 and feed 4:5 formats built specifically for Meta performance campaigns.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-[var(--space-5)] sm:grid-cols-2 lg:grid-cols-3 items-start">
                {motionVideos.map((video) => (
                  <div key={video.id} className="group relative flex flex-col work-card">
                    <div className="overflow-hidden rounded-[var(--radius-media)]">
                      <div className={`relative w-full overflow-hidden ${video.aspectRatio === "9:16" ? "aspect-[9/16]" : "aspect-[4/5]"}`}>
                        {/* TODO: Replace video src with the corresponding real MP4 when available (e.g., /videos/ad-creative-1.mp4) */}
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          poster={video.poster}
                          className="work-card__img h-full w-full object-cover blur-[4px] transition-[filter] duration-500 group-hover:blur-0 group-focus-within:blur-0"
                        >
                          <source src={video.videoSrc} type="video/mp4" />
                        </video>
                      </div>
                    </div>

                    <div className="mt-3">
                      <h4 className="text-[length:var(--type-ui)] font-semibold text-[var(--ink)]">
                        {video.title}
                      </h4>
                      <p className="text-[length:var(--type-eyebrow)] uppercase tracking-wider text-[var(--muted)] mt-0.5">
                        {video.tag}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Block B — Range Block */}
            <div className="border-t border-[var(--line)] pt-[var(--space-6)]">
              <div className="max-w-3xl mb-[var(--space-6)]">
                <span className="text-[length:var(--type-eyebrow)] uppercase tracking-widest font-semibold text-[var(--muted)]">
                  Block B — Range Block
                </span>
                <Heading as="h3" size="md" className="mt-1 text-[length:var(--type-section)]">
                  {rangeBlockData.title}
                </Heading>
                <p className="type-body measure mt-[var(--space-2)]">
                  {rangeBlockData.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-[var(--space-6)] md:grid-cols-2">
                {rangeBlockData.scenes.map((scene) => (
                  <div key={scene.id} className="group flex flex-col work-card">
                    <MediaFrame aspectRatio="portrait" className="w-full" cursorAction="view">
                      <Image
                        src={scene.image}
                        alt={scene.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="work-card__img object-cover blur-[4px] transition-[filter] duration-500 group-hover:blur-0 group-focus-within:blur-0"
                      />
                    </MediaFrame>
                    <div className="mt-4 space-y-1">
                      <Heading as="h4" size="sm" className="text-[length:var(--type-item)]">
                        {scene.title}
                      </Heading>
                      <p className="text-[length:var(--type-ui)] text-[var(--muted)]">
                        <strong className="font-semibold text-[var(--ink)]">Lighting:</strong> {scene.lighting}
                      </p>
                      <p className="text-[length:var(--type-ui)] text-[var(--muted)]">
                        <strong className="font-semibold text-[var(--ink)]">Styling:</strong> {scene.styling}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Block C — Before/After Pair */}
            <div className="border-t border-[var(--line)] pt-[var(--space-6)]">
              <div className="max-w-3xl mb-[var(--space-6)]">
                <span className="text-[length:var(--type-eyebrow)] uppercase tracking-widest font-semibold text-[var(--muted)]">
                  Block C — Before & After
                </span>
                <Heading as="h3" size="md" className="mt-1">
                  The visual transformation
                </Heading>
                <p className="type-body measure mt-[var(--space-2)]">
                  Comparing raw studio product capture against full AI environmental scene generation.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-[var(--space-6)] md:grid-cols-2">
                {/* Before */}
                <div className="group flex flex-col work-card">
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10 rounded bg-[var(--surface)] px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--ink)] shadow-sm">
                      {beforeAfterData.before.label}
                    </div>
                    <MediaFrame aspectRatio="video" className="w-full overflow-hidden rounded-[var(--radius-media)]">
                      <Image
                        src={beforeAfterData.before.image}
                        alt={beforeAfterData.before.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="work-card__img object-cover blur-[4px] transition-[filter] duration-500 group-hover:blur-0 group-focus-within:blur-0"
                      />
                    </MediaFrame>
                  </div>
                  <div className="mt-4">
                    <Heading as="h4" size="sm">
                      {beforeAfterData.before.subtitle}
                    </Heading>
                    <p className="type-body mt-1 text-[length:var(--type-ui)] text-[var(--muted)]">
                      {beforeAfterData.before.description}
                    </p>
                  </div>
                </div>

                {/* After */}
                <div className="group flex flex-col work-card">
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10 rounded bg-[var(--accent)] px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                      {beforeAfterData.after.label}
                    </div>
                    <MediaFrame aspectRatio="video" className="w-full overflow-hidden rounded-[var(--radius-media)]">
                      <Image
                        src={beforeAfterData.after.image}
                        alt={beforeAfterData.after.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="work-card__img object-cover blur-[4px] transition-[filter] duration-500 group-hover:blur-0 group-focus-within:blur-0"
                      />
                    </MediaFrame>
                  </div>
                  <div className="mt-4">
                    <Heading as="h4" size="sm" className="text-[var(--accent-text)]">
                      {beforeAfterData.after.subtitle}
                    </Heading>
                    <p className="type-body mt-1 text-[length:var(--type-ui)] text-[var(--muted)]">
                      {beforeAfterData.after.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <OfferReveal />

      {/* About */}
      <section id="about" className="py-[var(--space-8)]">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Who we are</Eyebrow>
            <Heading as="h2" size="lg">
              Built, not shot.
            </Heading>
            <div className="mt-[var(--space-5)] space-y-[var(--space-4)]">
              <p className="type-body measure">
                A shoot buys you one day and one location. We build the scenes instead, so the fifth idea costs what the first did.
              </p>
              <p className="type-body measure">
                We run research to delivery. You keep claims, approvals, launch, and media buying.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          One continuous dark decision zone. It runs from here through
          the footer in layout.tsx with no interruption.
          ============================================================ */}
      <div className="dark-zone">
        {/* ============================================================
            STREAMLINED "HONEST FIT" SECTION (#fit)
            ============================================================ */}
        <div id="fit">
          <DarkInversion>
            <Eyebrow>Honest fit</Eyebrow>
            <Heading as="h2" size="lg">
              Is this you?
            </Heading>
            
            <div className="mt-[var(--space-6)] max-w-3xl">
              <ul className="list-none space-y-[var(--space-3)] p-0">
                {fitBullets.map((line, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 border-t border-[var(--line)] pt-[var(--space-3)] text-[length:var(--type-body)] text-[var(--muted)]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--dark-accent)]/15 text-sm font-bold text-[var(--dark-accent)]">
                      ✓
                    </span>
                    <span className="font-medium text-[var(--dark-ink)]">{line}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-[var(--space-6)] border-t border-[var(--line)] pt-[var(--space-4)] text-[length:var(--type-body)] text-[var(--muted)] leading-relaxed">
                Not a fit if you need media buying, a website, or guaranteed performance, or if the product claims can't be shown honestly.
              </p>
            </div>
          </DarkInversion>
        </div>

        {/* ============================================================
            HYBRID "BOOK A CALL" SECTION (#contact)
            ============================================================ */}
        <section id="contact" className="py-[var(--space-8)]">
          <Container>
            <div className="mb-[var(--space-6)] max-w-3xl">
              <Eyebrow>Next step</Eyebrow>
              <Heading as="h2" size="lg">
                Book a call
              </Heading>
              <p className="type-body measure mt-[var(--space-3)] text-[length:var(--type-body)] font-medium leading-relaxed text-[var(--dark-ink)]">
                Twenty minutes. We find what's jamming your creative and say whether we fix it. If not, we end early. Mutual fit call, not a free audit.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-[var(--space-7)] lg:grid-cols-12">
              {/* Direct Cal.com Link Option */}
              <div className="flex flex-col justify-between rounded-[var(--radius-media)] border border-[var(--dark-line)] bg-white/5 p-[var(--space-5)] lg:col-span-5">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--dark-accent)]/30 bg-[var(--dark-accent)]/10 px-3 py-1 text-[length:var(--type-eyebrow)] font-semibold uppercase tracking-wider text-[var(--dark-accent)]">
                    Direct Scheduling
                  </div>
                  <Heading as="h3" size="sm" className="mt-4 text-[var(--dark-ink)]">
                    Prefer to pick a time directly?
                  </Heading>
                  <p className="type-body mt-3 text-[length:var(--type-ui)] text-[var(--dark-muted)] leading-relaxed">
                    Skip the form and choose an open 20-minute slot directly on our calendar.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[var(--dark-line)]">
                  <Button
                    href={siteConfig.links.booking.startsWith("http") ? siteConfig.links.booking : "https://cal.com"}
                    variant="primary"
                    className="w-full justify-center text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book on Cal.com
                  </Button>
                </div>
              </div>

              {/* Intake Form Questions Option */}
              <div className="border-t border-[var(--dark-line)] pt-[var(--space-6)] lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-[var(--space-7)] lg:pt-0">
                <Heading as="h3" size="sm" className="mb-4 text-[var(--dark-ink)]">
                  Or request times via form
                </Heading>
                <ContactForm />
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ: same dark surface */}
        <section id="faq" className="pb-[var(--space-8)]">
          <Container>
            <div className="max-w-3xl">
              <Heading as="h2" size="lg">
                Questions.
              </Heading>
              <Accordion
                items={faqItems}
                className="mt-[var(--space-5)]"
              />
              <div className="mt-[var(--space-6)]">
                <Button href={siteConfig.links.booking.startsWith("http") ? siteConfig.links.booking : "https://cal.com"} variant="primary">
                  Book a 20-min fit call
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </main>
  )
}

