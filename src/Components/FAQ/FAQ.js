import faqDataJson from "./FAQ.json";
import Accordion from "./Accordion/Accordion";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import styles from "./FAQ.module.css";
import { useEffect, useState } from "react";

const FAQ = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);
  const faqData = !isMobile ? faqDataJson.desktop : faqDataJson.mobile;
  const faqHeader = faqData.faqSection;
  const footer = faqData.faqSection.footer;

  const faqs = faqData.faqSection.faqs;
  return (
    <>
      <div className={`homePageContainer ${styles.faqContainer}`}>
        <HeaderSection tag={faqHeader.tag} title={faqHeader.title} />
        <Accordion items={faqs} />
        <div className={styles.faqButtonContainer}>

          <HeaderSection subtitle={footer.subtitle} description={footer.desc} />
        </div>
        <div className={` ${styles.faqButtonContainer}`}>
          <button
          className={`buttonText regular ${styles.button}`}
            onClick={() => {
              window.location.href = `mailto:${footer.cta.action}`;
            }}
          >
            {footer.cta.text}
          </button>
        </div>
      </div>
    </>
  );
};

export default FAQ;
