import React, { useEffect, useState } from "react";
import styles from "./PriceSectionMobile.module.css";
import plans from "./PriceSectionMobile.json";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import CommonText from "../CommonText/CommonText";
import CalendlyPopup from "../CalendlyPopup/CalendlyPopup";
import { useKeenSlider } from "keen-slider/react";

export default function PriceSectionMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => setIsMobile(window.innerWidth <= 640);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  const [currentSlide, setCurrentSlide] = useState();
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      mode: "snap",
      slides: { perView: 1, spacing: 16 },
      breakpoints: {
        "(max-width: 1024px)": { slides: { perView: 1, spacing: 16 } },
        "(max-width: 640px)": { slides: { perView: 1, spacing: 12 } },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    }
  );

  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardName) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardName]: !prev[cardName],
    }));
  };

  // Helper for feature display per card
    const renderFeatures = (plan) => {
    // 1. Determine the limit: 3 for Custom (price is null), 4 for others
    const initialLimit = plan.price === null ? 3 : 4;
    
    const isExpanded = expandedCards[plan.name] || false;
    
    // 2. Use the dynamic limit to slice the array
    const visibleFeatures = isExpanded ? plan.features : plan.features.slice(0, initialLimit);
    
    // 3. Calculate remaining count based on the dynamic limit
    const remainingCount = plan.features.length - initialLimit;

    return (
      <div className={styles.spacer}>
        <ul className={styles.features}>
          {visibleFeatures.map((f) => (
            <li key={f} className={styles.bulletPointContainer}>
              <img
                src="/assets/newDesign/tick.png"
                alt="tick"
                className={styles.tickIcon}
              />
              <CommonText
                smallDescription={f}
                size="body-lg-type2"
                fontFamily="prompt"
              />
            </li>
          ))}
          
          {/* Show more/less link */}
          {!isExpanded && remainingCount > 0 && (
            <li
              className={styles.showMore}
              onClick={() => toggleCard(plan.name)}
              style={{
                color: "#0057ff",
                cursor: "pointer",
                listStyle: "none",
                fontWeight: 500,
              }}
            >
              {plan.hasShowAll
                ? "... show all features"
                : `... show ${remainingCount} more`}
            </li>
          )}
          {isExpanded && (
            <li
              className={styles.showMore}
              onClick={() => toggleCard(plan.name)}
              style={{
                color: "#0057ff",
                cursor: "pointer",
                listStyle: "none",
                fontWeight: 500,
              }}
            >
              show less
            </li>
          )}
        </ul>
        <CalendlyPopup text={plan.cta} className={styles.cta} />
      </div>
    );
  };

  return (
    <section className={styles.pricingSection}>
      <HeaderSection
        tag={plans.tag}
        title={plans.title}
        subtitle={plans.subtitle}
      />
      {isMobile && (
        <div className={styles.sliderWrapper}>
          <div ref={sliderRef} className={`keen-slider ${styles.keenSlider}`}>
            {plans.cards.map((plan) => (
              <div key={plan.name} className={`keen-slider__slide ${styles.card}`}>
                {/* {plan.mostPopular && (
                  <div className={styles.popularBadge}>Most Popular</div>
                )} */}
                 <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  {/* <div className={styles.priceIconContainer}>
                    <img src={plan.icon} alt="icon" />
                  </div> */}
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
                  {renderFeatures(plan)}
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
                  className={`${styles.dot} ${currentSlide === idx ? styles.dotActive : ""}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      ) }
    </section>
  );
}
