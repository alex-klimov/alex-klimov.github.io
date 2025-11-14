import sectionData from "./GetInTouch.json";
import CommonText from "../CommonText/CommonText";
import styles from "./GetInTouch.module.css";
import SimpleButton from "../../Buttons/SimpleButton";
import CalendlyPopup from "../CalendlyPopup/CalendlyPopup";

const GetInTouch = () => {
  const bgImageUrl = "/assets/newDesign/getIntoBackground.png";
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
      <SimpleButton className={`regular ${styles.getInTouchButton}`}>
        {sectionData.ctaButtons[0].text}
      </SimpleButton>

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
