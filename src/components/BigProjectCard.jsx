import styles from "../CSS/BigProjectCard.module.css";
import { getImageUrl } from "../utils";

export const BigProjectCard = ({
  project: { title, subheading, imageSrc, description, list, skills },
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
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subheading}>{subheading}</p>
          </div>
          <p className={styles.description}>{description}</p>
          <ul className={styles.list}>
            {list.map((item, id) => {
              return (
                <li key={id} item={item} className={styles.listItem}>
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className={styles.skillsList}>
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
