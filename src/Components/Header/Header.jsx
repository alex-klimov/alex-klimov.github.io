import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { useScroll } from "../ScrollContext/ScrollContext";
import { Link } from "react-router-dom";

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
        <Link to="/#product">Product</Link>
      </li>
      <li className="medium" onClick={() => scrollToSection(whyRef)}>
        <Link to="/#why">Why</Link>
      </li>
      <li className="medium" onClick={() => scrollToSection(impactRef)}>
        <Link to="/#impact">Impact</Link>
      </li>
      <li
        className={`medium ${styles.sch}`}
        onClick={() => scrollToSection(demoRef)}
      >
        <Link to="/#demo">Schedule Demo</Link>
      </li>
    </>
  );

  return (
    <header className={styles.stickyHeader}>
      <div className={`${styles.homePageContainer} ${styles.header}`}>
        <div className={styles.barrierPoint}>
            <Link to="/">

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
            </Link>

          <nav>
            <ul>
              {isMobile && (
                <>
                  <li
                    className={`medium ${styles.demo}`}
                    onClick={() => scrollToSection(demoRef)}
                  >
                    <Link to="/#demo">Schedule Demo</Link>
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
                        <img
                          src="/assets/icons/menu.png"
                          alt="menu"
                          className={styles.hambugerMenu}
                        />
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
              <Link to="/#product">Product</Link>
            </li>
            <li className="medium" onClick={() => scrollToSection(whyRef)}>
              <Link to="/#why">Why</Link>
            </li>
            <li className="medium" onClick={() => scrollToSection(impactRef)}>
              <Link to="/#impact">Impact</Link>
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;