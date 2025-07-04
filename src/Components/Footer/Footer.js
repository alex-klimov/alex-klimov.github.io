import React from 'react';
import footerData from './Footer.json';
import styles from './Footer.module.css';
import CommonText from '../CommonText/CommonText';
import { useScroll } from '../ScrollContext/ScrollContext';

const Footer = () => {
  const { scrollToSection, productRef, whyRef, impactRef, demoRef } =
    useScroll();
  const footerInfo = footerData.footer;

  // Create a mapping between link names and corresponding references
  const sectionRefs = {
    Product: productRef,
    "Why Skody": whyRef,
    "Impact": impactRef,
    "Schedule Demo": demoRef,
  };

  if (!footerInfo) return null;

  return (
    <footer className={`${styles.container}`}>
      <div className={`homePageContainer ${styles.content}`}>

        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <img src={footerInfo.logo.image} alt={footerInfo.logo.image} />
          </div>
          <div className={styles.socialLinks}>
            {footerInfo.socialLinks.map((link) => (
              <a href={link.url} key={link.platform.alt} className={styles.socialLink}>
                <img src={link.platform.src} alt={link.platform.alt} className={styles.socialIcon} />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.productLinksContainer}>
            <div className={styles.heading}>

              <CommonText smallDescription='Product' size='label-sub2' fontFamily="Prompt" />
            </div>
            <div className={styles.productLinks}>
              {footerInfo.productLinks.map((link) => (
                <div
                  key={link.name}
                  className={styles.link}
                  onClick={() => scrollToSection(sectionRefs[link.name])}
                >
                  <CommonText smallDescription={link.name} size="body-sm" />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.socialLinkContainer}>
            <div className={styles.heading}>

              <CommonText smallDescription='Links' size='label-sub2' fontFamily="Prompt" />
            </div>

            <div className={styles.socialLink}>

              {footerInfo.links.map((link) => (
                <a href={link.url} key={link.name} className={styles.link}>
                  <CommonText smallDescription={link.name} size='body-sm' />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.heading}>
              <CommonText smallDescription='Contact' size='label-sub2' fontFamily="Prompt" />
            </div>

            <div className={styles.email}>Email: <a href={`mailto:${footerInfo.contact.email}`}><CommonText smallDescription={footerInfo.contact.email} size='body-sm' /></a></div>

          </div>
        </div>
        <div className={styles.copyRight}>
          <CommonText smallDescription={footerInfo.copyright} size='body-sm' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
