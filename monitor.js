// monitor.js
export function checkReadings({ temperature, pH, oxygen }) {
  const alerts = [];

  if (temperature < 24 || temperature > 30) {
    alerts.push(`⚠️ Temperature out of range: ${temperature}°C`);
  }
  if (pH < 6.5 || pH > 8.5) {
    alerts.push(`⚠️ pH level out of range: ${pH}`);
  }
  if (oxygen < 5 || oxygen > 9) {
    alerts.push(`⚠️ Oxygen level out of range: ${oxygen} mg/L`);
  }

  if (alerts.length === 0) {
    alerts.push("✅ All readings are normal.");
  }

  return alerts;
}
