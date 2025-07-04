import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const productRef = useRef(null);
  const whyRef = useRef(null);
  const impactRef = useRef(null);
  const demoRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{ productRef, whyRef, impactRef, demoRef, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
