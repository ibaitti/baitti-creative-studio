"use client"

import * as React from "react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Pointer } from "lucide-react"

export function MediaFrame({
  className = "",
  children,
  aspectRatio = "video",
  cursorAction = "none",
  customCursorText,
  cursorNode,
}: {
  className?: string
  children: React.ReactNode
  aspectRatio?: "video" | "square" | "portrait" | "auto"
  cursorAction?: "play" | "view" | "custom" | "raw" | "none"
  customCursorText?: string
  cursorNode?: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  const { contextSafe } = useGSAP({ scope: containerRef })

  const ratios = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    auto: "aspect-auto",
  }

  const handleMouseEnter = contextSafe(() => {
    if (cursorAction === "none") return
    gsap.to(cursorRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.5)",
    })
  })

  const handleMouseLeave = contextSafe(() => {
    if (cursorAction === "none") return
    gsap.to(cursorRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.out",
    })
  })

  const handleMouseMove = contextSafe((e: React.MouseEvent) => {
    if (cursorAction === "none" || !containerRef.current || !cursorRef.current)
      return
    const rect = containerRef.current.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    gsap.to(cursorRef.current, {
      x: x,
      y: y,
      xPercent: -50,
      yPercent: -50,
      duration: 0.3,
      ease: "power3.out",
      overwrite: "auto",
    })
  })

  return (
    <div
      ref={containerRef}
      // `media-cursor` only hides the pointer where hover is genuinely
      // available, so touch users keep their cursor and their tap target.
      className={`relative overflow-hidden rounded-[var(--radius-media)] bg-black/5 ${cursorAction !== "none" ? "media-cursor" : ""} ${ratios[aspectRatio]} ${className}`.trim()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {children}

      {cursorAction !== "none" && (
        <div
          ref={cursorRef}
          aria-hidden="true"
          className={`media-cursor-label pointer-events-none absolute left-0 top-0 z-50 flex scale-75 items-center justify-center whitespace-nowrap opacity-0 ${
            cursorAction === "raw"
              ? ""
              : cursorAction === "view"
                ? "h-12 w-12 rounded-full border border-white/20 bg-black/60 shadow-2xl backdrop-blur-xl"
                : "gap-2.5 rounded-full border border-white/20 bg-black/60 px-5 py-2.5 shadow-2xl backdrop-blur-xl"
          }`}
        >
          {cursorAction === "play" && (
            <>
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              <span className="font-sans text-sm font-medium tracking-wide text-white">
                Play intro
              </span>
            </>
          )}
          {cursorAction === "view" && (
            <Pointer className="h-5 w-5 text-white" />
          )}
          {cursorAction === "custom" && (
            <span className="font-sans text-sm font-medium tracking-wide text-white">
              {customCursorText}
            </span>
          )}
          {cursorAction === "raw" && cursorNode}
        </div>
      )}
    </div>
  )
}
