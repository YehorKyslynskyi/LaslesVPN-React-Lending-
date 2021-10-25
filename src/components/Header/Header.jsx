import React, { useEffect, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import cx from "classnames";
import titleLogo from "../../images/title_logo.svg";
import Menu from "./Menu/Menu";
import Button from "../Button/Button";
import styles from "./header.module.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const bodyElement = document.body;

  useEffect(() => {
    if (isActive) {
      disableBodyScroll(bodyElement);
    }
    return () => {
      enableBodyScroll(bodyElement);
    };
  }, [isActive, bodyElement]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerBody}>
          <div className={styles.titleLogo}>
            <button onClick={() => document.location.reload()}>
              <img
                style={{ width: "35px", height: "36.23px" }}
                src={titleLogo}
                alt="titleLogo"
              />
            </button>
          </div>
          <div className={styles.title}>
            <button onClick={() => document.location.reload()}>
              Lasles<span>VPN</span>
            </button>
          </div>

          <div
            className={cx(styles.menuAndButtons, {
              [styles.activeMenu]: isActive,
            })}
          >
            <nav className={styles.menu}>
              <Menu />
            </nav>
            <div className={styles.buttonsContainer}>
              <div className={styles.signInButtonContainer}>
                <Button mix={styles.signInButton}>Sign In</Button>
              </div>
              <div className={styles.signUpButtonContainer}>
                <Button mix={styles.signUpButton}>Sign Up</Button>
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              setIsActive((prevActive) => !prevActive);
            }}
            className={cx(styles.burger, { [styles.activeBurger]: isActive })}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
