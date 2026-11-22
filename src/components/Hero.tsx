import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HUAWEI_URL, heroSprites, site } from '../content/copy'
import { useClock } from '../hooks/useClock'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './Hero.module.css'

const drift = [
  {
    place: styles.orbLeft,
    frames: ['translate3d(0,0,0)', 'translate3d(1.5rem,-1rem,0)', 'translate3d(0.5rem,1.25rem,0)', 'translate3d(0,0,0)'],
    duration: 11,
  },
  {
    place: styles.orbRight,
    frames: ['translate3d(0,0,0)', 'translate3d(-1.25rem,1rem,0)', 'translate3d(-0.25rem,-1.5rem,0)', 'translate3d(0,0,0)'],
    duration: 13,
  },
]

export function Hero() {
  const time = useClock()
  const reduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const scale = useTransform(scrollYProgress, (v) => (reduced ? 1 : 1 - Math.min(1, Math.max(0, v)) * 0.06))
  const veil = useTransform(scrollYProgress, (v) => (reduced ? 0 : Math.min(1, Math.max(0, v)) * 0.35))

  return (
    <section
      id="overview"
      ref={ref}
      className={reduced ? styles.heroStill : styles.hero}
      aria-labelledby="hero-title"
    >
      <div className={styles.sticky}>
        <motion.div className={styles.stage} style={{ scale }}>
          <p className={styles.clock}>{time}</p>

          {drift.map((item, i) => (
            <motion.div
              key={item.place}
              className={`${styles.orb} ${item.place}`}
              initial={reduced ? false : { scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 420, damping: 16, delay: 2.1 + i * 0.08 }}
            >
              <motion.div
                className={styles.orbBubble}
                animate={reduced ? undefined : { transform: item.frames }}
                transition={{ duration: item.duration, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img className="pixel-art" src={heroSprites[i]} alt="" />
              </motion.div>
            </motion.div>
          ))}

          <motion.p
            className={`${styles.pill} ${styles.pillLeft}`}
            initial={reduced ? false : { scale: 0.6, rotate: 13, opacity: 0 }}
            animate={{ scale: 1, rotate: 5, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 420, damping: 16, delay: 2.15 }}
          >
            2D platformer
          </motion.p>
          <motion.p
            className={`${styles.pill} ${styles.pillRight}`}
            initial={reduced ? false : { scale: 0.6, rotate: -4, opacity: 0 }}
            animate={{ scale: 1, rotate: -12, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 420, damping: 16, delay: 2.21 }}
          >
            Pixel art
          </motion.p>

          <div className={styles.center}>
            <motion.p
              className={styles.script}
              initial={reduced ? false : { clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 0.6, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {site.scriptLabel}
            </motion.p>

            <div className={styles.titleWrap}>
              <p className={`${styles.note} ${styles.noteLeft}`}>Huawei GameCenter</p>
              <p className={`${styles.note} ${styles.noteRight}`}>Coming soon to PC</p>
              <div className={styles.frame}>
                <span className={`${styles.handle} ${styles.handleTL}`} />
                <span className={`${styles.handle} ${styles.handleTR}`} />
                <span className={`${styles.handle} ${styles.handleBL}`} />
                <span className={`${styles.handle} ${styles.handleBR}`} />
                <div className={styles.titleClip}>
                  <motion.h1
                    id="hero-title"
                    className={styles.title}
                    initial={reduced ? false : { y: '105%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.7, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {site.name}
                  </motion.h1>
                </div>
              </div>
            </div>

            <p className={styles.soon}>{site.soon}</p>
            <p className={styles.tagline}>{site.tagline}</p>
            <a className="btn" href={HUAWEI_URL}>
              <span className="btn__mark" aria-hidden="true">≫</span>
              {site.ctaPrimary}
            </a>
          </div>
        </motion.div>
        {!reduced ? <motion.div className={styles.veil} style={{ opacity: veil }} aria-hidden="true" /> : null}
      </div>
    </section>
  )
}
