import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import styles from './DashboardSlider.module.css';
import { useKeenSlider } from 'keen-slider/react';

const DashboardSlider = ({ imageData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    slides: { perView: 1 },
    mode: "free-snap"
  });

  return (
    <div className={styles.sliderContainer}>
      <div ref={sliderRef} className={`keen-slider ${styles.keenSlider}`}>
        {imageData.map((slide, i) => (
          <div className={`keen-slider__slide ${styles.slide}`} key={i}>
            <img
             src={`/assets/newDesign/CustomDashboard/${slide.image}`}
              alt={slide.alt}
              className={`slideNew ${styles.slideImage}`}
            />
          </div>
        ))}
      </div>
      <div className={styles.dotsContainer}>
        {imageData.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${currentSlide === idx ? styles.active : ''}`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardSlider;
