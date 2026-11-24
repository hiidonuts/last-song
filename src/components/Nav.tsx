import { useRef, useState } from 'react'
import { animate, motion, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion'
import { AndroidIcon } from './AndroidIcon'
import { APK_URL, navLinks, site } from '../content/copy'
import { scrollToSection } from '../hooks/useLenisGsap'
import styles from './Nav.module.css'

type Props = { activeId?: string }

const ticks = Array.from({ length: 30 }, (_, i) => i)

export function Nav({ activeId = 'overview' }: Props) {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const y = useMotionValue('0%')
  const hidden = useRef(false)

  useMotionValueEvent(scrollY, 'change', (value) => {
    if (open) return
    const prev = scrollY.getPrevious() ?? 0
    const goingDown = value > prev && value > 160
    if (value < prev || value <= 160) {
      if (!hidden.current) return
      hidden.current = false
      animate(y, '0%', { duration: 0.36, ease: [0.22, 1, 0.36, 1] })
      return
    }
    if (goingDown && !hidden.current) {
      hidden.current = true
      animate(y, '-100%', { duration: 0.36, ease: [0.22, 1, 0.36, 1] })
    }
  })

  return (
    <>
      <div className={styles.ruler} aria-hidden="true">
        <div className={styles.rulerFine} />
        <div className={styles.rulerMajor} />
        {ticks.map((n) => (
          <span key={n} className={styles.tick} style={{ left: `${n * 6.25}rem` }}>
            {n * 100}
          </span>
        ))}
      </div>
      <motion.header className={styles.nav} style={{ y }}>
        <div className={styles.inner}>
          <a
            className={styles.wordmark}
            href="#overview"
            onClick={(event) => {
              event.preventDefault()
              setOpen(false)
              scrollToSection('overview')
            }}
          >
            {site.name}
          </a>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
          <ul id="site-nav" className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={(event) => {
                    event.preventDefault()
                    setOpen(false)
                    scrollToSection(link.id)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className={styles.cta} href={APK_URL} download="Last_Song.apk">
            <AndroidIcon />
            <span className={styles.ctaLabel}>{site.ctaNav}</span>
          </a>
        </div>
      </motion.header>
    </>
  )
}
