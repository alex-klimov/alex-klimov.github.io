// MarqueeSlider.jsx
import React from 'react';
import styles from './ContneslySlider.module.css';

const images = [
  '/assets/newDesign/ContinueslySlider/slider1.png',
  '/assets/newDesign/ContinueslySlider/slider2.png',
  '/assets/newDesign/ContinueslySlider/slider3.png',
  '/assets/newDesign/ContinueslySlider/slider4.png',
  '/assets/newDesign/ContinueslySlider/slider5.png',
  '/assets/newDesign/ContinueslySlider/slider1.png',
  '/assets/newDesign/ContinueslySlider/slider2.png',
  '/assets/newDesign/ContinueslySlider/slider3.png',
  '/assets/newDesign/ContinueslySlider/slider4.png',
  '/assets/newDesign/ContinueslySlider/slider5.png',
  '/assets/newDesign/ContinueslySlider/slider1.png',
  '/assets/newDesign/ContinueslySlider/slider2.png',
  '/assets/newDesign/ContinueslySlider/slider3.png',
  '/assets/newDesign/ContinueslySlider/slider4.png',
  '/assets/newDesign/ContinueslySlider/slider5.png'
];

const ContineslySlider = () => (
  <div className={styles.marqueeContainer} aria-hidden="true">
    <div className={styles.marquee}>
      {images.map((item, idx) => (
        <img key={idx} src={item} className={styles.image} alt={`slide-${idx}`} />
      ))}
    </div>
  </div>
);

export default ContineslySlider;
