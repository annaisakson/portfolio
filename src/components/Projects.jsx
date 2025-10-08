import React from "react";
import projects from "../data/projects.json";
import styles from "../CSS/Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {
  const settings = {
    dots: true, // show navigation dots
    infinite: true, // loop around
    speed: 500, // animation speed (ms)
    slidesToShow: 4, // how many slides visible at once
    slidesToScroll: 1, // how many slides move on arrow/dot click
    arrows: true, // show left/right arrows
    autoplay: true, // auto-slide
    autoplaySpeed: 6000, // 6 seconds delay
    pauseOnHover: true, // stop autoplay when hovering
    adaptiveHeight: true, // adjusts height depending on content
    responsive: [
      {
        breakpoint: 1024, // at 1024px or below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // at 768px or below
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My latest projects</h2>
      <Slider {...settings} className="mySlider">
        {projects.map((project, id) => (
          <div key={id} className={styles.slide}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </section>
  );
};
