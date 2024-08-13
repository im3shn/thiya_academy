import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import contacts from "../../data/contacts.json";

export const Contact = () => {
  return (
    <>
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <img className={styles.logo} src={getImageUrl("contact/thiya_text_logo.png")} alt="Email icon" />
        <p>Thiya Aademy is a leading forex academy known for delivering well tested and highly accurate courses. We deliver high-quality services that drive financial growth, combining innovation, expertise, and exceptional customer experiences.</p>
        <p>&copy; {(new Date().getFullYear())} Thiya Academy.</p>
      </div>

      <div className={styles.divs}>
      <h3 className={styles.heading}>Our Services</h3>

      <ul className={styles.links}>

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

        </ul>
      </div>

      <div className={styles.divs}>
        <h3 className={styles.heading}>Contact</h3>
        <ul className={styles.links}>

        <a href={`mailto:${contacts.email}`}  className={styles.link}>
          <li className={styles.link}>
            <img className={styles.img} src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <p>{contacts.email}</p>
          </li>
        </a>

        <a href={`tel:${contacts.phone}`} target="_blank" className={styles.link}>
          <li className={styles.link}>
            <img className={styles.img}
                src={getImageUrl("contact/callIcon.png")}
                alt="WhatsApp icon"
              />
            <p>{contacts.phone}</p>
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
      </div>

    </footer>
    </>
  );
};
