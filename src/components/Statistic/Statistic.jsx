import React from "react";
import styles from "./statistic.module.scss";
import StatisticBlock from "./StatisticBlock/StatisticBlock";
import userIcon from "../../images/user_icon.svg";
import locationIcon from "../../images/location_icon.svg";
import serversIcon from "../../images/server_icon.svg";

const Statistic = () => {
  return (
    <>
      <section className={styles.statistic}>
        <div className={styles.container}>
          <StatisticBlock title={"90+"} info={"Users"} logo={userIcon} />
          <div className={styles.spliter_1}></div>
          <StatisticBlock
            title={"30+"}
            info={"Locations"}
            logo={locationIcon}
            mix={styles.locationLogo}
          />
          <div className={styles.spliter_2}></div>
          <StatisticBlock title={"50+"} info={"Servers"} logo={serversIcon} />
        </div>
      </section>
      <div className={styles.boxShadow}></div>
    </>
  );
};

export default Statistic;
