"use client"

import * as React from "react"
import { ReactLenis } from "lenis/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [reduceMotion, setReduceMotion] = React.useState(false)

  // Lenis does not read prefers-reduced-motion on its own, so momentum
  // scrolling has to be switched off explicitly.
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(query.matches)

    const handleChange = (event: MediaQueryListEvent) =>
      setReduceMotion(event.matches)

    query.addEventListener("change", handleChange)
    return () => query.removeEventListener("change", handleChange)
  }, [])

  React.useEffect(() => {
    // Recalculate trigger positions once fonts and images have settled.
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)
    return () => clearTimeout(timeout)
  }, [])

  // Lenis stays mounted in both cases; only its behaviour changes. Swapping
  // the provider out would remount the whole tree beneath it.
  return (
    <ReactLenis
      root
      options={{
        lerp: reduceMotion ? 1 : 0.12,
        duration: reduceMotion ? 0 : undefined,
        wheelMultiplier: 1,
        smoothWheel: !reduceMotion,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}
