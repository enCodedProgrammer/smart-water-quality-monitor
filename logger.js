// logger.js
import fs from "fs";

export function logData(reading) {
  const logFile = "readings.json";
  let data = [];

  if (fs.existsSync(logFile)) {
    data = JSON.parse(fs.readFileSync(logFile));
  }

  data.push(reading);
  fs.writeFileSync(logFile, JSON.stringify(data, null, 2));
}
