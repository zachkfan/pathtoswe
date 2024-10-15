export function parseLocation(location: string): string[] {
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
    "St. Louis, MO",
    "Saint Louis, MO",
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
    "St. Louis",
    "Saint Louis",
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

export function parseDate(date: string) {
  const months: Record<string, string> = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  };
  const [year, month, day] = date.substring(0, 10).split("-");
  return `${months[month]} ${day}, ${year}`;
}
