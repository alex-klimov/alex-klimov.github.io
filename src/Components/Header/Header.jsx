import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { useScroll } from "../ScrollContext/ScrollContext";

const Header = () => {
  const { scrollToSection, productRef, whyRef, impactRef, demoRef } =
    useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  const renderDesktopNav = () => (
    <>
      <li className="medium" onClick={() => scrollToSection(productRef)}>
        Product
      </li>
      <li className="medium" onClick={() => scrollToSection(whyRef)}>
        Why
      </li>
      <li className="medium" onClick={() => scrollToSection(impactRef)}>
        Impact
      </li>
      <li className="medium" onClick={() => scrollToSection(demoRef)}>
        <a href="#">Schedule Demo</a>
      </li>
    </>
  );

  return (
    <header className={styles.stickyHeader}>
      <div className={`${styles.homePageContainer} ${styles.header}`}>
        <div className={styles.barrierPoint}>
          {isMobile ? (
            <>
              <img
                src="/assets/icons/skody Ai logo.png"
                alt="SkodyAi Logo"
                className={styles.logo}
              />
            </>
          ) : (
            <>
              <img
                src="/assets/images/skodyAitextlogo.png"
                alt="SkodyAi Logo"
                className={styles.logo}
              />
            </>
          )}
          <nav>
            <ul>
              {isMobile && (
                <>
                  <li
                    className={`medium ${styles.demo}`}
                    onClick={() => scrollToSection(demoRef)}
                  >
                    <a href="#">Schedule Demo</a>
                  </li>
                  <div
                    className={styles.hambuger}
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {menuOpen ? (
                      <>
                        <img src="/assets/icons/X.png" alt="menu" />
                      </>
                    ) : (
                      <>
                        <img src="/assets/icons/menu.png" alt="menu" className={styles.hambugerMenu} />
                      </>
                    )}
                  </div>
                </>
              )}
              {!isMobile && renderDesktopNav()}
            </ul>
          </nav>
        </div>
        <div
          className={`${styles.mobileHeader} ${menuOpen ? styles.open : ""}`}
        >
          <nav className={styles.mobileNavigation}>
            <li className="medium" onClick={() => scrollToSection(productRef)}>
              Product
            </li>
            <li className="medium" onClick={() => scrollToSection(whyRef)}>
              Why
            </li>
            <li className="medium" onClick={() => scrollToSection(impactRef)}>
              Impact
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
