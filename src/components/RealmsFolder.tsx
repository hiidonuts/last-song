import { pickupGrid, realms, realmsIntro } from '../content/copy'
import styles from './RealmsFolder.module.css'

export function RealmsFolder() {
  return (
    <section id="realms" className={styles.section} aria-labelledby="realms-title">
      <div className={styles.intro}>
        <p className="section-script">{realmsIntro.script}</p>
        <h2 id="realms-title" className={`pixel-head ${styles.introTitle}`}>
          {realmsIntro.title}
        </h2>
        <p className={styles.introBlurb}>{realmsIntro.blurb}</p>
      </div>

      <ol className={styles.stack}>
        {realms.map((world) => (
          <li key={world.id} className={styles.item}>
            <article
              className={`${styles.card} ${world.ink === 'dark' ? styles.cardDark : styles.cardLight}`}
              style={{ background: `var(${world.colorVar})` }}
            >
              <div className={styles.copy}>
                <div className={styles.meta}>
                  <span>{world.tab}</span>
                  <span>{world.chapter}</span>
                </div>
                <h3 className={styles.title}>{world.title}</h3>
                <p className={styles.bodyText}>{world.body}</p>
                <a className={styles.more} href="#scope">
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
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
