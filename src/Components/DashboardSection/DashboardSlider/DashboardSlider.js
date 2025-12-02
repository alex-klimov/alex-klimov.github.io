import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import styles from "./DashboardSlider.module.css";
import { useKeenSlider } from "keen-slider/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const DashboardSlider = ({ imageData }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    slides: { perView: 1 },
    mode: "free-snap",
  });

  // Prepare slides for lightbox
  const lightboxSlides = imageData.map((slide) => ({
    src: `/assets/newDesign/CustomDashboard/${slide.image}`,
    alt: slide.alt,
  }));

  return (
    <>
      {isMobile ? (
        <div className={styles.sliderContainer}>
          <div ref={sliderRef} className={`keen-slider ${styles.keenSlider}`}>
            {imageData.map((slide, i) => (
              <div className={`keen-slider__slide ${styles.slide}`} key={i}>
                <img
                  src={`/assets/newDesign/CustomDashboard/${slide.image}`}
                  alt={slide.alt}
                  className={`slideNew ${styles.slideImage}`}
                  onClick={() => setIsOpen(true)}
                  style={{ cursor: "zoom-in" }}
                />
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className={styles.dotsContainer}>
            {imageData.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${
                  currentSlide === idx ? styles.active : ""
                }`}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
              />
            ))}
          </div>

          {/* FULLSCREEN VIEW with yet-another-react-lightbox */}
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={lightboxSlides}
            index={currentSlide}
            on={{
              view: ({ index }) => setCurrentSlide(index),
            }}
          />
        </div>
      ) : (
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
                className={`${styles.dot} ${
                  currentSlide === idx ? styles.active : ""
                }`}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardSlider;
