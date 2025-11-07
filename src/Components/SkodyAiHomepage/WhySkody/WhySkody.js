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
        title="⚡ Powered by continuous AI optimization"
        subtitle=" “Shops using Skody cut late orders by **15 %** and freed **10–15 %** capacity — without adding overtime.”
"
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
