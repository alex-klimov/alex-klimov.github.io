import React, { createContext, useContext, useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const productRef = useRef(null);
  const whyRef = useRef(null);
  const impactRef = useRef(null);
  const demoRef = useRef(null);
  const [isImpactInView, setIsImpactInView] = useState(false);
  const location = useLocation();

  

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const hash = location.hash;
    const scrollMap = {
      '#product': productRef,
      '#why': whyRef,
      '#impact': impactRef,
      '#demo': demoRef,
    };
    if (hash && scrollMap[hash]) {
      setTimeout(() => {
        scrollToSection(scrollMap[hash]);
      }, 200); 
    }
  }, [location]);

  useEffect(() => {
    const target = whyRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsImpactInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

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
