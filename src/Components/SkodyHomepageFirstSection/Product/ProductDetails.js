import React from 'react'
import CommonText from '../../CommonText/CommonText';
import styles from './ProductDetails.module.css'
import Gear from '../../Animation/geat';

const ProductDetails = ({ skodyProductDetails }) => {
  const BulletPoints = skodyProductDetails.bulletpoint;
  return (
    <>
      <div className={`homePageContainer ${styles.productDetails}`}>
        <div className={styles.splitHeadint}>

          <CommonText heading="Skody AI APS:" size="title-h2" weight="medium" />
          <CommonText heading='Your Production Navigator' size="title-h2" weight="medium" />
        </div>
        <div className={styles.bannerImageContainer}>
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
        </div>
        <div className={styles.outerContainerBulletPoint}>
          {BulletPoints.map((item, index) => (
              <div key={index} className={styles.bulletPointsCard}>
                <div>
                  <img src={item.icon.src} alt={item.icon.alt} />
                </div>
                <CommonText smallDescription={item.text} size="label-sub2" fontFamily='prompt' weight='regular' />
              </div>
          ))}
          <div className={styles.gearStyle}>
            <Gear
              gear1="/assets/icons/bluesystem.svg"
              gear2="/assets/icons/bluesystem.svg"
              gear3="/assets/icons/bluesystem.svg"
              direction='anticlockwise'
              size1={{ width: '40', height: '43' }}
              size2={{ width: '64', height: '70' }}
              size3={{ width: '79', height: '86' }}
              position1={{ top: '192px', left: '183px' }}
              position2={{ top: '150px', left: '200px' }}
              position3={{ bottom: '114px', left: '208px' }}
            />

          </div>

        </div>

      </div>
    </>
  )
}

export default ProductDetails;