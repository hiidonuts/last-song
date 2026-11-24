import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { pickupGrid, realms, realmsIntro, type Realm } from '../content/copy'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './RealmsFolder.module.css'

const tabShift = [styles.tab0, styles.tab1, styles.tab2, styles.tab3]

function RealmCard({
  world,
  index,
  total,
  progress,
}: {
  world: Realm
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const reduced = useReducedMotion()
  const span = 1 / Math.max(total - 1, 1)
  const start = Math.min(index * span, 0.999)
  const behind = total - 1 - index
  const scale = useTransform(progress, [start, 1], [1, 1 - behind * 0.05])
  const rotateX = useTransform(progress, [start, Math.min(start + span, 1)], [0, behind ? 8 : 0])
  const shade = useTransform(progress, [start, 1], [0, Math.min(behind * 0.16, 0.5)])
  const live = !reduced && behind > 0

  return (
    <li className={styles.item} style={{ top: `calc(clamp(4.5rem, 10svh, 7rem) + ${index * 14}px)` }}>
      <motion.article
        className={styles.card}
        style={live ? { scale, rotateX } : undefined}
      >
        <div
          className={`${styles.tab} ${tabShift[index] ?? ''}`}
          style={{ background: `var(${world.colorVar})`, color: world.ink === 'light' ? 'var(--color-ink)' : 'var(--color-folder-ink)' }}
        >
          <span>{world.tab}</span>
          {live ? <motion.span className={styles.shade} style={{ opacity: shade }} /> : null}
        </div>
        <div
          className={`${styles.body} ${world.ink === 'light' ? styles.inkLight : styles.inkDark}`}
          style={{ background: `var(${world.colorVar})` }}
        >
          <div className={styles.copy}>
            <div className={styles.meta}>
              <span className={styles.dot} />
              <span>{world.chapter}</span>
            </div>
            <h3 className={styles.title}>{world.title}</h3>
            <p className={styles.bodyText}>{world.body}</p>
            <a className={styles.more} href="#faq">
              Learn more
            </a>
            <div className={styles.tags}>
              {world.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.panel}>
            {world.panel === 'inventory' ? (
              <div className={styles.inventory}>
                {pickupGrid.map((item) => (
                  <img key={item.src} className="pixel-art" src={item.src} alt={item.alt} />
                ))}
              </div>
            ) : (
              <img className={`pixel-art ${styles.preview}`} src={world.image} alt="" />
            )}
            <span className={styles.previewTag}>Preview</span>
            {live ? <motion.span className={styles.shade} style={{ opacity: shade }} /> : null}
          </div>
        </div>
      </motion.article>
    </li>
  )
}

export function RealmsFolder() {
  const listRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start start', 'end end'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.0005 })

  return (
    <section id="realms" className={styles.section} aria-labelledby="realms-title">
      <div className={styles.wrap}>
        <div className={styles.intro}>
          <p className="section-script">{realmsIntro.script}</p>
          <h2 id="realms-title" className={`pixel-head ${styles.introTitle}`}>
            {realmsIntro.title}
          </h2>
          <p className={styles.introBlurb}>{realmsIntro.blurb}</p>
        </div>
        <ol ref={listRef} className={styles.stack}>
          {realms.map((world, index) => (
            <RealmCard
              key={world.id}
              world={world}
              index={index}
              total={realms.length}
              progress={progress}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
