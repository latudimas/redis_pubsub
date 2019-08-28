require("dotenv").config();
const express = require("express");
const client = require("../config/redisConfig");

const app = express();

client.subscribe("my channel");

app.listen(process.env.PORT_SERVER_SUB1, () => {
  console.log("Server Sub 1");
  client.on("message", (channel, message) => {
    console.log(`Sub channel "${channel}": ${message}`);
  });
});
