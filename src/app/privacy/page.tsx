import type { Metadata } from "next"
import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Heading"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Baitti Creative Studio.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <main className="flex-1 py-[var(--space-8)]">
      <Container>
        <div className="max-w-3xl">
          <Heading as="h1" size="xl">
            Privacy Policy
          </Heading>

          <div className="mt-[var(--space-5)] space-y-[var(--space-3)]">
            <p className="type-body measure">
              [PENDING] - The full Privacy Policy text will be supplied by the
              studio.
            </p>
            <p className="type-body measure">
              In the meantime, know that we take your privacy seriously. We only
              collect the necessary information required to process your
              inquiries and deliver creative services.
            </p>
          </div>
        </div>
      </Container>
    </main>
  )
}
