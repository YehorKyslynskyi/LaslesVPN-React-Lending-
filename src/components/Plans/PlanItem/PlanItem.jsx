import React, { useState } from "react";
import cx from "classnames";
import styles from "./plan_item.module.scss";

const PlanItem = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={cx(styles.planItem, { [styles.activeBorder]: isActive })}>
        <img className={styles.image} src={props.plan.img} alt="logo" />
        <div className={styles.title}>{props.plan.title}</div>
        <div className={styles.list}>
          <ul>
            {props.plan.list.map((item, index) => (
              <li key={index}> {item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.cost}>{props.plan.cost}</div>
        <button
          className={styles.selectBtn}
          onMouseOver={() => setIsActive(true)}
          onMouseOut={() => setIsActive(false)}
        >
          Select
        </button>
      </div>
    </>
  );
};

export default PlanItem;
