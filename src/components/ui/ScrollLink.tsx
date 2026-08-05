"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLenis } from "lenis/react"

/**
 * Scrolls to an in-page target on click when already on the homepage, and on
 * mount when arriving from another route. Without the mount behaviour,
 * following /#work from /privacy lands on the homepage but never scrolls,
 * because Lenis has taken over scrolling from the browser.
 */
export function ScrollLink({
  href,
  children,
  className,
  onClick,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const pathname = usePathname()
  const lenis = useLenis()

  React.useEffect(() => {
    if (pathname !== "/") return
    const hash = window.location.hash
    if (!hash || hash.length < 2) return

    const target = document.querySelector(hash)
    if (!target) return

    // Wait a frame so layout has settled before measuring the target.
    const id = window.requestAnimationFrame(() => {
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { immediate: true })
      } else {
        target.scrollIntoView()
      }
    })
    return () => window.cancelAnimationFrame(id)
    // Runs once per route entry; the hash is read at that moment.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("/#")) {
      const targetId = href.substring(1)

      if (pathname === "/") {
        e.preventDefault()
        const element = document.querySelector(targetId)
        if (element) {
          if (lenis) {
            lenis.scrollTo(element as HTMLElement)
          } else {
            element.scrollIntoView({ behavior: "smooth" })
          }
          window.history.pushState(null, "", href)
        }
      }
    }

    if (onClick) onClick(e)
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
