import React from "react"
import SplashPage from "../components/Splash/SplashPage"
import styles from "../styles/home.module.scss"
import selfPortraitGray from "../images/gray-scale.png"
import selfPortraitColor from "../images/self-portrait-2-alt.png"
import Card from "../components/Card/card"
import Projects from "../components/Projects"
import { AnimatePresence, motion } from "framer-motion"

// need to fix orchestration, not waiting for page to mount
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

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
}

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 1 }}
      >
        <SplashPage>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            transition={{ delay: 1 }}
          >
            <h1 className={styles.title}>i'm syd.</h1>

            <motion.p
              className={styles.subTitle}
              initial="hidden"
              animate="visible"
              variants={list}
            >
              <motion.div variants={item}>front end developer, </motion.div>
              <motion.div variants={item}>user experience engineer,</motion.div>
              <motion.div variants={item}>empathatic human.</motion.div>
            </motion.p>
          </motion.div>
          {/* <div className={styles.imagecontainer}>
        <img
          className={styles.mainimage}
          src={selfPortraitGray}
          alt="gray scale cartoon drawing of syd"
        />
        <img
          className={styles.hiddenimage}
          src={selfPortraitColor}
          alt="full color cartoon drawing of syd"
        />
      </div> */}
          <div className={styles.containerfour}>{/* <Projects /> */}</div>
        </SplashPage>
      </motion.div>
    </AnimatePresence>
  )
}
