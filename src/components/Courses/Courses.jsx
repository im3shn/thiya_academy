import React from "react";

import styles from "./Courses.module.css";

import courses from "../../data/courses.json";
import { CourseCard } from "./CourseCard";

export const Courses = () => {
  return (
    <section className={styles.container} id="courses">
      <h2 className={styles.title}>Courses</h2>
      <div className={styles.courses}>
        {courses.map((course, id) => {
          return <CourseCard key={id} course={course} />;
        })}
      </div>
    </section>
  );
};
