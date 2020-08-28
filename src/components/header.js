import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

export default () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <li className={styles.navlistitem}>
          <Link className={styles.navlistlink} to="/">
            Home
          </Link>
        </li>
        <li className={styles.navlistitem}>
          <Link className={styles.navlistlink} to="/blog">
            Blog
          </Link>
        </li>
        <li className={styles.navlistitem}>
          <Link className={styles.navlistlink} to="/about">
            About Me
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)
