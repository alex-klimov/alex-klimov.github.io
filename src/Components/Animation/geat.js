import React from 'react';
import { motion } from 'framer-motion';
import styles from './gear.module.css';

const Gear = ({
  gear1,
  gear2,
  gear3,
  size1 = { width: 79, height: 86 },  
  size2 = { width: 39, height: 43 },  
  size3 = { width: 49, height: 54 },  
  position1 = { top: '0px', left: '0px' },  
  position2 = { top: '0px', left: '0px' },
  position3 = { top: '0px', left: '0px' },
  direction = 'clockwise',  
}) => {
  const rotationDirection = direction === 'anticlockwise' ? -360 : 360;

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'none',
        alignItems: 'center',
        position: 'relative',
        height: '400px',
      }}
    >
      <motion.div
        className={styles.gear1}
        style={{
          display: 'inline-block',
          transformOrigin: 'center',
          marginBottom: '20px',
          position: 'absolute',
          top: position1.top,
          left: position1.left,
          bottom: position1.bottom,
          right: position1.right,
        }}
        animate={{ rotate: rotationDirection }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <img src={gear1} alt="gear" width={size1.width} height={size1.height} />
      </motion.div>

      <motion.div
        className={styles.gear2}
        style={{
          display: 'inline-block',
          transformOrigin: 'center',
          marginBottom: '20px',
          position: 'absolute',
          top: position2.top,
          left: position2.left,
          bottom: position2.bottom,
          right: position2.right,
        }}
        animate={{ rotate: rotationDirection }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <img src={gear2} alt="gear" width={size2.width} height={size2.height} />
      </motion.div>

      <motion.div
        className={styles.gear3}
        style={{
          display: 'inline-block',
          transformOrigin: 'center',
          position: 'absolute',
          top: position3.top,
          left: position3.left,
          bottom: position3.bottom,
          right: position3.right,
        }}
        animate={{ rotate: rotationDirection }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <img src={gear3} alt="gear" width={size3.width} height={size3.height} />
      </motion.div>
    </div>
  );
};

export default Gear;
