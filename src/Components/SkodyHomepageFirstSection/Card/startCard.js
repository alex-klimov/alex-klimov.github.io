import React, { useEffect, useState } from "react";
import styles from "./startCard.module.css";

const StartCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);
  return (
    <>
      <div
        className={styles.starContainer}
        style={{ color: "white", fontSize: "15px", fontWeight: "500" }}
      >
        <div>
          {Array(5)
            .fill()
            .map((_, index) => (
              <img
                key={index}
                className={styles.star}
                src="/assets/newDesign/StartComponent/Star.png"
                alt="star"
              />
            ))}
        </div>
        <div className={styles.description}>
          {isMobile ? (
            <div className={styles.descriptionContent}>
              <span className={styles.italicPart}>
                "With Skodys scheduler and dashboard, the plan finally works
              </span>
              —no chaos, no surprises, just jobs done right."
            </div>
          ) : (
            <div className={styles.descriptionContent}>
              <span className={styles.italicPart}>
                "With Skody’s scheduler and dashboard, the plan finally works
              </span>
              —no chaos, no surprises, just jobs done right."
            </div>
          )}
        </div>
        <div className={styles.writer}>
          {!isMobile
            ? "– Zachary Yeager, CEO, Yeager Manufacturing"
            : "- Three Sigma Mfg"}
        </div>
      </div>
    </>
  );
};

export default StartCard;
