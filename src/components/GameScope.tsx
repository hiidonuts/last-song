import { scope } from '../content/copy'
import styles from './GameScope.module.css'

export function GameScope() {
  return (
    <section id="scope" className={styles.section} aria-labelledby="scope-title">
      <div className={styles.bg} aria-hidden="true">
        <img className="pixel-art" src={scope.image} alt="" />
        <div className={styles.veil} />
      </div>
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
    </section>
  )
}
