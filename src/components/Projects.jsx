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
    autoplaySpeed: 8000, // 6 seconds delay
    pauseOnHover: true, // stop autoplay when hovering
    adaptiveHeight: true, // adjusts height depending on content
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2.4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.1,
        },
      },
      {
        breakpoint: 400,
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
