import { useState } from "react";
import styles from "./Accordion.module.css";
import CommonText from "../../CommonText/CommonText";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const handleClick = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, idx) => (
        <div key={idx} className={styles.item}>
          <button
            className={styles.title}
            onClick={() => handleClick(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-panel-${idx}`}
          >
            <div className={styles.question}>
              <CommonText
                subHeading={item.question}
                size="title-h3-accordion"
                fontFamily="SF Pro"

                weight="font-weight-500"
              />
            </div>
            <span className={styles.plus}>{openIndex === idx ? "−" : "+"}</span>
          </button>

          <div
            id={`faq-panel-${idx}`}
            className={`${styles.content} ${
              openIndex === idx ? styles.open : ""
            }`}
          >
            {openIndex === idx && (
              <CommonText
                newDescription={item.answer}
                size="label-H3-sub3"
                fontFamily="prompt"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
