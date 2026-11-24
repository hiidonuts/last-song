import { useState } from 'react'
import { faq } from '../content/copy'
import styles from './Faq.module.css'

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.veil} aria-hidden="true" />
      <div className={styles.wrap}>
        <h2 id="faq-title" className={`pixel-head ${styles.title}`}>
          {faq.title}
        </h2>
        {faq.items.map((item, i) => {
          const expanded = open === i
          return (
            <div key={item.q} className={styles.item}>
              <button
                type="button"
                className={styles.q}
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? -1 : i)}
              >
                {item.q}
                <span aria-hidden="true">{expanded ? '–' : '+'}</span>
              </button>
              {expanded ? <p className={styles.a}>{item.a}</p> : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}
