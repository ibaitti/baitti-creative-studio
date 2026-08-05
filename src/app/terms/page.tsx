import type { Metadata } from "next"
import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Heading"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Baitti Creative Studio.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <main className="flex-1 py-[var(--space-8)]">
      <Container>
        <div className="max-w-3xl">
          <Heading as="h1" size="xl">
            Terms of Service
          </Heading>

          <div className="mt-[var(--space-5)] space-y-[var(--space-3)]">
            <p className="type-body measure">
              [PENDING] - The full Terms of Service text will be supplied by the
              studio.
            </p>
            <p className="type-body measure">
              Please check back later for the complete terms governing the use
              of our website and services.
            </p>
          </div>
        </div>
      </Container>
    </main>
  )
}
