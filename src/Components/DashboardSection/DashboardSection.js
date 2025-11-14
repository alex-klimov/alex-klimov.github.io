import customDashboard from "./DashboardSection.json";
import styles from "./DashboardSection.module.css";
import CommonText from "../CommonText/CommonText";
import DashboardSlider from "./DashboardSlider/DashboardSlider";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import ChasoSlider from "./ChasoSlider/ChasoSlider";
import SimpleButton from "../../Buttons/SimpleButton";
import CalendlyPopup from "../CalendlyPopup/CalendlyPopup";

const DashboardSection = () => {
  return (
    <>
      <div>
        <div className={`homePageContainer ${styles.chaosDashboardContainer}`}>
          <HeaderSection
            tag={customDashboard.Chaos.tag}
            title={customDashboard.Chaos.title}
            subtitle={customDashboard.Chaos.subtitle}
          />
        </div>
        <div>
          <ChasoSlider />
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
          <div className={`margin ${styles.subHeading}`}>
            <CommonText
              heading={customDashboard.dashboardSection.title}
              size="title-h2"
              weight="font-weight-500"
            />
            <CommonText
              smallDescription={customDashboard.dashboardSection.subtitle}
              size="label-H2-sub2"
              weight="font-weight-500"
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
                        size="title-h3"
                        weight="font-weight-500"
                      />
                      <CommonText
                        smallDescription={feature.description}
                        size="label-sub1"
                        fontFamily="prompt"
                        weight="label-H3-sub3"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className={styles.dashboardFooterContainer}>
            <CommonText
              smallDescription={customDashboard.dashboardSection.footerText}
              size="label-sub1"
              weight="label-H3-sub3"
              fontFamily="prompt"
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
    </>
  );
};

export default DashboardSection;
