"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { VideoPlayer } from "./VideoPlayer"
import type { PlaceholderGroup } from "@/data/work"
import { Heading } from "./Heading"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function Carousel3D({ group }: { group: PlaceholderGroup }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const darknessRefs = useRef<(HTMLDivElement | null)[]>([])
  
  const [activeIndex, setActiveIndex] = useState(0)

  const executions = group.executions
  const totalItems = executions.length

  useGSAP(() => {
    if (!containerRef.current) return

    const mm = gsap.matchMedia()

    mm.add("(min-width: 320px)", () => {
      const getOrbitParams = () => {
        const w = window.innerWidth
        if (w < 640) {
          return { rx: 120, rz: 140 }
        } else if (w < 1024) {
          return { rx: 240, rz: 190 }
        } else {
          return { rx: 380, rz: 260 }
        }
      }

      const params = getOrbitParams()

      // Function to position all cards along the 3D orbit
      // Bounded progress: starts at Card 0 (front-center), ends at Card N-1 (front-center)
      const updateOrbit = (progress: number) => {
        // Total rotation angle needed to move from Card 0 to Card N-1
        const maxRotationRad = -((totalItems - 1) / totalItems) * 2 * Math.PI
        const currentRotRad = progress * maxRotationRad

        let highestZ = -Infinity
        let frontIdx = 0

        cardRefs.current.forEach((card, i) => {
          if (!card) return

          const baseAngleRad = (i / totalItems) * 2 * Math.PI
          const alpha = baseAngleRad + currentRotRad

          // 3D Orbit Coordinates (All cards strictly at Y = 0 level)
          const x = Math.sin(alpha) * params.rx
          const z = Math.cos(alpha) * params.rz // +rz at front, -rz at back
          const zRel = z / params.rz // normalized [-1, 1]

          if (z > highestZ) {
            highestZ = z
            frontIdx = i
          }

          // 1. Sequential Stacking (z-index based on Z position)
          const zIndex = Math.round((zRel + 1) * 100)
          card.style.zIndex = String(zIndex)

          // 2. Depth Shading (Clean, crisp darkness overlay without muddy CSS blur)
          const darknessOverlay = darknessRefs.current[i]
          if (darknessOverlay) {
            // Front items: 0 darkness overlay. Back items: up to 0.70 darkness overlay
            const darkFactor = zRel < 0 ? Math.min(0.70, Math.abs(zRel) * 0.65 + 0.05) : 0
            darknessOverlay.style.opacity = String(darkFactor)
          }

          // 3. Tactile 3D Scale & Viewport Angle (Compact & Sharp)
          // Scale: front cards 0.95 max, back cards 0.75
          const scale = 0.75 + (zRel + 1) * 0.10

          // Viewport-facing Y rotation: gentle angle bounded between -18deg and +18deg
          const rotY = Math.sin(alpha) * -18

          gsap.set(card, {
            x: x,
            y: 0, // All cards strictly at the same level baseline
            z: z,
            scale: scale,
            rotationY: rotY,
            rotationX: 0,
            opacity: zRel < -0.85 ? 0.75 : 1.0,
            filter: "none", // Crisp focus, zero blur artifacting
            transformStyle: "preserve-3d",
          })
        })

        setActiveIndex(frontIdx)
      }

      // Initial layout update
      updateOrbit(0)

      // GSAP ScrollTrigger timeline
      const obj = { progress: 0 }
      gsap.to(obj, {
        progress: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: false,
          scrub: 1,
          onUpdate: (self) => {
            updateOrbit(self.progress)
          },
        },
      })
    })

    return () => mm.revert()
  }, { scope: containerRef, dependencies: [totalItems] })

  // Jump to specific execution (bounded between index 0 and totalItems - 1)
  const scrollToExecution = (index: number) => {
    if (!containerRef.current) return
    const st = ScrollTrigger.getAll().find(t => t.trigger === containerRef.current)
    if (st) {
      const targetProgress = totalItems > 1 ? index / (totalItems - 1) : 0
      const targetScroll = st.start + targetProgress * (st.end - st.start)
      window.scrollTo({ top: targetScroll, behavior: "smooth" })
    }
  }

  return (
    <div ref={containerRef} className="w-full h-[400vh] relative bg-zinc-950">
      {/* Sticky viewport for the carousel */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between pt-16 pb-8 select-none text-white z-10 bg-zinc-950">
        
        {/* Dynamic Refined Background matching active card */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-zinc-950">
          
          {/* Crossfading Background Images */}
          {executions.map((exec, i) => (
            <div 
              key={`bg-${exec.id}`} 
              className="absolute inset-0 transition-all duration-700 ease-out z-0"
              style={{ 
                opacity: i === activeIndex ? 0.55 : 0,
                transform: i === activeIndex ? "scale(1.04)" : "scale(1.12)",
                filter: i === activeIndex ? "blur(24px)" : "blur(40px)",
              }}
            >
              <Image
                src={exec.poster}
                alt=""
                fill
                priority={i === 0}
                className="object-cover saturate-125 brightness-90"
                sizes="100vw"
              />
            </div>
          ))}

          {/* Cinematic Contrast Radial & Vignette Overlay (No muddy backdrop blur) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,9,11,0.25)_0%,rgba(9,9,11,0.85)_75%,rgba(9,9,11,0.98)_100%)] z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950/80 z-10 pointer-events-none" />
        </div>

        {/* Top Header */}
        <div className="w-full px-[var(--gutter)] max-w-7xl mx-auto flex flex-row items-center justify-between z-30 pointer-events-none gap-4">
          <div>
            <Heading as="h3" size="lg" className="text-white tracking-tight font-extrabold text-xl md:text-3xl">
              {group.conceptName}
            </Heading>
          </div>

          {/* Active Index Counter */}
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full">
            <span className="text-base font-mono font-bold text-amber-400">
              0{activeIndex + 1} <span className="text-white/30 text-xs font-normal">/ 0{totalItems}</span>
            </span>
          </div>
        </div>

        {/* 3D Scene Viewport */}
        <div className="w-full flex-1 flex items-center justify-center [perspective:1100px] relative z-10 my-auto">
          <div className="relative w-[180px] sm:w-[210px] md:w-[240px] h-[270px] sm:h-[310px] md:h-[350px] max-h-[44vh] [transform-style:preserve-3d]">
            {executions.map((exec, i) => (
              <div 
                key={exec.id}
                ref={(el) => { cardRefs.current[i] = el }}
                className="absolute top-0 left-0 w-full h-full cursor-pointer group"
                onClick={() => scrollToExecution(i)}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Inner Card Container */}
                <div className="w-full h-full relative rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/15 bg-zinc-900 flex flex-col justify-between transition-shadow duration-300 group-hover:shadow-[0_25px_60px_rgba(251,191,36,0.25)]">
                  
                  {/* Media Content */}
                  <div className="relative w-full h-full overflow-hidden bg-black/40">
                    {exec.videoSrc ? (
                      <VideoPlayer
                        src={exec.videoSrc}
                        poster={exec.poster}
                        aspectRatio={exec.aspectRatio}
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <Image
                          src={exec.poster}
                          alt={exec.alt}
                          fill
                          priority={i === 0}
                          sizes="(max-width: 768px) 60vw, 240px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Darkening Backface Overlay for Z-Depth (No Blur) */}
                    <div 
                      ref={(el) => { darknessRefs.current[i] = el }}
                      className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-150"
                      style={{ opacity: 0 }}
                    />

                    {/* Top & Bottom Contrast Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 pointer-events-none" />

                    {/* Format Badge */}
                    <div className="absolute top-3 left-3 z-20 pointer-events-none">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[0.65rem] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/20 text-white/90 shadow-sm">
                        {exec.formatBadge}
                      </span>
                    </div>

                    {/* Card Title & Alt Info */}
                    <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none">
                      <h4 className="text-base font-bold text-white tracking-tight drop-shadow-md">
                        {exec.title}
                      </h4>
                      <p className="text-[0.7rem] text-white/70 mt-0.5 line-clamp-1">
                        {exec.alt}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Controls Bar */}
        <div className="w-full px-[var(--gutter)] max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-start z-30 gap-4 pb-2">
          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {executions.map((exec, i) => (
              <button
                key={exec.id}
                onClick={() => scrollToExecution(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex 
                    ? "w-8 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.7)]" 
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Jump to execution ${exec.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
