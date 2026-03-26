import styles from "../CSS/BigProjectCard.module.css";
import { getImageUrl } from "../utils";

export const BigProjectCard = ({
  project: { title, imageSrc, description, skills },
}) => {
  return (
    <>
      <section className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.img}
        />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <ul className={styles.list}>
            {skills.map((skill, id) => {
              return (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
