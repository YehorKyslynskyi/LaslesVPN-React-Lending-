import React from "react";
import styles from "./statistic_block.module.scss";
import cx from "classnames";

const StatisticBlock = ({ title, info, logo, mix }) => {
  return (
    <div className={styles.statisticBlock}>
      <img className={cx(styles.userIcon, mix)} src={logo} alt="user_icon" />
      <div className={styles.infoContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>{info}</div>
      </div>
    </div>
  );
};

export default StatisticBlock;
