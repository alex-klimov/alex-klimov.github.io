import React from 'react'
import CommonText from '../../CommonText/CommonText'
import styles from './DemoSkodyAi.module.css'
import Gear from '../../Animation/geat'

const DemoSkodyAi = ({ DemoSkodyAiContent }) => {
    const heading = DemoSkodyAiContent.heading;
    const label = DemoSkodyAiContent.button.label;
    return (
        <>
            <div className={`homePageContainer ${styles.mainContainer}`}>
                <div className={styles.headingContainer}>
                    <CommonText heading={heading} size='title-h2-v2' weight='medium' />
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>
                        {label}
                    </button>
                </div>
                <div className={styles.bannerImageContainer}>
                    <Gear
                        gear1="/assets/icons/greysystem.svg"
                        gear2="/assets/icons/greysystem.svg"
                        gear3="/assets/icons/greysystem.svg"
                        size1={{ width: '317', height: '317' }} 
                        size2={{ width: '395', height: '395' }}  
                        size3={{ width: '178', height: '195' }}  
                        position1={{ top: '-5px', left: '58px' }}  
                        position2={{ top: '203px', left: '158px' }} 
                        position3={{ bottom: '124px', left: '341px' }}
                    />
                </div>
            </div>
        </>
    )
}

export default DemoSkodyAi
