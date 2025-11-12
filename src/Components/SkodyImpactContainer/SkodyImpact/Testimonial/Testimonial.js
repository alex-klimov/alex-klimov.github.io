import React from 'react'
import styles from './Testimonial.module.css'
import CommonText from '../../../CommonText/CommonText'
import Gear from '../../../Animation/geat';

function Testimonial({ TestimoniaData }) {
  const heading = TestimoniaData.title;
  const subHeading = TestimoniaData.subHeading;
  const reviewCard = TestimoniaData.content;
  return (
    <>
      <div className={`homePageContainer ${styles.mainContainer}`}>
        <CommonText heading={heading} size="title-h2" weight="medium" />
        <CommonText subHeadingh4={subHeading} size="title-h4" />
        <div className={styles.outerReviewCardContainer}>
          <div className={styles.gearStyle}>
            <Gear
              gear1="/assets/icons/bluesystem.svg"
              gear2="/assets/icons/bluesystem.svg"
              gear3="/assets/icons/bluesystem.svg"
              size1={{ width: '95', height: '104' }}
              size2={{ width: '59', height: '64' }}
              size3={{ width: '118', height: '128' }}
              position1={{ top: '138px', left: '127px' }}
              position2={{ top: '201px', left: '185px' }}
              position3={{ bottom: '71px', left: '100px' }}
            />

          </div>
          <div className={styles.reviewCard}>
            <div className={styles.imageContainerTestimonial}>
              <img src={reviewCard.bannerImage.src} alt={reviewCard.bannerImage.alt} className={styles.testimonialImage} />
            </div>
            <div className={styles.ratingContainer}>
              <div className={styles.starContainer} >
                {Array.from({ length: reviewCard.rating }, (_, i) => (
                  <img key={i} src="/assets/icons/Star.png" alt={`${reviewCard.rating} stars`} />
                ))}
              </div>
              <p className={`medium ${styles.sloganTitle}`}>{reviewCard.slogan}</p>
              <p>"{reviewCard.quote}"</p>
              <p>{reviewCard.author}</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
