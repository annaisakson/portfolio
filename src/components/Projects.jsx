import { useEffect, useState, useRef } from "react";
import projects from "../data/projects.json";
import styles from "../CSS/Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {
  const cardsRef = useRef([]);
  const [visibleCount, setVisibleCount] = useState(4);

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleCount]); // re-run when more cards are shown

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My other work</h2>
      <div className={styles.grid}>
        {visibleProjects.map((project, id) => (
          <div
            key={id}
            className={styles.card}
            ref={(el) => (cardsRef.current[id] = el)}
            style={{ transitionDelay: `${(id % 4) * 80}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      {hasMore && (
        <button
          className={styles.showMore}
          onClick={() => setVisibleCount((c) => c + 4)}
        >
          Show more
        </button>
      )}
    </section>
  );
};
