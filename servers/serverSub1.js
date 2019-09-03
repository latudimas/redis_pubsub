require("dotenv").config();
const express = require("express");
const redis = require("redis");
const clientSub1 = redis.createClient();
const redisService = require("../services/redisService");

const app = express();

app.listen(process.env.PORT_SERVER_SUB1, () => {
  console.log("Server Sub 1 Up and Running");

  clientSub1.subscribe("my channel");
  clientSub1.on("message", (channel, message) => {
    // console.log("Message Received: ");

    // Redis Service
    redisService.popMessage();
  });
});
