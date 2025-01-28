"use client";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import scss from "./ScrollToTop.module.scss"


const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
    className={scss.button}
      style={{
        position: "fixed",
        bottom: "50px",
        right: "20px",
        display: isVisible ? "block" : "none",
      }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <IoIosArrowUp />
    </button>
  );
};

export default ScrollToTop;