"use client"

import * as React from "react"

export function MediaFrame({
  className = "",
  children,
  aspectRatio = "video",
}: {
  className?: string
  children: React.ReactNode
  aspectRatio?: "video" | "square" | "portrait" | "auto"
  cursorAction?: "play" | "view" | "custom" | "raw" | "none"
  customCursorText?: string
  cursorNode?: React.ReactNode
}) {
  const ratios = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    auto: "aspect-auto",
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[var(--radius-media)] bg-black/5 ${ratios[aspectRatio]} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
