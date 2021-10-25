import React from "react";
import styles from "./features.module.scss";
import img from "../../images/block_2_img.svg";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <img className={styles.image} src={img} alt="block_2_img" />
        <div className={styles.info}>
          <header className={styles.title}>
            We Provide Many Features You Can Use
          </header>
          <div className={styles.infoBody}>
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </div>
          <div className={styles.list}>
            <ul>
              <li>&nbsp; &nbsp; &nbsp; &nbsp; Powerfull online protection.</li>
              <li>&nbsp; &nbsp; &nbsp; &nbsp; Internet without borders.</li>
              <li>&nbsp; &nbsp; &nbsp; &nbsp; Supercharged VPN</li>
              <li>&nbsp; &nbsp; &nbsp; &nbsp; No specific time limits.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
