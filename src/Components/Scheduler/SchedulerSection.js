import { useEffect, useState } from "react";
import styles from "./SchedulerSection.module.css";
import customDashboard from "./SchedulerSection.json";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import CalendlyPopup from "../CalendlyPopup/CalendlyPopup";
import StorylaneEmbed from "../../Storelane/StorelaneEmbed";

const SchedulerSection = () => {
  const ctaButton = customDashboard.dashboardSection.cta;
  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
      checkMobileView();
      window.addEventListener("resize", checkMobileView);
      return () => window.removeEventListener("resize", checkMobileView);
    }, []);

  return (
    <div className={`homePageContainer ${styles.mainContainer}`}>
      <HeaderSection
        tag={customDashboard.dashboardSection.tag}
        title={customDashboard.dashboardSection.title}
        subtitle={customDashboard.dashboardSection.subtitle}
      />

      <div className={styles.customDashboardContainer}>
        <div className={styles.cardDashboardContainer}>
          <div className={styles.featuresContainerRight}>
            <StorylaneEmbed />
            <div className={styles.schedulerButtonContainerMobile}>
            {isMobile&&<CalendlyPopup text={ctaButton.text} />}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SchedulerSection;
