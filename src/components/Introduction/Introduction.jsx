import React from "react";
import Button from "../Button/Button";
import styles from "./introduction.module.scss";
import img from "../../images/block_1_img.svg";

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className={styles.container}>
        <div className={styles.info}>
          <header className={styles.tytle}>
            Want anything to be easy with <span>LaslesVPN</span>.
          </header>
          <div className={styles.infoBody}>
            Provide a network for all your needs with ease and fun using{" "}
            <span>LaslesVPN</span> discover interesting features from us.
          </div>
          <Button mix={styles.getStartedBtn}>Get Started</Button>
          <div className={styles.boxShadow}></div>
        </div>

        <img className={styles.image} src={img} alt="block_1_img" />
      </div>
    </section>
  );
};

export default Introduction;
