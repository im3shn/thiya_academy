import React from "react";

import styles from "./WhyUs.module.css";
import { getImageUrl } from "../../utils";

export const WhyUs = () => {
  return (
    <section className={styles.container} id="whyus">
      <h2 className={styles.title}>Why Choose Us?</h2>
      <div className={styles.content}>
        <div className={styles.servicesItems}>

          <div className={styles.servicesItem}>
            <img className={styles.img} src={getImageUrl("whyus/w1.png")} alt="Cursor icon" />
            <div className={styles.servicesItemText}>
              <h3>Expert Instructors </h3> <br />
              <p>
              Our team of seasoned trading professionals brings a wealth of experience to the table. They are dedicated to providing top-notch education, sharing real-world insights, and offering practical advice to help you navigate the complexities of financial markets. With our expert instructors, you’ll gain the confidence and skills needed to excel in trading.
              </p>
            </div>
          </div>

          <div className={styles.servicesItem}>
            <img className={styles.img} src={getImageUrl("whyus/w2.png")} alt="Server icon" />
            <div className={styles.servicesItemText}>
              <h3>Instant Access to Resources</h3>
              <p>
              We understand the importance of having immediate access to trading tools and educational materials. Our platform provides instant access to a variety of resources, including live market data, trading simulators, and an extensive library of tutorials and guides. This ensures you can start learning and trading without any delays.
              </p>
            </div>
          </div>

          <div className={styles.servicesItem}>
            <img className={styles.img} src={getImageUrl("whyus/w3.png")} alt="UI icon" />
            <div className={styles.servicesItemText}>
              <h3>Satisfied Students</h3><br /> 
              <p>
              Our commitment to excellence is reflected in the satisfaction of our students. We pride ourselves on our positive feedback and the success stories of our alumni. By providing personalized support and continuous guidance, we ensure that our students not only learn but thrive in their trading careers. Join our community of happy and successful traders today.
              </p>
            </div>
          </div>

          <div className={styles.servicesItem}>
            <img className={styles.img} src={getImageUrl("whyus/w4.png")} alt="UI icon" />
            <div className={styles.servicesItemText}>
              <h3>Personalized Financial Advice</h3>
              <p>
              In addition to our trading courses, we offer personalized financial advice tailored to your individual goals. Our experts will help you create a customized trading plan, provide insights into market trends, and offer strategies to maximize your returns. With our guidance, you’ll be equipped to make smart, informed decisions and achieve financial success.
              </p>
            </div>
          </div>

          <div className={styles.servicesItem}>
            <img className={styles.img} src={getImageUrl("whyus/w5.png")} alt="UI icon" />
            <div className={styles.servicesItemText}>
              <h3>Secure Learning Environment</h3>
              <p>
              At Thiya Academy, we prioritize your learning journey and ensure a secure and supportive environment. Our comprehensive curriculum covers all aspects of trading, from the basics to advanced strategies. We use state-of-the-art technology and resources to provide you with a seamless learning experience, ensuring you’re well-equipped to make informed trading decisions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
