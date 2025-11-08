import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from './PointClickSlider.module.css'

export const PointClickSlider = ({ imageData, sliderRefCallback, onSlideChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    mode: "free-snap",
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
      const idx = s.track.details.rel;
      console.log("Slide changed to:", idx);
      if (onSlideChange) onSlideChange(idx);
    },
  });

  useEffect(() => {
    if (sliderRefCallback) {
      sliderRefCallback(instanceRef);
      console.log("Instance ref set:", instanceRef.current);
    }
  }, [instanceRef, sliderRefCallback]);

  return (
    <div className={styles.sliderContainer}>
       <div ref={sliderRef} className={`keen-slider ${styles.keenSlider}`}>
        {imageData.map((slide, i) => (
          <div className={`keen-slider__slide ${styles.slide}`} key={i}>
            <img
             src={`/assets/newDesign/CustomDashboard/${slide.image}`}
              alt={slide.alt}
              className={styles.slideImage}
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
