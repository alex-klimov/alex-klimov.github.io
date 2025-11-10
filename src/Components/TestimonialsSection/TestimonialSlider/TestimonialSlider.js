import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styles from "./TestimonialSlider.module.css";

const TestimonialSlider = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);
  console.log(current)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap", // allows smooth both-way snapping
    renderMode: "precision",
    slides: {
      perView: 2,
      spacing: 20,
    },
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
    breakpoints: {
      "(max-width: 992px)": {
        slides: { perView: 1, spacing: 10 },
      },
       "(max-width:640px)": {
        slides: { perView: 2, spacing: 10 },
      },
    },
  });

  return (
    <div className={`homePageContainer ${styles.slider}`}>
      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((t, i) => (
          <div key={i} className={`keen-slider__slide ${styles.slide}`}>
            <div className={styles.card}>
              <div className={styles.top}>
                <div className={styles.avatarImage}>
                <img src={t.avatar} alt={t.name} className={styles.avatar} />

                  </div>
                <div className={styles.content}>
                  <div className={styles.annonationContainer}>
                  <img src="/assets/newDesign/annotation.png" alt={t.role} className={styles.logo} />

                  <img src={t.logo} alt={t.role} className={styles.logo} />
                  </div>
                  <div className={` ${styles.quote}`}>“{t.quote}”</div>
                  <div className={styles.person}>
                    <span className={styles.name}>{t.name}</span>
                    <span className={styles.role}>{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.nav}>
        <button
          onClick={() => instanceRef.current?.prev()}
          className={styles.arrow}
        >
          <img src="/assets/newDesign/arrowLeft.png" alt="arrowleft"/>
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className={styles.arrow}
        >
         <img src="/assets/newDesign/arrowRight.png" alt="right"/>
        </button>
      </div>
      <div className={styles.statsSection}>

</div>

    </div>
  );
};

export default TestimonialSlider;
