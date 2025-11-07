import React from "react";
import faqData from "./FAQ.json";
import Accordion from "./Accordion/Accordion";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import SimpleButton from "../../Buttons/SimpleButton";
import styles from './FAQ.module.css'
const FAQ = () => {
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
        <SimpleButton className={`buttonText regular buttonText  ${styles.faqButton}`} >{footer.cta.text} </SimpleButton>
      </div>
    </div>

    </>
  );
};

export default FAQ;
