// mqttSubscriber.js
import mqtt from "mqtt";

const brokerUrl = "mqtt://test.mosquitto.org";
const topic = "fishfarm/monitoring";

const client = mqtt.connect(brokerUrl);

client.on("connect", () => {
  console.log("✅ Subscriber connected. Listening for updates...");
  client.subscribe(topic);
});

client.on("message", (topic, message) => {
  const data = JSON.parse(message.toString());
  console.log("\n🌊 New update received:", data);
});
