"use client";

import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function ScrollButton() {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.innerHeight + window.scrollY;
    const offsetHeight = document.documentElement.offsetHeight;
    // added magic number (1) to compensate for bounce not triggering on home page
    setIsBottom(scrollTop >= offsetHeight - 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // TODO: scroll up with footer (fixed->absolute, bottom-2)
    <button
      className={clsx("btn btn-circle opacity-20 fixed right-2 bottom-20", {
        "motion-safe:animate-bounce": isBottom,
      })}
      onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <ArrowUpIcon className="w-7 text-white" />
    </button>
  );
}
