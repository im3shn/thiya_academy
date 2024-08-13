import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import ScrollIntoView from 'react-scroll-into-view'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className={styles.navbar}>
      <div>
      <a className={styles.title} href="/">
      {/* <img
        src={getImageUrl("nav/thiya_academy_logo.png")}
        alt="Thiya Academy"
        className={styles.navImg}
      /> */}Thiya Academy
      </a>
      </div>
      
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#/courses">Courses</a>
          </li>
          <li>
            <a href="#/whyus">Why Us?</a>
          </li>
          <li>
            <ScrollIntoView selector="#contact" className={styles.scrollIntoView}>
                Contact
            </ScrollIntoView>
            </li>
        </ul>
      </div>
    </nav>
  );
};
