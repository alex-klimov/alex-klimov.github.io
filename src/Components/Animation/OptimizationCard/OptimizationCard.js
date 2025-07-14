import React, { useEffect, useState } from 'react';
import styles from './OptimizationCard.module.css';
import CommonText from '../../CommonText/CommonText';
import { useScroll } from '../../ScrollContext/ScrollContext';

const OptimizationCard = () => {
  const { isImpactInView } = useScroll();
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCheckMark, setIsCheckMark] = useState(false)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (isImpactInView) {
      setCurrentAnimationIndex(0);
      setIsCheckMark(false)
    }
  }, [isImpactInView]);
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

  const increment = (e) => {
    e.stopPropagation();
    if (isAnimating) return;

    setIsAnimating(true);

    const animationDuration = 1000;
    const totalSteps = 4;

    let step = 0;

    const animationInterval = setInterval(() => {
      setCurrentAnimationIndex(step % totalSteps);
      step += 1;
      if (step <= totalSteps) {
        setIsCheckMark(false)
      }

      if (step >= totalSteps) {
        clearInterval(animationInterval);
        setIsAnimating(false);
        setIsCheckMark(true)
      }
    }, animationDuration);
  };

  const barConfigs = [
    [
      { width: '25%', bgColor: '#FFF6E5', fontColor: '#682D03', border: '#F4A508', label: 'PO #2501' },
      { width: '12.7%', bgColor: '#EBF4FF', fontColor: '#002BC4', border: '#0038B1', label: 'PO #2504' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },

    ],
    [
      { width: '12.7%', bgColor: '#EBF4FF', fontColor: '#002BC4', border: '#0038B1', label: 'PO #2504' },
      { width: '25%', bgColor: '#FFF6E5', fontColor: '#682D03', border: '#F4A508', label: 'PO #2501' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },


    ],
    [
      { width: '25%', bgColor: '#EBF4FF', fontColor: '#002BC4', border: '#0038B1', label: 'PO #2504' },
      { width: '12.7%', bgColor: '#FFF6E5', fontColor: '#682D03', border: '#F4A508', label: 'PO #2501' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },

    ],
    [
      { width: '25%', bgColor: '#EBF4FF', fontColor: '#002BC4', border: '#0038B1', label: 'PO #2504' },
      { width: '12.7%', bgColor: '#FFF6E5', fontColor: '#682D03', border: '#F4A508', label: 'PO #2501' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },

    ],
  ];

  const barConfigs2 = [
    [
      { width: '37.5%', bgColor: '#DEEBDE', fontColor: '#24560D', border: '#24560D', label: 'PO #2506' },
      { width: '25.2%', bgColor: '#EBF4FF', fontColor: '#002BC4', border: '#0038B1', label: 'PO #2504' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: '#FFF6E5', fontColor: '#682D03', border: '#F4A508', label: 'PO #2501',alert:'true' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
    ],
    [
      { width: '37.5%', bgColor: '#DEEBDE', fontColor: '#24560D', border: '#24560D', label: 'PO #2506' },
      { width: '25.2%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: '#EBF4FF', fontColor: '#002BC4', border: '#0038B1', label: 'PO #2504' },
      { width: '12.7%', bgColor: '#FFF6E5', fontColor: '#682D03', border: '#F4A508', label: 'PO #2501',alert:'true' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },

    ],
    [
      { width: '37.5%', bgColor: '#DEEBDE', fontColor: '#24560D', border: '#24560D', label: 'PO #2506' },
      { width: '25.2%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: '#FFF6E5', fontColor: '#682D03', border: '#F4A508', label: 'PO #2501' },
      { width: '12.7%', bgColor: '#EBF4FF', fontColor: '#002BC4', border: '#0038B1', label: 'PO #2504' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },

    ],
    [
      { width: '37.5%', bgColor: '#DEEBDE', fontColor: '#24560D', border: '#24560D', label: 'PO #2506' },
      { width: '12.7%', bgColor: '#FFF6E5', fontColor: '#682D03', border: '#F4A508', label: 'PO #2501' },
      { width: '12.7%', bgColor: '#EBF4FF', fontColor: '#002BC4', border: '#0038B1', label: 'PO #2504' },
      { width: '25.2%', bgColor: 'transparent', label: '', border: 'transparent' },
    ],
  ];

  const barConfigs3 = [
    [
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: '#EBF4FF', fontColor: '#002BC4', border: '#0038B1', label: 'PO #2504' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '25.2%', bgColor: '#DEEBDE', fontColor: '#24560D', border: '#24560D', label: 'PO #2506' },
      { width: '25.2%', bgColor: '#FFF6E5', fontColor: '#682D03', border: '#F4A508', label: 'PO #2501' },
    ],
    [
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: '#EBF4FF', fontColor: '#002BC4', border: '#0038B1', label: 'PO #2504' },
      { width: '25.2%', bgColor: '#DEEBDE', fontColor: '#24560D', border: '#24560D', label: 'PO #2506' },
      { width: '12.7%', bgColor: '#FFF6E5', fontColor: '#682D03', border: '#F4A508', label: 'PO #2501' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
    ],
    [
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: '#EBF4FF', fontColor: '#002BC4', border: '#0038B1', label: 'PO #2504' },
      { width: '25.2%', bgColor: '#DEEBDE', fontColor: '#24560D', border: '#24560D', label: 'PO #2506' },
      { width: '25.2%', bgColor: '#FFF6E5', fontColor: '#682D03', border: '#F4A508', label: 'PO #2501' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
    ],
    [
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
      { width: '12.7%', bgColor: '#EBF4FF', fontColor: '#002BC4', border: '#0038B1', label: 'PO #2504' },
      { width: '25.2%', bgColor: '#DEEBDE', fontColor: '#24560D', border: '#24560D', label: 'PO #2506' },
      { width: '25.2%', bgColor: '#FFF6E5', fontColor: '#682D03', border: '#F4A508', label: 'PO #2501' },
      { width: '12.7%', bgColor: 'transparent', label: '', border: 'transparent' },
    ],
  ];
  const renderBars = (config) => {
    return config.map((bar, index) => (
      <div
        key={index}
        className={`${styles.font} ${styles[`bars${index + 1}`]}`}
        style={{
          width: `calc(${bar.width} - 3px)`,
          backgroundColor: bar.bgColor,
          border: `1.5px solid ${bar.border}`,
          color: bar.fontColor,
          position: 'relative', 
        }}
      >
        {bar.label}
        {bar.alert === 'true' && (
          <div className={styles.alert}>
            <img src="\assets\optimizeCard\alert.png" alt="Alert" />
          </div>
        )}
      </div>
    ));
  };
  

  return (
    <div className={styles.card}>
      {!isMobile ? (<>
        <div className={styles.tryMe}>
          <img src="/assets/optimizeCard/trymeDesktop.png" alt="tryme" />
        </div>
      </>) : (<>
        <div className={styles.tryMe}>
          <img src="/assets/optimizeCard/trymemobile.png" alt="tryme" />
        </div>
      </>)}
      <div className={styles.cardHeadingSection}>
        <div className={styles.cardHeadingSectionInnerContainer}>
          <div className={styles.heading}>
            <CommonText smallDescription="Machine Schedule" size="body-lg" weight="medium" />
            <span className={`${styles.optimizeBtn} ${styles.glowAnimation}`}>
              <span onClick={increment}>
                Optimize
              </span>
              <svg onClick={increment} xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none" className={styles.star}>
                <path d="M7.41797 13.1881C11.609 13.1881 13.4359 11.4248 13.4359 7.17017C13.4359 11.4248 15.2499 13.1881 19.4538 13.1881C15.2499 13.1881 13.4359 15.0021 13.4359 19.206C13.4359 15.0021 11.609 13.1881 7.41797 13.1881ZM2.25977 5.88062C4.95407 5.88062 6.12842 4.74753 6.12842 2.01196C6.12842 4.74753 7.29504 5.88062 9.99708 5.88062C7.29504 5.88062 6.12842 7.04723 6.12842 9.74928C6.12842 7.04723 4.95407 5.88062 2.25977 5.88062Z" stroke="white" strokeWidth="1.28955" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          <div className={styles.days}>
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i}>Day {i + 1}</div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.machines}>
        <div className={styles.machine}>
          <div className={styles.machineNameContainer}>
            <div className={styles.machineName}>Machine 1</div>
            <div className={styles.machineName}>Machine 2</div>
            <div className={styles.machineName}>Packaging</div>
          </div>

          <div className={styles.barsContainer}>
            <div className={styles.line}>
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className={styles.barLine}></div>
              ))}
            </div>

            <div className={styles.bars}>{renderBars(barConfigs[currentAnimationIndex])}</div>
            <div className={styles.bars}>{renderBars(barConfigs2[currentAnimationIndex % 4])}</div>
            <div className={styles.bars}>{renderBars(barConfigs3[currentAnimationIndex % 4])}</div>

            {isCheckMark && <div className={styles.checkMark}>
              <img src='/assets/optimizeCard/optimized1.png' alt="tryme" />
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizationCard;
