require("dotenv").config();
const express = require("express");
const redis = require("redis");
const clientSub3 = redis.createClient();
const redisService = require("../services/redisService");

const app = express();

clientSub3.subscribe("my channel");

app.listen(process.env.PORT_SERVER_SUB3, () => {
  console.log("Server Sub 3 Up and Running");
  clientSub3.on("message", (channel, message) => {
    console.log("Message Received: ");

    // Redis Service
    redisService.popMessage();
  });
});
