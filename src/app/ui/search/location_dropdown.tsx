import React from "react";

interface Props {
  location: string;
}

export default function LocationDropdown({ location }: Props) {
  function parseLocation(location: string): string[] {
    // Define multi-word cities with states and no states
    const multiWordCities = [
      "New York, NY",
      "New York City, NY",
      "Los Angeles, CA",
      "San Diego, CA",
      "San Jose, CA",
      "San Francisco, CA",
      "San Antonio, TX",
      "New Orleans, LA",
      "Jersey City, NJ",
      "Palo Alto, CA",
      "Salt Lake City, UT",
      "Bala Cynwyd, PA",
      "New Jersey",
      "New York",
      "New York City",
      "Los Angeles",
      "San Diego",
      "San Jose",
      "San Francisco",
      "San Antonio",
      "New Orleans",
      "Jersey City",
      "Palo Alto",
      "Salt Lake City",
      "Bala Cynwyd",
    ];

    // Extract and remove multi-word cities from the input string
    const extractedCities: string[] = [];
    multiWordCities.forEach((city) => {
      const cityRegex = new RegExp(
        city.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
        "gi"
      );
      const match = location.match(cityRegex);
      if (match) {
        extractedCities.push(match[0]);
        location = location.replace(cityRegex, "").trim();
      }
    });

    // Split the remaining string by spaces not preceded by a comma
    const remainingCities = location.split(/(?<!,)\s+/).filter(Boolean);

    // Combine the extracted multi-word cities with the split results
    const cities = [...extractedCities, ...remainingCities];

    return cities;
  }

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
          className="btn btn-sm px-5 py-1 bg-white border-0 rounded-md text-black font-normal hover:bg-concrete-gray"
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
