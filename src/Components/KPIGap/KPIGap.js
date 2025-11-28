import  { useEffect, useState } from "react";
import styles from "./KPIGap.module.css";
import kpiData from "./KPIGap.json";
import CommonText from "../CommonText/CommonText";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import SimpleButton from "../../Buttons/SimpleButton";

const KpiSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkMobileView = () => setIsMobile(window.innerWidth <= 640);
      checkMobileView();
      window.addEventListener("resize", checkMobileView);
      return () => window.removeEventListener("resize", checkMobileView);
    }, []);
  const data=isMobile? kpiData.mobile : kpiData.desktop;

  return (
    <div className={`${styles.sectionContainer}`}>
      <HeaderSection
        tag={data.tag}
        title={data.title}
        subtitle={data.subtitle}
      />


      <div className={styles.rightContent}>
        <div className={styles.leftImageContainer}>
          <img
            className={styles.leftImage}
            src={data.image.src}
            alt={data.image.alt}
          />
        </div>
        <div className={styles.rightContentContainer}>
          <CommonText subHeading={data.infoTitle} size="title-h3" weight="font-weight-500"/>

          <ul className={styles.featuresList}>
            {data.features.map((feature, idx) => (
              <li key={idx}>
                <span className={styles.checkIcon}>
                  
                    {isMobile?
                   <img
                  alt="bullPoint"
                    src="/assets/newDesign/KPISection/blueTick.png"
                    style={{ width: "24px%", height: "24px" }}
                  />:
                   <img
                  alt="bullPoint"
                    src="/assets/newDesign/KPISection/bulletPoint.png"
                    style={{ width: "24px%", height: "24px" ,paddingTop:"10px"}}
                  />}
            
                </span>
                <span className={`label-H2-sub2 ${styles.feature}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
         
          <SimpleButton
              className={`buttonText regular buttonText  ${styles.kpiButton}`}
              href={data.cta.action}
            >
              {data.cta.text}
            </SimpleButton>
             {isMobile &&
           <SimpleButton
              className={`buttonText regular buttonText  ${styles.kpiButton}`}
              href={data.ctaBook.action}
            >
              {data.ctaBook.text}
            </SimpleButton>
            }
          <div className={styles.note}>
            <CommonText smallDescription={data.note} size="body-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KpiSection;
