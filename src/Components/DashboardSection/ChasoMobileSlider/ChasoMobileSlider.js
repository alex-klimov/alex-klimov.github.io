import styles from "./ChasoMobileSlider.module.css";
import CommonText from "../../CommonText/CommonText";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import images from "./ChasoSlider.json";

const ChasoMobileSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    slides: { perView: 1 },
    mode: "free-snap",
  });

  return (
    <div className={styles.sliderContainer}>
      <div ref={sliderRef} className={`keen-slider ${styles.keenSlider}`}>
        {images.map((slide, i) => (
          <div className={`keen-slider__slide ${styles.slide}`}  style={{ backgroundColor: slide.bgColor }} key={i}>
            <div className={styles.imageWrapper}>
              <img
                src={slide.image}
                alt={slide.alt}
                className={styles.slideImage}
              />
            </div>

            <div className={styles.textContainer}>
              <CommonText subHeading={slide.title} weight="font-weight-500" size="title-h3" />
              <CommonText
                subHeading={slide.desc}
                size="label-sub2"
                fontFamily="prompt"
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dotsContainer}>
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${
              currentSlide === idx ? styles.active : ""
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ChasoMobileSlider;
