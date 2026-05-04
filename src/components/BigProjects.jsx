import { useEffect, useRef } from "react";
import bigProjects from "../data/bigProjects.json";
import { BigProjectCard } from "./BigProjectCard";
import styles from "../CSS/BigProjects.module.css";

export const BigProjects = () => {
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15 },
    );

    if (titleRef.current) observer.observe(titleRef.current);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h2 className={`${styles.title} ${styles.fadeIn}`} ref={titleRef}>
        My latest projects
      </h2>
      <section className={styles.container} id="bigProjects">
        {bigProjects.map((project, id) => (
          <div
            key={id}
            className={styles.card}
            ref={(el) => (cardsRef.current[id] = el)}
            style={{ transitionDelay: `${id * 120}ms` }}
          >
            <BigProjectCard project={project} />
          </div>
        ))}
      </section>
    </>
  );
};
