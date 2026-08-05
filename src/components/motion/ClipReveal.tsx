"use client"
import * as React from "react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export function ClipReveal({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    
    gsap.fromTo(containerRef.current, 
      { 
        clipPath: "inset(20% 10% 20% 10% round 20px)",
        scale: 0.95
      },
      {
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "center center",
          scrub: 1,
        }
      }
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className={`overflow-hidden will-change-transform ${className}`}>
      {children}
    </div>
  )
}
