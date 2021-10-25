import React from "react";
import styles from "./review_item.module.scss";

const ReviewItem = ({ review }) => {
  return (
    <article className={styles.reviewItem}>
      <header className={styles.reviewer}>
        <img className={styles.image} src={review.img} alt="" />
        <div className={styles.reviewerNameAndLocation}>
          <div className={styles.reviewName}>{review.reviewersName}</div>
          <div className={styles.reviewLocation}>
            {review.reviewresLocation}
          </div>
        </div>
        <div className={styles.rate}>{review.rate}</div>
        <img className={styles.starLogo} src={review.star} alt="" />
      </header>
      <div className={styles.reviewInfo}>{review.reviewText}</div>
    </article>
  );
};

export default ReviewItem;
