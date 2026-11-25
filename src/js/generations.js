// Generational cohorts by birth year (Pew Research / common usage ranges)
export const GENERATIONS = [
  { key: "lost", label: "Lost Gen", start: 1880, end: 1900, color: "#8d6e63" },
  { key: "greatest", label: "Greatest Gen", start: 1901, end: 1927, color: "#5c6bc0" },
  { key: "silent", label: "Silent Gen", start: 1928, end: 1945, color: "#78909c" },
  { key: "boomer", label: "Boomer", start: 1946, end: 1964, color: "#ef6c00" },
  { key: "genx", label: "Gen X", start: 1965, end: 1980, color: "#2e7d32" },
  { key: "millennial", label: "Millennial", start: 1981, end: 1996, color: "#c2185b" },
  { key: "genz", label: "Gen Z", start: 1997, end: 2012, color: "#7b1fa2" },
  { key: "alpha", label: "Gen Alpha", start: 2013, end: 2024, color: "#00838f" },
  { key: "beta", label: "Gen Beta", start: 2025, end: 2039, color: "#9e7700" },
];

/**
 * Returns the generation for a birth year, or null if unknown / out of range.
 * Accepts numbers or numeric strings; ignores placeholders like "~" or "?".
 */
export function getGeneration(birthyear) {
  const year = parseInt(birthyear, 10);
  if (Number.isNaN(year)) return null;
  return GENERATIONS.find((g) => year >= g.start && year <= g.end) || null;
}
