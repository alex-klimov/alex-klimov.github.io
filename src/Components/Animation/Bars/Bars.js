import React from 'react'
import styles from './Bars.module.css'

const Bars = () => {


    return (
        <>
            <div className={styles.barsContainer}>
                <div className={`${styles.bars} ${styles.bar1}`}>

                </div>
                <div className={`${styles.bars} ${styles.bar2}`}>

                </div>
                <div className={`${styles.bars} ${styles.bar3}`}>

                </div>
                <div className={`${styles.bars} ${styles.bar4}`}>

                </div>


            </div>

        </>
    )
}

export default Bars