import React, { useEffect, useState } from "react";

const StorylaneEmbed = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.storylane.io/js/v2/storylane.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {!isMobile ? (
        <div
          className="sl-embed"
          style={{
            position: "relative",
            paddingBottom: "calc(65.64% + 25px)",
            width: "100%",
            height: 0,
            transform: "scale(1)",
          }}
        >
          <iframe
            loading="lazy"
            title="Storylane Embed"
            class="sl-demo"
            src="https://app.storylane.io/demo/rmtmua8ep9hv?embed=inline"
            name="sl-embed"
            allow="fullscreen"
            allowfullscreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "1px solid rgba(63,95,172,0.35)",
              boxShadow: "0px 0px 18px rgba(26, 19, 72, 0.15)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          ></iframe>
        </div>
      ) : (
        <div
          className="sl-embed"
          style={{
            position: "relative",
            paddingBottom: "calc(65.64% + 25px)",
            width: "100%",
            height: 0,
            transform: "scale(1)",
          }}
        >
          <iframe
            loading="lazy"
            class="sl-demo"
            title="Storylane Embed"
            src="https://app.storylane.io/demo/sj3fhbig4inz?embed=inline"
            name="sl-embed"
            allow="fullscreen"
            allowfullscreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "1px solid rgba(63,95,172,0.35)",
              boxShadow: "0px 0px 18px rgba(26, 19, 72, 0.15)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          ></iframe>
        </div>
      )}
        
    </div>
  );
};

export default StorylaneEmbed;