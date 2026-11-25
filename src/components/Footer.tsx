import { footer, site } from '../content/copy'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.mast}>
          <a className={styles.wordmark} href="#overview">
            {site.name}
          </a>

          <div className={styles.col}>
            <h3>Navigation</h3>
            <ul>
              {footer.navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3>Community</h3>
            <ul>
              {footer.community.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bar}>
          <span>{footer.rights}</span>
          <a href="#overview">{footer.backTop}</a>
        </div>
      </div>
    </footer>
  )
}
