import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { useScroll } from "../ScrollContext/ScrollContext";
import { Link } from "react-router-dom";
import {  PopupButton } from "react-calendly";

const Header = () => {
  const CalendlyLink = process.env.REACT_APP_CALENDLY_CONNECTION_LINK;
  const {
    scrollToSection,
    dashboard,
    priceRef,
    faqRef,
    productRef,
    whyRef,
    impactRef,
    demoRef,
  } = useScroll();
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
      <li className="navText" onClick={() => scrollToSection(productRef)}>
        <Link to="/#product">Scheduler</Link>
      </li>
      <li className="navText" onClick={() => scrollToSection(dashboard)}>
        <Link to="/#dashboard">Dashboard</Link>
      </li>
      <li className="mednavTextium" onClick={() => scrollToSection(priceRef)}>
        <Link to="/#price">Pricing</Link>
      </li>
      <li className="navText" onClick={() => scrollToSection(faqRef)}>
        <Link to="/#faq">FAQ</Link>
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
                  src="/assets/images/skodyLight.png"
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
          <div
            className={`medium ${styles.sch}`}
            onClick={() => scrollToSection(demoRef)}
          >
            {/* <Link to="/#demo">Schedule Demo</Link> */}
            {/* <SimpleButton
            to="https://calendly.com/alexl-skody/30min"
              className={`buttonText regular buttonText  ${styles.faqButton}`}
            >
              Book Free Demo
            </SimpleButton> */}
            {/* <div
             className={`buttonText regular buttonText  ${styles.faqButton}`}> */}

            <PopupButton
              className={`buttonText regular buttonText ${styles.button}`}
              url={CalendlyLink}
              rootElement={document.getElementById("root")}
              text="Schedule Demo"
            />
            {/* </div> */}
          </div>
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
