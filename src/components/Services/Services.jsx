import React from "react";

import styles from "./Services.module.css";
import { getImageUrl } from "../../utils";

export const Services = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={styles.title}>Services</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("services/servicesImage.png")}
          alt="Me sitting with a laptop"
          className={styles.servicesImage}
        /> */}
        <div className={styles.servicesItems}>
          <div className={styles.servicesItem}>
            <img className={styles.img} src={getImageUrl("services/tradingIcon.png")} alt="Cursor icon" />
            <div className={styles.servicesItemText}>
              <h3>Comprehensive Trading Courses</h3>
              <p>
              Learn everything from basic trading principles to advanced strategies. 
              Our courses are designed for all levels of traders, ensuring you gain the 
              confidence and skills needed to trade effectively.
              </p>
            </div>
          </div>
          <div className={styles.servicesItem}>
            <img className={styles.img} src={getImageUrl("services/financialAdviseIcon.png")} alt="Server icon" />
            <div className={styles.servicesItemText}>
              <h3>Expert Financial Advice</h3>
              {/* <br/> */}
              <p>
              Receive personalized financial advice from experienced traders and financial experts. 
              We help you make informed decisions and plan for a secure financial future.
              </p>
            </div>
          </div>
          <div className={styles.servicesItem}>
            <img className={styles.img} src={getImageUrl("services/supportIcon.png")} alt="UI icon" />
            <div className={styles.servicesItemText}>
              <h3>Ongoing Support</h3>
              {/* <br/> */}
              <p>
              Our support team is always here to help you with any questions or challenges you may face. 
              From technical issues to trading tips, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
