// PricingSection.jsx
import React from "react";
import styles from "./PriceSection.module.css";
import plans from "./PriceSection.json";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import CommonText from "../CommonText/CommonText";
export default function PricingSection() {
  return (
    <section className={styles.pricingSection}>
      <HeaderSection
        tag={plans.tag}
        title={plans.title}
        subtitle={plans.subtitle}
      />
      <div className={styles.pricingGrid}>
        {plans.cards.map((plan) => (
          <div
            key={plan.name}
            className={`${styles.card} ${
              plan.mostPopular ? styles.mostPopular : ""
            }`}
          >
            {plan.mostPopular && (
              <div className={styles.popularBadge}>Most Popular</div>
            )}
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <div className={styles.priceIconContainer} >
                  <img src={plan.icon} alt="icon"/>
                  </div>
                <CommonText
                  subHeading={plan.name}
                  size="title-h3"
                  weight="font-weight-500"
                />
              </div>

              <CommonText smallDescription={plan.users} size="label-H3-sub3" />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.priceRow}>
                <span className={styles.price}>
                  {plan.price !== null ? `$${plan.price}` : "Custom"}
                </span>
                <span className={styles.unit}>{plan.unit}</span>
              </div>
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
                        size="body-lg"
                        fontFamily="prompt"
                      />
                    </li>
                  </div>
                ))}
              </ul>
              <button className={styles.cta}>{plan.cta}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
