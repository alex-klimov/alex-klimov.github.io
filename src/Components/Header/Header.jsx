import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { useScroll } from "../ScrollContext/ScrollContext";
import { Link } from "react-router-dom";
import { PopupButton } from "react-calendly";

const Header = () => {
  const CalendlyLink = process.env.REACT_APP_CALENDLY_CONNECTION_LINK;
  const { scrollToSection, dashboard, priceRef, faqRef, productRef, demoRef } =
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
      <li className="navText" onClick={() => scrollToSection(productRef)}>
        <Link to="/#product">Scheduler</Link>
      </li>
      <li className="navText" onClick={() => scrollToSection(dashboard)}>
        <Link to="/#dashboard">Dashboard</Link>
      </li>
      <li className="navText" onClick={() => scrollToSection(priceRef)}>
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
            <img
              src="/assets/images/skodyLight.png"
              alt="SkodyAi Logo"
              className={styles.logo}
            />
          </Link>

          <nav>
            <ul>
              {isMobile && (
                <div
                  className={`medium ${styles.sch}`}
                  onClick={() => scrollToSection(demoRef)}
                >
                  <PopupButton
                    className={`regular buttonText ${styles.button}`}
                    url={CalendlyLink}
                    rootElement={document.getElementById("root")}
                    text="Book Demo"
                  />
                </div>
              )}
              {isMobile && (
                <>
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
                          src="/assets/images/menu.png"
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
          {!isMobile && (
            <div
              className={`medium ${styles.sch}`}
              onClick={() => scrollToSection(demoRef)}
            >
              <PopupButton
                className={`buttonText regular buttonText ${styles.button}`}
                url={CalendlyLink}
                rootElement={document.getElementById("root")}
                text="Book Demo"
              />
            </div>
          )}
        </div>
        <div
          className={`${styles.mobileHeader} ${menuOpen ? styles.open : ""}`}
        >
          <nav className={styles.mobileNavigation}>
            <li className="medium" onClick={() => scrollToSection(productRef)}>
              <Link to="/#product">Scheduler</Link>
            </li>
            <li className="medium" onClick={() => scrollToSection(dashboard)}>
              <Link to="/#dashboard">Dashboard</Link>
            </li>
            <li className="medium" onClick={() => scrollToSection(priceRef)}>
              <Link to="/#price">Pricing</Link>
            </li>
            <li className="medium" onClick={() => scrollToSection(faqRef)}>
              <Link to="/#faq">FAQ</Link>
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
