import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Heading"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { MediaFrame } from "@/components/ui/MediaFrame"
import { projects } from "@/data/work"

export const metadata: Metadata = {
  title: "Concept Work",
  description:
    "Self-initiated Meta ad concepts from Baitti Creative Studio, built to test angles rather than to fill a client brief.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Concept Work | Baitti Creative Studio",
    description:
      "Self-initiated Meta ad concepts from Baitti Creative Studio, built to test angles rather than to fill a client brief.",
    url: "/work",
  },
}

export default function WorkIndexPage() {
  return (
    <main className="flex-1 py-[var(--space-8)]">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Concept work</Eyebrow>
          <Heading as="h1" size="xl">
            Every concept,
            <br />
            in one place.
          </Heading>
          <p className="type-body measure mt-[var(--space-3)]">
            Self-initiated concepts, not client campaigns. We build these to
            test angles and show how we think.
          </p>
        </div>

        <ul className="mt-[var(--space-7)] grid list-none grid-cols-1 gap-[var(--space-6)] p-0 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug} className="work-card">
              <Link
                href={`/work/${project.slug}`}
                className="block rounded-[var(--radius-media)]"
              >
                <MediaFrame aspectRatio="square">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="work-card__img object-cover"
                  />
                </MediaFrame>
                <div className="mt-[var(--space-2)]">
                  <Heading as="h2" size="sm">
                    {project.title}
                  </Heading>
                  <p className="timeline-stage mt-[var(--space-1)]">
                    {project.category}
                  </p>
                  <p className="type-body mt-[var(--space-1)] max-w-[46ch]">
                    {project.summary}
                  </p>
                  <span className="work-card__reveal mt-[var(--space-1)] inline-block text-[length:var(--type-ui)] font-semibold text-[var(--accent-text)]">
                    View project
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  )
}
