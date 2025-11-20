import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styles from "./SliderWithDots.module.css";

const slides = [
  "/assets/newDesign/CustomDashboard/startComponent1.png",
  "/assets/newDesign/CustomDashboard/startComponent22.png",
  "/assets/newDesign/CustomDashboard/startComponent33.png",
  "/assets/newDesign/CustomDashboard/startComponent44.png",
];

// ---- AUTOPLAY PLUGIN ----
function AutoplayPlugin(interval = 3000) {
  return (slider) => {
    let timeout;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, interval);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });

      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });

      nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  };
}

const SliderWithDots = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      rubberband: false,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [AutoplayPlugin(2500)]
  );

  return (
    <div className={styles.sliderWrapper}>
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>

        {slides.map((src, idx) => (
          <div className="keen-slider__slide" key={idx}>
            <img src={src} alt={`Slide ${idx + 1}`} className={styles.image} />
          </div>
        ))}

      </div>

      {/* DOTS */}
      {instanceRef.current && (
        <div className={styles.dots}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`${styles.dot} ${
                currentSlide === idx ? styles.dotActive : ""
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SliderWithDots;
