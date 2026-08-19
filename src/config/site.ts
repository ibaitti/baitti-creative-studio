const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const siteConfig = {
  name: "Baitti Creative Studio",
  title: "Baitti Creative Studio: High-Production Meta Ads for DTC Brands",
  description: "4 concepts. 12 launch-ready ads. $2,500/mo. If 1 ad doesn't beat your best CTR or hook rate, get 100% of your money back and keep all 12 ads.",
  url: siteUrl,
  links: {
    booking: process.env.NEXT_PUBLIC_BOOKING_LINK || "https://cal.com/baitti",
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ayoub@baitticreativestudio.com",
  },
}
