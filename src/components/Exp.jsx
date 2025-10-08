import React from "react";
import styles from "../CSS/Exp.module.css";
import skills from "../data/skills.json";
import history from "../data/history.json";
import { getImageUrl } from "../utils";

export const Exp = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>I have experience in</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div className={styles.skill} key={id}>
                <div className={styles.skillImgContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
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
        </ul>
      </div>
    </section>
  );
};
