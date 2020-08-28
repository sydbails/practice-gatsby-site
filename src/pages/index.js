import React from "react"
import Layout from "../components/layout"
import styles from "../styles/home.module.scss"
import selfPortraitGray from "../images/gray-scale.png"
import selfPortraitColor from "../images/self-portrait-2-alt.png"

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.mainheader}>
        front end engineer, problem solver, dreamer.
      </h1>
      <p className={styles.maindescription}>
        I learn things quickly -- case & point: this portfolio was created with
        Gatsby, which I learned on 8/26/20.
      </p>
      <div className={styles.imagecontainer}>
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
      </div>
    </Layout>
  )
}
