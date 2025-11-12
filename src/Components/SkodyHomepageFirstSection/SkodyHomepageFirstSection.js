import React, { useEffect, useState } from "react";
import data from "./SkodyHomepageFirstSection.json";
import styles from "./SkodyHomepageFirstSection.module.css";
import CommonText from "../CommonText/CommonText";
import StartCard from "./Card/startCard";
import SimpleButton from "../../Buttons/SimpleButton";

function SkodyHomepageFirstSection() {
  // Array of image paths
  const images = [
    "/assets/newDesign/StartComponent/startComponent1.png",
    "/assets/newDesign/StartComponent/startComponent2.png",
    "/assets/newDesign/StartComponent/startComponent3.png",
    "/assets/newDesign/StartComponent/startComponent4.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set interval to change image every second
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [ images.length]);

  return (
    <>
      <div className={styles.backgroundImageContainer}>
        <div className={styles.imageContainerNew}>
          <div className={`homePageContainer ${styles.outerContainer}`}>
            <div className={styles.headingContainer}>
              <StartCard />
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
                <SimpleButton className={`buttonText  ${styles.mySpecialButton}`} href="https://app.skody.dev/#/sdemo">See Optimized Schedule</SimpleButton>
                <SimpleButton className={`buttonText ${styles.watchDemoButton}`} href='https://www.youtube.com/watch?v=bPo1-RFnTC0'>Watch 1-min Demo</SimpleButton>
              </div>
            </div>
            <div className={styles.imageSection}>
              <div className={styles.imageContainer2}>
                <img src={images[currentIndex]} style={{ width: "100%", height: "auto" }} alt="carousel" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkodyHomepageFirstSection;
