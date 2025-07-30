import React from 'react'
import WhySkodyDetails from './WhySkody.json'
import styles from './WhySkody.module.css'
import Optimization from '../Optimization/Optimization'
import DemoSkodyAi from '../DemoSkodyAi/DemoSkodyAi'
import CardList from '../CardList/CardList '
import CommonText from '../../CommonText/CommonText'
import ImageSlider from '../../Animation/Image/Image'
import { useState } from 'react'
import { useEffect } from 'react'
import MobileImageComponent from '../../Animation/Image/mobileImageComponent'


const WhySkody = () => {
    const OptimizationContent = WhySkodyDetails.sections[0]
    const DemoSkodyAiContent = WhySkodyDetails.sections[1]
    const CardsDetails = WhySkodyDetails.sections[2]
    const [isshowImage, setShowImage] = useState(false);

    useEffect(() => {
      const checkMobileView = () => {
        setShowImage(window.innerWidth <= 640);
      };
  
      checkMobileView();
  
      window.addEventListener('resize', checkMobileView);
  
      return () => {
        window.removeEventListener('resize', checkMobileView);
      };
    }, []);
  
    return (
        <>
            <div className={` ${styles.mainContainer}`}>
                <div className={styles.whySkodyHeading}>

                    <CommonText heading={WhySkodyDetails.heading} size='title-h1' weight='bold' />
                </div>
                <div className={styles.whySkodyContainer}>
                  {
                      !isshowImage? <img src={WhySkodyDetails.detail.image.src} alt={WhySkodyDetails.detail.image.alt} className={styles.whySkodyImage} />: <img src={WhySkodyDetails.detail.mobile.src} alt={WhySkodyDetails.detail.mobile.alt} className={styles.whySkodyImage} />
                  }
                    <div className={styles.floatingPoints}>

                       {
                        !isshowImage? <ImageSlider />:<MobileImageComponent />
                       }
                    </div>
                </div>
            </div>
            <Optimization OptimizationContent={OptimizationContent} />
            <DemoSkodyAi DemoSkodyAiContent={DemoSkodyAiContent} />
            <CardList CardsDetails={CardsDetails} />

        </>
    )
}

export default WhySkody
