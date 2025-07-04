import React from 'react';
import CommonText from '../../../CommonText/CommonText';
import styles from './Impact.module.css';
import Gear from '../../../Animation/geat';

const Impact = ({ ImpactData }) => {
  const heading = ImpactData.title;
  const subHeading = ImpactData.content.title;
  const features = ImpactData.content.features;

  return (
    <div className={styles.backgroundImage}>
      <div className={styles.bannerImageContainer}>
        <Gear
          gear1="/assets/icons/greysystem.svg"
          gear2="/assets/icons/greysystem.svg"
          gear3="/assets/icons/greysystem.svg"
          size1={{ width: '206', height: '225' }}
          size2={{ width: '367', height: '367' }}
          size3={{ width: '454', height: '454' }}
          position1={{ top: '100px', left: '142px' }}
          position2={{ top: '104px', left: '280px' }}
          position3={{ bottom: '200px', left: '141px' }}
        />
      </div>
      <div className={`homePageContainer ${styles.mainContainer}`}>
        <CommonText heading={heading} size='title-h1' weight='medium' />
        <CommonText subHeading={subHeading} size='title-h3' />
        <div className={styles.cardContainer}>
          {features.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.image.src} alt={item.image.alt} />
              <CommonText smallDescription={item.featuresPoints} size='label-sub2' fontFamily='prompt' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;
