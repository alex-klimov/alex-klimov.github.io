import React from "react";
import styles from "./startCard.module.css"

const StartCard = () => {
  return (
    <>
      <div className={styles.starContainer} style={{color: 'white', fontSize: '15px', fontWeight: '500'}}>
        <div>

        {Array(5).fill().map((_, index) => (
          <img key={index} className={styles.star} src="/assets/newDesign/StartComponent/Star.png" alt="star" />
        ))}
        </div>
        <div className={styles.description}>"12-day schedule dropped to 10 — without overtime."</div>
        <div className={styles.writer}>– Zach, Yeager Mfg</div>
      </div>
    </>
  );
};

export default StartCard;
