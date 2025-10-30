// sensors.js
export function getTemperature() {
  // realistic fish pond temperature: 20°C - 32°C
  return (Math.random() * (32 - 20) + 20).toFixed(2);
}

export function getPH() {
  // normal fish pond pH: 6.5 - 8.5
  return (Math.random() * (8.5 - 6.5) + 6.5).toFixed(2);
}

export function getOxygen() {
  // normal dissolved oxygen: 5 - 9 mg/L
  return (Math.random() * (9 - 5) + 5).toFixed(2);
}
