import React, { useState, useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import styles from './Image.module.css';

const MobileImageComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  // useMemo here!
  const images = useMemo(() => [
    { src: '/assets/whyusmobile/complex constraints.png', style: { top: '0', left: '0' } },
    { src: '/assets/whyusmobile/complex constraints (1).png', style: { top: '400px', left: '700px' } },
    { src: '/assets/whyusmobile/complex constraints (2).png', style: { top: '50px', left: '600px' } },
    { src: '/assets/whyusmobile/complex constraints (3).png', style: { top: '400px', left: '0' } },
  ], []);

  // Intersection Observer setup (unchanged)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.4,
      }
    );
    const currentContainerRef = containerRef.current;
    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }
    return () => {
      if (currentContainerRef) observer.unobserve(currentContainerRef);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
       const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);

      // Reset all images' opacity except the one to be shown
      images.forEach((_, idx) => {
        if (imageRefs.current[idx]) gsap.to(imageRefs.current[idx], { opacity: 0, duration: 0 });
      });

      // Animate in the current image
      if (imageRefs.current[nextIndex]) {
        gsap.to(imageRefs.current[nextIndex], { opacity: 1, duration: 0 });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView, currentIndex, images]); // NO warning now

  useEffect(() => {
    if (isInView) {
      gsap.to(imageRefs.current[0], {
        opacity: 1,
        duration: 1,
      });
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        maxWidth: '1000px',
        height: 'auto',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt='Image12'
          className={styles[`image${index + 1}`]}
          ref={(el) => (imageRefs.current[index] = el)}
          style={{
            width: '36%',
            opacity: index === currentIndex ? 1 : 0, 
            transition: 'opacity 1s ease-in-out',
            position: 'absolute',
            top: img.style.top,
            left: img.style.left,
          }}
        />
      ))}
    </div>
  );
};

export default MobileImageComponent;
