import { useState, type FormEvent } from 'react'
import { devlog, heroSprites } from '../content/copy'
import styles from './Devlog.module.css'

export function Devlog() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setSent(true)
  }

  return (
    <section id="devlog" className={styles.section} aria-labelledby="devlog-title">
      <div className={styles.grid}>
        <div>
          <h2 id="devlog-title" className={`pixel-head ${styles.title}`}>
            {devlog.title}
          </h2>

          {sent ? (
            <p className={styles.thanks} role="status">
              {devlog.thanks}
            </p>
          ) : (
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="devlog-name">{devlog.fields.name}</label>
                  <input id="devlog-name" name="name" required autoComplete="name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="devlog-email">{devlog.fields.email}</label>
                  <input
                    id="devlog-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="devlog-handle">{devlog.fields.handle}</label>
                <input id="devlog-handle" name="handle" autoComplete="nickname" />
              </div>
              <div className={styles.field}>
                <label htmlFor="devlog-message">{devlog.fields.message}</label>
                <textarea id="devlog-message" name="message" required rows={5} />
              </div>
              <button className="btn" type="submit">
                {devlog.submit}
              </button>
            </form>
          )}
        </div>

        <div className={styles.art}>
          <span className={`${styles.corner} ${styles.tl}`} aria-hidden="true" />
          <span className={`${styles.corner} ${styles.tr}`} aria-hidden="true" />
          <span className={`${styles.corner} ${styles.bl}`} aria-hidden="true" />
          <span className={`${styles.corner} ${styles.br}`} aria-hidden="true" />
          <span className={styles.artTag}>devlog.png</span>
          <div className={styles.portraits}>
            {heroSprites.map((src) => (
              <div key={src} className={styles.portrait}>
                <img className="pixel-art" src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
