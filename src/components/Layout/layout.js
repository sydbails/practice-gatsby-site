import React from "react"
import styles from "./layout.module.scss"
import Header from "../GlobalHeader/header"
import Footer from "../Footer/footer"
import { AnimatePresence, motion } from "framer-motion"

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

export default ({ children }) => (
  <AnimatePresence>
    <div className={styles.background}>
      <Header />
      <motion.main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 2 }}
        className={styles.pagelayout}
      >
        {children}
      </motion.main>
    </div>
  </AnimatePresence>
)
