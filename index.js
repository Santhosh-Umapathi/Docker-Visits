const express = require("express");
const redis = require("redis");
const process = require("process");
const PORT = 5000;

const app = express();
const client = redis.createClient({
  host: "redis-server", //Based on yml config for redis container
});
client.set("visits", 0);

app.get("/", (req, res) => {
  process.exit(0);
  client.get("visits", (err, visits) => {
    res.send("Number of visits is " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(PORT, () => console.log("Listening on port ", PORT));
