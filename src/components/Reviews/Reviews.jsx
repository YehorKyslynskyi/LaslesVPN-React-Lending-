import React from "react";
import btnLeft from "../../images/btn_left.svg";
import btnRight from "../../images/btn_right.svg";
import ReviewItem from "./ReviewItem/ReviewItem";
import NavigateDot from "../NavigateDot/NavigateDot";
import Button from "../Button/Button";
import { reviews } from "./helper";
import styles from "./reviews.module.scss";

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <header className={styles.title}>
          Trusted by Thousands of Happy Customer
        </header>
        <div className={styles.info}>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </div>
        <div className={styles.reviewsContainer}>
          {reviews.map((review) => (
            <ReviewItem review={review} key={review.id} />
          ))}
        </div>
        <div className={styles.navigate}>
          {reviews.map((review) => (
            <NavigateDot key={review.id} />
          ))}
          <div className={styles.btnsContainer}>
            <Button mix={styles.btnLeft}>
              <img src={btnLeft} alt="" />
            </Button>
            <Button mix={styles.btnRight}>
              <img src={btnRight} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
