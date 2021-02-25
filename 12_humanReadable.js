function humanReadable(seconds) {
  const h = Math.floor(seconds/ 3600);
  const m = Math.floor((seconds - 3600 * h) / 60);
  const s = seconds - h * 3600 - m * 60;
  return `${h>10 ? h : `0${h}`}:${m>10 ? m : `0${m}`}:${s>10 ? s : `0${s}`}`;
}

console.log(humanReadable(60)) // '00:01:00'
console.log(humanReadable(86399)) // '23:59:59'
console.log(humanReadable(359999)) // '99:59:59'
