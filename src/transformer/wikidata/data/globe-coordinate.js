/*
SELECT DISTINCT ?prop ?propLabel WHERE {
  ?prop wikibase:propertyType wikibase:GlobeCoordinate.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }
} ORDER BY ?prop
*/

export const GlobeCoordinate = [
  // Martian coordinates
  "P10628",
  // coordinates of the point of view
  "P1259",
  // coordinates of northernmost point
  "P1332",
  // coordinates of southernmost point
  "P1333",
  // coordinates of easternmost point
  "P1334",
  // coordinates of westernmost point
  "P1335",
  // aerodrome reference point
  "P2786",
  // coordinates of geographic center
  "P5140",
  // coordinate location
  "P625",
  // Sandbox-GeoCoordinateValue
  "P626",
  // lunar coordinates
  "P8981",
  // coordinates of depicted place
  "P9149",
];
