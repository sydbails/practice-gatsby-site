import React from "react"
import styles from "./footer.module.scss"
import { Link } from "gatsby"
import Medium from "../assets/icons8-medium-new.svg"
import LinkedIn from "../assets/icons8-linkedin.svg"
import Github from "../assets/icons8-github.svg"

export default () => (
  <footer className={styles.footer} role="contentinfo">
    <span className={styles.footerinfo}>Made with love by Syd &#9829;</span>
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <li className={styles.navlistitem}>
          <Link className={styles.navlistlink} to="https://github.com/sydbails">
            <Github className={styles.icon} />
          </Link>
        </li>
        <li className={styles.navlistitem}>
          <Link
            className={styles.navlistlink}
            to="https://www.linkedin.com/in/sydbailey/"
          >
            <LinkedIn className={styles.icon} />
          </Link>
        </li>
        <li className={styles.navlistitem}>
          <Link
            className={styles.navlistlink}
            to="https://medium.com/@sydbails"
          >
            <Medium className={styles.icon} />
          </Link>
        </li>
      </ul>
    </nav>
  </footer>
)
