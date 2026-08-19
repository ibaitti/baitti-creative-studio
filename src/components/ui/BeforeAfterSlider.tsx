"use client"
import * as React from "react"
import { useState } from "react"
import Image, { StaticImageData } from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string | StaticImageData
  beforeAlt: string
  beforeLabel: string
  beforeSubtitle?: string
  beforeDescription?: string
  afterImage: string | StaticImageData
  afterAlt: string
  afterLabel: string
  afterSubtitle?: string
  afterDescription?: string
}

export function BeforeAfterSlider({
  beforeImage,
  beforeAlt,
  beforeLabel,
  beforeSubtitle,
  beforeDescription,
  afterImage,
  afterAlt,
  afterLabel,
  afterSubtitle,
  afterDescription,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <div className="flex flex-col gap-[var(--space-5)] max-w-4xl mx-auto">
      <div className="relative w-full overflow-hidden rounded-[var(--radius-media)] aspect-video select-none group work-card shadow-lg">
        
        {/* Background Image (Before) */}
        <div className="absolute inset-0">
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        {/* Overlay Image (After) */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-10 rounded bg-[var(--surface)] px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--ink)] shadow-sm">
          {beforeLabel}
        </div>
        
        <div className="absolute top-4 right-4 z-10 rounded bg-[var(--accent)] px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
          {afterLabel}
        </div>

        {/* Range Input (Slider) */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 z-20 m-0 h-full w-full opacity-0 cursor-ew-resize"
          aria-label="Image comparison slider"
        />

        {/* Custom Slider Handle Line */}
        <div 
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_4px_rgba(0,0,0,0.5)] transition-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Handle knob */}
          <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[var(--ink)] shadow-lg ring-1 ring-black/10">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l-6-6 6-6M15 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[var(--space-6)] md:grid-cols-2 md:gap-20">
        <div>
           <h4 className="text-[length:var(--type-item)] font-semibold text-[var(--ink)]">
             {beforeSubtitle}
           </h4>
           <p className="type-body mt-1 text-[length:var(--type-ui)] text-[var(--muted)]">
             {beforeDescription}
           </p>
        </div>
        <div>
           <h4 className="text-[length:var(--type-item)] font-semibold text-[var(--accent-text)]">
             {afterSubtitle}
           </h4>
           <p className="type-body mt-1 text-[length:var(--type-ui)] text-[var(--muted)]">
             {afterDescription}
           </p>
        </div>
      </div>
    </div>
  )
}
