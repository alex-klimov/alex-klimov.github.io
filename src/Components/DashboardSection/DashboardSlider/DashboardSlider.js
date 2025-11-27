import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import styles from "./DashboardSlider.module.css";
import { useKeenSlider } from "keen-slider/react";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";

const DashboardSlider = ({ imageData }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isOpen, setIsOpen] = useState(false); // 🔥 for fullscreen view

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    slides: { perView: 1 },
    mode: "free-snap",
  });

  
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
                  onClick={() => setIsOpen(true)} // 🔥 open fullscreen
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

          {/* FULLSCREEN VIEW 🔥 */}
          {isOpen && (
            <Lightbox
              mainSrc={`/assets/newDesign/CustomDashboard/${imageData[currentSlide].image}`}
              nextSrc={`/assets/newDesign/CustomDashboard/${
                imageData[(currentSlide + 1) % imageData.length]?.image
              }`}
              prevSrc={`/assets/newDesign/CustomDashboard/${
                imageData[
                  (currentSlide + imageData.length - 1) % imageData.length
                ]?.image
              }`}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setCurrentSlide(
                  (currentSlide + imageData.length - 1) % imageData.length
                )
              }
              onMoveNextRequest={() =>
                setCurrentSlide((currentSlide + 1) % imageData.length)
              }
            />
          )}
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
