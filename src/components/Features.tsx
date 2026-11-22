import { features } from '../content/copy'
import styles from './Features.module.css'

export function Features() {
  return (
    <section id="gallery" className={styles.section} aria-labelledby="features-title">
      <div className={styles.head}>
        <h2 id="features-title" className={`pixel-head ${styles.title}`}>
          {features.title}
        </h2>
      </div>
      <div className={styles.grid}>
        {features.cards.map((card) => (
          <article key={card.kicker} className={styles.card}>
            <h3 className={styles.kicker} style={{ background: `var(${card.color})` }}>
              {card.kicker}
            </h3>
            <p className={styles.body}>{card.body}</p>
            <div className={styles.chips}>
              {card.chips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
