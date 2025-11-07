import React from "react";
import styles from "./SchedulerSection.module.css";
import customDashboard from "./SchedulerSection.json";
import CommonText from "../CommonText/CommonText";
import DashboardSlider from "../DashboardSection/DashboardSlider/DashboardSlider";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import SimpleButton from "../../Buttons/SimpleButton";

const SchedulerSection = () => {
  const ctaButton=customDashboard.dashboardSection.cta;
  return (
    <div className={`homePageContainer ${styles.mainContainer}`}>
      <HeaderSection
        tag={customDashboard.dashboardSection.tag}
        title={customDashboard.dashboardSection.title}
        subtitle={customDashboard.dashboardSection.subtitle}
      />

      <div className={styles.customDashboardContainer}>
        <div className={styles.cardDashboardContainer}>
          <div className={styles.featuresContainer}>
            <CommonText smallDescription="Features:" weight="font-weight-500" size="body-other" />
            {customDashboard.dashboardSection.features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <div className={styles.featureIconContainer}>
                  <img src={feature.icon} className={styles.featureIcon}/>
                </div>
                <div>
                  <CommonText
                    subHeading={feature.title}
                    size="lable-new-1"
                    weight="font-weight-500"
                    fontFamily="SF Pro"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.featuresContainerRight}>
            <DashboardSlider
              imageData={customDashboard.dashboardSection.image}
            />
          </div>
        </div>
        <div className={styles.schedulerButtonContainer}>

        <SimpleButton
        href={ctaButton.action}
              className={`buttonText regular buttonText  ${styles.schedulerButton}`}
            >
              {ctaButton.text}
            </SimpleButton>
        </div >
      </div>
    </div>
  );
};

export default SchedulerSection;
