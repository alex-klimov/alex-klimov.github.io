import React from "react";
import styles from "./HeaderSection.module.css";
import ReactMarkdown from "react-markdown";

const HeaderSection = ({ tag, title, subtitle, description }) => {
  return (
    // <section className={styles.sectionBg}>
      <div className={`common ${styles.container}`}>
        {tag && (
          <div className={`body-lg font-weight-500 ${styles.tagLabel}`}>
            {tag}
          </div>
        )}
        {title && (
          <h2 className={`title-h2 font-weight-500 ${styles.title}`}>
            {title}
          </h2>
        )}
        {subtitle && (
          <div className={`label-sub1 ${styles.subtitle}`}>
            <ReactMarkdown>{subtitle}</ReactMarkdown>
          </div>
        )}
        {description && (
          <div className={`label-sub1 ${styles.description}`}>
            {description}
          </div>
        )}
      </div>
    // </section>
  );
};

export default HeaderSection;
