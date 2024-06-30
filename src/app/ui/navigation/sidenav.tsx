"use client";

import Link from "next/link";
import NavLinks from "@/app/ui/navigation/nav_links";
import Logo from "@/app/ui/navigation/nav_logo";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import clsx from "clsx";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={clsx(
        "transition-all duration-300 w-full flex-none",
        isOpen ? "md:w-64" : "md:w-24"
      )}
    >
      <div
        className={
          "flex h-full flex-col px-3 py-4 md:px-2 bg-black-gray  text-white"
        }
      >
        <div className="mb-8 flex p-4 items-center pr-0">
          <Link
            className={clsx("flex h-20 items-center rounded-md", {
              "justify-center, ml-auto": !isOpen,
            })}
            href="/"
          >
            <Logo />
            <h2
              className={clsx(
                "animate-fadeInFromRight ml-3 grow font-serif hidden",
                {
                  "md:block": isOpen,
                }
              )}
            >
              PathToSWE
            </h2>
          </Link>
          <button
            className={clsx(
              "animate-fadeInFromRight btn btn-xs btn-square bg-transparent border-none",
              { "ml-auto": isOpen }
            )}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <ChevronLeftIcon className="w-4 text-white" />
            ) : (
              <ChevronRightIcon className="w-4 text-white" />
            )}
          </button>
        </div>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks open={isOpen} />
          <div className="hidden h-auto w-full grow rounded-md md:block"></div>
          <form>
            {/* subject to change but keeping form since we need a function to sign user out on submit */}
            <Link key={"Home"} href={"/"}>
              <button
                className={clsx(
                  "transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-300 flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-concrete-gray hover:text-black-gray md:flex-none md:p-2 md:px-3",
                  { "md:justify-start": isOpen }
                )}
              >
                <ArrowRightStartOnRectangleIcon className="w-6" />
                <div
                  className={clsx(
                    "animate-fadeInFromRight",
                    isOpen ? "md:block" : "hidden"
                  )}
                >
                  Sign&nbsp;Out
                </div>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
