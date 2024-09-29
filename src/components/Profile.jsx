import React from "react";
import styles from "../CSS/Profile.module.css";
import { getImageUrl } from "../utils";

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anna-Sara</h1>
        <p className={styles.description}>
          I'm a fullstack JavaScript student with an interest in graphical art
          and design. Reach out if you'd like to learn more!
        </p>
        <a
          href="mailto:anna-sara.isaksson@chasacademy.se"
          className={styles.contactBtn}
        >
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("profilepic3.png")}
        alt="Profile picture"
        className={styles.profileImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
