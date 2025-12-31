// PricingSection.jsx
import React, { useEffect } from "react";
import styles from "./PriceSection.module.css";
import plansData from "./PriceSection.json";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import CommonText from "../CommonText/CommonText";
import CalendlyPopup from "../CalendlyPopup/CalendlyPopup";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

export default function PricingSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => setIsMobile(window.innerWidth <= 640);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 1, spacing: 16 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 12 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });
  const plans = !isMobile ? plansData.desktop : plansData.mobile;
  return (
    <section className={styles.pricingSection}>
      <HeaderSection
        tag={plans.tag}
        title={plans.title}
        subtitle={plans.subtitle}
      />
      {isMobile ? (
        <div className={styles.sliderWrapper}>
          <div ref={sliderRef} className="keen-slider">
            {plans.cards.map((plan) => (
              <div
                key={plan.name}
                className={`keen-slider__slide ${styles.card}`}
              >

                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    <div className={styles.priceIconContainer}>
                      <img src={plan.icon} alt="icon" />
                    </div>
                    <CommonText
                      subHeading={plan.name}
                      size="title-h3"
                      weight="font-weight-500"
                    />
                  </div>
                  <CommonText
                    smallDescription={plan.users}
                    size="label-H3-sub3"
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.priceRow}>
                    <span className={styles.price}>
                      {plan.price !== null ? `$${plan.price}` : "Custom"}
                    </span>
                    <span className={styles.unit}>{plan.unit}</span>
                  </div>
                <div className={styles.spacer} >

                  <ul className={styles.features}>
                    {plan.features.map((f) => (
                      <div className={styles.bulletPointContainer} key={f}>
                        <img
                          src="/assets/newDesign/tick.png"
                          alt="tick"
                          className={styles.tickIcon}
                        />
                        <li>
                          <CommonText
                            smallDescription={f}
                            size="body-lg-type2"
                            fontFamily="prompt"
                          />
                        </li>
                      </div>
                    ))}
                  </ul>
                  <CalendlyPopup text={plan.cta} className={styles.cta} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Dots */}
          {instanceRef.current && (
            <div className={styles.dots}>
              {plans.cards.map((_, idx) => (
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
      ) : (
        <div className={styles.pricingGrid}>
          {plans.cards.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${
                plan.mostPopular ? styles.mostPopular : ""
              }`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <CommonText
                    subHeading={plan.name}
                    size="title-h3"
                    weight="font-weight-500"
                  />
                <CommonText
                  smallDescription={plan.users}
                  size="label-H3-sub3"
                />
                </div>
                  <div className={styles.priceIconContainer}>
                    <img src={plan.icon} alt="icon" />
                  </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.priceRow}>
                  <span className={styles.price}>
                    {plan.price !== null ? `$${plan.price}` : "Custom"}
                  </span>
                  <span className={styles.unit}>{plan.unit}</span>
                </div>
                <div className={styles.spacer} >
<ul className={styles.features}>
                  {plan.features.map((f) => (
                    <div key={f} className={styles.bulletPointContainer}>
                      <img
                        src="/assets/newDesign/tick.png"
                        alt="tick"
                        className={styles.tickIcon}
                      />
                      <li>
                        <CommonText
                          smallDescription={f}
                          size="body-lg-type2"
                          fontFamily="prompt"
                        />
                      </li>
                    </div>
                  ))}
                </ul>
                <CalendlyPopup text={plan.cta} className={styles.cta} />
                </div>
                
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
