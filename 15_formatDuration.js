function formatDuration(s) {
  if (s === 0) return "now";
  return Object.entries({
    year: Math.floor(s / 365 / 24 / 60 / 60),
    day: Math.floor(s / 60 / 60 / 24) % 365,
    hour: Math.floor(s / 60 / 60) % 24,
    minute: Math.floor(s / 60) % 60,
    second: s % 60,
  })
    .map(([key, value]) =>
        value > 1 ? [value, key + "s"].join(" ") : 
        value === 1 ? [value, key].join(" ") : ""
    )
    .filter(Boolean)
    .join(", ")
    .replace(/,\s(?=[\d\s\w]*$)/, ' and ');
}

console.log(formatDuration(1)); // "1 second"
console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(120)); // "2 minutes"
console.log(formatDuration(3600)); // "1 hour"
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(31798861)); // "1 year, 3 days, 1 hour, 1 minute and 1 second"
