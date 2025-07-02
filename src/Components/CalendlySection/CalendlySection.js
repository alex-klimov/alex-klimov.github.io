import React, { useEffect, useState } from 'react'
import { InlineWidget, PopupButton } from "react-calendly";
import styles from './CalendlySection.module.css'
import CommonText from '../CommonText/CommonText';

const CalendlySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobileView = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkMobileView();
    window.addEventListener('resize', checkMobileView);

    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);

  return (
    <div className={`homePageContainer ${styles.mainContainer}`}>
      {isMobile? 
      <PopupButton
          className={`bold ${styles.button}`}
          url="https://calendly.com/alexl-skody/30min"
          rootElement={document.getElementById("root")}
          text="Schedule Demo"
        /> :null}
      <div className={styles.widgetCalendly}>
        <InlineWidget url="https://calendly.com/alexl-skody/30min?hide_event_type_details=1&hide_gdpr_banner=1" styles={{
        }} />
      </div>
      <div className={styles.scheduleDemoContainer}>
        <CommonText heading='Demo Skody AI' size="title-h2" weight='bold' />
        <CommonText smallDescription='Connect with our team to learn more about our product and start your trial today.' />
        {!isMobile? <PopupButton
          className={`bold ${styles.button}`}
          url="https://calendly.com/alexl-skody/30min"
          rootElement={document.getElementById("root")}
          text="Schedule Demo"
        /> :null}
      </div>
    </div>
  )
}

export default CalendlySection