import SkodyHomepageFirstSection from '../SkodyHomepageFirstSection/SkodyHomepageFirstSection';
import { useScroll } from "../ScrollContext/ScrollContext";
import styles from './SkodyAiHomepage.module.css'
import GetInTouch from "../GetInTouch/GetInTouch";
import KpiSection from "../KPIGap/KPIGap";
import DashboardSection from "../DashboardSection/DashboardSection";
import SchedulerSection from "../Scheduler/SchedulerSection";
import StatisticsSection from "../StatisticsSection/StatisticsSection";
import PricingSection from '../PriceSection/PriceSection';
import ContineslySlider from '../Slider/ContinueslyMoving/ContineslySlider';
import Difference from '../Difference/Difference';
import WhySkody from "./WhySkody/WhySkody";
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';
import FAQ from '../FAQ/FAQ';

const SkodyAiHomepage = () => {
  const { productRef, whyRef, impactRef, demoRef } = useScroll();

  return (
    <div>
      <div ref={productRef}>
        <SkodyHomepageFirstSection />
      </div>
      <div className='margin'>
        <StatisticsSection/>
      </div>
      <div className={` ${styles.schedulerSection}`}>
        <SchedulerSection/>
      </div>
      <div style={{margin:"2rem auto"}} >
        <Difference/>
      </div>
       <div className='margin'>
         <WhySkody />
      </div>
      <div className={`margin ${styles.dashBoardSection}`}>
        <DashboardSection/>
      </div>
       <div>
        <ContineslySlider />
      </div>
      <div>
        <PricingSection/>
      </div>
      <div>
        <TestimonialsSection/>
      </div>
      <div className='margin'>
        <FAQ/>
      </div>
      <div style={{backgroundColor:'#F5F8FC'}}>
        <KpiSection/>
      </div>
      <div className={`margin ${styles.getInTouch}`}>
        <GetInTouch/>
      </div>
    </div>
  );
};

export default SkodyAiHomepage;
