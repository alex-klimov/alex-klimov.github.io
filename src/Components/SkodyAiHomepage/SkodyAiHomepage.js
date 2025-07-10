import React from "react";
import SkodyHomepageFirstSection from '../SkodyHomepageFirstSection/SkodyHomepageFirstSection';
import WhySkody from "./WhySkody/WhySkody";
import SkodyImpact from "../SkodyImpactContainer/SkodyImpact/SkodyImpact";
import ProductDemo from "../ProductDemo/ProductDemo";
import { useScroll } from "../ScrollContext/ScrollContext";
import CalendlySection from "../CalendlySection/CalendlySection";
import styles from './SkodyAiHomepage.module.css'

const SkodyAiHomepage = () => {
  const { productRef, whyRef, impactRef, demoRef } = useScroll();

  return (
    <div>
      <div ref={productRef}>
        <SkodyHomepageFirstSection />
      </div>
      <div >
        <ProductDemo />
      </div>
      <div ref={whyRef} className={styles.whySkody}>
        <WhySkody />
      </div>
      <div ref={impactRef} className={styles.skodyImpactContainer}>
        <SkodyImpact />
      </div>
      <div ref={demoRef} className={styles.skodyCalendlySection}>
        <CalendlySection />
      </div>
    </div>
  );
};

export default SkodyAiHomepage;
