import { useEffect, useState } from "react";
import WhySkodyDetails from "./WhySkody.json";
import styles from "../SkodyAiHomepage.module.css";
import SimpleButton from "../../../Buttons/SimpleButton";
import HeaderSection from "../../../CommonComponent/HeaderSection/HeaderSection";
const WhySkody = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => setIsMobile(window.innerWidth <= 640);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);
  const OptimizationContent = isMobile
    ? WhySkodyDetails.mobile.sections[0]
    : WhySkodyDetails.desktop.sections[0];

  return (
    <>
      <div className={styles.whyskodyHeader}>
        <div>
          {isMobile ? (
            <HeaderSection
              subtitle=" “**Skody** keeps the plan correct all day — no spreadsheets, no 
drag & drop.”"
            />
          ) : (
            <HeaderSection subtitle=" “Skody **auto-optimizes** your production schedule and highlights risks **— no spreadsheets, no manual drag & drop.**”" />
          )}
        </div>
      </div>
      <div className={styles.whyButtonContainer}>
        <SimpleButton
          className={`buttonText regular  ${styles.watchDemoButton}`}
          href={OptimizationContent.button.action}
        >
          {OptimizationContent.button.label}
        </SimpleButton>
      </div>
    </>
  );
};

export default WhySkody;
