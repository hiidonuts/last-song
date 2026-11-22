import { reviews } from '../content/copy'
import styles from './Reviews.module.css'

export function Reviews() {
  return (
    <section id="reviews" className={styles.section} aria-labelledby="reviews-title">
      <div className={styles.head}>
        <p className="section-script">{reviews.script}</p>
        <h2 id="reviews-title" className={`pixel-head ${styles.title}`}>
          {reviews.title}
        </h2>
      </div>
      <div className={styles.row}>
        {reviews.items.map((item) => (
          <article key={item.name} className={styles.card}>
            <p className={styles.kicker}>Feedback</p>
            <p className={styles.quote}>{item.quote}</p>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.role}>{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
