import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Heading"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { Button } from "@/components/ui/Button"
import { Accordion } from "@/components/ui/Accordion"
import { ContactForm } from "@/components/forms/ContactForm"
import { MediaFrame } from "@/components/ui/MediaFrame"
import { siteConfig } from "@/config/site"
import { projects } from "@/data/work"

import { HeroZoom } from "@/components/motion/HeroZoom"
import { DarkInversion } from "@/components/motion/DarkInversion"
import { OfferReveal } from "@/components/motion/OfferReveal"


export default function Home() {

  const bestFit = [
    "Running Meta ads right now ($10k+/mo spend).",
    "Visually demonstrable e-commerce product.",
    "Creative fatigue or slow production limiting your scale.",
    "Can commit $2,500/mo for high-volume creative.",
    "1 decision-maker who approves concepts within 48 hours.",
  ]

  const differentFit = [
    "You need media buying or ad account management.",
    "You need website development or landing pages.",
    "Pre-launch brands with 0 proven ad data.",
    "Want fake testimonials or unapproved claims.",
    "Looking for single 1-ad packages.",
  ]

  const faqItems = [
    {
      id: "guarantee",
      question: "What is the Winning Ad Guarantee?",
      answer: "If 1 ad in your first batch doesn't beat your account's best CTR or 3-second hook rate baseline, you get 100% of your money back for that batch and keep all 12 ads. Zero risk.",
    },
    {
      id: "run-ads",
      question: "Do you manage media buying?",
      answer: "No. We build the high-production creative. You run the ad account.",
    },
    {
      id: "dont-like",
      question: "What happens if a concept misses the mark?",
      answer: "You approve all 4 concepts before full production begins. You also get 1 consolidated revision round per batch.",
    },
    {
      id: "why-twelve",
      question: "Why 12 ads?",
      answer: "12 ads is the smallest batch to get clear ad account learnings. 4 distinct concepts, 3 executions each gives you real data to compare.",
    },
    {
      id: "how-different",
      question: "How is this different from hiring an editor?",
      answer: "Editors edit footage you shot. We build the entire shoot for you from scratch. We handle research, concepts, visual scenes, and final edits.",
    },
    {
      id: "commitment",
      question: "What is the commitment?",
      answer: "No contract. First month paid upfront. Renew when the performance earns it.",
    },
    {
      id: "start-smaller",
      question: "Can we start smaller than 12 ads?",
      answer: "No. 12 ads is the minimum batch needed to get reliable performance data on Meta.",
    },
    {
      id: "external-costs",
      question: "Which costs are billed separately?",
      answer: "Creator fees, product shipping, licensed assets, and voice talent. These are always pre-approved by you before any spending.",
    },
    {
      id: "what-needed",
      question: "What assets do you need from us?",
      answer: "Your product files, brand guidelines, approved claims, and 1 decision-maker who replies within 48 hours.",
    },
    {
      id: "use-ai",
      question: "How do you use AI?",
      answer: "We use AI to build photorealistic locations, backgrounds, and styling. Everything shown is truthful and matches your product facts.",
    },
    {
      id: "protect-claims",
      question: "How do you protect brand claims?",
      answer: "All claims and concepts pass through your direct approval before final delivery.",
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
              Ad concepts across pet, apparel, and DTC.
            </Heading>
            <p className="type-body measure mt-[var(--space-3)]">
              Built to show range, not attached to client results — yet.
            </p>
          </div>

          <ul className="mt-[var(--space-7)] grid list-none grid-cols-1 gap-[var(--space-6)] p-0 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.slug} className="work-card">
                <Link
                  href={`/work/${project.slug}`}
                  className="group block rounded-[var(--radius-media)]"
                >
                  <MediaFrame aspectRatio="square">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="work-card__img object-cover transition-transform duration-500 group-hover:scale-105"
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

      {/* About */}
      <section id="about" className="py-[var(--space-8)]">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow className="text-[var(--accent)] font-bold">HOW IT WORKS</Eyebrow>
            <Heading as="h2" size="lg">
              Built, not shot.
            </Heading>
            <div className="mt-[var(--space-5)] space-y-[var(--space-4)]">
              <p className="type-body measure">
                We handle the entire creative pipeline from research to final render. You get 4 distinct creative directions and 12 launch-ready ads for your Meta ad manager without organizing a crew or lifting a finger.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <OfferReveal />

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
            <Eyebrow className="text-[var(--accent)] font-bold">HONEST FIT</Eyebrow>
            <Heading as="h2" size="lg">
              Who this is for.
            </Heading>
            
            <div className="mt-[var(--space-6)] grid grid-cols-1 md:grid-cols-2 gap-[var(--space-6)] md:gap-[var(--space-8)]">
              <div>
                <Heading as="h3" size="sm" className="mb-[var(--space-4)] text-[var(--dark-ink)] uppercase tracking-wider text-xs font-bold">
                  Best Fit
                </Heading>
                <ul className="list-none space-y-[var(--space-3)] p-0">
                  {bestFit.map((line, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 border-t border-[var(--dark-line)] pt-[var(--space-3)] text-[length:var(--type-body)] text-[var(--muted)]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--dark-accent)]/15 text-sm font-bold text-[var(--dark-accent)]">
                        ✓
                      </span>
                      <span className="font-medium text-[var(--dark-ink)]">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <Heading as="h3" size="sm" className="mb-[var(--space-4)] text-[var(--dark-ink)] uppercase tracking-wider text-xs font-bold opacity-60">
                  Different Fit
                </Heading>
                <ul className="list-none space-y-[var(--space-3)] p-0">
                  {differentFit.map((line, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 border-t border-[var(--dark-line)] pt-[var(--space-3)] text-[length:var(--type-body)] text-[var(--muted)] opacity-60"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--dark-ink)]/10 text-sm font-bold text-[var(--dark-ink)]">
                        ×
                      </span>
                      <span className="font-medium text-[var(--dark-ink)]">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DarkInversion>
        </div>

        {/* ============================================================
            HYBRID "BOOK A CALL" SECTION (#contact)
            ============================================================ */}
        <section id="contact" className="py-[var(--space-8)]">
          <Container>
            <div className="mb-[var(--space-6)] max-w-3xl">
              <Eyebrow className="text-[var(--accent)] font-bold">Next step</Eyebrow>
              <Heading as="h2" size="lg">
                Book a 20-minute fit call
              </Heading>
              <p className="type-body measure mt-[var(--space-3)] text-[length:var(--type-body)] font-medium leading-relaxed text-[var(--dark-ink)]">
                20 minutes. We diagnose your creative pipeline and tell you if we can fix it. If not, we end early. Mutual fit call, not a sales pitch.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-8)] lg:gap-16 pt-[var(--space-4)]">
              {/* Direct Cal.com Link Option (Primary) */}
              <div className="flex flex-col gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--dark-line)] bg-transparent px-3 py-1 text-[length:var(--type-eyebrow)] tracking-wider text-[var(--accent)] font-bold mb-5">
                    Direct Calendar
                  </div>
                  <Heading as="h3" size="sm" className="text-[var(--dark-ink)]">
                    Pick a time right now.
                  </Heading>
                  <p className="type-body mt-4 text-[length:var(--type-body)] text-[var(--dark-muted)] leading-relaxed max-w-md">
                    Choose an open 20-minute slot directly from our calendar.
                  </p>
                </div>
                
                <div>
                  <Button
                    href={siteConfig.links.booking}
                    variant="primary"
                    className="w-full sm:w-auto justify-center text-center px-8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Choose a time
                  </Button>
                </div>
              </div>

              {/* Intake Form Option */}
              <div className="flex flex-col gap-6 lg:pl-16 lg:border-l lg:border-[var(--dark-line)]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--dark-line)] bg-transparent px-3 py-1 text-[length:var(--type-eyebrow)] tracking-wider text-[var(--accent)] font-bold mb-5">
                    Form Request
                  </div>
                  <Heading as="h3" size="sm" className="text-[var(--dark-ink)]">
                    Can't find a suitable time?
                  </Heading>
                  <p className="type-body mt-4 text-[length:var(--type-body)] text-[var(--dark-muted)] max-w-md">
                    Request a slot and we will reply within 1 business day.
                  </p>
                </div>
                
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
                Common questions.
              </Heading>
              <Accordion
                items={faqItems}
                className="mt-[var(--space-5)]"
              />
              <div className="mt-[var(--space-6)]">
                <Button href={siteConfig.links.booking} variant="primary">
                  Book a fit call
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </main>
  )
}

