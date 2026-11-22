import { useEffect, useState } from 'react'
import { Devlog } from './components/Devlog'
import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { GameScope } from './components/GameScope'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { RealmsFolder } from './components/RealmsFolder'
import { Reviews } from './components/Reviews'

const sectionIds = ['overview', 'realms', 'gallery', 'scope', 'reviews', 'faq', 'devlog'] as const

export default function App() {
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
        <Features />
        <GameScope />
        <Reviews />
        <Faq />
        <Devlog />
      </main>
      <Footer />
    </div>
  )
}
