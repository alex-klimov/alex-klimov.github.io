import React from 'react'
import WhySkodyDetails from './WhySkody.json'
import styles from './WhySkody.module.css'
import Optimization from '../Optimization/Optimization'
import DemoSkodyAi from '../DemoSkodyAi/DemoSkodyAi'
import CardList from '../CardList/CardList '
import CommonText from '../../CommonText/CommonText'
import ImageSlider from '../../Animation/Image/Image'


const WhySkody = () => {
    const OptimizationContent = WhySkodyDetails.sections[0]
    const DemoSkodyAiContent = WhySkodyDetails.sections[1]
    const CardsDetails = WhySkodyDetails.sections[2]
    
    return (
        <>
            <div className={` ${styles.mainContainer}`}>
                <div className={styles.whySkodyHeading}>

                    <CommonText heading={WhySkodyDetails.heading} size='title-h1' weight='bold' />
                </div>
                <div className={styles.whySkodyContainer}>
                    <img src={WhySkodyDetails.detail.image.src} alt={WhySkodyDetails.detail.image.alt} className={styles.whySkodyImage} />
                    <div className={styles.floatingPoints}>

                        <ImageSlider />
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
