import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.img} src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:im3shn@gmail.com">im3shn@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.img}
            src={getImageUrl("contact/whatsappicon.png")}
            alt="WhatsApp icon"
          />
          <a href="https://wa.me/+916383586388" target="_blank">+91 6383586388</a>
        </li>
        <li className={styles.link}>
          <img className={styles.img} src={getImageUrl("contact/mapsicon.png")} alt="Github icon" />
          <a href="https://maps.app.goo.gl/DovBeciyF6ZF1M5T7" target="_blank">
            34/8 Central Studio Road,
            Dhanalakshmipuram,
            Singanallur,
            Coimbatore - 641005
          </a>
        </li>
      </ul>
    </footer>
  );
};
