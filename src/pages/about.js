import React from "react"
import Layout from "../components/Layout/layout"
import Card from "../components/Card/card"
import styles from "../styles/about.module.scss"
import selfPortraitGray from "../images/gray-scale-2.png"
import selfPortraitColor from "../images/self-portrait-1-alt.png"

export default () => (
  <Layout>
    <div className={styles.about}>
      <h2 className={styles.mainheader}>about me.</h2>
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
      <div>
        <div className={styles.containerThree}>
          <Card
            title="accessibility"
            description="In a past life, my focuses on DEI strategy were centered around creating equal opportunities for minorities across the entire company. Turns out, the same can be done for the internet, with a focus on semantic HTML, focused elements, ensuring that a page is screen-readable, and color accessibility."
          />
          <Card
            title="delighting users"
            description="I take a lot of pride in not only deeply understanding my end user, but by finding new and unique ways to delight them. Sometimes that means animations that elicit an overwhelmingly positive response from the user; sometimes that means design decisions that take the guesswork out of how to use a product or site."
          />
          <Card
            title="pixel perfect"
            description="When working with designers, product managers, and other stakeholders, I take pride in my ability to take a file, an idea, or a post-it note scribble, and turn it into a beautiful, real-life prototype."
          />
        </div>
        {/* <p className={styles.aboutparagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
          magna fringilla urna porttitor rhoncus. Tellus integer feugiat
          scelerisque varius morbi enim nunc faucibus. Nulla at volutpat diam ut
          venenatis tellus in. At augue eget arcu dictum varius duis at.
          Adipiscing bibendum est ultricies integer. Nibh praesent tristique
          magna sit amet purus gravida quis blandit. Tincidunt tortor aliquam
          nulla facilisi cras fermentum. Mi tempus imperdiet nulla malesuada.
          Pharetra convallis posuere morbi leo urna molestie at elementum.
          Euismod lacinia at quis risus sed vulputate odio ut. Pellentesque
          adipiscing commodo elit at imperdiet dui accumsan. Egestas integer
          eget aliquet nibh praesent tristique magna sit. Eget mauris pharetra
          et ultrices neque ornare aenean euismod elementum. Facilisis gravida
          neque convallis a cras semper. Ornare aenean euismod elementum nisi
          quis eleifend quam adipiscing. Etiam dignissim diam quis enim lobortis
          scelerisque fermentum dui faucibus. Velit laoreet id donec ultrices.
        </p> */}
      </div>
    </div>
  </Layout>
)
