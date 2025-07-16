import React, { createContext, useContext, useRef, useEffect, useState } from 'react';

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const productRef = useRef(null);
  const whyRef = useRef(null);
  const impactRef = useRef(null);
  const demoRef = useRef(null);
  const [isImpactInView, setIsImpactInView] = useState(false);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const scrollMap = {
        "#product": productRef,
        "#why": whyRef,
        "#impact": impactRef,
        "#demo": demoRef,
      };
  
      const refToScroll = scrollMap[hash];
      if (refToScroll && refToScroll.current) {
        setTimeout(() => {
          refToScroll.current.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, []);
  useEffect(() => {
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Impact section in view:', entry.isIntersecting);
        setIsImpactInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const target = whyRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [whyRef]);

  return (
    <ScrollContext.Provider
      value={{
        productRef,
        whyRef,
        impactRef,
        demoRef,
        scrollToSection,
        isImpactInView,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
