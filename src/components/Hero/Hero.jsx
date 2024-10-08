import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* <p className={styles.greet}>Welcome to, </p> */}
        <p className={styles.title}>Thiya Academy</p>
        {/* <p className={styles.academy}>Academy</p></div> */}
        <p className={styles.description}>
          I'm a professional trader with 7 years of experience in <br />
          Forex Market. Reach out if you'd like to learn more!
        </p>
        {/* <a href="https://wa.me/6383586388" target="_blank" className={styles.contactBtn}>
          Contact Me
        </a> */}
      </div>
      {/* <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
