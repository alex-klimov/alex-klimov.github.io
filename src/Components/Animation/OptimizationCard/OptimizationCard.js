
import React, { useState } from 'react';
import styles from './OptimizationCard.module.css';

const OptimizationCard = () => {
  const [count, setCount] = useState(0);

  const increment = (e) => {
    e.stopPropagation();
    setCount((prevCount) => (prevCount + 1) % 3);
  };

  const barConfigs = [
    [
      { width: '15%', bgColor: '#89B2EF', label: 'Part 1' },
      { width: '25%', bgColor: '#ACDA9E', label: 'Part 2' },
      { width: '35%', bgColor: '#FFFFFF', label: 'Part 3' },
      { width: '10%', bgColor: '#FBD0A3', label: 'Part 4' },
    ],
    [
      { width: '25%', bgColor: '#ACDA9E', label: 'Part 2' },
      { width: '15%', bgColor: '#89B2EF', label: 'Part 1' },
      { width: '10%', bgColor: '#FBD0A3', label: 'Part 4' },
      { width: '35%', bgColor: '#FFFFFF', label: 'Part 3' },
    ],
    [
      { width: '10%', bgColor: '#ACDA9E', label: 'Part 4' },
      { width: '35%', bgColor: '#89B2EF', label: 'Part 1' },
      { width: '10%', bgColor: '#FBD0A3', label: 'Part 2' },
      { width: '15%', bgColor: '#FFFFFF', label: 'Part 3' },
    ],
  ];

  const renderBars = (config) => {
    return config.map((bar, index) => (
      <div
        key={index}
        className={`${styles.font} ${styles[`bars${index + 1}`]}`}
        style={{ width: bar.width, backgroundColor: bar.bgColor }}
      >
        {bar.label}
      </div>
    ));
  };

  return (
    <div className={styles.card}>
      <div>

        <div className={styles.days}>

          {Array.from({ length: 7 }, (_, i) => (
            <div key={i}>Day {i + 1}</div>
          ))}
          <span

            className={`${styles.optimizeBtn} ${styles.glowAnimation}`}
          >
            <span onClick={increment}>
              Optimize
            </span>
            <svg onClick={increment} xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none" className={styles.star}>
              <path d="M7.41797 13.1881C11.609 13.1881 13.4359 11.4248 13.4359 7.17017C13.4359 11.4248 15.2499 13.1881 19.4538 13.1881C15.2499 13.1881 13.4359 15.0021 13.4359 19.206C13.4359 15.0021 11.609 13.1881 7.41797 13.1881ZM2.25977 5.88062C4.95407 5.88062 6.12842 4.74753 6.12842 2.01196C6.12842 4.74753 7.29504 5.88062 9.99708 5.88062C7.29504 5.88062 6.12842 7.04723 6.12842 9.74928C6.12842 7.04723 4.95407 5.88062 2.25977 5.88062Z" stroke="white" strokeWidth="1.28955" strokeLinejoin="round" />
            </svg>
          </span>


        </div>
      </div>

      <div className={styles.machines}>
        <div className={styles.machine}>
          <div className={styles.machineNameContainer}>
            <div className={styles.machineName}>Machine_0</div>
            <div className={styles.machineName}>Machine_1</div>
            <div className={styles.machineName}>Machine_2</div>
          </div>

          <div className={styles.barsContainer}>
            <div className={styles.bars}>{renderBars(barConfigs[count])}</div>
            <div className={styles.bars}>{renderBars(barConfigs[(count + 1) % 3])}</div>
            <div className={styles.bars}>{renderBars(barConfigs[(count + 2) % 3])}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizationCard;