import React from "react";
import styles from "../CSS/Contact.module.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.contact}>
        <h2>Contact me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:anna-sara.isaksson@chasacademy.se" target="_blank">
            <IoMail className={`${styles.icon} && ${styles.mailIcon}`} />
          </a>
          <p>anna-sara.isaksson@chasacademy.se</p>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/anna-sara-isakson-2b23912b7/"
            target="_blank"
          >
            <FaLinkedinIn
              className={`${styles.icon} && ${styles.linkedInIcon}`}
            />
          </a>
          <p>linkedin.com/anna-saraisakson</p>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/annaisakson" target="_blank">
            <FaGithub className={`${styles.icon} && ${styles.gitHubIcon}`} />
          </a>
          <p>github.com/annaisakson</p>
        </li>
      </ul>
    </footer>
  );
};
