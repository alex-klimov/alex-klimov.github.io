import React from "react";
import WhySkodyDetails from "./WhySkody.json";
import Optimization from "../Optimization/Optimization";
import CommonText from "../../CommonText/CommonText";
import styles from "../SkodyAiHomepage.module.css";
import SimpleButton from "../../../Buttons/SimpleButton";
import HeaderSection from "../../../CommonComponent/HeaderSection/HeaderSection";
const WhySkody = () => {
  const OptimizationContent = WhySkodyDetails.sections[0];
  return (
    <>
    <div className={styles.whyskodyHeader}>
      <HeaderSection
        subtitle=" “Skody **auto-optimizes** your production schedule and highlights risks **— no spreadsheets, no manual drag & drop.**”"
      />
    </div>
      <div className={`homePageContainer ${styles.whySkodySection}`}>
        <CommonText
          newDescription={OptimizationContent.newHeading}
          size="demo-title"
        />
        <Optimization OptimizationContent={OptimizationContent} />
        <div className={styles.whyButtonContainer}>

        <CommonText smallDescription="See How Skody Thinks" size="body-other" weight="font-weight-500" fontFamily='SF Pro' />
        <SimpleButton
          className={`buttonText regular  ${styles.watchDemoButton}`}
          href={OptimizationContent.button.action}
        >
          {OptimizationContent.button.label}
        </SimpleButton>
        </div>
      </div>
    </>
  );
};

export default WhySkody;
