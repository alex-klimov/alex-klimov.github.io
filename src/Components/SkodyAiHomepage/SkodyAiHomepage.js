import SkodyHomepageFirstSection from "../SkodyHomepageFirstSection/SkodyHomepageFirstSection";
import { useScroll } from "../ScrollContext/ScrollContext";
import styles from "./SkodyAiHomepage.module.css";
import GetInTouch from "../GetInTouch/GetInTouch";
import KpiSection from "../KPIGap/KPIGap";
import DashboardSection from "../DashboardSection/DashboardSection";
import SchedulerSection from "../Scheduler/SchedulerSection";
import PricingSection from "../PriceSection/PriceSection";
import ContineslySlider from "../Slider/ContinueslyMoving/ContineslySlider";
import Difference from "../Difference/Difference";
import WhySkody from "./WhySkody/WhySkody";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import FAQ from "../FAQ/FAQ";
import { useEffect, useState } from "react";
import PriceSectionMobile from "../PriceSectionMobile/PriceSectionMobile";

const SkodyAiHomepage = () => {
  const { productRef, dashboard, priceRef, faqRef } = useScroll();
 const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => setIsMobile(window.innerWidth <= 640);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);
  
  return (
    <div>
      <div>
        <SkodyHomepageFirstSection />
      </div>
      <div ref={productRef} className={`margin ${styles.schedulerSection}`}>
        <SchedulerSection />
      </div>
      <div className={styles.marginDifference}>
        <Difference />
        <WhySkody />
      </div>
      <div ref={dashboard} className={` ${styles.dashBoardSection}`}>
        <DashboardSection />
      </div>
      <div>
        <ContineslySlider />
      </div>
      <div ref={priceRef} >
        {isMobile? <PriceSectionMobile /> :
        <PricingSection/>}        
      </div>
      <div>
        <TestimonialsSection />
      </div>
      <div ref={faqRef} className="margin">
        <FAQ />
      </div>
      <div className="margin homePageContainer ">
        <KpiSection />
      </div>
      <div className={`margin ${styles.getInTouch}`}>
        <GetInTouch />
      </div>
    </div>
  );
};

export default SkodyAiHomepage;
