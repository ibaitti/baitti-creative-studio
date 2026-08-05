import { notFound } from "next/navigation"
import Image from "next/image"
import { projects } from "@/data/work"
import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Heading"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { Button } from "@/components/ui/Button"
import { MediaFrame } from "@/components/ui/MediaFrame"

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[currentIndex]

  if (!project) {
    notFound()
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <main className="flex-1 pt-[var(--space-7)] pb-[var(--space-8)]">
      <article>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>{project.category}</Eyebrow>
            <Heading as="h1" size="xl">
              {project.title}
            </Heading>
            <p className="type-body measure mt-[var(--space-3)]">
              {project.summary}
            </p>
          </div>
        </Container>

        <Container className="mt-[var(--space-6)]">
          <MediaFrame aspectRatio="video" className="w-full">
            <Image
              src={project.image}
              alt={project.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </MediaFrame>
        </Container>

        <Container className="mt-[var(--space-8)]">
          <div className="grid grid-cols-1 gap-[var(--space-6)] border-t border-[var(--line)] pt-[var(--space-6)] md:grid-cols-2">
            <div>
              <Heading as="h2" size="lg">
                The Brief
              </Heading>
              <p className="type-body measure mt-[var(--space-3)]">
                {project.brief}
              </p>
            </div>
            <div>
              <Heading as="h2" size="lg">
                The Insight
              </Heading>
              <p className="type-body measure mt-[var(--space-3)]">
                {project.research}
              </p>
            </div>
          </div>
        </Container>

        <section className="mt-[var(--space-8)] bg-[var(--surface)] py-[var(--space-8)]">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>The concepts</Eyebrow>
              <Heading as="h2" size="lg">
                Radical Variance
              </Heading>
            </div>
            <div className="mt-[var(--space-6)] grid grid-cols-1 gap-[var(--space-4)] md:grid-cols-3">
              {project.concepts.map((concept) => (
                <div
                  key={concept.title}
                  className="border-t border-[var(--line)] pt-[var(--space-3)]"
                >
                  <Heading as="h3" size="sm">
                    {concept.title}
                  </Heading>
                  <p className="type-body mt-[var(--space-2)]">
                    {concept.reasoning}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <Container className="mt-[var(--space-8)]">
          <div className="max-w-2xl">
            <Eyebrow>The creative</Eyebrow>
            <Heading as="h2" size="lg">
              Execution
            </Heading>
          </div>
          <div className="mt-[var(--space-6)] grid grid-cols-1 gap-[var(--space-4)] md:grid-cols-2">
            {project.creative.map((src, i) => (
              <MediaFrame
                key={src}
                aspectRatio={i === 0 ? "video" : "portrait"}
                className={i === 0 ? "md:col-span-2" : "col-span-1"}
              >
                <Image
                  src={src}
                  alt={project.creativeAlt?.[i] ?? project.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </MediaFrame>
            ))}
          </div>
        </Container>

        <section className="mt-[var(--space-8)] border-t border-[var(--line)] pt-[var(--space-7)]">
          <Container>
            <div className="grid grid-cols-1 gap-[var(--space-6)] md:grid-cols-2">
              <div>
                <Heading as="h2" size="lg">
                  Need creative like this?
                </Heading>
                <div className="mt-[var(--space-4)]">
                  <Button href="/#contact" variant="primary">
                    Book a fit call
                  </Button>
                </div>
              </div>

              <nav
                aria-label="Other concepts"
                className="flex flex-col justify-start gap-[var(--space-2)] sm:flex-row md:justify-end"
              >
                {prevProject && (
                  <Button href={`/work/${prevProject.slug}`} variant="outline">
                    Prev: {prevProject.title}
                  </Button>
                )}
                {nextProject && (
                  <Button href={`/work/${nextProject.slug}`} variant="outline">
                    Next: {nextProject.title}
                  </Button>
                )}
              </nav>
            </div>
          </Container>
        </section>
      </article>
    </main>
  )
}
