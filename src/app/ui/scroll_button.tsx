"use client";

import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  footerOffset: number;
}

export default function ScrollButton({ footerOffset }: Props) {
  const [overlapFooter, setOverlapFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.innerHeight + window.scrollY;
      // added magic number (1) to compensate for bounce not triggering on home page
      setOverlapFooter(scrollTop - 1 >= footerOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerOffset]);

  return (
    <button
      className={clsx(
        "btn btn-circle bg-black-gray opacity-20 bottom-corner bottom-2",
        overlapFooter
          ? `relative motion-safe:animate-bounce left-[95vw]`
          : "fixed right-1"
      )}
      onClick={() => {
        scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <ArrowUpIcon className="w-7 text-white" />
    </button>
  );
}
