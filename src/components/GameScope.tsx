import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { scope } from '../content/copy'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './GameScope.module.css'

export function GameScope() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const y = useTransform(scrollYProgress, (v) => (reduced ? '0%' : `${Math.min(1, Math.max(0, v)) * 6}%`))
  const shade = useTransform(scrollYProgress, (v) => (reduced ? 0.35 : Math.min(1, Math.max(0, v)) * 0.45))

  return (
    <section
      id="scope"
      ref={ref}
      className={reduced ? styles.sectionStill : styles.section}
      aria-labelledby="scope-title"
    >
      <div className={styles.sticky}>
      <motion.div className={styles.bg} style={{ y }} aria-hidden="true">
        <img className="pixel-art" src={scope.image} alt="" />
      </motion.div>
      <motion.div className={styles.veil} style={{ opacity: shade }} />
      <div className={styles.content}>
        <p className={`section-script ${styles.script}`}>{scope.script}</p>
        <h2 id="scope-title" className={`pixel-head ${styles.title}`}>
          {scope.title}
        </h2>
        <div className={styles.stats}>
          {scope.stats.map((stat) => (
            <article key={stat.label} className={styles.stat}>
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.label}>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
