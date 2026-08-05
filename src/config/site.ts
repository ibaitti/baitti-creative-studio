const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const siteConfig = {
  name: "Baitti Creative Studio",
  title: "Baitti Creative Studio — AI-native ad creative production for U.S. DTC brands",
  description:
    "High-production Meta ad creative for DTC brands—without the shoot.",
  url: siteUrl,
  links: {
    // Falls back to the on-page booking section rather than inventing a
    // booking URL. Root-relative so it also works from /work/[slug],
    // /privacy and /terms.
    booking: process.env.NEXT_PUBLIC_BOOKING_LINK || "/#contact",
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null,
  },
}
