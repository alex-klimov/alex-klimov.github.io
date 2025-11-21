import React, { useEffect, useState } from "react";
import CommonText from "../../CommonText/CommonText";
import styles from "./Optimization.module.css";

const Optimization = ({ OptimizationContent }) => {
  const heading = OptimizationContent.heading;
  const image = OptimizationContent.imageContainer;
  const description = OptimizationContent.content;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const checkMobileView = () => setIsMobile(window.innerWidth <= 640);
      checkMobileView();
      window.addEventListener("resize", checkMobileView);
      return () => window.removeEventListener("resize", checkMobileView);
    }, []);

  return (
    <>
      <div className={` ${styles.outerContainer}`}>
        {!isMobile ? (
          <>
            <div className={styles.headingContainer}>
              {heading.map((item, index) => (
                <div key={index} className={styles.titleContainer}>
                  <CommonText
                    heading={item.title}
                    size="title-h2-v2"
                    weight="bold"
                  />
                  {item.subheading&& (
                     <CommonText
                    smallDescription={item.subheading}
                    size="label-sub1"
                  />
                  )}
                 
                </div>
              ))}
            </div>

            <div className={styles.imageContainer}>
              <img src={image.src} alt={image.alt} className={styles.image} />
            </div>
            <div className={`font-weight-500 ${styles.description}`}>
              <CommonText
                smallDescription={description.description}
                size="body-other"
                fontFamily="SF Pro"
              />
            </div>
          </>
        ) : (
          <>
          <div style={{display:"flex"}}>

          {heading.map((item, index) => (
                <div key={index} className={styles.titleContainer}>
                  <CommonText
                    heading={item.title}
                    size="title-h2-v2"
                    weight="bold"
                  />

                  <CommonText
                    smallDescription={item.subheading}
                    size="label-sub1"
                  />
                  <img src={item.image} alt="tempSkody" style={{width:"100%",paddingTop:'1rem'}}/>
                  
                </div>
                
              ))}
          </div>
              <div className={`font-weight-500 ${styles.description}`}>
              <CommonText
                smallDescription={description.description}
                size="body-other"
                fontFamily="SF Pro"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Optimization;
