import React, { useState } from "react";
import styles from "./SchedulerSection.module.css";
import customDashboard from "./SchedulerSection.json";
import CommonText from "../CommonText/CommonText";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import { PointClickSlider } from "../DashboardSection/PointClickSlider/PointClickSlider";
import CalendlyPopup from "../CalendlyPopup/CalendlyPopup";

const SchedulerSection = () => {
  const ctaButton = customDashboard.dashboardSection.cta;
  const [sliderInstance, setSliderInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handles click on feature items, changes slider and active index
  const handleFeatureClick = (index) => {
    if (sliderInstance?.current && typeof sliderInstance.current.moveToIdx === "function") {
      sliderInstance.current.moveToIdx(index);
      setActiveIndex(index);
    }
  };

  // Called by DashboardSlider on slide changes (swipe, manual navigation)
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

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
            <CommonText
              smallDescription="Features:"
              weight="font-weight-500"
              size="body-other"
            />
            {customDashboard.dashboardSection.features.map((feature, index) => (
              <div
                key={index}
                className={`${styles.featureItem} ${
                  activeIndex === index ? styles.activeFeature : ""
                }`}
                onClick={() => handleFeatureClick(index)}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.featureIconContainer}>
                  <img
                    src={feature.icon}
                    className={styles.featureIcon}
                    alt="featureIcon"
                  />
                </div>
                <div>
                  <CommonText
                    subHeading={feature.title}
                    size="label-H3-sub3"
                    weight="font-weight-500"
                    fontFamily="SF Pro"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.featuresContainerRight}>
            <PointClickSlider
              imageData={customDashboard.dashboardSection.image}
              sliderRefCallback={setSliderInstance}
              onSlideChange={handleSlideChange}
            />
          </div>
        </div>

        <div className={styles.schedulerButtonContainer}>
          
           <CalendlyPopup text={ctaButton.text}/>
        </div>
      </div>
    </div>
  );
};

export default SchedulerSection;
