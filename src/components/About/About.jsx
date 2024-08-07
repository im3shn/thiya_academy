import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section id="about">
      <h2 className={styles.heading}>About Us</h2>
      <div  className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title}>Welcome to Thiya Academy, </h3>
          <p className={styles.description}>
          where we transform your trading aspirations into reality. At Thiya Academy, we specialize in providing comprehensive and structured trading courses designed to equip you with the knowledge and skills necessary to navigate the complex world of Forex and commodities trading.
          </p>
          <h3 className={styles.title}>Our Mission </h3>
          <p className={styles.description}>
          Our mission is to empower individuals by offering top-notch trading education that is accessible, practical, and results-oriented. We believe that anyone can become a successful trader with the right guidance, tools, and strategies.        </p>
        </div>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About image"
          className={styles.aboutImg}
        />
      </div>
    </section>
  );
};
