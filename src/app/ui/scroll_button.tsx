import React, { useEffect, useState } from "react";
import clsx from "clsx";

interface ScrollButtonProps {
  footerOffset: number;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ footerOffset }) => {
  const [isOverlappingFooter, setIsOverlappingFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY + window.innerHeight;
      const isScrolledPastFooter = scrollTop >= footerOffset + 30;
      setIsOverlappingFooter(isScrolledPastFooter);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerOffset]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        "fixed p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400",
        "bottom-4 right-4 sm:bottom-8 sm:right-8",
        { "opacity-20": isOverlappingFooter }
      )}
      style={{ zIndex: 1000, transition: "transform 0.2s" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
};

export default ScrollButton;
