"use client";

import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  footerOffset: number;
}

export default function ScrollButton({ footerOffset }: Props) {
  const [isOverlappingFooter, setIsOverlappingFooter] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("overlapped");
    if (saved !== null) {
      setIsOverlappingFooter(JSON.parse(saved) as boolean);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY + window.innerHeight;
      const isScrolledPastFooter = scrollTop >= footerOffset;
      setIsOverlappingFooter(isScrolledPastFooter);
      sessionStorage.setItem(
        "overlapped",
        JSON.stringify(isScrolledPastFooter)
      );
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
      className={clsx(
        "btn btn-circle bg-black-gray opacity-20 bottom-corner bottom-2",
        {
          "relative motion-safe:animate-bounce left-[95vw]":
            isOverlappingFooter,
          "fixed left-[95vw]": !isOverlappingFooter,
        }
      )}
      onClick={scrollToTop}
    >
      <ArrowUpIcon className="w-7 text-white" />
    </button>
  );
}
