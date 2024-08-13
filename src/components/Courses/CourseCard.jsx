import React from "react";

import styles from "./CourseCard.module.css";
import { getImageUrl } from "../../utils";

export const CourseCard = ({
  course: { title, imageSrc, description, skills, price, currency },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <ul className={styles.description}>
            {description.map((description, id) => {
              return (
                <li key={id} className={styles.description}>
                  {description}
                </li>
              );
            })}
        </ul>
      </div>
      {/* <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul> */}
      <div className={styles.links}>
        <p className={styles.link}>
          {currency} {price}
        </p>
      </div>
    </div>
  );
};
