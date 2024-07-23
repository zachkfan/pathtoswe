import React from "react";
import clsx from "clsx";
import { parseLocation } from "@/app/lib/utils";

interface Props {
  location: string;
  format: string;
}

export default function LocationDropdown({ location, format }: Props) {
  const parsedLocation = parseLocation(location);

  if (
    ((location.match(/,/g)?.length ?? 0) < 2 &&
      (location.match(/ /g)?.length ?? 0) < 4) ||
    ((location.match(/,/g)?.length ?? 0) === 2 &&
      (location.match(/ /g)?.length ?? 0) < 3)
  ) {
    return <p>{location}</p>;
  } else {
    return (
      <div className="dropdown dropdown-hover dropdown-bottom text-black">
        <div
          tabIndex={0}
          role="button"
          className={clsx(
            "btn btn-sm px-6 py-2 bg-transparent border-0 rounded-md text-black hover:bg-concrete-gray shadow-none",
            { "font-normal": format === "search row" }
          )}
        >
          {parsedLocation.length} locations
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
        >
          {parsedLocation.map((city) => (
            <li key={city}>
              <a>{city}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
