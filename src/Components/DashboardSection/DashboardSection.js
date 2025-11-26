import customDashboard1 from "./DashboardSection.json";
import styles from "./DashboardSection.module.css";
import CommonText from "../CommonText/CommonText";
import DashboardSlider from "./DashboardSlider/DashboardSlider";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import ChasoSlider from "./ChasoSlider/ChasoSlider";
import SimpleButton from "../../Buttons/SimpleButton";
import CalendlyPopup from "../CalendlyPopup/CalendlyPopup";
import ChasoMobileSlider from "./ChasoMobileSlider/ChasoMobileSlider";
import { useEffect, useState } from "react";

const DashboardSection = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkMobileView = () => setIsMobile(window.innerWidth <= 640);
      checkMobileView();
      window.addEventListener("resize", checkMobileView);
      return () => window.removeEventListener("resize", checkMobileView);
    }, []);
    const customDashboard=isMobile ?customDashboard1.mobile :customDashboard1.desktop;
  return (
    <>
      <div className="">
        <div className={`homePageContainer ${styles.chaosDashboardContainer}`}>
          <HeaderSection
            tag={customDashboard.Chaos.tag}
            title={customDashboard.Chaos.title}
            subtitle={customDashboard.Chaos.subtitle}
          />
        </div>
        <div className={``}>
          {isMobile?
          <ChasoMobileSlider/>
          :
          <ChasoSlider />
          }
        </div>
        <div className={`homePageContainer ${styles.chaosButtonContainer}`}>
          <CalendlyPopup
            text={customDashboard.Chaos.cta.text}
            className={styles.chaosButton}
          />
        </div>
      </div>
      <div className={`homePageContainer ${styles.mainContainer}`}>
        <div className={styles.customDashboardContainer}>
          <div className={`${styles.subHeading}`}>
            <CommonText
              heading={customDashboard.dashboardSection.title}
              size="title-h2"
              weight="font-weight-500"
            />
            <CommonText
              smallDescription={customDashboard.dashboardSection.subtitle}
              size="label-H2-sub2"
            />
          </div>
          <div
            className={` homePageContainer ${styles.cardDashboardContainer}`}
          >
            <div className={styles.dashSlider}>
              <DashboardSlider
                imageData={customDashboard.dashboardSection.image}
              />
            </div>
            <div className={styles.dashboardFeaturesContainerRight}>
              {customDashboard.dashboardSection.features.map(
                (feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div>
                      <img
                        src="/assets/newDesign/CustomDashboard/ticketIcon.png"
                        alt="dashBoardSectionImages"
                        className={styles.iconDash}
                      />
                    </div>
                    <div>
                      <CommonText
                        subHeading={feature.title}
                        size="title-h3-custom"
                        weight="font-weight-500"
                      />
                    </div>
                    
                  </div>
                  
                )
              )}
               <CommonText
              smallDescription={customDashboard.dashboardSection.footerText}
              size="label-sub1"
              weight="label-H3-sub3"
              // fontFamily="prompt"
            />
              <SimpleButton
              href={customDashboard.dashboardSection.cta.action}
              className={`buttonText regular buttonText  ${styles.faqButton}`}
            >
              {customDashboard.dashboardSection.cta.text}
            </SimpleButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSection;
