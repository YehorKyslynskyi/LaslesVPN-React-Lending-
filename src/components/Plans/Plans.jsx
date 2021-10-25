import React, { useState } from "react";
import PlanItem from "./PlanItem/PlanItem";
import styles from "./plans.module.scss";
import freePlanImg from "../../images/free_plan.svg";
import standardPlanImg from "../../images/standard_plan.svg";
import premiumPlanImg from "../../images/premium_plan.svg";

const Plans = () => {
  const [plans] = useState([
    {
      id: 1,
      img: freePlanImg,
      title: "Free Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      cost: "Free",
    },
    {
      id: 2,
      img: standardPlanImg,
      title: "Standard Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      cost: "$9 / mo",
    },
    {
      id: 3,
      img: premiumPlanImg,
      title: "Premium Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features",
      ],
      cost: "$12 / mo",
    },
  ]);

  return (
    <section className={styles.plans}>
      <div className={styles.container}>
        <header className={styles.title}>Choose Your Plan</header>
        <div className={styles.titleInfo}>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </div>
        <div className={styles.plansContainer}>
          {plans.map((plan) => (
            <PlanItem plan={plan} key={plan.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
