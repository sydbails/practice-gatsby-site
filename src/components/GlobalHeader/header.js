import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"
import { motion } from "framer-motion"
import Medium from "../../assets/icons8-medium-new.svg"
import LinkedIn from "../../assets/icons8-linkedin.svg"
import Github from "../../assets/icons8-github.svg"

export default () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <motion.li className={styles.navlistitem} whileHover={{ scale: 1.2 }}>
          <Link className={styles.navlistlink} to="/">
            <span className={styles.navlisttext}>Home</span>
          </Link>
        </motion.li>
        <motion.li className={styles.navlistitem} whileHover={{ scale: 1.2 }}>
          <Link className={styles.navlistlink} to="/about">
            <span className={styles.navlisttext}>About</span>
          </Link>
        </motion.li>
        <motion.li className={styles.navlistitem} whileHover={{ scale: 1.2 }}>
          <Link className={styles.navlistlink} to="/blog">
            <span className={styles.navlisttext}>Blog</span>
          </Link>
        </motion.li>
      </ul>
    </nav>
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <motion.li className={styles.navlistitem} whileHover={{ scale: 1.2 }}>
          <Link className={styles.navlistlink} to="https://github.com/sydbails">
            <Github className={styles.icon} />
          </Link>
        </motion.li>
        <motion.li className={styles.navlistitem} whileHover={{ scale: 1.2 }}>
          <Link
            className={styles.navlistlink}
            to="https://www.linkedin.com/in/sydbailey/"
          >
            <LinkedIn className={styles.icon} />
          </Link>
        </motion.li>
        <motion.li className={styles.navlistitem} whileHover={{ scale: 1.2 }}>
          <Link
            className={styles.navlistlink}
            to="https://medium.com/@sydbails"
          >
            <Medium className={styles.icon} />
          </Link>
        </motion.li>
      </ul>
    </nav>
    <footer className={styles.footer} role="contentinfo">
      <span className={styles.footerinfo}>made with love by Syd &#9829;</span>
    </footer>
  </header>
)
