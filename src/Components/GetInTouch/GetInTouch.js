import React from "react";
import sectionData from "./GetInTouch.json";
import CommonText from "../CommonText/CommonText";
import styles from "./GetInTouch.module.css";
import SimpleButton from "../../Buttons/SimpleButton";

const GetInTouch = () => {
  return (
    <div
      className={`homePageContainer ${styles.mainContainer}`}
      style={{
        background: sectionData.backgroundColor,
      }}
    >
       <SimpleButton
        className={`regular body-lg  ${styles.getInTouchButton}`}
      >
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
      <SimpleButton
      to={sectionData.ctaButtons[1].action}
        className={`buttonText regular buttonText  ${styles.getInTouch}`}
      >
        {sectionData.ctaButtons[1].text}
      </SimpleButton>
    </div>
  );
};

export default GetInTouch;
