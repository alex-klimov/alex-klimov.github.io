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
        <div className={styles.description}>"Skody cut our late jobs by 15% in the first month."          </div>
        <div className={styles.writer}>- Three Sigma Mfg</div>
      </div>
    </>
  );
};

export default StartCard;
