import React from "react"
import styles from "./card.module.scss"
import Github from "../assets/icons8-github.svg"

export default props => (
  <div className={styles.card}>
    <Github />
    <h2>skill title</h2>
    <p>
      how did I acquire this skill? this information goes here. how did I
      acquire this skill? this information goes here. how did I acquire this
      skill? this information goes here. how did I acquire this skill? this
      information goes here. how did I acquire this skill? this information goes
      here.
    </p>
  </div>
)
