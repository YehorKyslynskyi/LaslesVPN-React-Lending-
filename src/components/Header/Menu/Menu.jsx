import React from "react";
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <a href="https://www.google.com/">About</a>
      </li>
      <li>
        <a href="https://www.google.com/">Features</a>
      </li>
      <li>
        <a href="https://www.google.com/">Pricing</a>
      </li>
      <li>
        <a href="https://www.google.com/">Testimonials</a>
      </li>
      <li>
        <a href="https://www.google.com/">Help</a>
      </li>
    </ul>
  );
};

export default Menu;
