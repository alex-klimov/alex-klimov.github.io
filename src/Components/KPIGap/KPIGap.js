import React from "react";
import styles from "./KPIGap.module.css";
import data from "./KPIGap.json";
import CommonText from "../CommonText/CommonText";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import SimpleButton from "../../Buttons/SimpleButton";

const KpiSection = () => {
  return (
    <div className={`homePageContainer ${styles.sectionContainer}`}>
      <HeaderSection
        tag={data.tag}
        title={data.title}
        subtitle={data.subtitle}
      />


      <div className={styles.rightContent}>
        <div className={styles.leftImageContainer}>
          <img
            className={styles.leftImage}
            src={data.image.src}
            alt={data.image.alt}
          />
        </div>
        <div className={styles.rightContentContainer}>
          <CommonText subHeading={data.infoTitle} size="title-h3" />

          <ul className={styles.featuresList}>
            {data.features.map((feature, idx) => (
              <li key={idx}>
                <span className={styles.checkIcon}>
                  <img
                  alt="bullPoint"
                    src="/assets/newDesign/KPISection/bulletPoint.png"
                    style={{ width: "24px%", height: "24px" ,paddingTop:"10px"}}
                  />
                </span>
                <span className={`label-H2-sub2 ${styles.feature}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <SimpleButton
              className={`buttonText regular buttonText  ${styles.kpiButton}`}
              href={data.cta.action}
            >
              {data.cta.text}
            </SimpleButton>
          <div className={styles.note}>
            <CommonText smallDescription={data.note} size="body-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KpiSection;
