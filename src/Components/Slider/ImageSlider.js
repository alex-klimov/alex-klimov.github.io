import React, { useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'; 
import styles from './ImageSlider.module.css'
const animation = { duration: 20000, easing: (t) => t };

const ContinuousSlider = ({ slidesData = [], rtl = false }) => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true, 
    renderMode: 'performance',
    drag: false, 
    slides: {
      perView: 2, 
      spacing: 10,
    },
    rtl: rtl, 
    created(s) {
                  s.moveToIdx(0, true, animation); 
              },
              updated(s) {
                  s.moveToIdx(s.track.details.abs + 5, true, animation); 
              },
              animationEnded(s) {
                  s.moveToIdx(s.track.details.abs + 5, true, animation);
              },
    breakpoints: {
      '(min-width: 300px)': {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
      '(min-width: 600px)': {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      '(min-width: 1440px)': {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
    },
  });

  useEffect(() => {
    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const interval = setInterval(() => {
      if (slider?.current) {
        const currentSlide = slider.current.track.details.abs; 
        const nextSlide = currentSlide + 1;

        slider.current.moveToIdx(nextSlide, true, {
          duration: 2000, 
          easing: easeInOutQuad,
        });
      }
    }, 2000); 

    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div className="slider-wrapper">
      <div
        ref={sliderRef}
        className="homePageContainer keen-slider"
        style={{ width: '80%', overflow: 'hidden' }}
      >
        {slidesData.map((item, index) => (
          <div key={index} className="keen-slider__slide">
            <div
            className={styles.sliderImageContainer}
            >
              <img src={item.content} alt={item.content} className={styles.sliderImage}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinuousSlider;

