"use client";

import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  footerOffset: number;
}

export default function ScrollButton({ footerOffset }: Props) {
  const [overlapFooter, setOverlapFooter] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.innerHeight + window.scrollY;
    // console.log(footerOffset, scrollTop);
    // added magic number (1) to compensate for bounce not triggering on home page
    console.log(scrollTop, footerOffset);
    setOverlapFooter(scrollTop - 1 >= footerOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerOffset]);

  return (
    <button
      className={clsx(
        "btn btn-circle opacity-20 bottom-corner bottom-2",
        overlapFooter
          ? `relative motion-safe:animate-bounce left-[95vw]`
          : "fixed right-1"
      )}
      onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <ArrowUpIcon className="w-7 text-white" />
    </button>
  );
}
