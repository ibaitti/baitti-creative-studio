import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Heading"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { Button } from "@/components/ui/Button"
import { MediaFrame } from "@/components/ui/MediaFrame"
import { Accordion } from "@/components/ui/Accordion"
import { ContactForm } from "@/components/forms/ContactForm"
import { siteConfig } from "@/config/site"
import { projects } from "@/data/work"

import { HeroZoom } from "@/components/motion/HeroZoom"
import { SystemReveal } from "@/components/motion/SystemReveal"
import { TimelineConveyor } from "@/components/motion/TimelineConveyor"
import { DarkInversion } from "@/components/motion/DarkInversion"
import { OfferReveal } from "@/components/motion/OfferReveal"

export default function Home() {
  const systemLeftContent = (
    <div>
      <Eyebrow>How it works</Eyebrow>
      <Heading as="h2" size="lg">
        Three steps.
      </Heading>
    </div>
  )

  const systemRightItems = [
    <div key="research">
      <Heading as="h3" size="sm">
        01 Research
      </Heading>
      <p className="type-body measure mt-[var(--space-2)]">
        Your product, reviews, offer, ads, competitors. We write down what we know and what we don't.
      </p>
    </div>,
    <div key="concept">
      <Heading as="h3" size="sm">
        02 Concepts
      </Heading>
      <p className="type-body measure mt-[var(--space-2)]">
        Four different ideas. You approve before we build.
      </p>
    </div>,
    <div key="launch">
      <Heading as="h3" size="sm">
        03 Production
      </Heading>
      <p className="type-body measure mt-[var(--space-2)]">
        Three executions each. Twelve ads with strategy notes.
      </p>
    </div>,
  ]

  const timelineItems = [
    {
      title: "01 Green light",
      subtitle: "STEP 1",
      desc: "Agreement signed, payment cleared, files and claims in, one decision-maker named. Missing inputs pause the clock.",
    },
    {
      title: "02 Concepts",
      subtitle: "STEP 2",
      desc: "Four concepts with hooks, scripts, storyboards, and production plans.",
    },
    {
      title: "03 Your approval",
      subtitle: "STEP 3",
      desc: "One consolidated response. Change direction after this and scope changes too.",
    },
    {
      title: "04 Batch 1",
      subtitle: "STEP 4",
      desc: "Six ads. Targeted within 14 business days of green light.",
    },
    {
      title: "05 Batch 2",
      subtitle: "STEP 5",
      desc: "Six more, about two weeks later.",
    },
  ]

  const goodFitItems = [
    "U.S. DTC brand already running Meta ads",
    "A product you're actively pushing",
    "Visual product — scenes and styling sell it",
    "Your ads repeat, or take too long to make",
    "Product files, brand guidance, approved claims ready",
    "$2,500/mo is fundable",
    "You want creative, not a media buyer",
    "One person can approve",
  ]

  const notFitItems = [
    "Pre-launch, no proven demand",
    "You need media buying, a website, or guaranteed results",
    "You want free concepts before we talk",
    "Claims or results can't be shown honestly",
    "Asset rights are unclear",
    "Political, adult, or heavily regulated work",
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

      {/* Concept work */}
      <section id="work" className="py-[var(--space-8)]">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>The work</Eyebrow>
            <Heading as="h2" size="lg">
              Four concepts.
            </Heading>
            <p className="type-body measure mt-[var(--space-3)]">
              Spec projects. No clients, no results attached.
            </p>
          </div>

          <ul className="mt-[var(--space-7)] grid list-none grid-cols-1 gap-[var(--space-6)] p-0 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.slug} className="work-card">
                <Link
                  href={`/work/${project.slug}`}
                  className="group block rounded-[var(--radius-media)]"
                >
                  <MediaFrame aspectRatio="square" cursorAction="view">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="work-card__img object-cover blur-[4px] transition-[filter] duration-500 group-hover:blur-0 group-focus-within:blur-0"
                    />
                  </MediaFrame>
                  <div className="mt-[var(--space-2)]">
                    <Heading as="h3" size="sm">
                      {project.title}
                    </Heading>
                    <p className="timeline-stage mt-[var(--space-1)]">
                      {project.category} &bull; Spec project
                    </p>
                    <span className="work-card__reveal mt-[var(--space-1)] inline-block text-[length:var(--type-ui)] font-semibold text-[var(--accent-text)]">
                      View concept
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <SystemReveal
        leftContent={systemLeftContent}
        rightItems={systemRightItems}
      />

      <OfferReveal />

      <TimelineConveyor items={timelineItems} />

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
        <div id="fit">
          <DarkInversion>
            <Eyebrow>Honest fit</Eyebrow>
            <Heading as="h2" size="lg">
              Is this you?
            </Heading>
            
            <div className="mt-[var(--space-6)] grid grid-cols-1 gap-[var(--space-6)] md:grid-cols-2">
              <div>
                <Heading as="h3" size="sm">Yes if:</Heading>
                <ul className="mt-[var(--space-4)] list-none space-y-[var(--space-3)] p-0">
                  {goodFitItems.map((line, idx) => (
                    <li
                      key={idx}
                      className="type-body border-t border-[var(--line)] pt-[var(--space-3)] text-[var(--muted)]"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Heading as="h3" size="sm">No if:</Heading>
                <ul className="mt-[var(--space-4)] list-none space-y-[var(--space-3)] p-0">
                  {notFitItems.map((line, idx) => (
                    <li
                      key={idx}
                      className="type-body border-t border-[var(--line)] pt-[var(--space-3)] text-[var(--muted)]"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-[var(--space-6)] text-[length:var(--type-body)] text-[var(--muted)] font-medium">
              Second list? Don't book. We'd say no anyway.
            </p>
          </DarkInversion>
        </div>

        {/* Booking */}
        <section id="contact" className="py-[var(--space-8)]">
          <Container>
            <div className="grid grid-cols-1 gap-[var(--space-7)] md:grid-cols-2">
              <div>
                <Eyebrow>Next step</Eyebrow>
                <Heading as="h2" size="lg">
                  Twenty minutes.
                </Heading>
                <p className="type-body measure mt-[var(--space-3)]">
                  We find what's jamming your creative and say whether we fix it. If not, we end early.
                </p>
                <div className="mt-[var(--space-4)]">
                  <Button
                    href={siteConfig.links.booking}
                    variant="primary"
                    className="w-full justify-center sm:w-auto"
                  >
                    Book a 20-min fit call
                  </Button>
                </div>
                <p className="mt-[var(--space-3)] text-[length:var(--type-ui)] text-[var(--muted)]">
                  Mutual fit call. Not a free audit.
                </p>
              </div>

              <div className="border-t border-[var(--line)] pt-[var(--space-5)] md:border-l md:border-t-0 md:pl-[var(--space-6)] md:pt-0">
                <Heading as="h3" size="sm">
                  Book a call
                </Heading>
                <div className="mt-[var(--space-3)]">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ: same dark surface, left-aligned with the accordion. */}
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
                <Button href={siteConfig.links.booking} variant="primary">
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
