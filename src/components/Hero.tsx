import { HUAWEI_URL, heroSprites, heroTags, site } from '../content/copy'
import { useClock } from '../hooks/useClock'
import styles from './Hero.module.css'

export function Hero() {
  const time = useClock()

  return (
    <section id="overview" className={styles.hero} aria-labelledby="hero-title">
      <p className={styles.clock}>{time}</p>
      {heroTags.map((tag) => (
        <span key={tag.label} className={`${styles.sticker} ${styles[tag.place]}`}>
          {tag.label}
        </span>
      ))}
      <div className={`${styles.orb} ${styles.orbLeft}`} aria-hidden="true">
        {heroSprites.map((src) => (
          <img key={src} className="pixel-art" src={src} alt="" />
        ))}
      </div>
      <div className={`${styles.orb} ${styles.orbRight}`} aria-hidden="true">
        {heroSprites.map((src) => (
          <img key={`r-${src}`} className="pixel-art" src={src} alt="" />
        ))}
      </div>

      <div className={styles.stage}>
        <p className={`section-script ${styles.script}`}>{site.scriptLabel}</p>
        <div className={styles.frame}>
          <span className={`${styles.handle} ${styles.handleTL}`} aria-hidden="true" />
          <span className={`${styles.handle} ${styles.handleTR}`} aria-hidden="true" />
          <span className={`${styles.handle} ${styles.handleBL}`} aria-hidden="true" />
          <span className={`${styles.handle} ${styles.handleBR}`} aria-hidden="true" />
          <h1 id="hero-title" className={`pixel-head ${styles.title}`}>
            {site.name}
          </h1>
        </div>
        <p className={styles.soon}>{site.soon}</p>
        <p className={styles.tagline}>{site.tagline}</p>
        <a className="btn" href={HUAWEI_URL}>
          <span className="btn__mark" aria-hidden="true">≫</span>
          {site.ctaPrimary}
        </a>
      </div>
    </section>
  )
}
