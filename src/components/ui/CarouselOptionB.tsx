"use client"

import React, { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import type { PlaceholderGroup } from "@/data/work"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function CarouselOptionB({ group }: { group: PlaceholderGroup }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    const mm = gsap.matchMedia()
    
    mm.add("(min-width: 768px)", () => {
      // Pin the container and rotate the scene.
      // Cards already have vertical offsets (Spiral), so rotation causes vertical movement naturally.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
        }
      })

      tl.to(sceneRef.current, {
        rotationY: -360,
        ease: "none",
      })
    })

    return () => mm.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="w-full h-screen relative bg-zinc-950 overflow-hidden flex flex-col justify-center text-white pt-20">
      <div className="absolute top-10 left-10 z-50">
        <h2 className="text-4xl font-bold">Option B: The Spiral Staircase</h2>
        <p className="mt-2 text-white/70 max-w-md">The cards are positioned on a spiral. As the wheel spins, they naturally rise up the screen.</p>
      </div>

      <div className="w-full h-full flex items-center justify-center [perspective:1200px]">
        <div 
          ref={sceneRef}
          className="relative w-[300px] h-[400px] [transform-style:preserve-3d]"
        >
          {group.executions.map((exec, i) => {
            const angle = i * (360 / group.executions.length)
            // Stagger them vertically on the Y axis
            const yOffset = (i - 2) * 80 // -160px to 160px
            return (
              <div 
                key={exec.id} 
                className="opt-b-card absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(450px) translateY(${yOffset}px)`,
                  backgroundColor: '#000'
                }}
              >
                <Image
                  src={exec.poster}
                  alt={exec.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
