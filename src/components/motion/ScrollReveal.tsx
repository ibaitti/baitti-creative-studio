"use client"
import * as React from "react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export function ScrollReveal({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current || !innerRef.current) return
    
    // Scale container from 0.85 to 1.0 as it enters the viewport
    gsap.fromTo(containerRef.current, 
      { scale: 0.85, opacity: 0.5 },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          end: "center center",
          scrub: true,
        }
      }
    )

    // Parallax the inner content slightly
    gsap.to(innerRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    })

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className={`overflow-hidden will-change-transform ${className}`}>
      <div ref={innerRef} className="w-full h-[115%] -mt-[7.5%] will-change-transform">
        {children}
      </div>
    </div>
  )
}
