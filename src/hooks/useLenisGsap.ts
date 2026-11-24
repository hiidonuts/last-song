import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null

export function scrollToSection(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  if (lenis) {
    lenis.scrollTo(target, { offset: -8, duration: 1.35 })
    return
  }
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function useLenisGsap() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      ScrollTrigger.config({ limitCallbacks: true })
      return
    }

    const next = new Lenis({
      duration: 1.15,
      smoothWheel: true,
    })
    lenis = next
    next.on('scroll', ScrollTrigger.update)

    const ticker = (time: number) => {
      next.raf(time * 1000)
    }
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(ticker)
      next.destroy()
      if (lenis === next) lenis = null
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
}

export function formatClock(date: Date) {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
}
