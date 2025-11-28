import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import difference from "./Difference.json";
import styles from "./Difference.module.css";
import CommonText from "../CommonText/CommonText";
import { useEffect, useState } from "react";

const Difference = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
      checkMobileView();
      window.addEventListener("resize", checkMobileView);
      return () => window.removeEventListener("resize", checkMobileView);
    }, []);
  const data = isMobile
    ? difference.mobileErpVsSkodySection
    : difference.erpVsSkodySection;

  return (
    <>
      <div className={styles.differenceHeader}>
        <HeaderSection
          tag={data.tag}
          title={data.title}
          subtitle={data.subtitle}
        />
      </div>
      <div>
        <div className={`homePageContainer ${styles.comparisonContainer}`}>
          {data.comparison.headers.map((item, index) => (
            <div className={styles.comparisonColumn} key={index}>
              {isMobile ? (
                <CommonText
                  subHeading={data.comparison.mobileHeader[index]}
                  size="title-h3"
                />
              ) : (
              <CommonText subHeading={item} size="title-h3" />
              )}
              <div className={styles.comparisonRows}>
                {(index === 0
                  ? data.comparison.erpSchedulers
                  : data.comparison.skodyScheduler
                ).map((itemText, itemIndex) => (
                  <div className={styles.row} key={itemIndex}>
                    {index === 0 ? (
                      <img src="/assets/newDesign/cross.png" alt="cross" />
                    ) : (
                      <img src="/assets/newDesign/tick.png" alt="tick" />
                    )}
                    <CommonText
                      smallDescription={itemText}
                      size="label-H2-sub2-bold"
                      weight="font-weight-500"
                      fontFamily="SF Pro"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Difference;
