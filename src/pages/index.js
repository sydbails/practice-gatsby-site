import React from "react"
import Layout from "../components/layout"
import styles from "../styles/home.module.scss"
import selfPortraitGray from "../images/gray-scale.png"
import selfPortraitColor from "../images/self-portrait-2-alt.png"
import Card from "../components/card"

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.mainheader}>lorem ipsum dolor sit amet.</h1>
      <p className={styles.maindescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lectus magna
        fringilla urna porttitor rhoncus.
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
      <div className={styles.container}>
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  )
}
