import React from "react";
import styles from "../CSS/Exp.module.css";
import skills from "../data/skills.json";
import history from "../data/history.json";
import { getImageUrl } from "../utils";
import { FaLocationDot } from "react-icons/fa6";
import stylesAbout from "../CSS/About.module.css";

export const Exp = () => {
  return (
    <>
      <div className={styles.expAndAbout}>
        {" "}
        <section className={styles.container} id="experience">
          {" "}
          <div className={styles.expContainer}>
            <div className={styles.content}>
              <div className={styles.skills}>
                {skills.map((skill, id) => {
                  return (
                    <div className={styles.skill} key={id}>
                      <div className={styles.skillImgContainer}>
                        <img
                          src={getImageUrl(skill.imageSrc)}
                          alt={skill.title}
                        />
                      </div>
                      <p>{skill.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className={stylesAbout.container} id="about">
          <div className={stylesAbout.aboutContainer}>
            {" "}
            <h2 className={stylesAbout.title}>About me and my skills</h2>
            {/* <h2 className={stylesAbout.title}>A little bit about me</h2> */}
            <p className={stylesAbout.description}>
              I'm 29 years old and live in Umeå with my partner and dog. When
              i'm not coding I like to travel, workout and play games. <br></br>
              <br></br>I recently graduated from Chas Academy as a fullstack
              JavaScript developer, although my passion lies in the front end
              part of the stack! I have a background of studying graphic design
              and really love to be able to see my work come to life, be it in
              the form of a website or through artwork.
              <br></br>
              <br></br>Take a look at the icons to see a range of modern
              frameworks and design tools that I have experience in.
            </p>
          </div>
          <div className={stylesAbout.locationContainer}>
            <FaLocationDot
              className={`${stylesAbout.icon} && ${stylesAbout.locationIcon}`}
            />
            <p className={stylesAbout.locationText}>Umeå, Sweden</p>
          </div>
        </section>
      </div>
    </>
  );
};

{
  /* <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />

                <a
                  href={historyItem.link}
                  target="_blank"
                  className={styles.historyItemDetails}
                >
                  <h3>{`${historyItem.title}, ${historyItem.organisation}`}</h3>
                  <h2>{`${historyItem.startDate} - ${historyItem.endDate}`}</h2>
                  <p>{historyItem.role}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </a>
              </li>
            );
          })}
        </ul> */
}
