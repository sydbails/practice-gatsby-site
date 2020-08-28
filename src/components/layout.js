import React from "react"
import styles from "./layout.module.scss"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <>
    <Header />
    <main className={styles.pagelayout}>{children}</main>
    <Footer />
  </>
)
