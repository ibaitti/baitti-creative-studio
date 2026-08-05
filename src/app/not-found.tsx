import type { Metadata } from "next"
import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Heading"
import { Button } from "@/components/ui/Button"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center py-[var(--space-8)]">
      <Container>
        <div className="max-w-xl">
          <Heading as="h1" size="xl">
            404
          </Heading>
          <p className="type-body measure mt-[var(--space-3)]">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-[var(--space-4)] flex flex-col gap-[var(--space-2)] sm:flex-row">
            <Button href="/" variant="primary">
              Return home
            </Button>
            <Button href="/work" variant="outline">
              See the work
            </Button>
          </div>
        </div>
      </Container>
    </main>
  )
}
