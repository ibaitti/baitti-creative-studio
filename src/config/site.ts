const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const siteConfig = {
  name: "Baitti Creative Studio",
  title: "Baitti Creative Studio — Meta ad creative for U.S. DTC brands",
  description: "12 ads. No shoot. Four concepts. Twelve launch-ready Meta ads. Every month.",
  url: siteUrl,
  links: {
    booking: process.env.NEXT_PUBLIC_BOOKING_LINK || "/#contact",
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null,
  },
}

