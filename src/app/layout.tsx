import type { Metadata } from "next"

import "./globals.css"
import { siteConfig } from "@/config/site"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { StickyCTA } from "@/components/layout/StickyCTA"
import { MotionProvider } from "@/components/motion/MotionProvider"
import { Analytics } from "@/components/analytics/Analytics"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <body className="font-sans flex min-h-screen flex-col">
        <MotionProvider>
          <Header />
          <div className="flex-1 pt-[var(--header-h)]">{children}</div>
          <StickyCTA />
          <Footer />
          <Analytics />
        </MotionProvider>
      </body>
    </html>
  )
}
