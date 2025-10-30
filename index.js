// index.js
import { getTemperature, getPH, getOxygen } from "./sensors.js";
import { checkReadings } from "./monitor.js";
import { logData } from "./logger.js";

function runSystem() {
  const reading = {
    temperature: parseFloat(getTemperature()),
    pH: parseFloat(getPH()),
    oxygen: parseFloat(getOxygen()),
    timestamp: new Date().toISOString(),
  };

  console.log("\n📡 New Reading:", reading);

  const alerts = checkReadings(reading);
  alerts.forEach(a => console.log(a));

  logData(reading);
}

// Run every 5 seconds
setInterval(runSystem, 5000);
