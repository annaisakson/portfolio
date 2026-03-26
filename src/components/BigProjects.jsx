import bigProjects from "../data/bigProjects.json";
import { BigProjectCard } from "./BigProjectCard";
import styles from "../CSS/BigProjects.module.css";

export const BigProjects = () => {
  return (
    <>
      {/* <h2 className={styles.title}>My latest projects</h2> */}
      <section className={styles.container} id="bigProjects">
        {bigProjects.map((project, id) => (
          <BigProjectCard key={id} project={project} />
        ))}
      </section>
    </>
  );
};
