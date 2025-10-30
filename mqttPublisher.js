// mqttPublisher.js
import mqtt from "mqtt";
import { getTemperature, getPH, getOxygen } from "./sensors.js";

const brokerUrl = "mqtt://test.mosquitto.org"; // public broker
const topic = "fishfarm/monitoring";

const client = mqtt.connect(brokerUrl);

client.on("connect", () => {
  console.log("📡 Connected to MQTT broker");

  setInterval(() => {
    const reading = {
      temperature: parseFloat(getTemperature()),
      pH: parseFloat(getPH()),
      oxygen: parseFloat(getOxygen()),
      timestamp: new Date().toISOString(),
    };

    const message = JSON.stringify(reading);
    client.publish(topic, message);
    console.log("📤 Published to cloud:", message);
  }, 5000);
});

client.on("error", err => console.error("Connection error:", err));
