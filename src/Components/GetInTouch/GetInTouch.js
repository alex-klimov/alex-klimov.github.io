import sectionData1 from "./GetInTouch.json";
import CommonText from "../CommonText/CommonText";
import styles from "./GetInTouch.module.css";
import CalendlyPopup from "../CalendlyPopup/CalendlyPopup";
import { useEffect, useState } from "react";

const GetInTouch = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => setIsMobile(window.innerWidth <= 640);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);
  const bgImageUrl = !isMobile
    ? "/assets/newDesign/getIntoBackground.png"
    : "/assets/newDesign/BackgroundShape.png";

  const sectionData = isMobile ? sectionData1.mobile : sectionData1.desktop;
  return (
    <div
      className={`homePageContainer ${styles.mainContainer}`}
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* {sectionData.ctaButtons[0]?.text && sectionData.ctaButtons[0]?.flag==="visible" && (
        <SimpleButton className={`regular ${styles.getInTouchButton}`}>
          {sectionData.ctaButtons[0].text}
        </SimpleButton>
      )} */}

      <div className={styles.headlineContainer}>
        <CommonText
          heading={sectionData.headline}
          size="title-h2"
          weight="font-weight-500"
        />
        <CommonText
          smallDescription={sectionData.subheadline}
          size="label-sub1"
          weight="regular"
          fontFamily="SF Pro"
        />
      </div>
      <CalendlyPopup
        text={sectionData.ctaButtons[1].text}
        className={styles.getInTouch}
      />
    </div>
  );
};

export default GetInTouch;
