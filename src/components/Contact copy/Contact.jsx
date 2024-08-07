import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import contacts from "../../data/contacts.json";

export const Contact = () => {
  return (
    <>
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <img className={styles.logo} src={getImageUrl("contact/thiya_text_logo.png")} alt="Email icon" />
      </div>
      <ul className={styles.links}>

        <a href={`mailto:${contacts.email}`}  className={styles.link}>
          <li className={styles.link}>
            <img className={styles.img} src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <p>{contacts.email}</p>
          </li>
        </a>

        <a href={`https://wa.me/${contacts.phone}`} target="_blank" className={styles.link}>
          <li className={styles.link}>
            <img className={styles.img}
                src={getImageUrl("contact/whatsappicon.png")}
                alt="WhatsApp icon"
              />
            <p>{contacts.phone}</p>
          </li>
        </a>

        <a href={contacts.instagram} target="_blank" className={styles.link}>
          <li className={styles.link}>
            <img className={styles.img}
                src={getImageUrl("contact/instagramIcon.png")}
                alt="WhatsApp icon"
              />
            <p>{contacts.instagram.split("https://www.instagram.com/")}</p>
          </li>
        </a>
        
        <a href={contacts.facebook} target="_blank" className={styles.link}>
          <li className={styles.link}>
            <img className={styles.img}
                src={getImageUrl("contact/facebookIcon.png")}
                alt="WhatsApp icon"
              />
            <p>{contacts.facebook.split("https://www.facebook.com/")}</p>
          </li>
        </a>

        <a href={contacts.twitter} target="_blank" className={styles.link}>
          <li className={styles.link}>
            <img className={styles.img}
                src={getImageUrl("contact/twitterIcon.png")}
                alt="WhatsApp icon"
              />
            <p>{contacts.twitter.split("https://www.x.com/")}</p>
          </li>
        </a>

        <a href={contacts.telegram} target="_blank" className={styles.link}>
          <li className={styles.link}>
            <img className={styles.img}
                src={getImageUrl("contact/telegramIcon.png")}
                alt="WhatsApp icon"
              />
            <p>{contacts.telegram.split("https://www.t.me/")}</p>
          </li>
        </a>

        <a href={contacts.location.link} target="_blank" className={styles.link}>
          <li className={styles.link}>
            <img className={styles.img} src={getImageUrl("contact/mapsicon.png")} alt="Github icon" />
            <div>
              {/* <p>{contacts.location.text}</p> */}
              <p>{contacts.location.address.Building_No},&nbsp;
                  {contacts.location.address.Road},
              </p>
              <p>{contacts.location.address.Street},</p>
              <p>{contacts.location.address.City}
                  {contacts.location.address.Postal}
              </p>
            </div>
          </li>
        </a>

      </ul>
    </footer>
    <div className={styles.copyright}>Copyright &copy; {(new Date().getFullYear())} Thiya Academy. All Rights Reserved.</div>
    </>
  );
};
