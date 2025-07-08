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
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import styles from './Bars.module.css';

// const Bars = () => {
//   const barsRef = useRef([]);

//   const barSizes = [
//     { width: '30%', height: '20px' },
//     { width: '40%', height: '20px' },
//     { width: '50%', height: '20px' },
//     { width: '40%', height: '20px' },
//   ];

//   useEffect(() => {
//     barsRef.current.forEach((bar, index) => {
//       const duration = 4;
  
//       if (index === 0) {
//         // Bar 1: starts from left, moves to center (no yoyo, just reset)
//         gsap.fromTo(
//           bar,
//           {
//             x: '-50%', // start from left of container
//             backgroundColor: '#89B2EF',
//             position: 'absolute',
//             left: '50%',
//             transform: 'translateX(-50%)', // center alignment
//           },
//           {
//             x: '0%',
//             backgroundColor: '#DEE7F4',
//             duration,
//             repeat: -1,
//             ease: 'linear',
//           }
//         );
//       } else if (index === 1) {
//         // Bar 2: starts from left, moves to right and back
//         gsap.fromTo(
//           bar,
//           {
//             x: '0%',
//             backgroundColor: '#89B2EF',
//           },
//           {
//             x: '100%',
//             backgroundColor: '#DEE7F4',
//             duration,
//             repeat: -1,
//             yoyo: true,
//             ease: 'power1.inOut',
//           }
//         );
//       } else {
//         // Other bars can be animated normally if needed
//         gsap.fromTo(
//           bar,
//           {
//             x: '-100%',
//             backgroundColor: '#89B2EF',
//           },
//           {
//             x: '100%',
//             backgroundColor: '#DEE7F4',
//             duration,
//             repeat: -1,
//             ease: 'linear',
//           }
//         );
//       }
//     });
//   }, []);
  


//   return (
//     <div className={styles.barsContainer}>
//       {barSizes.map((size, i) => (
//         <div
//           key={i}
//           ref={el => (barsRef.current[i] = el)}
//           className={styles.bars}
//           style={{
//             width: size.width,
//             height: size.height,
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default Bars;
