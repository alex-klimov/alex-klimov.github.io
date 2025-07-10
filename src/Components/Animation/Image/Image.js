import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Image.module.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false); // trigger animation only when visible
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  const images = [
    { src: '/assets/painpoints/manual scheduling.png', style: { top: '0', left: '0' } },
    { src: '/assets/painpoints/unexpected disruptions.png', style: { top: '400px', left: '700px' } },
    { src: '/assets/painpoints/complex constraints.png', style: { top: '50px', left: '600px' } },
    { src: '/assets/painpoints/disconected systems.png', style: { top: '400px', left: '0' } },
  ];

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.4, // start when 40% is visible
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
      const nextIndex = currentIndex + 1;

      if (nextIndex < images.length) {
        setCurrentIndex(nextIndex);
        gsap.to(imageRefs.current[nextIndex], {
          opacity: 1,
          duration: 2,
        });
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView, currentIndex, images.length]);

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
            opacity: index <= currentIndex ? 1 : 0,
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

export default ImageSlider;
