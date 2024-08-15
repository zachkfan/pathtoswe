import React from "react";
import clsx from "clsx";
import { parseLocation } from "@/app/lib/utils";

interface Props {
  location: string | null;
  format: string;
}

export default function LocationDropdown({ location, format }: Props) {
  if (location !== null) {
    const parsedLocation: string[] = parseLocation(location);

    if (
      ((location.match(/,/g)?.length ?? 0) < 2 &&
        (location.match(/ /g)?.length ?? 0) < 4) ||
      ((location.match(/,/g)?.length ?? 0) === 2 &&
        (location.match(/ /g)?.length ?? 0) < 3)
    ) {
      return <p>{location}</p>;
    } else {
      return (
        <div className="dropdown dropdown-hover dropdown-bottom text-black h-7">
          <div
            tabIndex={0}
            role="button"
            className={clsx(
              "btn btn-sm px-5 py-2 bg-transparent border-0 rounded-md text-black hover:bg-transparent shadow-none",
              { "font-normal": format === "search row" }
            )}
          >
            {parsedLocation.length} locations
          </div>
          <ul
            tabIndex={0}
            className="translate-y-1 dropdown-content menu bg-white rounded-box z-[1] w-44 p-2 shadow"
          >
            {parsedLocation.map((city) => (
              <li key={city}>
                <p>{city}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  } else {
    return <p>N/A</p>;
  }
}
