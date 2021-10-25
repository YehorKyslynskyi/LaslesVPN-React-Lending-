import React from "react";
import styles from "./partners.module.scss";
import redditLogo from "../../images/reddit_logo.png";
import netflixLogo from "../../images/netflix_logo.png";
import amazonLogo from "../../images/amazon_logo.png";
import discordLogo from "../../images/discord_logo.png";
import spotifyLogo from "../../images/spotify_logo.png";

const Partners = () => {
  return (
    <aside className={styles.partners}>
      <div className={styles.container}>
        <img
          className={styles.netflixLogo}
          src={netflixLogo}
          alt="netflix_logo"
        />
        <img className={styles.redditLogo} src={redditLogo} alt="reddit_logo" />
        <img className={styles.amazonLogo} src={amazonLogo} alt="amazon_logo" />
        <img
          className={styles.discordLogo}
          src={discordLogo}
          alt="discord_logo"
        />
        <img
          className={styles.spotifyLogo}
          src={spotifyLogo}
          alt="spotify_logo"
        />
      </div>
    </aside>
  );
};

export default Partners;
