import React, { useEffect, useState } from 'react';
import data from './SkodyHomepageFirstSection.json'
import styles from './SkodyHomepageFirstSection.module.css'
import ProductDetails from './Product/ProductDetails';
import CommonText from '../CommonText/CommonText';
import Gear from '../Animation/geat';
import ArrowAnimation from '../Animation/Arrow/ArrowAnimation';
import OptimizationCard from '../Animation/OptimizationCard/OptimizationCard';

function SkodyHomepageFirstSection() {
  const skodyProductDetails = data.section[0]
  const [arrow, setArrowCount] = useState(4)
  const [isMobile, setIsMobile] = useState(false);
  const [mobliegear ,setIsMobileGear] =useState(false)
  const checkMobileView = () => {
    if (window.innerWidth <= 768) {
      setIsMobileGear(true);
    } else {
      setIsMobileGear(false);
    }
  
    if (window.innerWidth <= 400) {
      setIsMobile(true);
    }else if(window.innerWidth <= 640){
      setIsMobile(!mobliegear)

    } else if (window.innerWidth <= 920) {
      setArrowCount(2);
    } else if (window.innerWidth <= 1220) {
      setArrowCount(3);
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
    <>

      <div
        className={styles.backgroundImageContainer}
      >
        <div className={styles.bannerImageContainerGear}>
          {mobliegear ? (
            <Gear
              gear1="/assets/icons/greysystem.svg"
              gear2="/assets/icons/greysystem.svg"
              gear3="/assets/icons/greysystem.svg"
              size1={{ width: '395', height: '395' }}
              size2={{ width: '489', height: '489' }}
              size3={{ width: '222', height: '243' }}
              position1={{ top: '-46px', left: '-42px' }}
              position2={{ top: '203px', left: '98px' }}
              position3={{ bottom: '93px', left: '290px' }}
            />
          ) : (
            <Gear
              gear1="/assets/icons/yellowgear.svg"
              gear2="/assets/icons/yellowgear.svg"
              gear3="/assets/icons/yellowgear.svg"
              size1={{ width: '395', height: '395' }}
              size2={{ width: '489', height: '489' }}
              size3={{ width: '222', height: '243' }}
              position1={{ top: '-46px', left: '-42px' }}
              position2={{ top: '203px', left: '98px' }}
              position3={{ bottom: '93px', left: '290px' }}
            />
          )}

        </div>
        <div className={styles.arrow}>

          <ArrowAnimation count={arrow} reverse={false} />
        </div>
        <div className={`homePageContainer ${styles.outerContainer}`}>
          <div className={styles.headingContainer}>

            <div className={styles.heading}>
              <CommonText heading={data.header.title} size='title-h1' />
            </div>
            <div className={styles.description}>
              <CommonText smallDescription={data.header.description} size='label-sub1-new' weight='regular' />
            </div>
          </div>
          <div className={styles.imageContainer}>
            {!isMobile ? (
              <>
                <OptimizationCard />

                <div className={styles.animatedImageArrow}>

                  <ArrowAnimation count={20} reverse={false} />
                </div>

              </>
            ) : (
              <OptimizationCard />

            )}

          </div>
        </div>

      </div>

      <ProductDetails skodyProductDetails={skodyProductDetails} />
    </>
  );
}

export default SkodyHomepageFirstSection;
