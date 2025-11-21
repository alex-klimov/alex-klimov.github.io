import faqDataJson from "./FAQ.json";
import Accordion from "./Accordion/Accordion";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import styles from "./FAQ.module.css";
import CalendlyPopup from "../CalendlyPopup/CalendlyPopup";
import { useEffect, useState } from "react";

const FAQ = () => {
   const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
      checkMobileView();
      window.addEventListener("resize", checkMobileView);
      return () => window.removeEventListener("resize", checkMobileView);
    }, []);
  const faqData=!isMobile?faqDataJson.desktop:faqDataJson.mobile;
  const faqHeader = faqData.faqSection;
  const footer = faqData.faqSection.footer;

  const faqs = faqData.faqSection.faqs;
  return (
    <>
      <div className="homePageContainer">
        <HeaderSection tag={faqHeader.tag} title={faqHeader.title} />
        <Accordion items={faqs} />
        <HeaderSection subtitle={footer.subtitle} description={footer.desc} />
        <div className={` ${styles.faqButtonContainer}`}>
          <CalendlyPopup text={footer.cta.text} />
        </div>
      </div>
    </>
  );
};

export default FAQ;
