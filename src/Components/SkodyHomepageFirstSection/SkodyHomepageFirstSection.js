import React from "react";
import data from "./SkodyHomepageFirstSection.json";
import styles from "./SkodyHomepageFirstSection.module.css";
import CommonText from "../CommonText/CommonText";
import StartCard from "./Card/startCard";
import SimpleButton from "../../Buttons/SimpleButton";
import SliderWithDots from "../Slider/SliderWithDots/SliderWithDots";

function SkodyHomepageFirstSection() {
  return (
    <div className={styles.backgroundImageContainer}>
      <div className={styles.imageContainerNew}>
        <div className={`homePageContainer ${styles.outerContainer}`}>

          {/* LEFT SIDE CONTENT */}
          <div className={styles.headingContainer}>

            <div className={styles.heading} style={{ fontFamily: "SF Pro" }}>
              <CommonText
                heading={<>{data.header.title}</>}
                size="title-h1-multi"
                weight="font-weight-500"
              />
            </div>

            <div className={styles.description}>
              <CommonText
                smallDescription={data.header.description}
                size="label-H1-sub1"
                weight="font-weight-500"
                fontFamily="SF Pro"
              />
            </div>

            <div className={styles.buttonContainer}>
              <SimpleButton
                className={`buttonText ${styles.mySpecialButton}`}
                href="https://app.skody.dev/#/sdemo"
              >
                See Optimized Schedule
              </SimpleButton>

              <SimpleButton
                className={`buttonText ${styles.watchDemoButton}`}
                href="https://www.youtube.com/watch?v=bPo1-RFnTC0"
              >
                Watch 1-min Demo
              </SimpleButton>
            </div>

            <StartCard />
          </div>

          <div className={styles.slider} style={{ height: "460px", overflow: "visible", position: "relative" }}>
    <SliderWithDots />
</div>

        </div>
      </div>
    </div>
  );
}

export default SkodyHomepageFirstSection;
