import { useState } from "react";
import styles from "../CSS/BigProjectCard.module.css";
import { getImageUrl } from "../utils";
import { PiArrowArcRightBold } from "react-icons/pi";

export const BigProjectCard = ({
  project: {
    title,
    subheading,
    imageSrc,
    imageBack,
    description,
    list,
    skills,
    logo,
    source,
    site,
    demo,
  },
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <section
        className={styles.container}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`${styles.flipWrapper} ${isFlipped ? styles.flipped : ""}`}
        >
          <div className={styles.cardFront}>
            <img
              src={getImageUrl(imageSrc)}
              alt={`Image of ${title}`}
              className={styles.img}
            />
            <div className={styles.content}>
              <div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subheading}>{subheading}</p>
              </div>
              <ul className={styles.skillsList}>
                {skills.map((skill, id) => (
                  <li key={id} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>{" "}
              <div className={styles.links}>
                {demo && (
                  <a href={demo} className={styles.link} target="_blank">
                    Demo
                  </a>
                )}
                {site && (
                  <a href={site} className={styles.link} target="_blank">
                    Visit Site
                  </a>
                )}
                {source && (
                  <a href={source} className={styles.link} target="_blank">
                    Source
                  </a>
                )}
              </div>
              <PiArrowArcRightBold className={styles.arrow} />
            </div>
          </div>

          <div className={styles.cardBack}>
            <img
              src={getImageUrl(imageBack)}
              alt={`Image of ${title}`}
              className={styles.img}
            />
            <div className={styles.content}>
              <img
                src={getImageUrl(logo)}
                alt={`Image of ${title}`}
                className={styles.logo}
              />
              <p className={styles.description}>{description}</p>
              <ul className={styles.list}>
                {list.map((item, id) => (
                  <li key={id} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
