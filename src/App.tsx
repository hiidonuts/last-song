import { useEffect, useState } from 'react'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { RealmsFolder } from './components/RealmsFolder'
import { Reviews } from './components/Reviews'
import { useLenisGsap } from './hooks/useLenisGsap'

const sectionIds = ['overview', 'realms', 'faq', 'reviews'] as const

export default function App() {
  useLenisGsap()
  const [activeId, setActiveId] = useState<string>('overview')

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.4] },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      <Nav activeId={activeId} />
      <main>
        <Hero />
        <RealmsFolder />
        <Faq />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}
