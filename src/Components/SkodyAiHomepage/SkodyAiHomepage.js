import React from "react";
import SkodyHomepageFirstSection from '../SkodyHomepageFirstSection/SkodyHomepageFirstSection';
import WhySkody from "./WhySkody/WhySkody";
import SkodyImpact from "../SkodyImpactContainer/SkodyImpact/SkodyImpact";
import ProductDemo from "../ProductDemo/ProductDemo";
import { useScroll } from "../ScrollContext/ScrollContext";
import CalendlySection from "../CalendlySection/CalendlySection";

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
      <div ref={whyRef}>
        <WhySkody />
      </div>
      <div ref={impactRef}>
        <SkodyImpact />
      </div>
      <div ref={demoRef}>
        <CalendlySection />
      </div>
    </div>
  );
};

export default SkodyAiHomepage;
