import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from './CardList.module.css';
import CommonText from '../../CommonText/CommonText'

const Card = ({ title, description, icon, index }) => (
  <div className={`${styles.card} animate-box`} data-index={index}>
    <div className={styles.cardIcon}>
      <img src={icon.src} alt={icon.alt} className={styles.cardIconImg} />
    </div>
    <div className={styles.cardContent}>
      <CommonText subHeading={title} size='title-h3' weight='bold' />
      <CommonText smallDescription={description} size='label-sub1' />
    </div>
  </div>
);

const CardList = ({ CardsDetails }) => {
  const cardsData = CardsDetails.components;
  const boxRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(boxRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      gsap.fromTo(
        boxRef.current, 
        { y: 300 }, 
        {
          y: 0, 
          duration: 1, 
          ease: "power2.out",
        }
      );
    }
  }, [isInView]);

  return (
    <div> 
      <div ref={boxRef}  style={{ height:"auto"}} className={`homePageContainer ${styles.cardList}`}>
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} icon={card.icon} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
