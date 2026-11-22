import { useState } from 'react'
import { HUAWEI_URL, navLinks, site } from '../content/copy'
import styles from './Nav.module.css'

type Props = { activeId?: string }

export function Nav({ activeId = 'overview' }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a className={styles.wordmark} href="#overview">
          {site.name}
        </a>
        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <ul id="site-nav" className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={activeId === link.id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className={styles.cta} href={HUAWEI_URL}>
          {site.ctaNav}
        </a>
      </div>
    </header>
  )
}
