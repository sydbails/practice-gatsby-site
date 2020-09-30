import React from "react"
import styles from "./footer.module.scss"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Medium from "../../assets/icons8-medium-new.svg"
import LinkedIn from "../../assets/icons8-linkedin.svg"
import Github from "../../assets/icons8-github.svg"

export default () => (
  <footer className={styles.footer} role="contentinfo">
    <span className={styles.footerinfo}>Made with love by Syd &#9829;</span>
  </footer>
)
