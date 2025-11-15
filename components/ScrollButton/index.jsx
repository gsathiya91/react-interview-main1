import React, { useState, useEffect } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  return (
    <>
      <div
        className="scroll-top"
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
        }}
      >
        <div>
          <svg
            style={{
              height: "16px",
              width: "16px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1792 1792"
            fill="#fff"
          >
            <path d="M1683 1331l-166 165q-19 19-45 19t-45-19l-531-531-531 531q-19 19-45 19t-45-19l-166-165q-19-19-19-45.5t19-45.5l742-741q19-19 45-19t45 19l742 741q19 19 19 45.5t-19 45.5z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default ScrollButton;
