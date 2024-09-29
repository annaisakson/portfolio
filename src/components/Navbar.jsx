import React, { useState } from "react";
import styles from "../CSS/Navbar.module.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export const Navbar = () => {
  const [listOpen, setListOpen] = useState(false);

  const toggleMenu = () => {
    setListOpen(!listOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <div className={styles.list}>
        {listOpen ? (
          <RxCross1 className={styles.listBtn} onClick={toggleMenu} />
        ) : (
          <RxHamburgerMenu className={styles.listBtn} onClick={toggleMenu} />
        )}
        <ul
          className={`${styles.listItems} ${
            listOpen ? styles.open : styles.closed
          }`}
          onClick={() => setListOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
