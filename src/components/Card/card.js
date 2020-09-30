import React from "react"
import styles from "./card.module.scss"

export default ({ title, description, image, alt }) => (
  <div className={styles.card}>
    <img src={image} alt={alt} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)
