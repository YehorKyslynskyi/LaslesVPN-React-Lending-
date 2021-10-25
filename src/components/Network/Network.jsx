import React from "react";
import styles from "./network.module.scss";
import hugeGlobal from "../../images/huge_global.svg";

const Network = () => {
  return (
    <section className={styles.network}>
      <div className={styles.container}>
        <header className={styles.title}>
          Huge Global Network of Fast VPN
        </header>
        <div className={styles.info}>
          See <span>LaslesVPN</span> everywhere to make it easier for you when
          you move locations.
        </div>
        <img className={styles.image} src={hugeGlobal} alt="huge_global" />
      </div>
    </section>
  );
};

export default Network;
