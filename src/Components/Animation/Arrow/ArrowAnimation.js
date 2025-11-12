
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ArrowAnimation = ({ count = 4, reverse = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const arrows = containerRef.current.querySelectorAll(".arrow");
    arrows[0].style.fill = "#89B2EF";

    let currentIndex = 0;
    const animateArrows = () => {
      setInterval(() => {
        gsap.to(arrows[currentIndex], { fill: "#DEE7F4", duration: 0.5 });
        currentIndex = reverse
          ? (currentIndex - 1 + arrows.length) % arrows.length
          : (currentIndex + 1) % arrows.length;

        gsap.to(arrows[currentIndex], { fill: "#89B2EF", duration: 0.5 });
      }, 1000);
    };

    animateArrows();
  }, [reverse]);

  return (
    <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vh' }}>
      {Array.from({ length: count }).map((_, index) => (
        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="79" height="67" viewBox="0 0 79 67" fill="none">
          <path className="arrow" d="M13.1953 41.5903V24.9654H39.2736V11.5547L64.8302 33.2779L39.2736 55.0011V41.5903H13.1953Z" fill="#DEE7F4" />
        </svg>
      ))}
    </div>
  );
};

export default ArrowAnimation;
