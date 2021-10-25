import React from "react";
import styles from "./button.module.scss";
import cx from "classnames";

const Button = ({ children, mix }) => {
  return <button className={cx(styles.button, mix)}>{children}</button>;
};

export default Button;
