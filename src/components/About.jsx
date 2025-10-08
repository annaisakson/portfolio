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
          I'm 28 years old and live in Umeå with my partner and dog. When i'm
          not coding I like to travel, workout and play games. <br></br>
          <br></br>I recently graduated from Chas Academy as a fullstack
          JavaScript developer, although my passion lies in the front end part
          of the stack! I have a background of studying graphic design and
          really love to be able to see my work come to life, be it in the form
          of a website or through artwork.
        </p>
      </div>
    </section>
  );
};
