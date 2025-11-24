import React, { useEffect, useState } from "react";
import dataProduct from "./SkodyHomepageFirstSection.json";
import styles from "./SkodyHomepageFirstSection.module.css";
import CommonText from "../CommonText/CommonText";
import StartCard from "./Card/startCard";
import SimpleButton from "../../Buttons/SimpleButton";
import SliderWithDots from "../Slider/SliderWithDots/SliderWithDots";

function SkodyHomepageFirstSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);
  const data = isMobile ? dataProduct.mobile : dataProduct.desktop;
  return (
    <div className={styles.backgroundImageContainer}>
      <div className={styles.imageContainerNew}>
        <div className={`homePageContainer ${styles.outerContainer}`}>
          {/* LEFT SIDE CONTENT */}
          <div className={styles.headingContainer}>
            <div className={styles.heading} style={{ fontFamily: "SF Pro" }}>
              {isMobile ? (
                <CommonText
                  heading={<>{data.header.mobileTitle}</>}
                  size="title-h1-multi"
                  weight="font-weight-500"
                />
              ) : (
                <CommonText
                  heading={<>{data.header.title}</>}
                  size="title-h1-multi"
                  weight="font-weight-500"
                />
              )}
            </div>

            <div className={styles.description}>
              {isMobile ? (
                <CommonText
                  smallDescription={data.header.mobileDescription}
                  size="label-H1-sub1"
                  weight="font-weight-500"
                  fontFamily="SF Pro"
                />
              ) : (
                <CommonText
                  smallDescription={data.header.description}
                  size="label-H1-sub1"
                  weight="font-weight-500"
                  fontFamily="SF Pro"
                />
              )}
            </div>

            {isMobile ? (
              <div className={styles.buttonContainer}>
                <SimpleButton
                  className={`buttonText ${styles.mySpecialButton}`}
                  href="https://www.youtube.com/watch?v=bPo1-RFnTC0"
                >
                  Demo Schedule
                </SimpleButton>
              </div>
            ) : (
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
            )}

            <StartCard />
          </div>

          <div
            className={styles.slider}
            style={{
              // height: "460px",
              overflow: "visible",
              position: "relative",
            }}
          >
            <SliderWithDots />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkodyHomepageFirstSection;
