import styles from "./ChasoMobileSlider.module.css";
import CommonText from "../../CommonText/CommonText";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect } from "react";
import images from "./ChasoSlider.json";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

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

  // Prepare slides for lightbox
  const lightboxSlides = images.map((slide) => ({
    src: slide.image,
    alt: slide.alt,
  }));

  return (
    <div className={styles.sliderContainer}>
      <div ref={sliderRef} className={`keen-slider ${styles.keenSlider}`}>
        {images.map((slide, i) => (
          <div
            className={`keen-slider__slide ${styles.slide}`}
            style={{ backgroundColor: slide.bgColor }}
            key={i}
          >
            <div className={styles.imageWrapper}>
              <img
                src={slide.image}
                alt={slide.alt}
                className={styles.slideImage}
                onClick={() => isMobile && setIsOpen(true)}
                style={{ cursor: isMobile ? "zoom-in" : "default" }}
              />
            </div>

            <div className={styles.textContainer}>
              <CommonText
                subHeading={slide.title}
                weight="font-weight-500"
                size="title-h3"
              />
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

      {/* FULLSCREEN LIGHTBOX with ZOOM - Mobile Only 🔥 */}
      {isMobile && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={lightboxSlides}
          index={currentSlide}
          plugins={[Zoom]}
          carousel={{
            finite: true,
          }}
          zoom={{
            maxZoomPixelRatio: 3,
            scrollToZoom: true,
            wheelZoomRatio: 1.1,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            doubleClickMaxStops: 2,
          }}
          on={{
            view: ({ index }) => setCurrentSlide(index),
          }}
        />
      )}
    </div>
  );
};

export default ChasoMobileSlider;
