import React from 'react'
import CommonText from '../../CommonText/CommonText'
import styles from './Optimization.module.css'

const Optimization = ({OptimizationContent}) => {
  const heading = OptimizationContent.heading;
  const image=OptimizationContent.imageContainer;
  const description=OptimizationContent.content;

  return (
    <>
      <div className={`homePageContainer ${styles.outerContainer}`}>
        <div className={styles.headingContainer}>
          {heading.map((item, index) => (
            <div key={index} className={styles.titleContainer}>
              <CommonText heading={item.title} size='title-h2-v2' weight='bold' />
              <CommonText smallDescription={item.subheading} size='label-sub1' />
            </div>
          ))}
        </div>
        <div className={styles.imageContainer}>
            <img src={image.src} alt={image.alt} className={styles.image}/>
        </div>
        <div className={styles.description}>
            <CommonText smallDescription={description.description} size='body-other' />
        </div>
      </div>
    </>
  );
}

export default Optimization;
