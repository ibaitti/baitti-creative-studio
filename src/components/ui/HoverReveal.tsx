"use client"

import React, { useState, useRef, MouseEvent } from "react"
import Image from "next/image"

interface HoverRevealProps {
  children: React.ReactNode
  mediaSrc: string
  isVideo?: boolean
  alt?: string
  className?: string
}

export function HoverReveal({
  children,
  mediaSrc,
  isVideo = false,
  alt = "",
  className = "",
}: HoverRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y })
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden cursor-pointer group ${className}`.trim()}
    >
      {/* Base Layer */}
      <div className="relative z-10">{children}</div>

      {/* Fluid Liquid Reveal Layer */}
      <div
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 ease-out"
        style={{
          opacity: isHovered ? 1 : 0,
          clipPath: `circle(${isHovered ? "140px" : "0px"} at ${mousePos.x}% ${mousePos.y}%)`,
          transition: "clip-path 0.3s ease-out, opacity 0.4s ease-out",
        }}
      >
        {isVideo ? (
          <video
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-110 saturate-125 scale-105"
          />
        ) : (
          <Image
            src={mediaSrc}
            alt={alt}
            fill
            className="object-cover brightness-110 saturate-125 scale-105"
          />
        )}
        {/* Subtle Lens Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>
    </div>
  )
}
