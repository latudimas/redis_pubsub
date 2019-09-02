require("dotenv").config();
const express = require("express");
const redis = require("redis");
const clientSub2 = redis.createClient();
const redisService = require("../services/redisService");

const app = express();

app.listen(process.env.PORT_SERVER_SUB2, () => {
  console.log("Server Sub 2 Up and Running");

  clientSub2.subscribe("my channel");
  clientSub2.on("message", (channel, message) => {
    // console.log("Message Received: ");

    // Redis Service
    redisService.popMessage();
  });
});
