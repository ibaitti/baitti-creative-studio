export type Project = {
  slug: string
  title: string
  category: string
  image: string
  /** Describes what is actually visible in the image. */
  alt: string
  summary: string
  brief: string
  research: string
  concepts: {
    title: string
    reasoning: string
  }[]
  creative: string[]
  creativeAlt?: string[]
}

/**
 * Self-initiated concept exercises. No brand named here is a client, and the
 * "brief" and "research" fields describe assumptions we set ourselves, not
 * work commissioned by anyone or interviews with anyone's customers.
 *
 * Imagery is temporary stock standing in for the creative direction.
 */
export const projects: Project[] = [
  {
    slug: "modern-pet-nutrition",
    title: "Pet Nutrition",
    category: "Pet Nutrition",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200",
    alt: "Raw dog food arranged in a ceramic bowl on a pale kitchen counter",
    summary:
      "Reframing raw dog food from 'messy chore' to 'premium wellness routine'.",
    brief:
      "A self-initiated exercise. We set ourselves a familiar problem: a direct-to-consumer raw food subscription with high CPA, whose creative leads on ingredients and so reads as complicated and messy to busy pet owners.",
    research:
      "Working from publicly available reviews and competitor ads in the category, we assumed the real barrier is the perceived time cost of preparation rather than price, and that buyers want to feel like excellent pet owners without extra effort.",
    concepts: [
      {
        title: "The 30-Second Serve",
        reasoning:
          "Tackle the convenience objection head-on by demonstrating a full meal prep in under 30 seconds using a real-time countdown timer.",
      },
      {
        title: "The Picky Eater Solution",
        reasoning:
          "Leverage emotional frustration by showing dogs ignoring expensive kibble, then immediately devouring the raw bowl. Focuses on the behavioral shift rather than ingredients.",
      },
      {
        title: "Human-Grade Comparison",
        reasoning:
          "Place a bowl of standard kibble next to the raw bowl and use extreme macro shots to highlight texture and moisture, instantly conveying quality without voiceover.",
      },
    ],
    creative: [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1583337251025-a1c1d07c0812?auto=format&fit=crop&q=80&w=2000",
    ],
    creativeAlt: [
      "Raw dog food portioned into a ceramic bowl on a kitchen counter",
      "A dog eating from a bowl on a tiled kitchen floor",
      "Close-up of raw meat and vegetable pieces showing texture and moisture",
    ],
  },
  {
    slug: "sustainable-denim",
    title: "Sustainable Denim",
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1200",
    alt: "Folded indigo jeans stacked against a plain studio backdrop",
    summary:
      "Proving that eco-friendly manufacturing doesn't mean compromising on fit.",
    brief:
      "A self-initiated exercise built around a common failure mode: sustainable denim creative that over-indexes on environmental messaging and loses people at the top of the funnel, when fit is what they are actually shopping for.",
    research:
      "Reading category reviews and competitor ads, we assumed sustainability works better as a secondary conversion driver than as an opening hook, and that silhouette and stretch have to carry the first few seconds.",
    concepts: [
      {
        title: "The Fit Test",
        reasoning:
          "Pure visual proof. Show multiple body types moving dynamically (squatting, jumping, stretching) to prove the comfort and shape retention before ever mentioning sustainability.",
      },
      {
        title: "The Guilt-Free Purchase",
        reasoning:
          "Hook with the incredible fit, then use the payoff to relieve buyer's remorse by revealing the zero-waste manufacturing process.",
      },
      {
        title: "Vintage vs. Modern",
        reasoning:
          "Contrast the stiff, uncomfortable feel of thrifted vintage denim with the identical look but modern comfort of sustainable stretch fabric.",
      },
    ],
    creative: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1542272201-b1ca555f8505?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=2000",
    ],
    creativeAlt: [
      "Folded indigo jeans stacked against a plain studio backdrop",
      "A person wearing straight-leg jeans photographed mid-stride outdoors",
      "Close-up of denim seam stitching and a metal button",
    ],
  },
  {
    slug: "canine-accessories",
    title: "Canine Accessories",
    category: "Pet Accessories",
    image:
      "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80&w=1200",
    alt: "A dog wearing a fabric harness sitting on a city pavement",
    summary:
      "Elevating dog walking gear from functional necessity to status symbol.",
    brief:
      "A self-initiated exercise. The premise we set: premium dog harnesses and leashes at a $120 price point whose ads look interchangeable with drop-shipped pet accessories, leaving the price unjustified.",
    research:
      "From category reviews and competitor ads we assumed these buyers treat their dogs as an extension of their personal style, and that cheap nylon hardware reads as visually incompatible with the rest of their outfit.",
    concepts: [
      {
        title: "The Style Match",
        reasoning:
          "Treat the harness as a fashion accessory. Style the owner and dog in matching palettes, using editorial fashion lighting rather than typical bright 'pet food' lighting.",
      },
      {
        title: "Indestructible Elegance",
        reasoning:
          "Show the gear surviving mud, water, and rough play, followed immediately by a quick wipe-down that returns it to pristine condition for a coffee shop visit.",
      },
      {
        title: "The Detail Tour",
        reasoning:
          "ASMR-style extreme close-ups of the custom metal hardware, reinforced stitching, and premium materials to subconsciously anchor the high price point.",
      },
    ],
    creative: [
      "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1588686687042-4f0525d8e7aa?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=2000",
    ],
    creativeAlt: [
      "A dog wearing a fabric harness sitting on a city pavement",
      "A leash clip and metal hardware photographed close up",
      "A dog walking beside its owner on a tree-lined street",
    ],
  },
  {
    slug: "minimalist-outerwear",
    title: "Minimalist Outerwear",
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1200",
    alt: "A matte grey technical jacket photographed against a concrete wall",
    summary:
      "Selling technical performance without the mountain-climber aesthetic.",
    brief:
      "A self-initiated exercise around jackets that perform like alpine gear but read as streetwear, where creative tends to either look like a hiking ad or ignore the technical features altogether.",
    research:
      "Working from category reviews and competitor ads, we assumed the audience is urban commuters who want weather protection without looking dressed for an expedition, so the proof has to happen in a city, not on a mountain.",
    concepts: [
      {
        title: "The Commute Test",
        reasoning:
          "Show the jacket repelling torrential city rain, then stepping into a sleek office environment perfectly dry and styled.",
      },
      {
        title: "Invisible Tech",
        reasoning:
          "A visual breakdown showing the layers of waterproofing and insulation hidden beneath the minimalist matte exterior.",
      },
      {
        title: "The Packable Promise",
        reasoning:
          "Highlight versatility by showing the entire jacket packing down into a small sling bag, perfect for unpredictable spring weather.",
      },
    ],
    creative: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1485218126466-34e6392ec754?auto=format&fit=crop&q=80&w=2000",
    ],
    creativeAlt: [
      "A matte grey technical jacket photographed against a concrete wall",
      "A person in a hooded jacket walking through rain on a city street",
      "Close-up of a sealed zip and taped seam on technical outerwear",
    ],
  },
]
