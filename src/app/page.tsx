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
      <Eyebrow>Creative production system</Eyebrow>
      <Heading as="h2" size="lg">
        From customer insight
        <br />
        to launch-ready creative.
      </Heading>
    </div>
  )

  const systemRightItems = [
    <div key="research">
      <Heading as="h3" size="sm">
        Research and direction
      </Heading>
      <p className="type-body measure mt-[var(--space-2)]">
        We review your product, customer language, offer, competitors, current ads, brand assets, approved claims, restrictions, and available performance feedback. We document observed patterns, assumptions, evidence gaps, and production requirements before developing concepts.
      </p>
    </div>,
    <div key="concept">
      <Heading as="h3" size="sm">
        Concept development
      </Heading>
      <p className="type-body measure mt-[var(--space-2)]">
        We develop four materially different creative concepts. Each concept includes a customer theme, creative hypothesis, format, required proof, required assets, and intended learning. Hooks, scripts, storyboards, and shot plans are developed as required.
      </p>
    </div>,
    <div key="launch">
      <Heading as="h3" size="sm">
        AI-assisted production
      </Heading>
      <p className="type-body measure mt-[var(--space-2)]">
        After concept approval, we produce three executions per concept using AI-assisted product and lifestyle visuals, editing, captions, copy recommendations, and placement adaptations. You receive twelve launch-ready Meta ads with the corresponding strategy notes.
      </p>
    </div>,
  ]

  const timelineItems = [
    {
      title: "Ready for production",
      subtitle: "Step 1",
      desc: "The delivery schedule starts after the agreement is signed, payment has cleared, and the required product files, brand guidance, approved facts and claims, supporting evidence, asset rights, feedback process, and decision-maker are confirmed.",
    },
    {
      title: "Research and concepts",
      subtitle: "Step 2",
      desc: "We review the supplied customer evidence, current ads, competitors, offer, assets, restrictions, and available performance signals. We then develop four materially different concepts with the required hooks, scripts, storyboards, formats, and production plans.",
    },
    {
      title: "Concept approval",
      subtitle: "Step 3",
      desc: "You provide one consolidated response and approve the concepts before full production begins. A new concept, product, offer, claim, or creative direction after approval may change the scope, cost, or timeline.",
    },
    {
      title: "Batch 1",
      subtitle: "Step 4",
      desc: "The first six launch-ready ads are targeted for delivery within 14 business days after the project is confirmed as ready for production.",
    },
    {
      title: "Batch 2",
      subtitle: "Step 5",
      desc: "The second batch of six follows approximately two weeks later, subject to timely feedback, approvals, assets, creator availability, and other agreed dependencies.",
    },
  ]

  const goodFitItems = [
    "You are a U.S. DTC brand already running Meta ads.",
    "You have a product, collection, or offer you are actively promoting.",
    "Your product is visually demonstrable, and settings, scenes, styling, or demonstrations influence the sale.",
    "You need more product or lifestyle creative than your current production process can economically supply.",
    "Your existing creative has limited visual variety, repeated concepts, or long gaps between launches.",
    "You have usable product photography or files, accurate product information, brand guidance, and approved claims.",
    "Your team can use twelve new ads and fund the $2,500 monthly service plus any approved external costs.",
    "You need creative production—not media buying or a full-service marketing agency.",
    "One decision-maker or a clear approval process can provide consolidated feedback.",
  ]

  const notFitItems = [
    "Your brand is pre-launch and has no proven product demand or paid-social process.",
    "You need media buying, campaign management, a website, organic social management, or guaranteed performance.",
    "You want free custom concepts, speculative finished ads, editable files, or unpaid strategy before qualification.",
    "Your product, claims, demonstrations, fit, texture, safety, or results cannot be represented accurately with the available inputs.",
    "Rights to the supplied assets, testimonials, trademarks, creator footage, music, likenesses, or other materials are unclear.",
    "The work would require deceptive claims, fabricated testimonials, unauthorized likenesses, counterfeit products, or unsafe production.",
    "The work is political, adult, heavily regulated, or otherwise outside the studio’s reviewed capability.",
  ]

  const faqItems = [
    {
      id: "run-ads",
      question: "Do you run the ads too?",
      answer: "No. We produce launch-ready Meta creative. Your team uploads and launches the ads, manages media buying, and controls campaign and ad-account decisions.",
    },
    {
      id: "dont-like",
      question: "What if we don’t like the concepts?",
      answer: "We present four concepts before full production begins. You provide one consolidated response so the direction can be approved or corrected before production. After approval, each delivery batch includes one consolidated revision round. A new product, offer, concept, claim, or creative direction may require a revised quote or timeline.",
    },
    {
      id: "why-twelve",
      question: "Why twelve ads?",
      answer: "The sprint pairs four materially different concepts with three executions per concept. This creates useful creative range while keeping every execution connected to a clear hypothesis. Twelve is the current service scope—not a guarantee of performance or a universal testing requirement.",
    },
    {
      id: "how-different",
      question: "How is this different from hiring a freelance editor?",
      answer: "Editing is only one stage of the service. Baitti Creative Studio handles research, concept development, hooks, scripts, storyboards, shot plans, AI-assisted production, editing, captions, copy recommendations, placement adaptations, and testing notes. The studio does not replace your media buyer or guarantee account performance.",
    },
    {
      id: "commitment",
      question: "What’s the commitment?",
      answer: "The service is month-to-month and paid upfront. Production begins after payment clears and all required inputs, rights, and approvals are confirmed. The written agreement explains the applicable renewal, cancellation, and refund terms before payment.",
    },
    {
      id: "start-smaller",
      question: "Can we start smaller?",
      answer: "The current validation offer is the complete 12-Ad Creative Sprint. If your team cannot use twelve ads or fund the full scope, the fit call should establish that before either side commits. We do not offer free custom concepts, finished ads, editable files, or unpaid strategy before qualification.",
    },
    {
      id: "external-costs",
      question: "Are external production costs included?",
      answer: "No. Creator fees, product shipping, licensed assets, voice talent, and other necessary external costs are separate when required. They are only committed after the client approves them.",
    },
    {
      id: "what-needed",
      question: "What do you need from us?",
      answer: "We need product files or samples, brand guidance, accurate product facts, approved claims and supporting evidence, prior creative, available performance feedback, confirmation of asset rights, and one decision-maker or approval process that can provide consolidated feedback.",
    },
    {
      id: "use-ai",
      question: "How do you use AI?",
      answer: "AI-assisted production helps us create photorealistic locations, scenes, and visual concepts that would normally require repeated shoots. Every product depiction, claim, person, scene, and demonstration must remain truthful, authorized, and consistent with approved source material. AI does not replace creative judgment, quality control, or client approval.",
    },
    {
      id: "guarantee",
      question: "Do you guarantee performance?",
      answer: "No. We do not guarantee ROAS, CPA, revenue, ad approval, or another media-performance result. We produce launch-ready creative and document the hypothesis behind each concept. The client controls launching, media buying, and campaign decisions.",
    }
  ]

  return (
    <main className="flex-1">
      <HeroZoom />

      {/* Concept work */}
      <section id="work" className="py-[var(--space-8)]">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Concept work</Eyebrow>
            <Heading as="h2" size="lg">
              Distinct concepts.
              <br />
              Campaign-scale execution.
            </Heading>
            <p className="type-body measure mt-[var(--space-3)]">
              These self-initiated concepts demonstrate how we turn product assets and customer insight into high-production Meta creative. They are spec projects, not client campaigns, and do not represent claimed advertising results.
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
                      {project.category} &bull; Spec concept
                    </p>
                    {/* Visible without hover on touch and keyboard. */}
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
            <Eyebrow>About Baitti Creative Studio</Eyebrow>
            <Heading as="h2" size="lg">
              High-production Meta creative—without the shoot.
            </Heading>
            <div className="mt-[var(--space-5)] space-y-[var(--space-4)]">
              <p className="type-body measure">
                Baitti Creative Studio is an AI-native ad creative production studio for U.S. DTC brands. We turn product assets and customer insight into distinct concepts, then deliver campaign-scale, photorealistic Meta ads that are ready to launch—without organizing a traditional production shoot.
              </p>
              <p className="type-body measure">
                We use AI-assisted production to create locations, scenes, and visual concepts that would normally require repeated shoots—giving brands more creative range, faster iteration, and lower production overhead.
              </p>
              <p className="type-body measure">
                The studio manages the creative pipeline from research and concept development through production, editing, captions, and delivery. The client controls product facts, claims, approvals, launching, and media buying.
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
              Built for DTC brands with a real creative-production need.
            </Heading>
            
            <div className="mt-[var(--space-6)] grid grid-cols-1 gap-[var(--space-6)] md:grid-cols-2">
              <div>
                <Heading as="h3" size="sm">The studio is likely a good fit if:</Heading>
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
                <Heading as="h3" size="sm">The studio is probably not a fit if:</Heading>
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
          </DarkInversion>
        </div>

        {/* Booking */}
        <section id="contact" className="py-[var(--space-8)]">
          <Container>
            <div className="grid grid-cols-1 gap-[var(--space-7)] md:grid-cols-2">
              <div>
                <Eyebrow>Next step</Eyebrow>
                <Heading as="h2" size="lg">
                  Book a 20-minute mutual fit call.
                </Heading>
                <p className="type-body measure mt-[var(--space-3)]">
                  We’ll examine your current creative workflow, identify the primary constraint, and decide whether the 12-Ad Creative Sprint is a responsible fit. If it is, we’ll explain the scope, requirements, and $2,500 monthly retainer. If it isn’t, we’ll say so.
                </p>
                <div className="mt-[var(--space-4)]">
                  <Button
                    href={siteConfig.links.booking}
                    variant="primary"
                    className="w-full justify-center sm:w-auto"
                  >
                    Book a 20-minute fit call
                  </Button>
                </div>
                <p className="mt-[var(--space-3)] text-[length:var(--type-ui)] text-[var(--muted)]">
                  This is a mutual fit assessment—not a disguised free audit or an offer of unpaid custom creative.
                </p>
              </div>

              {/* Deliberately subordinate to the booking action. */}
              <div className="border-t border-[var(--line)] pt-[var(--space-5)] md:border-l md:border-t-0 md:pl-[var(--space-6)] md:pt-0">
                <Heading as="h3" size="sm">
                  Request a fit call
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
              <Eyebrow>FAQ</Eyebrow>
              <Heading as="h2" size="lg">
                Questions?
              </Heading>
              <Accordion
                items={faqItems}
                className="mt-[var(--space-5)]"
              />
            </div>
          </Container>
        </section>
      </div>
    </main>
  )
}
