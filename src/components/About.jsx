import React from "react";
import styles from "../CSS/About.module.css";
import { FaLocationDot } from "react-icons/fa6";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.locationContainer}>
        <FaLocationDot className={`${styles.icon} && ${styles.locationIcon}`} />
        <p className={styles.locationText}>Umeå, Sweden</p>
      </div>

      <div className={styles.aboutContainer}>
        <h2 className={styles.title}>A little bit about me</h2>
        <p className={styles.description}>
          I'm 27 years old and live in Umeå with my partner and dog. When i'm
          not coding I like to travel, workout and play games. <br></br>
          I'm on my second year and still somewhat of a beginner when it comes
          to web development but I will display some of my projects here as a
          growing portfolio. Thank you for checking in!
        </p>
      </div>
    </section>
  );
};
