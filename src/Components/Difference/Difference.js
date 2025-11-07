import React from "react";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import difference from "./Difference.json";
import styles from "./Difference.module.css";
import CommonText from "../CommonText/CommonText";

const data = difference.erpVsSkodySection;
const Difference = () => {
  return (
    <>
      <div className={styles.differenceHeader}>
        <HeaderSection
          tag={data.tag}
          title={data.title}
          subtitle={data.subtitle}
        />
      </div>
      <div>
        <div className={`homePageContainer ${styles.comparisonContainer}`}>
          {data.comparison.headers.map((item, index) => (
            <div className={styles.comparisonColumn} key={index}>
              <CommonText subHeading={item} size="title-h3" />
              <div className={styles.comparisonRows}>
                {data.comparison.erpSchedulers.map((erpItem, erpIndex) => (
                  <div className={styles.row}>
                    {index===0?<img src="/assets/newDesign/cross.png" alt="cross"/>:<img src="/assets/newDesign/tick.png" alt="tick"/>}
                    <CommonText smallDescription={erpItem} size="label-H2-sub2-bold" fontFamily="SF Pro" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Difference;
