import styles from "./ChasoMobileSlider.module.css";
import CommonText from "../../CommonText/CommonText";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect } from "react";
import images from "./ChasoSlider.json";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ChasoMobileSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
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

  return (
    <div className={styles.sliderContainer}>
      <div ref={sliderRef} className={`keen-slider ${styles.keenSlider}`}>
        {images.map((slide, i) => (
          <div className={`keen-slider__slide ${styles.slide}`} style={{ backgroundColor: slide.bgColor }} key={i}>
            <div className={styles.imageWrapper}>
              <img
                src={slide.image}
                alt={slide.alt}
                className={styles.slideImage}
                onClick={() => isMobile && setIsOpen(true)} // 🔥 open lightbox on mobile only
                style={{ cursor: isMobile ? "zoom-in" : "default" }}
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

 
      {/* FULLSCREEN LIGHTBOX - Mobile Only 🔥 */}
      {isMobile && isOpen && (
        <>
          <Lightbox
            mainSrc={images[currentSlide].image}
            nextSrc={images[(currentSlide + 1) % images.length]?.image}
            prevSrc={images[(currentSlide + images.length - 1) % images.length]?.image}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setCurrentSlide((currentSlide + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setCurrentSlide((currentSlide + 1) % images.length)
            }
          />
          <div
            style={{
              position: "fixed",
              top: "11%",
              right: 20,
              padding: "10px 14px",
              background: "white",
              borderRadius: "50%",
              fontSize: "20px",
              cursor: "pointer",
              color: "black",
              zIndex: 10000,
            }}
            onClick={() => setIsOpen(false)}
          >
            ✕
          </div>
        </>
      )}
    </div>
  );
};

export default ChasoMobileSlider;
