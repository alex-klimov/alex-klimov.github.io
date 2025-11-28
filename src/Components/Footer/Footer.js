import React from "react";
import footerData from "./Footer.json";
import styles from "./Footer.module.css";
import CommonText from "../CommonText/CommonText";
import { useScroll } from "../ScrollContext/ScrollContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const {
      scrollToSection,
      dashboard,
      priceRef,
      productRef,
     } = useScroll();
    
  const footerInfo = footerData.footer;

  const sectionRefs = {
    Scheduler: productRef,
    Dashboard: dashboard,
    Integrations: productRef,
    Pricing:priceRef,
    
  };

  if (!footerInfo) return null;

  return (
    <footer className={`${styles.container}`}>
      <div className={`homePageContainer ${styles.content}`}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <img src={footerInfo.logo.image} alt={footerInfo.logo.image} />
            <div className={styles.footerDescription}>
              <CommonText smallDescription={footerInfo.description} size="label-H3-sub3"/>
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.productLinksContainer}>
            <div className={styles.heading}>
              <CommonText
                smallDescription="Product"
                size="title-h3"
                fontFamily="Prompt"
              />
            </div>
            <div className={styles.productLinks}>
              {footerInfo.productLinks.map((link) => (
                <div
                  key={link.name}
                  className={styles.link}
                  onClick={() => scrollToSection(sectionRefs[link.name])}
                >
                  <Link to={link.url} key={link.name} className={styles.link}>
                    <CommonText smallDescription={link.name} size="label-H3-sub3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.socialLinkContainer}>
            <div className={styles.heading}>
              <CommonText
                smallDescription="Company"
                size="title-h3"
                fontFamily="Prompt"
              />
            </div>

            <div className={styles.socialLink}>
              {footerInfo.links.map((link) =>
                link.url.startsWith("/") || link.url.startsWith("#/") ? (
                  <Link
                    to={link.url}
                    key={link.name}
                    className={styles.link}
                  >
                    <CommonText smallDescription={link.name} size="label-H3-sub3" />
                  </Link>
                ) : (
                  <a
                    href={link.url}
                    key={link.name}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CommonText smallDescription={link.name} size="label-H3-sub3" />
                  </a>
                )
              )}
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.heading}>
              <CommonText
                smallDescription="Legal"
                size="title-h3"
                fontFamily="Prompt"
              />
            </div>
            <div className={styles.socialLink}>
              {footerInfo.contact1.map((link) =>
                link.url.startsWith("/") || link.url.startsWith("#/") ? (
                  <Link
                    to={link.url}
                    key={link.name}
                    className={styles.link}
                  >
                    <CommonText smallDescription={link.name} size="label-H3-sub3" />
                  </Link>
                ) : (
                  <a
                    href={link.url}
                    key={link.name}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CommonText smallDescription={link.name} size="label-H3-sub3" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`homePageContainer ${styles.socialLinks}`}>
        {footerInfo.socialLinks.map((link) => (
          <a
            href={link.url}
            key={link.platform.alt}
            className={styles.socialLinkImage}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={link.platform.src}
              alt={link.platform.alt}
              className={styles.socialIcon}
            />
          </a>
        ))}
      </div>
      <div className={`homePageContainer ${styles.copyRight}`}>
        <CommonText smallDescription={footerInfo.copyright} size="label-H3-sub3"/>
      </div>
    </footer>
  );
};

export default Footer;
